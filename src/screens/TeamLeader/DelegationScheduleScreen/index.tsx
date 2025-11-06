import React from "react";
import { View, Text } from "react-native";

const DelegationScheduleScreen: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Delegation Schedule</Text>
      <Text className="text-gray-600 mt-2">UC-28, UC-31: Lịch đoàn</Text>
    </View>
  );
};

export default DelegationScheduleScreen;
