// ==================== ENUMS ====================

export enum UserRole {
  ATHLETE = "athlete",
  COACH = "coach",
  TEAM_LEADER = "team_leader",
  SPECTATOR = "spectator",
}

// ==================== AUTH TYPES ====================
// Re-export all auth types
export * from "./auth.types";

// ==================== ROLE TYPES ====================
// Re-export all role types
export * from "./role.types";

// ==================== TOURNAMENT & MATCH ENUMS ====================

export enum TournamentStatus {
  DRAFT = "draft",
  REGISTRATION_OPEN = "registration_open",
  REGISTRATION_CLOSED = "registration_closed",
  ONGOING = "ongoing",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export enum MatchStatus {
  SCHEDULED = "scheduled",
  LIVE = "live",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
  POSTPONED = "postponed",
}

export enum ComplaintStatus {
  DRAFT = "draft",
  PENDING_REVIEW = "pending_review",
  UNDER_REVIEW = "under_review",
  APPROVED = "approved",
  REJECTED = "rejected",
  RESOLVED = "resolved",
}

export enum NotificationType {
  MATCH = "match",
  TOURNAMENT = "tournament",
  COMPLAINT = "complaint",
  ANNOUNCEMENT = "announcement",
  TRAINING = "training",
  EVALUATION = "evaluation",
  SYSTEM = "system",
}

export enum MatchFormat {
  SINGLES = "singles",
  DOUBLES = "doubles",
  TEAM = "team",
  MIXED_DOUBLES = "mixed_doubles",
}

export enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

// ==================== INTERFACES ====================

/**
 * User Interface for Application Use
 * This extends the AuthUser from backend with additional app-specific fields
 * AuthUser from auth.types.ts is the base user from authentication endpoints
 */
export interface User {
  id: string;
  email: string;
  username?: string; // From backend auth
  name: string;
  role: "athlete" | "coach" | "team_leader" | "spectator";
  roles?: number[]; // From backend auth (role IDs)
  avatar?: string;
  phone?: string;
  teamId?: string;
  delegationId?: string;
  dateOfBirth?: string;
  gender?: Gender;
  organization?: string;
  bio?: string;
  isOnline?: boolean;
  isEmailVerified?: boolean; // From backend auth
  createdAt?: string;
  updatedAt?: string;
}

export interface Tournament {
  id: string;
  name: string;
  description: string;
  format: string;
  startDate: string;
  endDate: string;
  location: string;
  venue?: string;
  logoUrl?: string;
  bannerUrl?: string;
  status:
    | "draft"
    | "ongoing"
    | "completed"
    | "cancelled"
    | "registration_open"
    | "registration_closed";
  maxParticipants?: number;
  currentParticipants: number;
  registrationDeadline?: string;
  rules?: string;
  prizes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Match {
  id: string;
  tournamentId: string;
  tournamentName: string;
  roundName: string;
  homePlayer: string;
  awayPlayer: string;
  homePlayerId: string;
  awayPlayerId: string;
  homePlayerAvatar?: string;
  awayPlayerAvatar?: string;
  homeScore?: number;
  awayScore?: number;
  scheduledTime: string;
  startTime?: string;
  endTime?: string;
  courtNumber?: string;
  status: "scheduled" | "live" | "completed" | "cancelled" | "postponed";
  refereeId?: string;
  refereeName?: string;
  chiefRefereeId?: string;
  winnerId?: string;
  format?: MatchFormat;
  score?: {
    homeSets: number;
    awaySets: number;
    sets: Array<{
      setNumber: number;
      homeGames: number;
      awayGames: number;
    }>;
  };
}

export interface Ranking {
  id: string;
  tournamentId: string;
  playerId: string;
  playerName: string;
  playerAvatar?: string;
  position: number;
  previousPosition?: number;
  wins: number;
  losses: number;
  points: number;
  winRate: number;
  matchesPlayed: number;
  groupName?: string;
  organization?: string;
  updatedAt: string;
}

export interface Complaint {
  id: string;
  matchId: string;
  matchName?: string;
  tournamentId: string;
  tournamentName?: string;
  submittedBy: string;
  submitterId: string;
  submitterRole: "athlete" | "coach" | "team_leader";
  topic: string;
  description: string;
  evidence?: Array<{
    id: string;
    type: "image" | "video" | "document";
    url: string;
    thumbnail?: string;
    description?: string;
  }>;
  status:
    | "submitted"
    | "under_review"
    | "resolved"
    | "rejected"
    | "draft"
    | "pending_review"
    | "approved";
  category?: string;
  priority?: "low" | "medium" | "high";
  reviewedById?: string;
  reviewedByName?: string;
  reviewComments?: string;
  resolution?: string;
  createdAt: string;
  updatedAt: string;
  reviewedAt?: string;
  resolvedAt?: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type:
    | "match"
    | "complaint"
    | "announcement"
    | "general"
    | "tournament"
    | "training"
    | "evaluation"
    | "system";
  isRead: boolean;
  createdAt: string;
  relatedId?: string;
  relatedType?: "match" | "tournament" | "complaint" | "training";
  actionUrl?: string;
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
  coachName: string;
  athleteId: string;
  athleteName: string;
  matchId?: string;
  tournamentId?: string;
  evaluationDate: string;
  technicalSkills: {
    forehand: number;
    backhand: number;
    serve: number;
    return: number;
    volley: number;
  };
  physicalAttributes: {
    speed: number;
    strength: number;
    endurance: number;
    agility: number;
    flexibility: number;
  };
  mentalStrength: {
    focus: number;
    confidence: number;
    composure: number;
    determination: number;
  };
  tacticalAwareness: {
    gameReading: number;
    decisionMaking: number;
    adaptability: number;
    strategyExecution: number;
  };
  overallRating: number;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  notes: string;
}

export interface News {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  category: string;
  author: string;
  authorAvatar?: string;
  publishedAt: string;
  views: number;
  likes: number;
  tags?: string[];
}

export interface TacticalReport {
  id: string;
  coachId: string;
  coachName: string;
  athleteId: string;
  athleteName: string;
  matchId?: string;
  matchInfo?: string;
  reportDate: string;
  reportType: "match" | "training" | "general";
  title: string;
  strengths: string[];
  weaknesses: string[];
  opponents?: {
    name: string;
    analysis: string;
  }[];
  recommendations: string[];
  tacticalNotes: string;
  nextSteps: string[];
}

export interface AthletePerformance {
  athleteId: string;
  athleteName: string;
  avatar?: string;
  coachId: string;
  stats: {
    matchesPlayed: number;
    wins: number;
    losses: number;
    winRate: number;
    currentRank: number;
    previousRank: number;
    trainingAttendance: number;
    lastTrainingDate: string;
    nextMatchDate?: string;
  };
  recentMatches: Array<{
    id: string;
    date: string;
    opponent: string;
    result: "win" | "loss";
    score: string;
    tournament: string;
  }>;
  evaluationHistory: Array<{
    date: string;
    overallRating: number;
    notes: string;
  }>;
  performanceTrend: Array<{
    month: string;
    winRate: number;
    ranking: number;
    trainingHours: number;
  }>;
}

// ==================== UTILITY TYPES ====================

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface FilterParams {
  search?: string;
  status?: string[];
  dateFrom?: string;
  dateTo?: string;
  [key: string]: any;
}

export interface SortParams {
  field: string;
  order: "asc" | "desc";
}
