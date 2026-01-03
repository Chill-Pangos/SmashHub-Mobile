import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";
import { spacing, borderRadius } from "../../../theme/spacing";
import { fontSize, fontWeight } from "../../../theme/typography";

export const favoriteMatchesScreenStyles = StyleSheet.create({
  // Header
  header: {
    paddingHorizontal: spacing[4],
    paddingTop: spacing[6],
    paddingBottom: spacing[6],
    borderBottomLeftRadius: borderRadius["2xl"],
    borderBottomRightRadius: borderRadius["2xl"],
  },
  headerContent: {
    gap: spacing[2],
  },
  headerTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[3],
  },
  headerTitle: {
    fontSize: fontSize["3xl"],
    fontWeight: fontWeight.bold,
    color: "#ffffff",
  },
  headerSubtitle: {
    fontSize: fontSize.sm,
    color: "rgba(255, 255, 255, 0.9)",
  },

  // Selection Actions
  selectionActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing[3],
    paddingTop: spacing[3],
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.2)",
  },
  selectionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[2],
    paddingVertical: spacing[2],
  },
  selectionButtonText: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    color: "#ffffff",
  },
  cancelButton: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
  },
  cancelButtonText: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.semibold,
    color: "#ffffff",
  },

  // Search
  searchContainer: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    backgroundColor: colors.card,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  // Tabs
  tabsContainer: {
    backgroundColor: colors.card,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  // Selection Info
  selectionInfo: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2] + spacing[1],
    backgroundColor: colors.primary.DEFAULT + "10",
    borderBottomWidth: 1,
    borderBottomColor: colors.primary.DEFAULT + "20",
  },
  selectionInfoText: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.semibold,
    color: colors.primary.DEFAULT,
    textAlign: "center",
  },

  // Content
  content: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContainer: {
    paddingBottom: spacing[8] + spacing[4],
  },
});
