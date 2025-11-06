import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface CardProps {
  children: React.ReactNode;
  onPress?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, onPress, className = "" }) => {
  const Component = onPress ? TouchableOpacity : View;

  return (
    <Component
      onPress={onPress}
      className={`bg-white rounded-lg shadow-sm p-4 ${className}`}
    >
      {children}
    </Component>
  );
};

export default Card;
