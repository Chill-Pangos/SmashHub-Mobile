import React from 'react';
import { View, Text } from 'react-native';
import { performanceAnalyticsScreenStyles } from './PerformanceAnalyticsScreenStyle';

const PerformanceAnalyticsScreen: React.FC = () => {
  return (
    <View style={performanceAnalyticsScreenStyles.container}>
      <Text style={performanceAnalyticsScreenStyles.title}>Performance Analytics</Text>
      <Text style={performanceAnalyticsScreenStyles.subtitle}>UC-55: Phân tích hiệu suất</Text>
    </View>
  );
};

export default PerformanceAnalyticsScreen;
