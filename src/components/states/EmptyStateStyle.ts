import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const emptyStateStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
  },
  iconContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.foreground,
    textAlign: "center",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: colors.muted.foreground,
    textAlign: "center",
    marginBottom: 24,
    maxWidth: 280,
  },
  actionButton: {
    backgroundColor: colors.primary[500],
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  actionButtonText: {
    color: colors.primary.foreground,
    fontWeight: "600",
    fontSize: 14,
  },
});
