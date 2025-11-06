import React from "react";
import { View, Text } from "react-native";

const LoginScreen: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Login Screen</Text>
      <Text className="text-gray-600 mt-2">UC-32: Đăng nhập hệ thống</Text>
    </View>
  );
};

export default LoginScreen;
