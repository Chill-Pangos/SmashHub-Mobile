import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";
import { spacing, borderRadius } from "../../../theme/spacing";
import { fontSize, fontWeight } from "../../../theme/typography";

export const myScheduleScreenStyles = StyleSheet.create({
  // Header
  header: {
    padding: spacing[4],
    paddingTop: spacing[6],
    borderBottomLeftRadius: borderRadius.xl,
    borderBottomRightRadius: borderRadius.xl,
  },
  headerTitle: {
    fontSize: fontSize["2xl"],
    fontWeight: fontWeight.bold,
    color: "#ffffff",
  },

  // Week Selector
  weekSelector: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing[4],
  },
  weekArrow: {
    padding: spacing[2],
  },
  dateItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
    marginHorizontal: spacing[1],
    borderRadius: borderRadius.lg,
    minWidth: 60,
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  dateItemSelected: {
    backgroundColor: "#ffffff",
  },
  dateDay: {
    fontSize: fontSize.xs,
    color: "rgba(255,255,255,0.7)",
    marginBottom: spacing[1],
  },
  dateDaySelected: {
    color: colors.primary.DEFAULT,
  },
  dateNumber: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    color: "#ffffff",
  },
  dateNumberSelected: {
    color: colors.primary.DEFAULT,
  },
  todayDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.status.success,
    marginTop: spacing[1],
  },

  // Section
  sectionTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
  },

  // Next Match Card
  nextMatchCard: {
    padding: 0,
    overflow: "hidden",
  },
  nextMatchGradient: {
    padding: spacing[4],
  },
  nextMatchTournament: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
  },
  nextMatchRound: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
    marginTop: spacing[1],
  },

  // Countdown
  countdownContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: spacing[4],
    borderRadius: borderRadius.lg,
    marginTop: spacing[4],
  },
  countdownLabel: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
  },
  countdownTime: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    color: colors.primary.DEFAULT,
    marginTop: spacing[1],
  },

  // Match Details
  nextMatchDetails: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: spacing[4],
    paddingTop: spacing[4],
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  detailText: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
    marginLeft: spacing[2],
  },

  // Players
  playersContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing[4],
  },
  playerBox: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: spacing[3],
    borderRadius: borderRadius.md,
    alignItems: "center",
  },
  playerLabel: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
  },
  vsText: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.bold,
    color: colors.muted.foreground,
    marginHorizontal: spacing[3],
  },

  // View Details Button
  viewDetailsButton: {
    marginTop: spacing[4],
    borderRadius: borderRadius.lg,
    overflow: "hidden",
  },
  viewDetailsGradient: {
    paddingVertical: spacing[3],
    alignItems: "center",
  },
  viewDetailsText: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    color: "#ffffff",
  },

  // Checklist
  checklistCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  checklistTitle: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
  },
  checklistItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing[3],
    borderTopWidth: 1,
    borderTopColor: colors.border,
    marginTop: spacing[1],
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.primary.DEFAULT,
    marginRight: spacing[3],
  },
  checklistText: {
    fontSize: fontSize.sm,
    color: colors.foreground,
  },
});
