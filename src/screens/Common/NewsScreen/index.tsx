import React from "react";
import { View, Text } from "react-native";

const NewsScreen: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">News & Announcements</Text>
      <Text className="text-gray-600 mt-2">UC-37: Xem tin tức</Text>
    </View>
  );
};

export default NewsScreen;
