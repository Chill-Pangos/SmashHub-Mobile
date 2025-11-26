import { StyleSheet } from "react-native";
import { colors } from "../../constants/design-tokens";

export const dateRangePickerStyles = StyleSheet.create({
  // Trigger Button
  triggerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  triggerContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  triggerText: {
    marginLeft: 8,
    flex: 1,
    color: colors.foreground,
  },
  triggerPlaceholder: {
    marginLeft: 8,
    flex: 1,
    color: colors.muted.foreground,
  },

  clearButton: {
    marginLeft: 8,
    padding: 4,
  },

  // Modal
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: colors.card,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: "90%",
  },

  // Modal Header
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.foreground,
  },

  // Quick Presets
  presetsContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  presetsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  presetButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: colors.secondary.DEFAULT,
    borderRadius: 8,
  },
  presetButtonText: {
    fontSize: 14,
    color: colors.foreground,
  },

  // Calendar
  calendarContainer: {
    padding: 16,
  },

  // Month Navigation
  monthNavigation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  monthNavigationButton: {
    padding: 8,
  },
  monthText: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.foreground,
  },

  // Week Days Header
  weekDaysRow: {
    flexDirection: "row",
    marginBottom: 8,
  },
  weekDay: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },
  weekDayText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.muted.foreground,
  },

  // Calendar Grid
  calendarGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dayButton: {
    width: "14.28%",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dayButton_inRange: {
    backgroundColor: colors.primaryLight,
  },

  dayCircle: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  dayCircle_selected: {
    backgroundColor: colors.primary[500],
  },
  dayCircle_today: {
    borderWidth: 2,
    borderColor: colors.primary[500],
  },

  dayText: {
    fontSize: 16,
  },
  dayText_disabled: {
    color: colors.muted.foreground,
    opacity: 0.4,
  },
  dayText_selected: {
    color: colors.primary.foreground,
    fontWeight: "bold",
  },
  dayText_notCurrentMonth: {
    color: colors.muted.foreground,
    opacity: 0.6,
  },
  dayText_default: {
    color: colors.foreground,
  },

  // Footer Actions
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  clearFooterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  clearFooterText: {
    fontSize: 16,
    color: colors.muted.foreground,
    fontWeight: "500",
  },
  applyButton: {
    backgroundColor: colors.primary[500],
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  applyButtonText: {
    fontSize: 16,
    color: colors.primary.foreground,
    fontWeight: "600",
  },
});
