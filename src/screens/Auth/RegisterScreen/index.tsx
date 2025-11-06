import React from "react";
import { View, Text } from "react-native";

const RegisterScreen: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Register Screen</Text>
      <Text className="text-gray-600 mt-2">
        UC-49: Tạo tài khoản người dùng
      </Text>
    </View>
  );
};

export default RegisterScreen;
