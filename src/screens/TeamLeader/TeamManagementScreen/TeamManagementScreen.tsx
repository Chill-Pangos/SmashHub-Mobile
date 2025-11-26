import React from "react";
import { View, Text } from "react-native";
import { teamManagementScreenStyles } from "./TeamManagementScreenStyle";

const TeamManagementScreen: React.FC = () => {
  return (
    <View style={teamManagementScreenStyles.container}>
      <Text style={teamManagementScreenStyles.title}>Team Management</Text>
      <Text style={teamManagementScreenStyles.subtitle}>
        UC-48: Quản lý đội
      </Text>
    </View>
  );
};

export default TeamManagementScreen;
