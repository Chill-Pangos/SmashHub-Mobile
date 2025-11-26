import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Home,
  Trophy,
  Calendar,
  Bell,
  Users,
  Award,
  Wrench,
} from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { homeScreenStyles } from "./HomeScreenStyle";

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const quickActions = [
    { id: 1, icon: Trophy, label: "Tournaments", bgColor: "#3b82f6" },
    { id: 2, icon: Calendar, label: "Schedule", bgColor: "#22c55e" },
    { id: 3, icon: Bell, label: "Notifications", bgColor: "#f97316" },
    { id: 4, icon: Users, label: "Athletes", bgColor: "#a855f7" },
  ];

  const upcomingMatches = [
    {
      id: 1,
      team1: "Team A",
      team2: "Team B",
      time: "10:00 AM",
      date: "Today",
    },
    { id: 2, team1: "Team C", team2: "Team D", time: "2:00 PM", date: "Today" },
    {
      id: 3,
      team1: "Team E",
      team2: "Team F",
      time: "4:00 PM",
      date: "Tomorrow",
    },
  ];

  return (
    <ScrollView style={homeScreenStyles.container}>
      {/* Header */}
      <View style={homeScreenStyles.header}>
        <View style={homeScreenStyles.headerRow}>
          <View>
            <Text style={homeScreenStyles.headerTitle}>SmashHub</Text>
            <Text style={homeScreenStyles.headerSubtitle}>
              Table Tennis Tournament Management
            </Text>
          </View>
          <View style={homeScreenStyles.headerIcon}>
            <Home color="#ffffff" size={24} />
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={homeScreenStyles.quickActionsContainer}>
        <View style={homeScreenStyles.quickActionsCard}>
          <Text style={homeScreenStyles.quickActionsTitle}>Quick Actions</Text>
          <View style={homeScreenStyles.quickActionsRow}>
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <TouchableOpacity
                  key={action.id}
                  style={homeScreenStyles.quickActionItem}
                >
                  <View
                    style={[
                      {
                        backgroundColor: action.bgColor,
                        borderRadius: 16,
                        padding: 16,
                        marginBottom: 8,
                      },
                    ]}
                  >
                    <Icon color="#ffffff" size={24} />
                  </View>
                  <Text style={homeScreenStyles.quickActionLabel}>
                    {action.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>

      {/* Featured Tournament */}
      <View style={homeScreenStyles.section}>
        <Text style={homeScreenStyles.sectionTitle}>Featured Tournament</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <LinearGradient
            colors={["#a855f7", "#ec4899"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{
              borderRadius: 16,
              padding: 24,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 8,
            }}
          >
            <View style={homeScreenStyles.matchRow}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginBottom: 4,
                  }}
                >
                  National Championship 2025
                </Text>
                <Text
                  style={{ color: "#f3e8ff", fontSize: 14, marginBottom: 12 }}
                >
                  March 15-20, 2025 • Hanoi
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Award color="#ffffff" size={16} />
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: 14,
                      marginLeft: 8,
                      fontWeight: "600",
                    }}
                  >
                    1,200 Athletes Registered
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: 999,
                  padding: 16,
                }}
              >
                <Trophy color="#ffffff" size={32} />
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Upcoming Matches */}
      <View style={homeScreenStyles.section}>
        <View style={homeScreenStyles.sectionHeader}>
          <Text style={homeScreenStyles.sectionTitle}>Upcoming Matches</Text>
          <TouchableOpacity>
            <Text style={homeScreenStyles.viewAllButton}>View All</Text>
          </TouchableOpacity>
        </View>

        {upcomingMatches.map((match) => (
          <TouchableOpacity key={match.id} style={homeScreenStyles.matchCard}>
            <View style={homeScreenStyles.matchRow}>
              <View style={{ flex: 1 }}>
                <Text style={homeScreenStyles.matchDate}>{match.date}</Text>
                <View style={homeScreenStyles.matchTeams}>
                  <Text style={homeScreenStyles.matchTeamName}>
                    {match.team1}
                  </Text>
                  <Text style={homeScreenStyles.matchVs}>vs</Text>
                  <Text style={homeScreenStyles.matchTeamName}>
                    {match.team2}
                  </Text>
                </View>
              </View>
              <View style={homeScreenStyles.matchTime}>
                <Text style={homeScreenStyles.matchTimeText}>{match.time}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Stats Cards */}
      <View style={homeScreenStyles.section}>
        <View style={homeScreenStyles.statsRow}>
          <View style={homeScreenStyles.statCard}>
            <Text style={homeScreenStyles.statLabel}>Active</Text>
            <Text style={[homeScreenStyles.statValue, { color: "#0ea5e9" }]}>
              12
            </Text>
            <Text style={homeScreenStyles.statDescription}>Tournaments</Text>
          </View>
          <View style={homeScreenStyles.statCard}>
            <Text style={homeScreenStyles.statLabel}>Total</Text>
            <Text style={[homeScreenStyles.statValue, { color: "#22c55e" }]}>
              3,456
            </Text>
            <Text style={homeScreenStyles.statDescription}>Athletes</Text>
          </View>
        </View>
      </View>

      {/* Debug Navigator Button */}
      <View style={homeScreenStyles.section}>
        <TouchableOpacity
          style={homeScreenStyles.debugButton}
          onPress={() => (navigation as any).navigate("DebugNavigator")}
        >
          <View style={homeScreenStyles.debugButtonContent}>
            <View style={homeScreenStyles.debugButtonIcon}>
              <Wrench color="#000000" size={24} />
            </View>
            <View>
              <Text style={homeScreenStyles.debugButtonTitle}>
                🛠️ Debug Navigator
              </Text>
              <Text style={homeScreenStyles.debugButtonSubtitle}>
                Access all screens for development
              </Text>
            </View>
          </View>
          <View style={homeScreenStyles.debugButtonArrow}>
            <Text style={homeScreenStyles.debugButtonArrowText}>→</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
