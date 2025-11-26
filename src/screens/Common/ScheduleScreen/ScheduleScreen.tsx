import React from 'react';
import { View, Text } from 'react-native';
import { scheduleScreenStyles } from './ScheduleScreenStyle';

const ScheduleScreen: React.FC = () => {
  return (
    <View style={scheduleScreenStyles.container}>
      <Text style={scheduleScreenStyles.title}>Schedule</Text>
      <Text style={scheduleScreenStyles.subtitle}>UC-7, UC-22: Lịch thi đấu</Text>
    </View>
  );
};

export default ScheduleScreen;
