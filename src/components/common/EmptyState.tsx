import React from "react";
import { View, Text } from "react-native";
import Button from "./Button";
import { emptyStateStyles } from "./EmptyStateStyle";

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
    <View style={emptyStateStyles.container}>
      <Text style={emptyStateStyles.title}>{title}</Text>
      <Text style={emptyStateStyles.message}>{message}</Text>
      {actionLabel && onAction && (
        <Button title={actionLabel} onPress={onAction} />
      )}
    </View>
  );
};

export default EmptyState;
