import React from "react";
import { View, Text } from "react-native";
import Button from "./Button";

interface EmptyStateProps {
  title: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  message,
  actionLabel,
  onAction,
}) => {
  return (
    <View className="flex-1 justify-center items-center px-6">
      <Text className="text-2xl font-bold text-gray-800 mb-2">{title}</Text>
      <Text className="text-gray-600 text-center mb-6">{message}</Text>
      {actionLabel && onAction && (
        <Button title={actionLabel} onPress={onAction} />
      )}
    </View>
  );
};

export default EmptyState;
