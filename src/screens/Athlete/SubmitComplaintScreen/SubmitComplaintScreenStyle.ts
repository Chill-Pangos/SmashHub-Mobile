import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";
import { spacing, borderRadius } from "../../../theme/spacing";
import { fontSize, fontWeight } from "../../../theme/typography";

export const submitComplaintScreenStyles = StyleSheet.create({
  // Header
  header: {
    paddingHorizontal: spacing[4],
    paddingTop: spacing[4],
    paddingBottom: spacing[6],
    borderBottomLeftRadius: borderRadius["2xl"],
    borderBottomRightRadius: borderRadius["2xl"],
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing[3],
  },
  headerTitle: {
    fontSize: fontSize["3xl"],
    fontWeight: fontWeight.bold,
    color: "#ffffff",
    marginBottom: spacing[1],
  },
  headerSubtitle: {
    fontSize: fontSize.base,
    color: "#ffffff",
    opacity: 0.9,
    marginBottom: spacing[4],
  },

  // Progress Steps
  stepsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: spacing[2],
  },
  stepDot: {
    width: 12,
    height: 12,
    borderRadius: borderRadius.full,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  stepDotActive: {
    backgroundColor: "#ffffff",
    width: 32,
  },
  stepDotCompleted: {
    backgroundColor: "#ffffff",
  },

  // Content
  contentContainer: {
    padding: spacing[4],
  },
  stepTitle: {
    fontSize: fontSize["2xl"],
    fontWeight: fontWeight.bold,
    color: colors.foreground,
    marginBottom: spacing[2],
  },
  stepDescription: {
    fontSize: fontSize.base,
    color: colors.muted.foreground,
    marginBottom: spacing[4],
  },

  // Match Selection
  matchCard: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    marginBottom: spacing[3],
    borderWidth: 2,
    borderColor: colors.border,
    position: "relative",
  },
  matchCardSelected: {
    borderColor: colors.primary.DEFAULT,
    backgroundColor: colors.primary[50],
  },
  checkmark: {
    position: "absolute",
    top: spacing[3],
    right: spacing[3],
    width: 24,
    height: 24,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary.DEFAULT,
    justifyContent: "center",
    alignItems: "center",
  },
  matchTournament: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
    marginBottom: spacing[2],
  },
  matchDetails: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
    marginBottom: spacing[1],
  },
  matchCourt: {
    fontSize: fontSize.sm,
    color: colors.primary.DEFAULT,
  },

  // Topic Selection
  topicCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    marginBottom: spacing[3],
    borderWidth: 2,
    borderColor: colors.border,
    gap: spacing[3],
    position: "relative",
  },
  topicCardSelected: {
    borderColor: colors.primary.DEFAULT,
    backgroundColor: colors.primary[50],
  },
  topicIcon: {
    fontSize: 32,
  },
  topicContent: {
    flex: 1,
  },
  topicTitle: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
    marginBottom: spacing[1],
  },
  topicTitleSelected: {
    color: colors.primary.DEFAULT,
  },
  topicDescription: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
  },

  // Form Fields
  fieldContainer: {
    marginBottom: spacing[4],
  },
  fieldLabel: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    color: colors.foreground,
    marginBottom: spacing[2],
  },
  required: {
    color: colors.destructive.DEFAULT,
  },

  // Evidence Section
  evidenceSection: {
    marginTop: spacing[4],
  },
  evidenceTitle: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
    marginBottom: spacing[1],
  },
  evidenceDescription: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
    marginBottom: spacing[3],
  },
  addEvidenceButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.card,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: colors.primary.DEFAULT,
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    gap: spacing[2],
  },
  addEvidenceText: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.medium,
    color: colors.primary.DEFAULT,
  },
  evidenceList: {
    marginTop: spacing[3],
    gap: spacing[2],
  },
  evidenceItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing[3],
    gap: spacing[3],
  },
  evidenceItemText: {
    flex: 1,
    fontSize: fontSize.sm,
    color: colors.foreground,
  },
  evidenceRemove: {
    fontSize: fontSize.sm,
    color: colors.destructive.DEFAULT,
    fontWeight: fontWeight.medium,
  },

  // Preview
  previewCard: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    marginBottom: spacing[4],
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  previewSection: {
    marginBottom: spacing[4],
    paddingBottom: spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  previewLabel: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
    marginBottom: spacing[2],
  },
  previewValue: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.medium,
    color: colors.foreground,
    marginBottom: spacing[1],
  },
  previewSubValue: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
  },

  // Warning Box
  warningBox: {
    flexDirection: "row",
    backgroundColor: colors.status.warning + "15",
    borderRadius: borderRadius.lg,
    padding: spacing[3],
    gap: spacing[3],
    borderLeftWidth: 4,
    borderLeftColor: colors.status.warning,
  },
  warningText: {
    flex: 1,
    fontSize: fontSize.sm,
    color: colors.foreground,
    lineHeight: 20,
  },

  // Action Buttons
  actionContainer: {
    padding: spacing[4],
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  nextButton: {
    borderRadius: borderRadius.lg,
    overflow: "hidden",
  },
  nextButtonDisabled: {
    opacity: 0.5,
  },
  nextButtonGradient: {
    paddingVertical: spacing[4],
    alignItems: "center",
  },
  nextButtonText: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    color: "#ffffff",
  },
  submitButton: {
    borderRadius: borderRadius.lg,
    overflow: "hidden",
  },
  submitButtonGradient: {
    flexDirection: "row",
    paddingVertical: spacing[4],
    alignItems: "center",
    justifyContent: "center",
    gap: spacing[2],
  },
  submitButtonText: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    color: "#ffffff",
  },
});
