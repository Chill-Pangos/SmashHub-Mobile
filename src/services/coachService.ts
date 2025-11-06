import apiClient from "./api";
import { TrainingPlan, AthleteEvaluation } from "../types";

export const coachService = {
  getMyAthletes: async () => {
    const response = await apiClient.get("/coaches/my-athletes");
    return response.data;
  },

  createTrainingPlan: async (planData: Partial<TrainingPlan>) => {
    const response = await apiClient.post("/training-plans", planData);
    return response.data;
  },

  getTrainingPlans: async (athleteId?: string) => {
    const url = athleteId
      ? `/training-plans?athleteId=${athleteId}`
      : "/training-plans";
    const response = await apiClient.get(url);
    return response.data;
  },

  updateTrainingPlan: async (id: string, planData: Partial<TrainingPlan>) => {
    const response = await apiClient.put(`/training-plans/${id}`, planData);
    return response.data;
  },

  deleteTrainingPlan: async (id: string) => {
    const response = await apiClient.delete(`/training-plans/${id}`);
    return response.data;
  },

  createEvaluation: async (evaluationData: Partial<AthleteEvaluation>) => {
    const response = await apiClient.post("/evaluations", evaluationData);
    return response.data;
  },

  getAthleteEvaluations: async (athleteId: string) => {
    const response = await apiClient.get(`/athletes/${athleteId}/evaluations`);
    return response.data;
  },

  uploadEvaluationVideo: async (evaluationId: string, formData: FormData) => {
    const response = await apiClient.post(
      `/evaluations/${evaluationId}/videos`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  },

  getCoachSchedule: async () => {
    const response = await apiClient.get("/coaches/schedule");
    return response.data;
  },

  getAthletePerformanceStats: async (athleteId: string) => {
    const response = await apiClient.get(`/athletes/${athleteId}/stats`);
    return response.data;
  },

  submitTacticalReport: async (reportData: any) => {
    const response = await apiClient.post(
      "/coaches/tactical-reports",
      reportData
    );
    return response.data;
  },
};
