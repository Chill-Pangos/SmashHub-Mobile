import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const filterChipsStyles = StyleSheet.create({
  // Container
  container: {
    flexDirection: "row",
    height: 56,
    backgroundColor: colors.background,
  },
  scrollContent: {
    height: 56,
    alignItems: "center",
  },
  wrapContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    height: 56,
    alignItems: "center",
  },

  // Chip
  chip: {
    height: 40,
    paddingHorizontal: 16,
    borderRadius: 9999,
    borderWidth: 1,
    marginRight: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  chip_selected: {
    backgroundColor: colors.primary.DEFAULT,
    borderColor: colors.primary.DEFAULT,
  },
  chip_unselected: {
    backgroundColor: colors.card,
    borderColor: colors.border,
  },

  // Chip Text
  chipText_selected: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.primary.foreground,
  },
  chipText_unselected: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.foreground,
  },

  // Count Badge
  countBadge: {
    marginLeft: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 9999,
  },
  countBadge_selected: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  countBadge_unselected: {
    backgroundColor: colors.secondary.DEFAULT,
  },

  countBadgeText_selected: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.primary.foreground,
  },
  countBadgeText_unselected: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.muted.foreground,
  },

  // Clear All Button
  clearAllButton: {
    height: 40,
    paddingHorizontal: 12,
    borderRadius: 9999,
    backgroundColor: colors.secondary.DEFAULT,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 0,
  },
  clearAllButtonWrap: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 9999,
    backgroundColor: colors.secondary.DEFAULT,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
    marginBottom: 8,
  },
  clearAllText: {
    fontSize: 14,
    color: colors.muted.foreground,
    marginLeft: 4,
    fontWeight: "500",
  },
});
