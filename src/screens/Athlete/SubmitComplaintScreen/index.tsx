import React from 'react';
import { View, Text } from 'react-native';

const SubmitComplaint: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Submit Complaint</Text>
      <Text className="text-gray-600 mt-2">UC-20, UC-43: Gửi khiếu nại</Text>
    </View>
  );
};

export default SubmitComplaint;
