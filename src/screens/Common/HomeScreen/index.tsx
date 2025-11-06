import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
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

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const quickActions = [
    { id: 1, icon: Trophy, label: "Tournaments", color: "bg-blue-500" },
    { id: 2, icon: Calendar, label: "Schedule", color: "bg-green-500" },
    { id: 3, icon: Bell, label: "Notifications", color: "bg-orange-500" },
    { id: 4, icon: Users, label: "Athletes", color: "bg-purple-500" },
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
    <ScrollView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-blue-600 px-6 pt-12 pb-8 rounded-b-3xl">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-white text-3xl font-bold">SmashHub</Text>
            <Text className="text-blue-100 text-base mt-1">
              Table Tennis Tournament Management
            </Text>
          </View>
          <View className="bg-white/20 rounded-full p-3">
            <Home color="#ffffff" size={24} />
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <View className="px-6 -mt-6">
        <View className="bg-white rounded-2xl shadow-lg p-4">
          <Text className="text-lg font-bold text-gray-800 mb-4">
            Quick Actions
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <TouchableOpacity
                  key={action.id}
                  className="items-center mb-4"
                  style={{ width: "22%" }}
                >
                  <View className={`${action.color} rounded-2xl p-4 mb-2`}>
                    <Icon color="#ffffff" size={24} />
                  </View>
                  <Text className="text-xs text-gray-600 text-center">
                    {action.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>

      {/* Featured Tournament */}
      <View className="px-6 mt-6">
        <Text className="text-lg font-bold text-gray-800 mb-3">
          Featured Tournament
        </Text>
        <TouchableOpacity className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 shadow-lg">
          <View className="flex-row items-center justify-between">
            <View className="flex-1">
              <Text className="text-white text-xl font-bold mb-1">
                National Championship 2025
              </Text>
              <Text className="text-purple-100 text-sm mb-3">
                March 15-20, 2025 • Hanoi
              </Text>
              <View className="flex-row items-center">
                <Award color="#ffffff" size={16} />
                <Text className="text-white text-sm ml-2 font-semibold">
                  1,200 Athletes Registered
                </Text>
              </View>
            </View>
            <View className="bg-white/20 rounded-full p-4">
              <Trophy color="#ffffff" size={32} />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* Upcoming Matches */}
      <View className="px-6 mt-6 mb-6">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-lg font-bold text-gray-800">
            Upcoming Matches
          </Text>
          <TouchableOpacity>
            <Text className="text-blue-600 font-semibold">View All</Text>
          </TouchableOpacity>
        </View>

        {upcomingMatches.map((match) => (
          <TouchableOpacity
            key={match.id}
            className="bg-white rounded-xl p-4 mb-3 shadow-sm border border-gray-100"
          >
            <View className="flex-row items-center justify-between">
              <View className="flex-1">
                <Text className="text-sm text-gray-500 mb-1">{match.date}</Text>
                <View className="flex-row items-center">
                  <Text className="text-base font-bold text-gray-800">
                    {match.team1}
                  </Text>
                  <Text className="text-gray-400 mx-2">vs</Text>
                  <Text className="text-base font-bold text-gray-800">
                    {match.team2}
                  </Text>
                </View>
              </View>
              <View className="bg-blue-50 rounded-lg px-3 py-2">
                <Text className="text-blue-600 font-semibold">
                  {match.time}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Stats Cards */}
      <View className="px-6 mb-6">
        <View className="flex-row justify-between">
          <View
            className="bg-white rounded-xl p-4 shadow-sm"
            style={{ width: "48%" }}
          >
            <Text className="text-gray-500 text-sm mb-1">Active</Text>
            <Text className="text-2xl font-bold text-blue-600">12</Text>
            <Text className="text-gray-600 text-xs mt-1">Tournaments</Text>
          </View>
          <View
            className="bg-white rounded-xl p-4 shadow-sm"
            style={{ width: "48%" }}
          >
            <Text className="text-gray-500 text-sm mb-1">Total</Text>
            <Text className="text-2xl font-bold text-green-600">3,456</Text>
            <Text className="text-gray-600 text-xs mt-1">Athletes</Text>
          </View>
        </View>
      </View>

      {/* Debug Navigator Button */}
      <View className="px-6 mb-8">
        <TouchableOpacity
          className="bg-gray-800 rounded-2xl p-5 flex-row items-center justify-between shadow-lg border-2 border-yellow-400"
          onPress={() => (navigation as any).navigate("DebugNavigator")}
        >
          <View className="flex-row items-center">
            <View className="bg-yellow-400 rounded-xl p-3 mr-4">
              <Wrench color="#000000" size={24} />
            </View>
            <View>
              <Text className="text-white text-lg font-bold">
                🛠️ Debug Navigator
              </Text>
              <Text className="text-gray-300 text-sm mt-1">
                Access all screens for development
              </Text>
            </View>
          </View>
          <View className="bg-white/20 rounded-full p-2">
            <Text className="text-white text-xl">→</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
