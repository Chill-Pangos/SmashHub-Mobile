import React from 'react';
import { View, Text } from 'react-native';
import { complaintManagementScreenStyles } from './ComplaintManagementScreenStyle';

const ComplaintManagementScreen: React.FC = () => {
  return (
    <View style={complaintManagementScreenStyles.container}>
      <Text style={complaintManagementScreenStyles.title}>Complaint Management</Text>
      <Text style={complaintManagementScreenStyles.subtitle}>UC-44: Quản lý khiếu nại HLV</Text>
    </View>
  );
};

export default ComplaintManagementScreen;
