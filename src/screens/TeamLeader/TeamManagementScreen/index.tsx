import React from "react";
import { View, Text } from "react-native";

const TeamManagementScreen: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Team Management</Text>
      <Text className="text-gray-600 mt-2">UC-48: Quản lý đội</Text>
    </View>
  );
};

export default TeamManagementScreen;
