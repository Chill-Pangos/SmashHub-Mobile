import { createContext } from "react";
import type { AuthUser, AuthData } from "@/types/auth.types";

/**
 * Authentication State Interface
 * Represents the current authentication state of the application
 */
export interface AuthState {
  /** Current authenticated user or null if not authenticated */
  user: AuthUser | null;
  /** Access token for API requests */
  accessToken: string | null;
  /** Refresh token for obtaining new access tokens */
  refreshToken: string | null;
  /** Boolean indicating if user is authenticated */
  isAuthenticated: boolean;
  /** Boolean indicating if auth state is being loaded/checked */
  isLoading: boolean;
}

/**
 * Authentication Context Type Interface
 * Extends AuthState with methods for authentication operations
 */
export interface AuthContextType extends AuthState {
  /**
   * Login user and save auth data
   * @param authData - Authentication data from login/register response
   */
  login: (authData: AuthData) => Promise<void>;

  /**
   * Logout user and clear auth data
   * Also calls backend logout endpoint to blacklist tokens
   */
  logout: () => Promise<void>;

  /**
   * Update user data in state and storage
   * @param user - Updated user object
   */
  updateUser: (user: AuthUser) => Promise<void>;

  /**
   * Update tokens in state and storage
   * @param accessToken - New access token
   * @param refreshToken - New refresh token
   */
  updateTokens: (accessToken: string, refreshToken: string) => Promise<void>;

  /**
   * Check authentication status by loading data from AsyncStorage
   * Called on app mount and when auth state needs to be refreshed
   */
  checkAuth: () => Promise<void>;
}

/**
 * Authentication Context
 * Use this with useContext(AuthContext) or better yet, use the useAuth hook
 */
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
