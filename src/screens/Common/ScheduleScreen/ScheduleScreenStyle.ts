import { StyleSheet } from "react-native";
import { colors } from "../../../constants/design-tokens";
import { colors as themeColors } from "../../../theme/colors";

export const scheduleScreenStyles = StyleSheet.create({
  // Header
  header: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    backgroundColor: colors.background,
  },
  headerContent: {
    gap: 8,
  },
  headerTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.9)",
  },

  // Date Selector
  dateSelector: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.background,
  },
  datesScroll: {
    paddingHorizontal: 16,
    gap: 12,
  },
  dateItem: {
    width: 60,
    height: 80,
    borderRadius: 16,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: colors.border,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  dateItemSelected: {
    backgroundColor: themeColors.primary.DEFAULT,
    borderColor: themeColors.primary.DEFAULT,
  },
  dateWeekday: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.mutedForeground,
  },
  dateDay: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.foreground,
  },
  dateTextSelected: {
    color: "#fff",
  },
  todayDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: themeColors.primary.DEFAULT,
    marginTop: 4,
  },

  // Court Filter
  courtFilter: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
    backgroundColor: colors.background,
  },
  courtChip: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: themeColors.primary[50],
    borderWidth: 1,
    borderColor: themeColors.primary.DEFAULT,
    gap: 6,
  },
  courtChipSelected: {
    backgroundColor: themeColors.primary.DEFAULT,
    borderColor: themeColors.primary.DEFAULT,
  },
  courtChipText: {
    fontSize: 14,
    fontWeight: "600",
    color: themeColors.primary.DEFAULT,
  },
  courtChipTextSelected: {
    color: "#fff",
  },

  // Timeline
  timeline: {
    padding: 16,
    paddingBottom: 32,
    backgroundColor: colors.background,
    flex:1,
  },
  timeSlot: {
    marginBottom: 24,
  },
  timeLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  timeText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.foreground,
  },
  timeMatches: {
    gap: 12,
  },
  matchCard: {
    marginBottom: 0,
  },
});
