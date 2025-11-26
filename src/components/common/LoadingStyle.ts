import { StyleSheet } from "react-native";
import { colors } from "../../constants/design-tokens";

export const loadingStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.card,
  },

  message: {
    color: colors.mutedForeground,
    marginTop: 16,
    fontSize: 14,
  },
});
