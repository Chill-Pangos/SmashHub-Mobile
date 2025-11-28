import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Home,
  Calendar,
  User,
  Trophy,
  Bell,
  Users,
  BarChart3,
  Search,
  Heart,
} from "lucide-react-native";

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
const AthleteTabNavigator = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0ea5e9",
        tabBarInactiveTintColor: "#9ca3af",
        tabBarStyle: {
          paddingBottom: insets.bottom,
          paddingTop: 8,
          height: 60 + insets.bottom,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="MySchedule"
        component={MyScheduleScreen}
        options={{
          tabBarLabel: "Lịch thi đấu",
          tabBarIcon: ({ color, size }) => (
            <Calendar size={size} color={color} />
          ),
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
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Cá nhân",
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

// Spectator Tab Navigator
const SpectatorTabNavigator = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0ea5e9",
        tabBarInactiveTintColor: "#9ca3af",
        tabBarStyle: {
          paddingBottom: insets.bottom,
          paddingTop: 8,
          height: 60 + insets.bottom,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="SearchMatch"
        component={SearchMatchScreen}
        options={{
          tabBarLabel: "Tìm kiếm",
          tabBarIcon: ({ color, size }) => <Search size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="FavoriteMatches"
        component={FavoriteMatchesScreen}
        options={{
          tabBarLabel: "Yêu thích",
          tabBarIcon: ({ color, size }) => <Heart size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          tabBarLabel: "Lịch thi đấu",
          tabBarIcon: ({ color, size }) => (
            <Calendar size={size} color={color} />
          ),
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
};

// Coach Tab Navigator
const CoachTabNavigator = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0ea5e9",
        tabBarInactiveTintColor: "#9ca3af",
        tabBarStyle: {
          paddingBottom: insets.bottom,
          paddingTop: 8,
          height: 60 + insets.bottom,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="MyAthletes"
        component={MyAthletesScreen}
        options={{
          tabBarLabel: "VĐV",
          tabBarIcon: ({ color, size }) => <Users size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="TrainingPlans"
        component={TrainingPlansScreen}
        options={{
          tabBarLabel: "Huấn luyện",
          tabBarIcon: ({ color, size }) => (
            <Calendar size={size} color={color} />
          ),
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
};

// Team Leader Tab Navigator
const TeamLeaderTabNavigator = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0ea5e9",
        tabBarInactiveTintColor: "#9ca3af",
        tabBarStyle: {
          paddingBottom: insets.bottom,
          paddingTop: 8,
          height: 60 + insets.bottom,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="DelegationManagement"
        component={DelegationManagementScreen}
        options={{
          tabBarLabel: "Quản lý đoàn",
          tabBarIcon: ({ color, size }) => <Users size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="DelegationSchedule"
        component={DelegationScheduleScreen}
        options={{
          tabBarLabel: "Lịch đoàn",
          tabBarIcon: ({ color, size }) => (
            <Calendar size={size} color={color} />
          ),
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
};

const AppNavigator = () => {
  const { isAuthenticated, isLoading, user } = useAuth();

  const getMainNavigator = () => {
    if (!user) return null;

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

  // Show loading screen while checking authentication
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* You can add a proper loading screen here */}
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
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
            <Stack.Screen name="MyRanking" component={MyRankingScreen} />
            <Stack.Screen
              name="SubmitComplaint"
              component={SubmitComplaintScreen}
            />

            {/* Spectator Screens */}
            <Stack.Screen name="SearchMatch" component={SearchMatchScreen} />
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
              name="PerformanceAnalytics"
              component={PerformanceAnalyticsScreen}
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
              name="TeamManagement"
              component={TeamManagementScreen}
            />
            <Stack.Screen
              name="ComplaintReview"
              component={ComplaintReviewScreen}
            />

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
          </>
        )}
      </Stack.Navigator>

      {/* Floating Debug Button - Only visible when authenticated */}
      {isAuthenticated && <DebugButton />}
    </NavigationContainer>
  );
};

export default AppNavigator;
