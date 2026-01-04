import { StyleSheet } from "react-native";
import { colors } from "../../../constants/design-tokens";
import { colors as themeColors } from "../../../theme/colors";

export const registerScreenStyles = StyleSheet.create({
  // Scroll Content
  scrollContent: {
    flexGrow: 1,
  },

  // Header
  header: {
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 24,
    alignItems: "center",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  backIcon: {
    position: "absolute",
    top: 40,
    left: 24,
    zIndex: 10,
    padding: 8,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 16,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.9)",
    marginTop: 8,
  },

  // Step Indicator
  stepIndicator: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },
  stepDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  stepDotActive: {
    backgroundColor: "#fff",
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  stepLine: {
    width: 40,
    height: 2,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    marginHorizontal: 8,
  },

  // Content
  content: {
    flex: 1,
    padding: 24,
  },
  stepTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.foreground,
    marginBottom: 8,
  },
  stepSubtitle: {
    fontSize: 14,
    color: colors.mutedForeground,
    marginBottom: 24,
  },

  // Step 1: Role Selection
  rolesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  roleCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.border,
    position: "relative",
  },
  roleCardSelected: {
    borderColor: themeColors.primary.DEFAULT,
    backgroundColor: themeColors.primary[50],
  },
  roleCheckmark: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: themeColors.primary.DEFAULT,
    justifyContent: "center",
    alignItems: "center",
  },
  roleIconContainer: {
    marginBottom: 12,
  },
  roleLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.foreground,
    textAlign: "center",
    marginBottom: 4,
  },
  roleLabelSelected: {
    color: themeColors.primary.DEFAULT,
  },
  roleDescription: {
    fontSize: 12,
    color: colors.mutedForeground,
    textAlign: "center",
  },
  roleDescriptionSelected: {
    color: themeColors.primary[700],
  },

  // Next Button
  nextButton: {
    borderRadius: 12,
    overflow: "hidden",
    marginTop: 16,
  },
  nextButtonDisabled: {
    opacity: 0.5,
  },
  nextButtonGradient: {
    paddingVertical: 16,
    alignItems: "center",
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },

  // Step 2: Personal Info Form
  form: {
    gap: 16,
  },

  // Password Strength Indicator
  passwordStrength: {
    marginTop: -8,
    marginBottom: 8,
  },
  strengthBars: {
    flexDirection: "row",
    gap: 4,
    marginBottom: 4,
  },
  strengthBar: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.border,
  },
  strengthBarWeak: {
    backgroundColor: "#ef4444",
  },
  strengthBarMedium: {
    backgroundColor: "#f59e0b",
  },
  strengthBarStrong: {
    backgroundColor: "#10b981",
  },
  strengthText: {
    fontSize: 12,
    color: colors.mutedForeground,
  },

  // Terms Checkbox
  termsCheckbox: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.border,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: themeColors.primary.DEFAULT,
    borderColor: themeColors.primary.DEFAULT,
  },
  termsText: {
    flex: 1,
    fontSize: 14,
    color: colors.foreground,
    lineHeight: 20,
  },
  termsLink: {
    color: themeColors.primary.DEFAULT,
    fontWeight: "600",
  },

  // Button Group
  buttonGroup: {
    flexDirection: "row",
    gap: 12,
    marginTop: 24,
  },
  backButton: {
    flex: 1,
    paddingVertical: 16,
    backgroundColor: colors.muted.DEFAULT,
    borderRadius: 12,
    alignItems: "center",
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.foreground,
  },
  registerButton: {
    flex: 2,
    borderRadius: 12,
    overflow: "hidden",
  },
  registerButtonDisabled: {
    opacity: 0.5,
  },
  registerButtonGradient: {
    paddingVertical: 16,
    alignItems: "center",
  },
  registerButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },

  // Footer
  footer: {
    paddingVertical: 24,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: colors.mutedForeground,
  },
  footerLink: {
    color: themeColors.primary.DEFAULT,
    fontWeight: "600",
  },
});
