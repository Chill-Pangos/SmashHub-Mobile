import React from 'react';
import { View, Text } from 'react-native';
import { notificationCenterScreenStyles } from './NotificationCenterScreenStyle';

const NotificationCenterScreen: React.FC = () => {
  return (
    <View style={notificationCenterScreenStyles.container}>
      <Text style={notificationCenterScreenStyles.title}>Notification Center</Text>
      <Text style={notificationCenterScreenStyles.subtitle}>UC-10, UC-26: Trung tâm thông báo</Text>
    </View>
  );
};

export default NotificationCenterScreen;
