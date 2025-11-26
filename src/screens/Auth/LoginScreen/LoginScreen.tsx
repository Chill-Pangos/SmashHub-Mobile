import React from "react";
import { View, Text } from "react-native";
import { loginScreenStyles } from "./LoginScreenStyle";

const LoginScreen: React.FC = () => {
  return (
    <View style={loginScreenStyles.container}>
      <Text style={loginScreenStyles.title}>Login Screen</Text>
      <Text style={loginScreenStyles.subtitle}>UC-32: Đăng nhập hệ thống</Text>
    </View>
  );
};

export default LoginScreen;
