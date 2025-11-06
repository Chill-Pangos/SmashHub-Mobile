import apiClient from "./api";
import { Complaint } from "../types";

export const complaintService = {
  submitComplaint: async (complaintData: Partial<Complaint>) => {
    const response = await apiClient.post("/complaints", complaintData);
    return response.data;
  },

  getMyComplaints: async () => {
    const response = await apiClient.get("/complaints/my");
    return response.data;
  },

  getComplaintById: async (id: string) => {
    const response = await apiClient.get(`/complaints/${id}`);
    return response.data;
  },

  trackComplaint: async (id: string) => {
    const response = await apiClient.get(`/complaints/${id}/track`);
    return response.data;
  },

  uploadEvidence: async (complaintId: string, formData: FormData) => {
    const response = await apiClient.post(
      `/complaints/${complaintId}/evidence`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  },
};
