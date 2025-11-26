import { StyleSheet } from "react-native";
import { colors } from "../../constants/design-tokens";

export const filterChipsStyles = StyleSheet.create({
  // Container
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  wrapContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
  },

  // Chip
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 9999,
    borderWidth: 1,
    marginRight: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  chip_selected: {
    backgroundColor: colors.primary[500],
    borderColor: colors.primary[500],
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
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 9999,
    backgroundColor: colors.secondary.DEFAULT,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
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
