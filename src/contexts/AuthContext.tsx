import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../types";
import { authService } from "../services/authService";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Partial<User>) => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (userData: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const token = await AsyncStorage.getItem("authToken");
      const userStr = await AsyncStorage.getItem("user");

      if (token && userStr) {
        const userData = JSON.parse(userStr);
        setUser(userData);
      }
    } catch (error) {
      console.error("Failed to load user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await authService.login(email, password);
      await AsyncStorage.setItem("authToken", response.token);
      await AsyncStorage.setItem("user", JSON.stringify(response.user));
      setUser(response.user);
    } catch (error) {
      throw error;
    }
  };

  const register = async (userData: Partial<User>) => {
    try {
      const response = await authService.register(userData);
      await AsyncStorage.setItem("authToken", response.token);
      await AsyncStorage.setItem("user", JSON.stringify(response.user));
      setUser(response.user);
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      await AsyncStorage.removeItem("authToken");
      await AsyncStorage.removeItem("user");
      setUser(null);
    }
  };

  const updateUser = async (userData: Partial<User>) => {
    try {
      const response = await authService.updateProfile(userData);
      await AsyncStorage.setItem("user", JSON.stringify(response.user));
      setUser(response.user);
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
