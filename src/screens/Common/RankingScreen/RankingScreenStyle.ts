import { StyleSheet } from "react-native";
import { colors } from "../../../constants/design-tokens";
import { colors as themeColors } from "../../../theme/colors";

export const rankingScreenStyles = StyleSheet.create({
  // Header
  header: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
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

  // Tournament Selector
  selector: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  selectorContent: {
    flex: 1,
  },
  selectorLabel: {
    fontSize: 12,
    color: colors.mutedForeground,
    marginBottom: 4,
  },
  selectorValue: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.foreground,
  },

  // Category Tabs
  categoryTabs: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 8,
  },
  categoryTab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: colors.muted.DEFAULT,
    borderWidth: 1,
    borderColor: "transparent",
  },
  categoryTabActive: {
    backgroundColor: themeColors.primary.DEFAULT,
    borderColor: themeColors.primary.DEFAULT,
  },
  categoryTabText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.foreground,
  },
  categoryTabTextActive: {
    color: "#fff",
  },

  // Table Container
  tableContainer: {
    padding: 16,
    paddingBottom: 32,
  },
});
