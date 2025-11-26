/**
 * Icon Sizes Constants
 * Standardized icon sizes across the application
 */

export const iconSizes = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
} as const;

export type IconSize = keyof typeof iconSizes;
