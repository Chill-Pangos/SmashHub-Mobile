/**
 * Design System Spacing
 * Consistent spacing scale for layout and components
 */

export const spacing = {
  0: 0,
  1: 4, // 0.25rem
  2: 8, // 0.5rem
  3: 12, // 0.75rem
  4: 16, // 1rem
  5: 20, // 1.25rem
  6: 24, // 1.5rem
  8: 32, // 2rem
  10: 40, // 2.5rem
  12: 48, // 3rem
  16: 64, // 4rem
  20: 80, // 5rem
  24: 96, // 6rem
} as const;

export const borderRadius = {
  none: 0,
  sm: 6, // 0.375rem (--radius - 4px)
  md: 8, // 0.5rem (--radius - 2px)
  lg: 12, // 0.75rem (--radius)
  xl: 16, // 1rem (--radius + 4px)
  "2xl": 20, // 1.25rem
  full: 9999,
} as const;

export type SpacingKey = keyof typeof spacing;
export type BorderRadiusKey = keyof typeof borderRadius;
