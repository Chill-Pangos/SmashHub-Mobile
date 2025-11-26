import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Calendar, User, Trophy, Bell } from "lucide-react-native";

// Auth Screens
import LoginScreen from "../screens/Auth/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen/RegisterScreen";

// Common Screens
import HomeScreen from "../screens/Common/HomeScreen/HomeScreen";
import ProfileScreen from "../screens/Common/ProfileScreen/ProfileScreen";
import NotificationCenterScreen from "../screens/Common/NotificationCenterScreen/NotificationCenterScreen";
import TournamentListScreen from "../screens/Common/TournamentListScreen/TournamentListScreen";
import TournamentDetailScreen from "../screens/Common/TournamentDetailScreen/TournamentDetailScreen";
import ScheduleScreen from "../screens/Common/ScheduleScreen/ScheduleScreen";
import MatchDetailScreen from "../screens/Common/MatchDetailScreen/MatchDetailScreen";
import RankingScreen from "../screens/Common/RankingScreen/RankingScreen";
import ComplaintTrackingScreen from "../screens/Common/ComplaintTrackingScreen/ComplaintTrackingScreen";
import NewsScreen from "../screens/Common/NewsScreen/NewsScreen";
import AthleteDirectoryScreen from "../screens/Common/AthleteDirectoryScreen/AthleteDirectoryScreen";
import ContactSupportScreen from "../screens/Common/ContactSupportScreen/ContactSupportScreen";

// Athlete Screens
import MyScheduleScreen from "../screens/Athlete/MyScheduleScreen/MyScheduleScreen";
import MyMatchesScreen from "../screens/Athlete/MyMatchesScreen/MyMatchesScreen";
import MyRankingScreen from "../screens/Athlete/MyRankingScreen/MyRankingScreen";
import SubmitComplaintScreen from "../screens/Athlete/SubmitComplaintScreen/SubmitComplaintScreen";

// Spectator Screens
import SearchMatchScreen from "../screens/Spectator/SearchMatchScreen/SearchMatchScreen";
import FavoriteMatchesScreen from "../screens/Spectator/FavoriteMatchesScreen/FavoriteMatchesScreen";

// Coach Screens
import MyAthletesScreen from "../screens/Coach/MyAthletesScreen/MyAthletesScreen";
import TrainingPlansScreen from "../screens/Coach/TrainingPlansScreen/TrainingPlansScreen";
import CreateTrainingPlanScreen from "../screens/Coach/CreateTrainingPlanScreen/CreateTrainingPlanScreen";
import AthleteEvaluationScreen from "../screens/Coach/AthleteEvaluationScreen/AthleteEvaluationScreen";
import PerformanceAnalyticsScreen from "../screens/Coach/PerformanceAnalyticsScreen/PerformanceAnalyticsScreen";
import TacticalReportScreen from "../screens/Coach/TacticalReportScreen/TacticalReportScreen";
import ComplaintManagementScreen from "../screens/Coach/ComplaintManagementScreen/ComplaintManagementScreen";

// Team Leader Screens
import DelegationManagementScreen from "../screens/TeamLeader/DelegationManagementScreen/DelegationManagementScreen";
import DelegationScheduleScreen from "../screens/TeamLeader/DelegationScheduleScreen/DelegationScheduleScreen";
import AddAthletesScreen from "../screens/TeamLeader/AddAthletesScreen/AddAthletesScreen";
import TeamManagementScreen from "../screens/TeamLeader/TeamManagementScreen/TeamManagementScreen";
import ComplaintReviewScreen from "../screens/TeamLeader/ComplaintReviewScreen/ComplaintReviewScreen";

// Debug Screen
import DebugNavigatorScreen from "../screens/Debug/DebugNavigatorScreen/DebugNavigatorScreen";
import StateComponentsScreen from "../screens/Debug/StateComponentsScreen/StateComponentsScreen";
import InputComponentsScreen from "../screens/Debug/InputComponentsScreen/InputComponentsScreen";
import BadgeComponentsScreen from "../screens/Debug/BadgeComponentsScreen/BadgeComponentsScreen";
import CardComponentsScreen from "../screens/Debug/CardComponentsScreen/CardComponentsScreen";
import ListComponentsScreen from "../screens/Debug/ListComponentsScreen/ListComponentsScreen";
import NavigationComponentsScreen from "../screens/Debug/NavigationComponentsScreen/NavigationComponentsScreen";
import ActionComponentsScreen from "../screens/Debug/ActionComponentsScreen/ActionComponentsScreen";
import DebugButton from "../components/DebugButton";

