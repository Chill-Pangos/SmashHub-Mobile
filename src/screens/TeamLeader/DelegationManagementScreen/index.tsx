import React from "react";
import { View, Text } from "react-native";

const DelegationManagementScreen: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Delegation Management</Text>
      <Text className="text-gray-600 mt-2">UC-27, UC-52: Quản lý đoàn</Text>
    </View>
  );
};

export default DelegationManagementScreen;
