import apiClient from "./api";
import { Notification } from "../types";

export const notificationService = {
  getAllNotifications: async () => {
    const response = await apiClient.get("/notifications");
    return response.data;
  },

  markAsRead: async (id: string) => {
    const response = await apiClient.put(`/notifications/${id}/read`);
    return response.data;
  },

  markAllAsRead: async () => {
    const response = await apiClient.put("/notifications/read-all");
    return response.data;
  },

  deleteNotification: async (id: string) => {
    const response = await apiClient.delete(`/notifications/${id}`);
    return response.data;
  },
};
