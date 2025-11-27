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
      // Mock login for development
      // Map test emails to mock users with roles
      const mockUserMap: { [key: string]: User } = {
        "athlete@test.com": {
          id: "1",
          name: "Nguyễn Văn An",
          email: "athlete@test.com",
          role: "athlete",
          avatar: "https://i.pravatar.cc/150?img=11",
          phone: "0901234567",
          organization: "Đội Hà Nội",
          dateOfBirth: "2000-05-15",
          gender: "male" as any,
          isOnline: true,
          createdAt: new Date().toISOString(),
        },
        "coach@test.com": {
          id: "101",
          name: "HLV Trần Quốc Tuấn",
          email: "coach@test.com",
          role: "coach",
          avatar: "https://i.pravatar.cc/150?img=33",
          phone: "0912345678",
          organization: "Đội Hà Nội",
          createdAt: new Date().toISOString(),
        },
        "leader@test.com": {
          id: "201",
          name: "Trưởng đoàn Lê Văn Phúc",
          email: "leader@test.com",
          role: "team_leader",
          avatar: "https://i.pravatar.cc/150?img=60",
          phone: "0923456789",
          organization: "Đội Hà Nội",
          createdAt: new Date().toISOString(),
        },
        "spectator@test.com": {
          id: "301",
          name: "Khán giả Nguyễn Văn Khoa",
          email: "spectator@test.com",
          role: "spectator",
          avatar: "https://i.pravatar.cc/150?img=15",
          phone: "0934567890",
          createdAt: new Date().toISOString(),
        },
      };

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockUser = mockUserMap[email];
      if (mockUser && password === "123456") {
        const mockToken = `mock_token_${mockUser.id}_${Date.now()}`;
        await AsyncStorage.setItem("authToken", mockToken);
        await AsyncStorage.setItem("user", JSON.stringify(mockUser));
        setUser(mockUser);
      } else {
        throw new Error("Invalid credentials");
      }

      // Real API call (commented out for now)
      // const response = await authService.login(email, password);
      // await AsyncStorage.setItem("authToken", response.token);
      // await AsyncStorage.setItem("user", JSON.stringify(response.user));
      // setUser(response.user);
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
