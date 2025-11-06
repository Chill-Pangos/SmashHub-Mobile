import React from "react";
import { View, Text } from "react-native";

const ProfileScreen: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Profile Screen</Text>
      <Text className="text-gray-600 mt-2">
        UC-21, UC-33: Quản lý hồ sơ cá nhân
      </Text>
    </View>
  );
};

export default ProfileScreen;
