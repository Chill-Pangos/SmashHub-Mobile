import React from 'react';
import { View, Text } from 'react-native';

const PerformanceAnalytics: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Performance Analytics</Text>
      <Text className="text-gray-600 mt-2">UC-55: Phân tích hiệu suất</Text>
    </View>
  );
};

export default PerformanceAnalytics;
