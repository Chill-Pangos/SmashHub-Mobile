/**
 * Icon Colors Constants
 * Standardized colors for icons across the application
 */

import { colors } from "../theme/colors";

export const iconColors = {
  // Primary colors
  primary: colors.primary.DEFAULT,
  primaryForeground: colors.primary.foreground,

  // Semantic colors
  success: colors.status.success,
  warning: colors.status.warning,
  error: colors.status.error,
  info: colors.status.info,
  destructive: colors.destructive.DEFAULT,

  // Gray scale
  gray: {
    50: colors["gray-50"],
    100: colors["gray-100"],
    200: colors["gray-200"],
    300: colors["gray-300"],
    400: colors["gray-400"],
    500: colors["gray-500"],
    600: colors["gray-600"],
    700: colors["gray-700"],
    800: colors["gray-800"],
    900: colors["gray-900"],
  },

  // Specific contexts
  default: colors.foreground,
  muted: colors.muted.foreground,
  white: "#ffffff",
  black: "#000000",

  // Specific contexts
  header: colors["gray-900"],
  headerLight: "#ffffff",
  tabActive: colors.primary.DEFAULT,
  tabInactive: colors["gray-500"],
  badge: colors.primary.DEFAULT,
  notification: colors.status.error,
} as const;

export type IconColorKey = keyof typeof iconColors;
