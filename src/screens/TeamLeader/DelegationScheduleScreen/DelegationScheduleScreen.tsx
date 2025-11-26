import React from "react";
import { View, Text } from "react-native";
import { delegationScheduleScreenStyles } from "./DelegationScheduleScreenStyle";

const DelegationScheduleScreen: React.FC = () => {
  return (
    <View style={delegationScheduleScreenStyles.container}>
      <Text style={delegationScheduleScreenStyles.title}>
        Delegation Schedule
      </Text>
      <Text style={delegationScheduleScreenStyles.subtitle}>
        UC-28, UC-31: Lịch đoàn
      </Text>
    </View>
  );
};

export default DelegationScheduleScreen;
