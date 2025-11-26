import React from "react";
import { View, Text } from "react-native";
import { myScheduleScreenStyles } from "./MyScheduleScreenStyle";

const MyScheduleScreen: React.FC = () => {
  return (
    <View style={myScheduleScreenStyles.container}>
      <Text style={myScheduleScreenStyles.title}>My Schedule</Text>
      <Text style={myScheduleScreenStyles.subtitle}>
        UC-17: Lịch thi đấu cá nhân
      </Text>
    </View>
  );
};

export default MyScheduleScreen;
