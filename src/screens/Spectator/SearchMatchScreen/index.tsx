import React from "react";
import { View, Text } from "react-native";

const SearchMatchScreen: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Search Match</Text>
      <Text className="text-gray-600 mt-2">UC-25: Tìm kiếm trận đấu</Text>
    </View>
  );
};

export default SearchMatchScreen;
