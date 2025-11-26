import { StyleSheet } from "react-native";
import { colors } from "../../constants/design-tokens";

export const inputStyles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },

  label: {
    color: colors.foreground,
    fontWeight: "500",
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.card,
  },
  input_default: {
    borderColor: colors.border,
  },
  input_error: {
    borderColor: colors.destructive.DEFAULT,
  },

  errorText: {
    color: colors.destructive.DEFAULT,
    fontSize: 12,
    marginTop: 4,
  },
});
