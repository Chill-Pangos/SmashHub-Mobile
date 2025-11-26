import React from "react";
import { View, TouchableOpacity, ViewStyle } from "react-native";
import { cardStyles } from "./CardStyle";

interface CardProps {
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
}

const Card: React.FC<CardProps> = ({ children, onPress, style }) => {
  const Component = onPress ? TouchableOpacity : View;

  return (
    <Component
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
      style={[cardStyles.card, style]}
    >
      {children}
    </Component>
  );
};

export default Card;
