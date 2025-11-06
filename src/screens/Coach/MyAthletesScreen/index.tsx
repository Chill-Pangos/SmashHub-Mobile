import React from 'react';
import { View, Text } from 'react-native';

const MyAthletes: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">My Athletes</Text>
      <Text className="text-gray-600 mt-2">UC-55: Danh sách VĐV</Text>
    </View>
  );
};

export default MyAthletes;
