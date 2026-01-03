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
  stepIndicator: {
    flexDirection: "row",
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[4],
    backgroundColor: colors.card,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  stepItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[2],
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.muted.DEFAULT,
    alignItems: "center",
    justifyContent: "center",
  },
  stepNumberActive: {
    backgroundColor: colors.primary.DEFAULT,
  },
  stepNumberText: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.semibold,
    color: colors.muted.foreground,
  },
  stepNumberTextActive: {
    color: "#ffffff",
  },
  stepLabel: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
    flex: 1,
  },
  stepLabelActive: {
    color: colors.foreground,
    fontWeight: fontWeight.semibold,
  },
  contentContainer: {
    flex: 1,
    padding: spacing[4],
  },
  searchContainer: {
    marginBottom: spacing[4],
  },
  filterContainer: {
    flexDirection: "row",
    gap: spacing[2],
    marginBottom: spacing[4],
  },
  filterButton: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.full,
    backgroundColor: colors.muted.DEFAULT,
    borderWidth: 1,
    borderColor: colors.border,
  },
  filterButtonActive: {
    backgroundColor: colors.primary.DEFAULT,
    borderColor: colors.primary.DEFAULT,
  },
  filterButtonText: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    color: colors.muted.foreground,
  },
  filterButtonTextActive: {
    color: "#ffffff",
  },
  userList: {
    gap: spacing[3],
  },
  userCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing[4],
    backgroundColor: colors.card,
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing[3],
  },
  userCardSelected: {
    borderColor: colors.primary.DEFAULT,
    backgroundColor: colors.primary.DEFAULT + "10",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: borderRadius.md,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxSelected: {
    backgroundColor: colors.primary.DEFAULT,
    borderColor: colors.primary.DEFAULT,
  },
  userInfo: {
    flex: 1,
    gap: spacing[1],
  },
  userName: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
  },
  userMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[3],
  },
  userMetaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[1],
  },
  userMetaText: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
  },
  roleBadge: {
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.md,
    backgroundColor: colors.muted.DEFAULT,
  },
  roleBadgeText: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.medium,
    color: colors.muted.foreground,
  },
  summaryContainer: {
    gap: spacing[4],
  },
  summaryCard: {
    padding: spacing[4],
    backgroundColor: colors.card,
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing[3],
  },
  summaryHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  summaryTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
  },
  summaryCount: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
  },
  selectedList: {
    gap: spacing[2],
  },
  selectedItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing[3],
    backgroundColor: colors.background,
    borderRadius: borderRadius.lg,
  },
  selectedItemInfo: {
    flex: 1,
  },
  selectedItemName: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.medium,
    color: colors.foreground,
  },
  selectedItemRole: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
    marginTop: spacing[1],
  },
  removeButton: {
    padding: spacing[2],
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
  buttonContainer: {
    padding: spacing[4],
    paddingBottom: spacing[6],
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    gap: spacing[3],
  },
  buttonRow: {
    flexDirection: "row",
    gap: spacing[3],
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: spacing[4],
    borderRadius: borderRadius.xl,
    gap: spacing[2],
  },
  buttonPrimary: {
    backgroundColor: colors.primary.DEFAULT,
  },
  buttonSecondary: {
    backgroundColor: colors.muted.DEFAULT,
  },
  buttonText: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
  },
  buttonTextPrimary: {
    color: "#ffffff",
  },
  buttonTextSecondary: {
    color: colors.foreground,
  },
  inviteContainer: {
    padding: spacing[4],
    backgroundColor: colors.card,
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing[3],
    marginTop: spacing[4],
  },
  inviteHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[2],
  },
  inviteTitle: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
  },
  inviteInput: {
    padding: spacing[3],
    backgroundColor: colors.background,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    fontSize: fontSize.base,
    color: colors.foreground,
  },
});
