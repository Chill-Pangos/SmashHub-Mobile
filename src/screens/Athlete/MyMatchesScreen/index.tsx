import React from 'react';
import { View, Text } from 'react-native';

const MyMatches: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">My Matches</Text>
      <Text className="text-gray-600 mt-2">UC-17: Trận đấu của tôi</Text>
    </View>
  );
};

export default MyMatches;
