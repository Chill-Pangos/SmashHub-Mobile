import React from "react";
import { View, Text } from "react-native";
import { delegationManagementScreenStyles } from "./DelegationManagementScreenStyle";

const DelegationManagementScreen: React.FC = () => {
  return (
    <View style={delegationManagementScreenStyles.container}>
      <Text style={delegationManagementScreenStyles.title}>
        Delegation Management
      </Text>
      <Text style={delegationManagementScreenStyles.subtitle}>
        UC-27, UC-52: Quản lý đoàn
      </Text>
    </View>
  );
};

export default DelegationManagementScreen;
