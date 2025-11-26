import React from 'react';
import { View, Text } from 'react-native';
import { createTrainingPlanScreenStyles } from './CreateTrainingPlanScreenStyle';

const CreateTrainingPlanScreen: React.FC = () => {
  return (
    <View style={createTrainingPlanScreenStyles.container}>
      <Text style={createTrainingPlanScreenStyles.title}>Create Training Plan</Text>
      <Text style={createTrainingPlanScreenStyles.subtitle}>UC-53: Tạo kế hoạch huấn luyện</Text>
    </View>
  );
};

export default CreateTrainingPlanScreen;
