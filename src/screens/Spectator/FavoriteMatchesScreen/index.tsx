import React from "react";
import { View, Text } from "react-native";

const FavoriteMatchesScreen: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Favorite Matches</Text>
      <Text className="text-gray-600 mt-2">UC-26: Theo dõi trận yêu thích</Text>
    </View>
  );
};

export default FavoriteMatchesScreen;
