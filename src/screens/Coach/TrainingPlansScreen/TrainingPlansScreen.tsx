import React from 'react';
import { View, Text } from 'react-native';
import { trainingPlansScreenStyles } from './TrainingPlansScreenStyle';

const TrainingPlansScreen: React.FC = () => {
  return (
    <View style={trainingPlansScreenStyles.container}>
      <Text style={trainingPlansScreenStyles.title}>Training Plans</Text>
      <Text style={trainingPlansScreenStyles.subtitle}>UC-53: Kế hoạch huấn luyện</Text>
    </View>
  );
};

export default TrainingPlansScreen;