import { useAuth } from "../contexts/AuthContext";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Athlete Tab Navigator
const AthleteTabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="MySchedule"
      component={MyScheduleScreen}
      options={{
        tabBarLabel: "Lịch thi đấu",
        tabBarIcon: ({ color, size }) => <Calendar size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="MyMatches"
      component={MyMatchesScreen}
      options={{
        tabBarLabel: "Trận đấu",
        tabBarIcon: ({ color, size }) => <Trophy size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="MyRanking"
      component={MyRankingScreen}
      options={{
        tabBarLabel: "BXH",
        tabBarIcon: ({ color, size }) => <Trophy size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: "Cá nhân",
        tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
      }}
    />
  </Tab.Navigator>
);

// Spectator Tab Navigator
const SpectatorTabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="TournamentList"
      component={TournamentListScreen}
      options={{
        tabBarLabel: "Giải đấu",
        tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="Schedule"
      component={ScheduleScreen}
      options={{
        tabBarLabel: "Lịch thi đấu",
        tabBarIcon: ({ color, size }) => <Calendar size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="SearchMatch"
      component={SearchMatchScreen}
      options={{
        tabBarLabel: "Tìm kiếm",
        tabBarIcon: ({ color, size }) => <Trophy size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: "Cá nhân",
        tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
      }}
    />
  </Tab.Navigator>
);

// Coach Tab Navigator
const CoachTabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="MyAthletes"
      component={MyAthletesScreen}
      options={{
        tabBarLabel: "VĐV",
        tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="TrainingPlans"
      component={TrainingPlansScreen}
      options={{
        tabBarLabel: "Huấn luyện",
        tabBarIcon: ({ color, size }) => <Calendar size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="PerformanceAnalytics"
      component={PerformanceAnalyticsScreen}
      options={{
        tabBarLabel: "Thống kê",
        tabBarIcon: ({ color, size }) => <Trophy size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: "Cá nhân",
        tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
      }}
    />
  </Tab.Navigator>
);

// Team Leader Tab Navigator
const TeamLeaderTabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="DelegationManagement"
      component={DelegationManagementScreen}
      options={{
        tabBarLabel: "Quản lý đoàn",
        tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="DelegationSchedule"
      component={DelegationScheduleScreen}
      options={{
        tabBarLabel: "Lịch đoàn",
        tabBarIcon: ({ color, size }) => <Calendar size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="TeamManagement"
      component={TeamManagementScreen}
      options={{
        tabBarLabel: "Quản lý đội",
        tabBarIcon: ({ color, size }) => <Trophy size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: "Cá nhân",
        tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
      }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => {
  const { isAuthenticated, user } = useAuth();

  const getMainNavigator = () => {
    if (!user) return <SpectatorTabNavigator />;

    switch (user.role) {
      case "athlete":
        return <AthleteTabNavigator />;
      case "coach":
        return <CoachTabNavigator />;
      case "team_leader":
        return <TeamLeaderTabNavigator />;
      case "spectator":
      default:
        return <SpectatorTabNavigator />;
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* TEMPORARY: Auth disabled for development - Enable later when implementing authentication */}
        {false && !isAuthenticated ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Main" component={getMainNavigator} />
            <Stack.Screen
              name="TournamentDetail"
              component={TournamentDetailScreen}
            />
            <Stack.Screen name="MatchDetail" component={MatchDetailScreen} />
            <Stack.Screen name="Ranking" component={RankingScreen} />
            <Stack.Screen name="News" component={NewsScreen} />
            <Stack.Screen
              name="AthleteDirectory"
              component={AthleteDirectoryScreen}
            />
            <Stack.Screen
              name="ContactSupport"
              component={ContactSupportScreen}
            />
            <Stack.Screen
              name="NotificationCenter"
              component={NotificationCenterScreen}
            />
            <Stack.Screen
              name="ComplaintTracking"
              component={ComplaintTrackingScreen}
            />

            {/* Athlete Screens */}
            <Stack.Screen
              name="SubmitComplaint"
              component={SubmitComplaintScreen}
            />

            {/* Spectator Screens */}
            <Stack.Screen
              name="FavoriteMatches"
              component={FavoriteMatchesScreen}
            />

            {/* Coach Screens */}
            <Stack.Screen
              name="CreateTrainingPlan"
              component={CreateTrainingPlanScreen}
            />
            <Stack.Screen
              name="AthleteEvaluation"
              component={AthleteEvaluationScreen}
            />
            <Stack.Screen
              name="TacticalReport"
              component={TacticalReportScreen}
            />
            <Stack.Screen
              name="CoachComplaintManagement"
              component={ComplaintManagementScreen}
            />

            {/* Team Leader Screens */}
            <Stack.Screen name="AddAthletes" component={AddAthletesScreen} />
            <Stack.Screen
              name="ComplaintReview"
              component={ComplaintReviewScreen}
            />

            {/* Auth Screens - Added here for Debug Navigator access */}
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}

        {/* Debug Screen - Always accessible for development */}
        <Stack.Screen
          name="DebugNavigator"
          component={DebugNavigatorScreen}
          options={{ title: "🛠️ Debug Navigator" }}
        />
        <Stack.Screen
          name="StateComponents"
          component={StateComponentsScreen}
          options={{ title: "State Components" }}
        />
        <Stack.Screen
          name="InputComponents"
          component={InputComponentsScreen}
          options={{ title: "Input Components" }}
        />
        <Stack.Screen
          name="BadgeComponents"
          component={BadgeComponentsScreen}
          options={{ title: "Badge Components" }}
        />
        <Stack.Screen
          name="CardComponents"
          component={CardComponentsScreen}
          options={{ title: "Card Components" }}
        />
        <Stack.Screen
          name="ListComponents"
          component={ListComponentsScreen}
          options={{ title: "List Components" }}
        />
        <Stack.Screen
          name="NavigationComponents"
          component={NavigationComponentsScreen}
          options={{ title: "Navigation Components" }}
        />
        <Stack.Screen
          name="ActionComponents"
          component={ActionComponentsScreen}
          options={{ title: "Action Components" }}
        />
      </Stack.Navigator>

      {/* Floating Debug Button - Only visible in development */}
      <DebugButton />
    </NavigationContainer>
  );
};

export default AppNavigator;
