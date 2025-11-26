import React from 'react';
import { View, Text } from 'react-native';
import { tacticalReportScreenStyles } from './TacticalReportScreenStyle';

const TacticalReportScreen: React.FC = () => {
  return (
    <View style={tacticalReportScreenStyles.container}>
      <Text style={tacticalReportScreenStyles.title}>Tactical Report</Text>
      <Text style={tacticalReportScreenStyles.subtitle}>UC-56: Báo cáo chiến thuật</Text>
    </View>
  );
};

export default TacticalReportScreen;
