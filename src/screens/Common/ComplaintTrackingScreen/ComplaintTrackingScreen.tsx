import React from 'react';
import { View, Text } from 'react-native';
import { complaintTrackingScreenStyles } from './ComplaintTrackingScreenStyle';

const ComplaintTrackingScreen: React.FC = () => {
  return (
    <View style={complaintTrackingScreenStyles.container}>
      <Text style={complaintTrackingScreenStyles.title}>Complaint Tracking</Text>
      <Text style={complaintTrackingScreenStyles.subtitle}>UC-12, UC-44: Theo dõi khiếu nại</Text>
    </View>
  );
};

export default ComplaintTrackingScreen;
