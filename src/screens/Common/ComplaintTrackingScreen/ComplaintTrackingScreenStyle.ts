import { StyleSheet } from "react-native";
import { colors } from "../../../constants/design-tokens";

export const complaintTrackingScreenStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
  },
  filterContainer: {
    backgroundColor: colors.background,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  listContainer: {
    padding: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  modalTitle: {
    fontSize: 18,
    color: colors.foreground,
    fontWeight: "600",
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.secondary.DEFAULT,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBody: {
    padding: 24,
  },
  detailSection: {
    marginBottom: 24,
  },
  detailLabel: {
    fontSize: 13,
    color: colors.muted.foreground,
    fontWeight: "600",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  detailValue: {
    fontSize: 16,
    color: colors.foreground,
  },
  detailDescription: {
    fontSize: 14,
    color: colors.muted.foreground,
    lineHeight: 22,
  },
  evidenceContainer: {
    gap: 8,
  },
  evidenceItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 12,
    backgroundColor: colors.secondary.DEFAULT,
    borderRadius: 8,
  },
  evidenceText: {
    fontSize: 13,
    color: colors.muted.foreground,
  },
  resolutionSection: {
    backgroundColor: colors.secondary.DEFAULT,
    padding: 16,
    borderRadius: 12,
  },
  resolutionText: {
    fontSize: 14,
    color: colors.foreground,
    lineHeight: 22,
    marginBottom: 12,
  },
  resolvedDate: {
    fontSize: 11,
    color: colors.muted.foreground,
    fontStyle: "italic",
  },
});
