/**
 * Design System Colors
 * Matching web version with oklch color space converted to hex
 */

export const colors = {
  // Base
  background: "#fafafa",
  foreground: "#1a1a1a",

  // Card
  card: "#ffffff",
  cardForeground: "#1a1a1a",

  // Popover
  popover: "#ffffff",
  popoverForeground: "#1a1a1a",

  // Primary (Orange/Amber theme)
  primary: {
    DEFAULT: "#e89b3c",
    foreground: "#ffffff",
    50: "#fef9f2",
    100: "#fef3e5",
    200: "#fce4c2",
    300: "#fad49f",
    400: "#f6b559",
    500: "#e89b3c",
    600: "#d88320",
    700: "#b56b18",
    800: "#925517",
    900: "#774616",
  },

  // Secondary
  secondary: {
    DEFAULT: "#efefef",
    foreground: "#1a1a1a",
  },

  // Muted
  muted: {
    DEFAULT: "#e1e1e1",
    foreground: "#737373",
  },

  // Accent
  accent: {
    DEFAULT: "#e89b3c",
    foreground: "#ffffff",
  },

  // Destructive
  destructive: {
    DEFAULT: "#dc2626",
    foreground: "#ffffff",
  },

  // Border & Input
  border: "#efefef",
  input: "#f5f5f5",
  ring: "#e89b3c",

  // Chart colors
  chart: {
    1: "#e89b3c",
    2: "#3b82f6",
    3: "#8b5cf6",
    4: "#10b981",
    5: "#f59e0b",
  },

  // Status colors
  status: {
    success: "#10b981",
    warning: "#f59e0b",
    error: "#dc2626",
    info: "#3b82f6",
  },

  // Legacy colors for backward compatibility
  // These match the old primary-500, etc.
  "primary-50": "#fef9f2",
  "primary-100": "#fef3e5",
  "primary-200": "#fce4c2",
  "primary-300": "#fad49f",
  "primary-400": "#f6b559",
  "primary-500": "#e89b3c",
  "primary-600": "#d88320",
  "primary-700": "#b56b18",
  "primary-800": "#925517",
  "primary-900": "#774616",

  // Gray scale
  "gray-50": "#fafafa",
  "gray-100": "#f5f5f5",
  "gray-200": "#e5e5e5",
  "gray-300": "#d4d4d4",
  "gray-400": "#a3a3a3",
  "gray-500": "#737373",
  "gray-600": "#525252",
  "gray-700": "#404040",
  "gray-800": "#262626",
  "gray-900": "#171717",
} as const;

export type ColorName = keyof typeof colors;

/**
 * Get color by name with fallback
 */
export const getColor = (
  name: string,
  fallback = colors.primary.DEFAULT
): string => {
  const keys = name.split(".");
  let value: any = colors;

  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = value[key];
    } else {
      return fallback;
    }
  }

  return typeof value === "string" ? value : fallback;
};
