import { StyleSheet } from "react-native";
import { colors } from "../../constants/design-tokens";

export const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  backButton: {
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.gray[900],
  },
  rightContainer: {
    // Container for right action
  },
});
