import React from "react";
import { View, Text } from "react-native";
import { registerScreenStyles } from "./RegisterScreenStyle";

const RegisterScreen: React.FC = () => {
  return (
    <View style={registerScreenStyles.container}>
      <Text style={registerScreenStyles.title}>Register Screen</Text>
      <Text style={registerScreenStyles.subtitle}>
        UC-49: Tạo tài khoản người dùng
      </Text>
    </View>
  );
};

export default RegisterScreen;
