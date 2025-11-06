import React from "react";
import { View, Text } from "react-native";

const ScheduleScreen: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Tournament Schedule</Text>
      <Text className="text-gray-600 mt-2">
        UC-22: Xem lịch thi đấu toàn giải
      </Text>
    </View>
  );
};

export default ScheduleScreen;
