import React from "react";
import { TouchableOpacity, Text, View, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Plus } from "lucide-react-native";
import { colors, iconSizes, shadows } from "../../constants/design-tokens";
import { floatingActionButtonStyles } from "./FloatingActionButtonStyle";

/**
 * FloatingActionButton Props
 */
export interface FloatingActionButtonProps {
  /** Icon component (defaults to Plus) */
  icon?: React.ReactNode;
  /** Button label (optional) */
  label?: string;
  /** Callback when button is pressed */
  onPress: () => void;
  /** Button position */
  position?: "bottom-right" | "bottom-left" | "bottom-center";
  /** Button size */
  size?: "small" | "medium" | "large";
  /** Button color (defaults to primary) */
  color?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Custom style */
  style?: ViewStyle;
}

/**
 * FloatingActionButton Component
 *
 * Floating action button for primary actions.
 * Used in 4+ screens for quick actions like "Add" or "Create".
 *
 * @example
 * ```tsx
 * <FloatingActionButton
 *   icon={<Plus size={24} color="#fff" />}
 *   label="Tạo mới"
 *   onPress={() => navigation.navigate('CreateTournament')}
 *   position="bottom-right"
 * />
 * ```
 */
export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  icon,
  label,
  onPress,
  position = "bottom-right",
  size = "medium",
  color = colors.primary[500],
  disabled = false,
  style,
}) => {
  // Size configurations
  const sizeConfig = {
    small: {
      width: 48,
      height: 48,
      iconSize: iconSizes.sm,
    },
    medium: {
      width: 56,
      height: 56,
      iconSize: iconSizes.md,
    },
    large: {
      width: 64,
      height: 64,
      iconSize: iconSizes.lg,
    },
  };

  const config = sizeConfig[size];

  // Position style mapping
  const positionStyleMap = {
    "bottom-right": floatingActionButtonStyles.position_bottomRight,
    "bottom-left": floatingActionButtonStyles.position_bottomLeft,
    "bottom-center": floatingActionButtonStyles.position_bottomCenter,
  };

  const positionStyle = positionStyleMap[position];

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        floatingActionButtonStyles.container,
        positionStyle,
        shadows.lg,
        style,
      ]}
      activeOpacity={0.7}
    >
      {label ? (
        // Extended FAB with label
        <LinearGradient
          colors={disabled ? ["#9ca3af", "#9ca3af"] : [color, color]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[
            floatingActionButtonStyles.extended_container,
            size === "small"
              ? floatingActionButtonStyles.extended_height_small
              : size === "large"
              ? floatingActionButtonStyles.extended_height_large
              : floatingActionButtonStyles.extended_height_medium,
          ]}
        >
          {icon || <Plus size={config.iconSize} color="#fff" />}
          <Text style={floatingActionButtonStyles.extended_label}>{label}</Text>
        </LinearGradient>
      ) : (
        // Regular FAB (circular)
        <LinearGradient
          colors={disabled ? ["#9ca3af", "#9ca3af"] : [color, color]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[
            floatingActionButtonStyles.regular_container,
            size === "small"
              ? floatingActionButtonStyles.size_small
              : size === "large"
              ? floatingActionButtonStyles.size_large
              : floatingActionButtonStyles.size_medium,
          ]}
        >
          {icon || <Plus size={config.iconSize} color="#fff" />}
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};
