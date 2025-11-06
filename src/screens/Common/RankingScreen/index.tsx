import React from "react";
import { View, Text } from "react-native";

const RankingScreen: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Ranking</Text>
      <Text className="text-gray-600 mt-2">
        UC-24, UC-40: Xem bảng xếp hạng
      </Text>
    </View>
  );
};

export default RankingScreen;
