import React from 'react';
import { View, Text } from 'react-native';

const AthleteEvaluation: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Athlete Evaluation</Text>
      <Text className="text-gray-600 mt-2">UC-54: Đánh giá VĐV</Text>
    </View>
  );
};

export default AthleteEvaluation;
