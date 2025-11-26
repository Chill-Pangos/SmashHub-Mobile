/**
 * Gradient Utility Helpers
 * Standardized gradient configurations for consistent design
 */

import { colors } from "./colors";
import type { ColorValue } from "react-native";

export type GradientDirection = "horizontal" | "vertical" | "diagonal";

export interface GradientConfig {
  colors: readonly [ColorValue, ColorValue, ...ColorValue[]];
  start: { x: number; y: number };
  end: { x: number; y: number };
}

/**
 * Get gradient configuration by direction
 */
export const getGradientConfig = (
  colorArray: readonly [string, string, ...string[]],
  direction: GradientDirection = "diagonal"
): GradientConfig => {
  const directions: Record<
    GradientDirection,
    { start: { x: number; y: number }; end: { x: number; y: number } }
  > = {
    horizontal: { start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 } },
    vertical: { start: { x: 0.5, y: 0 }, end: { x: 0.5, y: 1 } },
    diagonal: { start: { x: 0, y: 0 }, end: { x: 1, y: 1 } },
  };

  return {
    colors: colorArray as readonly [ColorValue, ColorValue, ...ColorValue[]],
    ...directions[direction],
  };
};

/**
 * Predefined gradient presets
 */
export const gradients = {
  // Primary brand gradient (orange to dark orange)
  primary: (direction: GradientDirection = "diagonal"): GradientConfig =>
    getGradientConfig(
      [colors.primary.DEFAULT, colors.primary[700]] as const,
      direction
    ),

  // Primary subtle (light gradient for backgrounds)
  primarySubtle: (direction: GradientDirection = "diagonal"): GradientConfig =>
    getGradientConfig(
      [colors.primary[50], colors.primary[100]] as const,
      direction
    ),

  // Primary intense (darker gradient)
  primaryIntense: (direction: GradientDirection = "diagonal"): GradientConfig =>
    getGradientConfig(
      [colors.primary[600], colors.primary[900]] as const,
      direction
    ),

  // Success gradient
  success: (direction: GradientDirection = "diagonal"): GradientConfig =>
    getGradientConfig(["#10b981", "#059669"] as const, direction),

  // Destructive gradient
  destructive: (direction: GradientDirection = "diagonal"): GradientConfig =>
    getGradientConfig(["#dc2626", "#b91c1c"] as const, direction),

  // Warning gradient
  warning: (direction: GradientDirection = "diagonal"): GradientConfig =>
    getGradientConfig([colors.status.warning, "#d97706"] as const, direction),

  // Info gradient
  info: (direction: GradientDirection = "diagonal"): GradientConfig =>
    getGradientConfig([colors.status.info, "#2563eb"] as const, direction),

  // Gray subtle (for disabled states or backgrounds)
  graySubtle: (direction: GradientDirection = "diagonal"): GradientConfig =>
    getGradientConfig([colors.muted.DEFAULT, "#d1d5db"] as const, direction),

  // Dark overlay (for image overlays)
  darkOverlay: (direction: GradientDirection = "vertical"): GradientConfig =>
    getGradientConfig(
      ["rgba(0, 0, 0, 0.3)", "rgba(0, 0, 0, 0.7)"] as const,
      direction
    ),

  // Light overlay (for reverse image overlays)
  lightOverlay: (direction: GradientDirection = "vertical"): GradientConfig =>
    getGradientConfig(
      ["rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0.7)"] as const,
      direction
    ),
} as const;

