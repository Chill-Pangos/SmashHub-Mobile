/**
 * Design System Theme
 * Central export for all design tokens
 */

export * from "./colors";
export * from "./spacing";
export * from "./typography";
export * from "./gradients";

import { colors } from "./colors";
import { spacing, borderRadius } from "./spacing";
import { fontSize, fontWeight, lineHeight } from "./typography";
import { gradients } from "./gradients";

/**
 * Complete theme object
 * Use this for programmatic access to theme values
 */
export const theme = {
  colors,
  spacing,
  borderRadius,
  fontSize,
  fontWeight,
  lineHeight,
  gradients,
} as const;

export default theme;
