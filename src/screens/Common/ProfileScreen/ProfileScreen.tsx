import React from 'react';
import { View, Text } from 'react-native';
import { profileScreenStyles } from './ProfileScreenStyle';

const ProfileScreen: React.FC = () => {
  return (
    <View style={profileScreenStyles.container}>
      <Text style={profileScreenStyles.title}>Profile Screen</Text>
      <Text style={profileScreenStyles.subtitle}>UC-21, UC-33: Quản lý hồ sơ cá nhân</Text>
    </View>
  );
};

export default ProfileScreen;
