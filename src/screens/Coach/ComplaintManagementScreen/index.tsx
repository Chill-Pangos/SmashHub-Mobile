import React from 'react';
import { View, Text } from 'react-native';

const ComplaintManagement: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Complaint Management</Text>
      <Text className="text-gray-600 mt-2">UC-44: Quản lý khiếu nại HLV</Text>
    </View>
  );
};

export default ComplaintManagement;
