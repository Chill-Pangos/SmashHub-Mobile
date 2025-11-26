import { StyleSheet } from "react-native";
import { colors } from "../../../constants/design-tokens";

export const stateComponentsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  header: {
    backgroundColor: colors.primary[500],
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 32,
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 8,
  },
  headerSubtitle: {
    color: colors.primary[100],
    fontSize: 14,
  },
  content: {
    padding: 24,
  },
  section: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 16,
  },
  subsectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },
  demoRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 16,
    backgroundColor: "#f9fafb",
    borderRadius: 8,
  },
  demoColumn: {
    alignItems: "center",
  },
  demoLabel: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 8,
  },
  spacer: {
    height: 16,
  },
  largeSpacer: {
    height: 32,
  },
  demoContainer: {
    height: 128,
    backgroundColor: "#f3f4f6",
    borderRadius: 8,
    position: "relative",
  },
  border: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 16,
  },
});
