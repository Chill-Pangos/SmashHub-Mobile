export interface User {
  id: string;
  email: string;
  name: string;
  role: "athlete" | "coach" | "team_leader" | "spectator";
  avatar?: string;
  phone?: string;
  teamId?: string;
  delegationId?: string;
}

export interface Tournament {
  id: string;
  name: string;
  description: string;
  format: string;
  startDate: string;
  endDate: string;
  location: string;
  status: "draft" | "ongoing" | "completed" | "cancelled";
  createdAt: string;
  updatedAt: string;
}

export interface Match {
  id: string;
  tournamentId: string;
  roundName: string;
  homePlayer: string;
  awayPlayer: string;
  homePlayerId: string;
  awayPlayerId: string;
  homeScore?: number;
  awayScore?: number;
  scheduledTime: string;
  courtNumber?: string;
  status: "scheduled" | "live" | "completed" | "cancelled";
  refereeId?: string;
  chiefRefereeId?: string;
}

export interface Ranking {
  id: string;
  tournamentId: string;
  playerId: string;
  playerName: string;
  position: number;
  wins: number;
  losses: number;
  points: number;
  groupName?: string;
}

export interface Complaint {
  id: string;
  matchId: string;
  tournamentId: string;
  submittedBy: string;
  submitterId: string;
  submitterRole: "athlete" | "coach" | "team_leader";
  topic: string;
  description: string;
  evidence?: string[];
  status: "submitted" | "under_review" | "resolved" | "rejected";
  resolution?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: "match" | "complaint" | "announcement" | "general";
  isRead: boolean;
  createdAt: string;
  relatedId?: string;
}

export interface Team {
  id: string;
  name: string;
  delegationId: string;
  coachId?: string;
  athletes: string[];
  type: "singles" | "doubles" | "team";
}

export interface Delegation {
  id: string;
  name: string;
  leaderId: string;
  tournamentId: string;
  coaches: string[];
  athletes: string[];
  teams: string[];
}

export interface TrainingPlan {
  id: string;
  coachId: string;
  athleteId: string;
  title: string;
  description: string;
  scheduledDate: string;
  duration: number;
  objectives: string[];
  exercises: string[];
  status: "planned" | "completed" | "cancelled";
}

export interface AthleteEvaluation {
  id: string;
  coachId: string;
  athleteId: string;
  trainingPlanId?: string;
  matchId?: string;
  rating: number;
  comments: string;
  videos?: string[];
  createdAt: string;
}

export interface Schedule {
  id: string;
  tournamentId: string;
  matches: Match[];
  roundName: string;
  roundDate: string;
}
