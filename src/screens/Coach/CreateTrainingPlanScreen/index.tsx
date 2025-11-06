import React from 'react';
import { View, Text } from 'react-native';

const CreateTrainingPlan: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Create Training Plan</Text>
      <Text className="text-gray-600 mt-2">UC-53: Tạo kế hoạch huấn luyện</Text>
    </View>
  );
};

export default CreateTrainingPlan;
