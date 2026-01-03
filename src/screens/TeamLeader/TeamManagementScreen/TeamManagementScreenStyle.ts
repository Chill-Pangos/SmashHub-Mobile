import { StyleSheet } from "react-native";
import {
  colors,
  spacing,
  borderRadius,
  fontSize,
  fontWeight,
} from "../../../theme";

const styles = StyleSheet.create({
  // Header
  headerGradient: {
    paddingTop: spacing[6],
    paddingHorizontal: spacing[4],
    paddingBottom: spacing[6],
    borderBottomLeftRadius: borderRadius["2xl"],
    borderBottomRightRadius: borderRadius["2xl"],
  },
  headerContent: {
    marginBottom: spacing[6],
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

  // Team Detail View
  teamDetailHeader: {
    paddingTop: spacing[6],
    paddingHorizontal: spacing[4],
    paddingBottom: spacing[6],
    borderBottomLeftRadius: borderRadius["2xl"],
    borderBottomRightRadius: borderRadius["2xl"],
  },
  backButton: {
    marginBottom: spacing[4],
  },
  backText: {
    fontSize: fontSize.base,
    color: "#ffffff",
    fontWeight: fontWeight.medium,
  },
  teamDetailTitle: {
    fontSize: fontSize["3xl"],
    fontWeight: fontWeight.bold,
    color: "#ffffff",
    marginBottom: spacing[1],
  },
  teamDetailSubtitle: {
    fontSize: fontSize.base,
    color: "#ffffffE6",
  },

  // Team Info
  teamInfoCard: {
    backgroundColor: "#ffffff",
    marginHorizontal: spacing[4],
    marginTop: spacing[4],
    padding: spacing[4],
    borderRadius: borderRadius.xl,
  },
  sectionTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
    marginBottom: spacing[3],
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: spacing[2],
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  infoLabel: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
  },
  infoValue: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    color: colors.foreground,
  },

  // Roster
  rosterSection: {
    marginHorizontal: spacing[4],
    marginTop: spacing[4],
  },
  rosterHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing[3],
  },
  athleteCard: {
    marginBottom: spacing[3],
  },

  // Stats
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: spacing[3],
  },
  statCard: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: borderRadius.xl,
    padding: spacing[3],
    alignItems: "center",
  },
  statValue: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    color: colors["gray-900"],
    marginBottom: spacing[1],
  },
  statLabel: {
    fontSize: fontSize.xs,
    color: colors["gray-900"],
    textAlign: "center",
  },

  // Tabs and Search
  tabBar: {
    marginTop: spacing[4],
    marginHorizontal: spacing[4],
  },
  searchContainer: {
    paddingHorizontal: spacing[4],
    paddingTop: spacing[4],
  },

  // Teams List
  teamsContainer: {
    paddingHorizontal: spacing[4],
    paddingTop: spacing[4],
    paddingBottom: spacing[20],
  },
  teamCard: {
    backgroundColor: "#ffffff",
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: colors.border,
  },
  teamCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing[2],
  },
  teamName: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
    marginBottom: spacing[1],
  },
  teamType: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
  },
  teamCardBody: {
    flexDirection: "row",
    gap: spacing[4],
  },
  teamInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[2],
  },
  teamInfoText: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
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

  // Detail Header Actions
  detailHeaderTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing[4],
  },
  detailActions: {
    flexDirection: "row",
    gap: spacing[2],
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    backgroundColor: "#ffffff20",
    justifyContent: "center",
    alignItems: "center",
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: spacing[4],
  },
  modalContent: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: "#ffffff",
    borderRadius: borderRadius["2xl"],
    padding: spacing[6],
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing[6],
  },
  modalTitle: {
    fontSize: fontSize["2xl"],
    fontWeight: fontWeight.bold,
    color: colors.foreground,
  },

  // Form Styles
  formGroup: {
    marginBottom: spacing[4],
  },
  formLabel: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
    marginBottom: spacing[2],
  },
  formInput: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.lg,
    padding: spacing[3],
    fontSize: fontSize.base,
    color: colors.foreground,
  },

  // Type Buttons
  typeButtons: {
    flexDirection: "row",
    gap: spacing[2],
  },
  typeButton: {
    flex: 1,
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  typeButtonActive: {
    backgroundColor: colors.primary.DEFAULT,
    borderColor: colors.primary.DEFAULT,
  },
  typeButtonText: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    color: colors.muted.foreground,
  },
  typeButtonTextActive: {
    color: "#ffffff",
  },

  // Modal Actions
  modalActions: {
    flexDirection: "row",
    gap: spacing[3],
    marginTop: spacing[6],
  },
  modalButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
    borderRadius: borderRadius.lg,
    gap: spacing[2],
  },
  modalButtonPrimary: {
    backgroundColor: colors.primary.DEFAULT,
  },
  modalButtonSecondary: {
    backgroundColor: colors.muted.DEFAULT,
  },
  modalButtonDanger: {
    backgroundColor: colors.destructive.DEFAULT,
  },
  modalButtonTextPrimary: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    color: "#ffffff",
  },
  modalButtonTextSecondary: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
  },

  // Delete Modal
  deleteMessage: {
    fontSize: fontSize.base,
    color: colors.foreground,
    marginBottom: spacing[3],
    lineHeight: 24,
  },
  deleteTeamName: {
    fontWeight: fontWeight.bold,
    color: colors.destructive.DEFAULT,
  },
  deleteWarning: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
    fontStyle: "italic",
  },

  // Add Members Modal
  modalContentLarge: {
    maxHeight: "90%",
  },
  modalScroll: {
    maxHeight: 500,
  },
  coachList: {
    gap: spacing[2],
  },
  athleteList: {
    gap: spacing[2],
  },
  memberItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: spacing[3],
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.lg,
  },
  memberItemSelected: {
    backgroundColor: colors.primary.DEFAULT + "10",
    borderColor: colors.primary.DEFAULT,
  },
  memberItemDisabled: {
    opacity: 0.5,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.medium,
    color: colors.foreground,
    marginBottom: spacing[1],
  },
  memberNameDisabled: {
    color: colors.muted.foreground,
  },
  memberOrg: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
  },
  memberStatus: {
    fontSize: fontSize.xs,
    color: colors.status.info,
    fontStyle: "italic",
    marginTop: spacing[1],
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: borderRadius.sm,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxSelected: {
    backgroundColor: colors.primary.DEFAULT,
    borderColor: colors.primary.DEFAULT,
  },
});

export default styles;
