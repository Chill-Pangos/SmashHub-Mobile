import React from 'react';
import { View, Text } from 'react-native';

const TacticalReport: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Tactical Report</Text>
      <Text className="text-gray-600 mt-2">UC-56: Báo cáo chiến thuật</Text>
    </View>
  );
};

export default TacticalReport;
