import React from 'react';
import { View, Text } from 'react-native';
import { athleteEvaluationScreenStyles } from './AthleteEvaluationScreenStyle';

const AthleteEvaluationScreen: React.FC = () => {
  return (
    <View style={athleteEvaluationScreenStyles.container}>
      <Text style={athleteEvaluationScreenStyles.title}>Athlete Evaluation</Text>
      <Text style={athleteEvaluationScreenStyles.subtitle}>UC-54: Đánh giá VĐV</Text>
    </View>
  );
};

export default AthleteEvaluationScreen;
