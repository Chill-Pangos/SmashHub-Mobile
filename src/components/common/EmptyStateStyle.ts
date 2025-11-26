import { StyleSheet } from "react-native";
import { colors } from "../../constants/design-tokens";

export const emptyStateStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.gray[800],
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    color: colors.gray[600],
    textAlign: "center",
    marginBottom: 24,
  },
});
