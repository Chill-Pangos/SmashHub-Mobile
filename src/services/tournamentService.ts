import apiClient from "./api";
import { Tournament, Match } from "../types";

export const tournamentService = {
  getAllTournaments: async () => {
    const response = await apiClient.get("/tournaments");
    return response.data;
  },

  getTournamentById: async (id: string) => {
    const response = await apiClient.get(`/tournaments/${id}`);
    return response.data;
  },

  getTournamentSchedule: async (tournamentId: string) => {
    const response = await apiClient.get(
      `/tournaments/${tournamentId}/schedule`
    );
    return response.data;
  },

  getTournamentMatches: async (tournamentId: string) => {
    const response = await apiClient.get(
      `/tournaments/${tournamentId}/matches`
    );
    return response.data;
  },

  getTournamentRankings: async (tournamentId: string) => {
    const response = await apiClient.get(
      `/tournaments/${tournamentId}/rankings`
    );
    return response.data;
  },

  getTournamentNews: async (tournamentId: string) => {
    const response = await apiClient.get(`/tournaments/${tournamentId}/news`);
    return response.data;
  },
};
