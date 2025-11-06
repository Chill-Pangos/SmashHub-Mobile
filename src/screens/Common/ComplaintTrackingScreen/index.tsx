import React from "react";
import { View, Text } from "react-native";

const ComplaintTrackingScreen: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Complaint Tracking</Text>
      <Text className="text-gray-600 mt-2">
        UC-35: Theo dõi tiến trình khiếu nại
      </Text>
    </View>
  );
};

export default ComplaintTrackingScreen;
