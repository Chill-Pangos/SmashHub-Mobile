import React from "react";
import { View, Text } from "react-native";

const TournamentListScreen: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Tournament List</Text>
      <Text className="text-gray-600 mt-2">UC-36: Danh sách giải đấu</Text>
    </View>
  );
};

export default TournamentListScreen;
