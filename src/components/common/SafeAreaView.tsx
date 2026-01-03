/**
 * SafeAreaView Component
 * Wrapper for SafeAreaView with consistent styling and edge configuration
 *
 * @usage
 * import { SafeAreaView } from 'src/components'
 *
 * // Default (top and bottom edges)
 * <SafeAreaView>...</SafeAreaView>
 *
 * // Custom edges
 * <SafeAreaView edges={['top']}>...</SafeAreaView>
 *
 * // With primary background
 * <SafeAreaView variant="primary">...</SafeAreaView>
 */

import React from "react";
import {
  SafeAreaView as RNSafeAreaView,
  SafeAreaViewProps as RNSafeAreaViewProps,
} from "react-native-safe-area-context";
import { ViewStyle } from "react-native";
import { globalStyles } from "../../styles/global.styles";

export interface SafeAreaViewProps extends Omit<RNSafeAreaViewProps, "edges"> {
  /**
   * Which edges to apply safe area insets
   * @default ['top', 'bottom']
   */
  edges?: ("top" | "bottom" | "left" | "right")[];

  /**
   * Background color variant
   * @default 'default'
   */
  variant?: "default" | "primary" | "card";

  /**
   * Additional style for the container
   */
  style?: ViewStyle | ViewStyle[];

  /**
   * Children components
   */
  children?: React.ReactNode;
}

/**
 * SafeAreaView Component
 * Provides safe area insets with consistent styling
 */
const SafeAreaView: React.FC<SafeAreaViewProps> = ({
  edges = ["top", "bottom"],
  variant = "default",
  style,
  children,
  ...props
}) => {
  // Get base style based on variant
  const baseStyle =
    variant === "primary"
      ? globalStyles.safeAreaPrimary
      : variant === "card"
      ? globalStyles.safeAreaCard
      : globalStyles.safeArea;

  return (
    <RNSafeAreaView edges={edges} style={[baseStyle, style]} {...props}>
      {children}
    </RNSafeAreaView>
  );
};

export default SafeAreaView;
