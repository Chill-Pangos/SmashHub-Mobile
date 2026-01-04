/**
 * Navigation Types
 * Type definitions for React Navigation
 */

import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";

/**
 * Root Stack Parameter List
 * Defines all routes and their parameters for type-safe navigation
 */
export type RootStackParamList = {
  // Auth
  Login: undefined;
  Register: undefined;

  // Main Tab Navigators
  Main: undefined;

  // Common Screens
  Home: undefined;
  Profile: undefined;
  NotificationCenter: undefined;
  TournamentList: undefined;
  TournamentDetail: { tournamentId: string };
  Schedule: undefined;
  MatchDetail: { matchId: string };
  Ranking: undefined;
  ComplaintTracking: undefined;
  News: undefined;
  AthleteDirectory: undefined;
  ContactSupport: undefined;

  // Athlete Screens
  MySchedule: undefined;
  MyMatches: undefined;
  MyRanking: undefined;
  SubmitComplaint: undefined;

  // Spectator Screens
  SearchMatch: undefined;
  FavoriteMatches: undefined;

  // Coach Screens
  MyAthletes: undefined;
  TrainingPlans: undefined;
  CreateTrainingPlan: { athleteId?: string };
  AthleteEvaluation: { athleteId: string };
  PerformanceAnalytics: undefined;
  TacticalReport: undefined;
  CoachComplaintManagement: undefined;

  // Team Leader Screens
  DelegationManagement: undefined;
  DelegationSchedule: undefined;
  AddAthletes: undefined;
  TeamManagement: undefined;
  ComplaintReview: undefined;

  // Debug Screens
  DebugNavigator: undefined;
  StateComponents: undefined;
  InputComponents: undefined;
  BadgeComponents: undefined;
  CardComponents: undefined;
  ListComponents: undefined;
  NavigationComponents: undefined;
  ActionComponents: undefined;
};

/**
 * Tab Navigator Parameter Lists
 */
export type AthleteTabParamList = {
  Home: undefined;
  MySchedule: undefined;
  MyMatches: undefined;
  Profile: undefined;
};

export type SpectatorTabParamList = {
  Home: undefined;
  SearchMatch: undefined;
  FavoriteMatches: undefined;
  Profile: undefined;
};

export type CoachTabParamList = {
  Home: undefined;
  MyAthletes: undefined;
  TrainingPlans: undefined;
  Profile: undefined;
};

export type TeamLeaderTabParamList = {
  Home: undefined;
  DelegationManagement: undefined;
  DelegationSchedule: undefined;
  Profile: undefined;
};

/**
 * Navigation Prop Types
 */
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

export type CoachTabNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<CoachTabParamList>,
  RootStackNavigationProp
>;

/**
 * Route Prop Types
 */
export type AthleteEvaluationRouteProp = RouteProp<
  RootStackParamList,
  "AthleteEvaluation"
>;

export type CreateTrainingPlanRouteProp = RouteProp<
  RootStackParamList,
  "CreateTrainingPlan"
>;

export type TournamentDetailRouteProp = RouteProp<
  RootStackParamList,
  "TournamentDetail"
>;

export type MatchDetailRouteProp = RouteProp<RootStackParamList, "MatchDetail">;

/**
 * Declare global navigation types for React Navigation
 */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
