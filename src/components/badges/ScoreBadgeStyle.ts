import { StyleSheet } from "react-native";
import { colors } from "../../constants/design-tokens";

export const scoreBadgeStyles = StyleSheet.create({
  // Container base
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  // Size-based containers for score blocks
  scoreContainer_small: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  scoreContainer_medium: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  scoreContainer_large: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  // Score text sizes
  scoreText_small: {
    fontSize: 14,
    fontWeight: "bold",
  },
  scoreText_medium: {
    fontSize: 16,
    fontWeight: "bold",
  },
  scoreText_large: {
    fontSize: 18,
    fontWeight: "bold",
  },

  // Name text sizes (detailed variant)
  nameText_small: {
    fontSize: 12,
  },
  nameText_medium: {
    fontSize: 14,
  },
  nameText_large: {
    fontSize: 16,
  },

  // Live indicator sizes
  liveContainer_small: {
    fontSize: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 9999,
    backgroundColor: colors.destructive.DEFAULT,
  },
  liveContainer_medium: {
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 9999,
    backgroundColor: colors.destructive.DEFAULT,
  },
  liveContainer_large: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 9999,
    backgroundColor: colors.destructive.DEFAULT,
  },

  liveText: {
    color: colors.destructive.foreground,
    fontWeight: "600",
  },

  // Border radius for default variant
  roundedLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  roundedRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },

  // Background colors
  bgSecondary: {
    backgroundColor: colors.secondary.DEFAULT,
  },
  bgPrimaryLight: {
    backgroundColor: `${colors.primary[500]}1A`, // 10% opacity
  },

  // Text colors
  textSecondaryForeground: {
    color: colors.secondary.foreground,
  },
  textPrimary: {
    color: colors.primary[500],
  },
  textMuted: {
    color: colors.muted.foreground,
  },
  textForeground: {
    color: colors.foreground,
  },

  // Separator (default variant)
  separator: {
    paddingHorizontal: 4,
    backgroundColor: colors.secondary.DEFAULT,
  },

  // Detailed variant specific
  detailedContainer: {
    // Base container
  },
  detailedRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  detailedRowLast: {
    marginBottom: 0,
  },
  detailedName: {
    flex: 1,
  },
  detailedScore: {
    marginLeft: 8,
    borderRadius: 8,
  },

  // Compact variant
  compactContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  compactScore: {
    borderRadius: 8,
    backgroundColor: colors.secondary.DEFAULT,
  },
  compactLive: {
    marginLeft: 8,
  },

  // Helper styles
  fontBold: {
    fontWeight: "bold",
  },
  flex1: {
    flex: 1,
  },
  numberOfLines1: {
    // Applied via prop
  },
});
