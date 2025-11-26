import React from "react";
import { View, ActivityIndicator, Text, ViewStyle } from "react-native";
import { loadingStyles } from "./LoadingStyle";
import { colors } from "../../constants/design-tokens";

interface LoadingProps {
  message?: string;
  style?: ViewStyle;
}

const Loading: React.FC<LoadingProps> = ({ message = "Loading...", style }) => {
  return (
    <View style={[loadingStyles.container, style]}>
      <ActivityIndicator size="large" color={colors.primary[500]} />
      <Text style={loadingStyles.message}>{message}</Text>
    </View>
  );
};

export default Loading;
