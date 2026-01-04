/**
 * Design System Typography
 * Font sizes, weights, and line heights
 */

export const fontSize = {
  xs: 12, // 0.75rem
  sm: 14, // 0.875rem
  base: 16, // 1rem
  lg: 18, // 1.125rem
  xl: 20, // 1.25rem
  "2xl": 24, // 1.5rem
  "3xl": 30, // 1.875rem
  "4xl": 36, // 2.25rem
  "5xl": 48, // 3rem
} as const;

export const fontWeight = {
  normal: "400" as const,
  medium: "500" as const,
  semibold: "600" as const,
  bold: "700" as const,
  extrabold: "800" as const,
};

export const lineHeight = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;

export type FontSizeKey = keyof typeof fontSize;
export type FontWeightKey = keyof typeof fontWeight;
export type LineHeightKey = keyof typeof lineHeight;

/**
 * Typography Presets
 * Common text styles used throughout the app
 */
export const typography = {
  // Headings
  h1: {
    fontSize: fontSize["3xl"],
    fontWeight: fontWeight.bold,
    lineHeight: fontSize["3xl"] * lineHeight.tight,
  },
  h2: {
    fontSize: fontSize["2xl"],
    fontWeight: fontWeight.bold,
    lineHeight: fontSize["2xl"] * lineHeight.tight,
  },
  h3: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.semibold,
    lineHeight: fontSize.xl * lineHeight.snug,
  },
  h4: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    lineHeight: fontSize.lg * lineHeight.snug,
  },

  // Body text
  body: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.normal,
    lineHeight: fontSize.base * lineHeight.normal,
  },
  bodyMedium: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.medium,
    lineHeight: fontSize.base * lineHeight.normal,
  },
  bodySemibold: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    lineHeight: fontSize.base * lineHeight.normal,
  },

  // Small text
  small: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.normal,
    lineHeight: fontSize.sm * lineHeight.normal,
  },
  smallMedium: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    lineHeight: fontSize.sm * lineHeight.normal,
  },

  // Tiny text
  tiny: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.normal,
    lineHeight: fontSize.xs * lineHeight.normal,
  },
  tinyMedium: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.medium,
    lineHeight: fontSize.xs * lineHeight.normal,
  },

  // Large text
  large: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.normal,
    lineHeight: fontSize.xl * lineHeight.normal,
  },
  largeMedium: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.medium,
    lineHeight: fontSize.xl * lineHeight.normal,
  },
} as const;
