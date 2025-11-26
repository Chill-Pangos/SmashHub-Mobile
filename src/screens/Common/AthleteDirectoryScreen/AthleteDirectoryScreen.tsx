import React from 'react';
import { View, Text } from 'react-native';
import { athleteDirectoryScreenStyles } from './AthleteDirectoryScreenStyle';

const AthleteDirectoryScreen: React.FC = () => {
  return (
    <View style={athleteDirectoryScreenStyles.container}>
      <Text style={athleteDirectoryScreenStyles.title}>Athlete Directory</Text>
      <Text style={athleteDirectoryScreenStyles.subtitle}>UC-13, UC-28: Thư mục VĐV</Text>
    </View>
  );
};

export default AthleteDirectoryScreen;
