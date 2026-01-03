import { StyleSheet } from "react-native";
import {
  colors,
  spacing,
  borderRadius,
  fontSize,
  fontWeight,
} from "../../../theme";

export default StyleSheet.create({
  // Header
  headerGradient: {
    paddingTop: spacing[6],
    paddingHorizontal: spacing[4],
    paddingBottom: spacing[6],
    borderBottomLeftRadius: borderRadius["2xl"],
    borderBottomRightRadius: borderRadius["2xl"],
  },
  headerContent: {
    marginBottom: spacing[4],
  },
  headerIcon: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.full,
    backgroundColor: "#ffffff20",
    justifyContent: "center",
    alignItems: "center",
    marginRight: spacing[3],
  },
  headerTitle: {
    fontSize: fontSize["3xl"],
    fontWeight: fontWeight.bold,
    color: "#ffffff",
    marginBottom: spacing[1],
  },
  headerSubtitle: {
    fontSize: fontSize.sm,
    color: "#ffffffE6",
  },

  // Stats
  statsRow: {
    flexDirection: "row",
    gap: spacing[2],
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff20",
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[3],
    borderRadius: borderRadius.lg,
    gap: spacing[2],
  },
  statText: {
    fontSize: fontSize.sm,
    color: "#ffffff",
    fontWeight: fontWeight.medium,
  },

  // Date Picker
  datePickerContainer: {
    paddingHorizontal: spacing[4],
    paddingTop: spacing[4],
  },

  // Filters
  filtersContainer: {
    paddingHorizontal: spacing[4],
    paddingTop: spacing[4],
  },

  // Schedules
  schedulesContainer: {
    paddingHorizontal: spacing[4],
    paddingTop: spacing[4],
    paddingBottom: spacing[8],
  },
  sectionTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
    marginBottom: spacing[4],
  },

  // Athlete Schedule Card
  athleteScheduleCard: {
    backgroundColor: "#ffffff",
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    marginBottom: spacing[3],
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  athleteScheduleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing[4],
    paddingBottom: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  athleteName: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
    marginLeft: spacing[2],
  },
  conflictBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.destructive.DEFAULT + "10",
    paddingVertical: spacing[1],
    paddingHorizontal: spacing[2],
    borderRadius: borderRadius.md,
    gap: spacing[1],
  },
  conflictText: {
    fontSize: fontSize.xs,
    color: colors.destructive.DEFAULT,
    fontWeight: fontWeight.medium,
  },

  // Timeline
  matchesTimeline: {
    gap: spacing[2],
  },
  timelineItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing[2],
    gap: spacing[3],
  },
  timelineTime: {
    flexDirection: "row",
    alignItems: "center",
    width: 70,
    gap: spacing[1],
  },
  timeText: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
    fontWeight: fontWeight.medium,
  },
  timelineDot: {
    width: 8,
    height: 8,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary.DEFAULT,
  },
  timelineContent: {
    flex: 1,
  },
  matchOpponent: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.medium,
    color: colors.foreground,
    marginBottom: spacing[1],
  },
  matchCourt: {
    fontSize: fontSize.xs,
    color: colors.muted.foreground,
    marginLeft: spacing[1],
  },

  // Matches
  matchesContainer: {
    paddingHorizontal: spacing[4],
    paddingTop: spacing[4],
    paddingBottom: spacing[8],
  },
  matchCard: {
    marginBottom: spacing[3],
  },

  // Empty State
  emptyState: {
    paddingVertical: spacing[10],
    alignItems: "center",
  },
  emptyTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
    marginTop: spacing[4],
    marginBottom: spacing[2],
  },
  emptyText: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
    textAlign: "center",
  },
});
