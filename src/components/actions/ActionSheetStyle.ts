import { StyleSheet } from "react-native";
import { colors } from "../../constants/design-tokens";

export const actionSheetStyles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  headerContent: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.gray[900],
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: colors.gray[600],
  },
  closeButton: {
    marginLeft: 8,
    padding: 4,
  },
  actionsContainer: {
    paddingVertical: 8,
  },
  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  actionItem_withBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[100],
  },
  actionItem_disabled: {
    opacity: 0.5,
  },
  actionIcon: {
    marginRight: 12,
  },
  actionLabel: {
    fontSize: 16,
    flex: 1,
  },
  actionLabel_normal: {
    color: colors.gray[900],
  },
  actionLabel_destructive: {
    color: colors.error[600],
  },
  actionLabel_disabled: {
    color: colors.gray[400],
  },
  cancelSection: {
    borderTopWidth: 8,
    borderTopColor: colors.gray[100],
  },
  cancelButton: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  cancelText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
    color: colors.gray[700],
  },
  safeArea: {
    paddingBottom: 20,
  },
});
