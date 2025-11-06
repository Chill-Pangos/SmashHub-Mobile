import apiClient from "./api";
import { Delegation, Team } from "../types";

export const delegationService = {
  getMyDelegation: async () => {
    const response = await apiClient.get("/delegations/my");
    return response.data;
  },

  getDelegationById: async (id: string) => {
    const response = await apiClient.get(`/delegations/${id}`);
    return response.data;
  },

  addAthlete: async (delegationId: string, athleteData: any) => {
    const response = await apiClient.post(
      `/delegations/${delegationId}/athletes`,
      athleteData
    );
    return response.data;
  },

  addCoach: async (delegationId: string, coachData: any) => {
    const response = await apiClient.post(
      `/delegations/${delegationId}/coaches`,
      coachData
    );
    return response.data;
  },

  createTeam: async (delegationId: string, teamData: Partial<Team>) => {
    const response = await apiClient.post(
      `/delegations/${delegationId}/teams`,
      teamData
    );
    return response.data;
  },

  assignCoachToTeam: async (teamId: string, coachId: string) => {
    const response = await apiClient.put(`/teams/${teamId}/coach`, { coachId });
    return response.data;
  },

  assignAthletesToTeam: async (teamId: string, athleteIds: string[]) => {
    const response = await apiClient.put(`/teams/${teamId}/athletes`, {
      athleteIds,
    });
    return response.data;
  },

  getDelegationSchedule: async (delegationId: string) => {
    const response = await apiClient.get(
      `/delegations/${delegationId}/schedule`
    );
    return response.data;
  },

  downloadDelegationSchedule: async (delegationId: string) => {
    const response = await apiClient.get(
      `/delegations/${delegationId}/schedule/download`,
      {
        responseType: "blob",
      }
    );
    return response.data;
  },
};
