import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const screenHeaderStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  defaultContainer: {
    backgroundColor: colors.card,
  },
  stickyContainer: {
    backgroundColor: colors.card,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  transparentContainer: {
    backgroundColor: "transparent",
  },
  transparentOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  transparentContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    zIndex: 10,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  backButton: {
    marginRight: 8,
    padding: 8,
    marginLeft: -8,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 12,
    marginTop: 2,
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
  },
  actionButton: {
    padding: 8,
  },
});
