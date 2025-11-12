import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Plus } from "lucide-react-native";
import { colors, iconSizes, shadows } from "../../constants/design-tokens";

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
  /** Custom className */
  className?: string;
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
  className = "",
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

  // Position styles
  const positionStyles = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "bottom-center": "bottom-6 left-1/2 -translate-x-1/2",
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`absolute ${positionStyles[position]} ${className}`}
      style={{
        ...shadows.lg,
      }}
      activeOpacity={0.8}
    >
      {label ? (
        // Extended FAB with label
        <View
          className="flex-row items-center px-4 rounded-full"
          style={{
            height: config.height,
            backgroundColor: disabled ? colors.gray[400] : color,
          }}
        >
          {icon || <Plus size={config.iconSize} color="#fff" />}
          <Text className="text-white font-semibold ml-2">{label}</Text>
        </View>
      ) : (
        // Regular FAB (circular)
        <View
          className="items-center justify-center rounded-full"
          style={{
            width: config.width,
            height: config.height,
            backgroundColor: disabled ? colors.gray[400] : color,
          }}
        >
          {icon || <Plus size={config.iconSize} color="#fff" />}
        </View>
      )}
    </TouchableOpacity>
  );
};
