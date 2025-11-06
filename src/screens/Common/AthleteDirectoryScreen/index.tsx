import React from "react";
import { View, Text } from "react-native";

const AthleteDirectoryScreen: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Athlete Directory</Text>
      <Text className="text-gray-600 mt-2">UC-38: Danh sách VĐV/Đội</Text>
    </View>
  );
};

export default AthleteDirectoryScreen;
