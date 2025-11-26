import { StyleSheet } from "react-native";
import { colors } from "../../constants/design-tokens";

export const textAreaStyles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },

  // Label
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.foreground,
  },
  required: {
    color: colors.destructive.DEFAULT,
    marginLeft: 4,
  },

  // Input Container
  inputContainer: {
    borderWidth: 2,
    borderRadius: 12,
    backgroundColor: colors.card,
  },
  inputContainer_error: {
    borderColor: colors.destructive.DEFAULT,
  },
  inputContainer_focused: {
    borderColor: colors.primary[500],
  },
  inputContainer_default: {
    borderColor: colors.border,
  },
  inputContainer_disabled: {
    opacity: 0.5,
  },

  // TextInput
  input: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.foreground,
    textAlignVertical: "top",
  },

  // Bottom Row
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 4,
  },
  messageContainer: {
    flex: 1,
  },
  errorText: {
    fontSize: 12,
    color: colors.destructive.DEFAULT,
    marginLeft: 4,
  },
  helperText: {
    fontSize: 12,
    color: colors.muted.foreground,
    marginLeft: 4,
  },

  // Character Counter
  counter: {
    fontSize: 12,
    marginLeft: 8,
    marginRight: 4,
  },
  counter_default: {
    color: colors.muted.foreground,
  },
  counter_warning: {
    color: colors.statusWarning,
  },
  counter_error: {
    color: colors.destructive.DEFAULT,
  },
});
