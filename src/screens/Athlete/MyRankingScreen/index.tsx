import React from 'react';
import { View, Text } from 'react-native';

const MyRanking: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">My Ranking</Text>
      <Text className="text-gray-600 mt-2">UC-19: Kết quả & BXH cá nhân</Text>
    </View>
  );
};

export default MyRanking;
