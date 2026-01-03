import { StyleSheet } from "react-native";
import {
  colors,
  spacing,
  borderRadius,
  fontSize,
  fontWeight,
} from "../../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerGradient: {
    paddingTop: spacing[12],
    paddingBottom: spacing[6],
    paddingHorizontal: spacing[4],
  },
  headerContent: {
    gap: spacing[2],
  },
  headerIcon: {
    marginBottom: spacing[2],
  },
  headerTitle: {
    fontSize: fontSize["3xl"],
    fontWeight: fontWeight.bold,
    color: "#ffffff",
  },
  headerSubtitle: {
    fontSize: fontSize.base,
    color: "#ffffff",
    opacity: 0.9,
  },
  statsContainer: {
    flexDirection: "row",
    gap: spacing[3],
    marginTop: spacing[4],
  },
  statCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: spacing[3],
    backgroundColor: "#ffffff15",
    borderRadius: borderRadius.xl,
    gap: spacing[2],
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.lg,
    alignItems: "center",
    justifyContent: "center",
  },
  statContent: {
    flex: 1,
  },
  statValue: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    color: "#ffffff",
  },
  statLabel: {
    fontSize: fontSize.xs,
    color: "#ffffff",
    opacity: 0.8,
  },
  tabContainer: {
    backgroundColor: colors.background,
  },
  contentContainer: {
    flex: 1,
    padding: spacing[4],
  },
  searchFilterRow: {
    gap: spacing[3],
    marginBottom: spacing[4],
  },
  searchContainer: {
    flex: 1,
  },
  filterRow: {
    flexDirection: "row",
    gap: spacing[2],
  },
  complaintList: {
    gap: spacing[3],
  },
  complaintCard: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
  },
  complaintHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  complaintHeaderLeft: {
    flex: 1,
    gap: spacing[1],
  },
  complaintId: {
    fontSize: fontSize.xs,
    color: colors.muted.foreground,
    fontWeight: fontWeight.medium,
  },
  complaintTopic: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
  },
  complaintMatch: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
  },
  statusBadge: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.full,
  },
  statusBadgePending: {
    backgroundColor: colors.status.warning + "20",
  },
  statusBadgeUnderReview: {
    backgroundColor: colors.status.info + "20",
  },
  statusBadgeApproved: {
    backgroundColor: colors.status.success + "20",
  },
  statusBadgeRejected: {
    backgroundColor: colors.destructive.DEFAULT + "20",
  },
  statusText: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.semibold,
  },
  statusTextPending: {
    color: colors.status.warning,
  },
  statusTextUnderReview: {
    color: colors.status.info,
  },
  statusTextApproved: {
    color: colors.status.success,
  },
  statusTextRejected: {
    color: colors.destructive.DEFAULT,
  },
  complaintBody: {
    padding: spacing[4],
    gap: spacing[3],
  },
  complaintMeta: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing[3],
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[1],
  },
  metaText: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
  },
  complaintDescription: {
    fontSize: fontSize.sm,
    color: colors.foreground,
    lineHeight: 20,
  },
  priorityBadge: {
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.md,
  },
  priorityBadgeHigh: {
    backgroundColor: colors.destructive.DEFAULT + "20",
  },
  priorityBadgeMedium: {
    backgroundColor: colors.status.warning + "20",
  },
  priorityBadgeLow: {
    backgroundColor: colors.muted.DEFAULT,
  },
  priorityText: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.medium,
  },
  priorityTextHigh: {
    color: colors.destructive.DEFAULT,
  },
  priorityTextMedium: {
    color: colors.status.warning,
  },
  priorityTextLow: {
    color: colors.muted.foreground,
  },
  complaintActions: {
    flexDirection: "row",
    gap: spacing[2],
    padding: spacing[4],
    paddingTop: spacing[3],
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: spacing[3],
    borderRadius: borderRadius.lg,
    gap: spacing[2],
  },
  approveButton: {
    backgroundColor: colors.status.success,
  },
  rejectButton: {
    backgroundColor: colors.destructive.DEFAULT,
  },
  viewButton: {
    backgroundColor: colors.primary.DEFAULT,
  },
  actionButtonText: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.semibold,
    color: "#ffffff",
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing[12],
  },
  emptyIcon: {
    marginBottom: spacing[4],
  },
  emptyText: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
    marginBottom: spacing[2],
  },
  emptySubtext: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "#00000080",
    justifyContent: "center",
    alignItems: "center",
    padding: spacing[4],
  },
  modalContent: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: colors.card,
    borderRadius: borderRadius["2xl"],
    padding: spacing[6],
    gap: spacing[4],
  },
  modalHeader: {
    alignItems: "center",
    gap: spacing[2],
  },
  modalTitle: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    color: colors.foreground,
    textAlign: "center",
  },
  modalMessage: {
    fontSize: fontSize.base,
    color: colors.muted.foreground,
    textAlign: "center",
    lineHeight: 22,
  },
  modalButtons: {
    flexDirection: "row",
    gap: spacing[3],
  },
  modalButton: {
    flex: 1,
    padding: spacing[3],
    borderRadius: borderRadius.lg,
    alignItems: "center",
  },
  modalButtonCancel: {
    backgroundColor: colors.muted.DEFAULT,
  },
  modalButtonConfirm: {
    backgroundColor: colors.primary.DEFAULT,
  },
  modalButtonText: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
  },
  modalButtonTextCancel: {
    color: colors.foreground,
  },
  modalButtonTextConfirm: {
    color: "#ffffff",
  },
});
