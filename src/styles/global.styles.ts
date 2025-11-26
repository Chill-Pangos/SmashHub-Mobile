/**
 * Global Styles
 * Common styles used across the application
 */

import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export const globalStyles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },

  // Flex utilities
  flexRow: {
    flexDirection: "row",
  },
  flexRowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  flexRowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flexCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  flex1: {
    flex: 1,
  },

  // Card styles
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardBorder: {
    borderWidth: 1,
    borderColor: colors.border,
  },

  // Text styles
  textPrimary: {
    color: colors.foreground,
  },
  textSecondary: {
    color: colors.muted.foreground,
  },
  textMuted: {
    color: colors.muted.foreground,
  },

  // Shadow utilities
  shadowSm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  shadowMd: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  shadowLg: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },

  // Border utilities
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  rounded: {
    borderRadius: 8,
  },
  roundedLg: {
    borderRadius: 12,
  },
  roundedFull: {
    borderRadius: 9999,
  },
});
