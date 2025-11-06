import apiClient from "./api";
import { User } from "../types";

export const authService = {
  login: async (email: string, password: string) => {
    const response = await apiClient.post("/auth/login", { email, password });
    return response.data;
  },

  register: async (userData: Partial<User>) => {
    const response = await apiClient.post("/auth/register", userData);
    return response.data;
  },

  logout: async () => {
    const response = await apiClient.post("/auth/logout");
    return response.data;
  },

  getCurrentUser: async () => {
    const response = await apiClient.get("/auth/me");
    return response.data;
  },

  updateProfile: async (userData: Partial<User>) => {
    const response = await apiClient.put("/auth/profile", userData);
    return response.data;
  },

  changePassword: async (oldPassword: string, newPassword: string) => {
    const response = await apiClient.post("/auth/change-password", {
      oldPassword,
      newPassword,
    });
    return response.data;
  },
};
