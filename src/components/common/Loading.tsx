import React from "react";
import { View, ActivityIndicator, Text } from "react-native";

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = "Loading..." }) => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <ActivityIndicator size="large" color="#2563eb" />
      <Text className="text-gray-600 mt-4">{message}</Text>
    </View>
  );
};

export default Loading;
