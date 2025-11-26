import React from 'react';
import { View, Text } from 'react-native';
import { contactSupportScreenStyles } from './ContactSupportScreenStyle';

const ContactSupportScreen: React.FC = () => {
  return (
    <View style={contactSupportScreenStyles.container}>
      <Text style={contactSupportScreenStyles.title}>Contact Support</Text>
      <Text style={contactSupportScreenStyles.subtitle}>UC-14, UC-29: Liên hệ hỗ trợ</Text>
    </View>
  );
};

export default ContactSupportScreen;
