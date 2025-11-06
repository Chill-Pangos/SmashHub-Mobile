import React from 'react';
import { View, Text } from 'react-native';

const MySchedule: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">My Schedule</Text>
      <Text className="text-gray-600 mt-2">UC-17: Lịch thi đấu cá nhân</Text>
    </View>
  );
};

export default MySchedule;
