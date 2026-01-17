import React, { useState, useEffect, type ReactNode } from "react";
import authService from "@/services/authService";
import {
  AuthContext,
  type AuthState,
  type AuthContextType,
} from "./AuthContext";
import type { AuthUser, AuthData } from "@/types/auth.types";

interface AuthProviderProps {
  children: ReactNode;
}

/**
 * Authentication Provider Component
 * Wraps the app and provides authentication state and methods to all child components
 *
 * Usage:
 * ```tsx
 * import { AuthProvider } from '@/contexts';
 *
 * function App() {
 *   return (
 *     <AuthProvider>
 *       <YourApp />
 *     </AuthProvider>
 *   );
 * }
 * ```
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
    isLoading: true,
  });

  // Initialize auth state from AsyncStorage on mount
  useEffect(() => {
    checkAuth();
  }, []);

  /**
   * Check authentication status by loading stored data from AsyncStorage
   * This is called on app mount and can be called manually to refresh auth state
   */
  const checkAuth = async () => {
    try {
      const { user, accessToken, refreshToken } =
        await authService.getAllAuthData();

      if (user && accessToken && refreshToken) {
        setAuthState({
          user,
          accessToken,
          refreshToken,
          isAuthenticated: true,
          isLoading: false,
        });
      } else {
        setAuthState({
          user: null,
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    } catch (error) {
      console.error("Error checking auth:", error);
      setAuthState({
        user: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  };

  /**
   * Login user and save authentication data
   * This is typically called after successful login or registration
   *
   * @param authData - Authentication data containing user, accessToken, and refreshToken
   */
  const login = async (authData: AuthData) => {
    try {
      await authService.saveAuthData(authData);
      setAuthState({
        user: authData.user,
        accessToken: authData.accessToken,
        refreshToken: authData.refreshToken,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  };

  /**
   * Logout user and clear all authentication data
   * Calls backend logout endpoint to blacklist tokens
   * Clears AsyncStorage and resets auth state
   */
  const logout = async () => {
    try {
      // Try to call logout endpoint to blacklist tokens on backend
      // But don't fail if this request fails (e.g., network error)
      try {
        await authService.logout();
      } catch (logoutError) {
        console.error("Error calling logout endpoint:", logoutError);
        // Continue with local logout even if backend call fails
      }

      // Always clear local auth data
      await authService.clearAuthData();
      setAuthState({
        user: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
        isLoading: false,
      });
    } catch (error) {
      console.error("Error during logout:", error);
      // Even if there's an error, try to clear state
      setAuthState({
        user: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
        isLoading: false,
      });
      throw error;
    }
  };

  /**
   * Update user data in state and AsyncStorage
   * Use this when user profile is updated
   *
   * @param user - Updated user object
   */
  const updateUser = async (user: AuthUser) => {
    try {
      await authService.updateStoredUser(user);
      setAuthState((prev) => ({
        ...prev,
        user,
      }));
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  };

  /**
   * Update tokens in state and AsyncStorage
   * This is typically called after token refresh
   *
   * @param accessToken - New access token
   * @param refreshToken - New refresh token
   */
  const updateTokens = async (accessToken: string, refreshToken: string) => {
    try {
      await authService.updateTokens(accessToken, refreshToken);
      setAuthState((prev) => ({
        ...prev,
        accessToken,
        refreshToken,
      }));
    } catch (error) {
      console.error("Error updating tokens:", error);
      throw error;
    }
  };

  const value: AuthContextType = {
    ...authState,
    login,
    logout,
    updateUser,
    updateTokens,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
