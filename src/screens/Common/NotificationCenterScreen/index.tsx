import React from "react";
import { View, Text } from "react-native";

const NotificationCenterScreen: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Notification Center</Text>
      <Text className="text-gray-600 mt-2">UC-34: Xem danh sách thông báo</Text>
    </View>
  );
};

export default NotificationCenterScreen;
