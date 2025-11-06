import apiClient from "./api";
import { Match } from "../types";

export const matchService = {
  getMatchById: async (id: string) => {
    const response = await apiClient.get(`/matches/${id}`);
    return response.data;
  },

  getAthleteMatches: async (athleteId: string) => {
    const response = await apiClient.get(`/athletes/${athleteId}/matches`);
    return response.data;
  },

  searchMatches: async (query: string) => {
    const response = await apiClient.get(`/matches/search?q=${query}`);
    return response.data;
  },

  favoriteMatch: async (matchId: string) => {
    const response = await apiClient.post(`/matches/${matchId}/favorite`);
    return response.data;
  },

  unfavoriteMatch: async (matchId: string) => {
    const response = await apiClient.delete(`/matches/${matchId}/favorite`);
    return response.data;
  },

  getFavoriteMatches: async () => {
    const response = await apiClient.get("/matches/favorites");
    return response.data;
  },
};
