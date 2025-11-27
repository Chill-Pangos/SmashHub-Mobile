import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../../constants/design-tokens';
const { width } = Dimensions.get("window");
import { colors as themeColors } from "../../../theme/colors";
import { globalStyles } from "../../../styles/global.styles";
export const tournamentDetailScreenStyles = StyleSheet.create({
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
    fontWeight: "600",
    color: "#fff",
    flex: 1,
    textAlign: "center",
    marginHorizontal: 12,
  },
  banner: {
    width: width,
    height: 200,
    backgroundColor: themeColors["gray-100"],
  },
  bannerPlaceholder: {
    width: width,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  statusContainer: {
    position: "absolute",
    top: 170,
    right: 16,
  },
  tabsContainer: {
    backgroundColor: themeColors.background,
    borderBottomWidth: 1,
    borderBottomColor: themeColors.border,
  },
  tabsContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  tab: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: themeColors.primary[500],
  },
  tabText: {
    fontSize: 14,
    color: themeColors.muted.foreground,
    fontWeight: "500",
  },
  activeTabText: {
    color: themeColors.primary[500],
    fontWeight: "600",
  },
  tabContent: {
    padding: 16,
  },
  infoCard: {
    marginBottom: 16,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: themeColors.foreground,
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: themeColors.muted.foreground,
    lineHeight: 22,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 12,
  },
  infoLabel: {
    fontSize: 14,
    color: themeColors.muted.foreground,
    fontWeight: "500",
  },
  infoValue: {
    fontSize: 14,
    color: themeColors.foreground,
    flex: 1,
  },
  categoriesCard: {
    marginBottom: 16,
    padding: 16,
  },
  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  categoryChip: {
    backgroundColor: themeColors.primary[100],
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
  },
  categoryText: {
    fontSize: 13,
    color: themeColors.primary[600],
    fontWeight: "500",
  },
  registrationCard: {
    padding: 16,
    alignItems: "center",
  },
  registrationTitle: {
    fontSize: 16,
    color: themeColors.foreground,
    fontWeight: "600",
    marginBottom: 16,
  },
  registerButton: {
    backgroundColor: themeColors.primary[500],
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    ...globalStyles.shadowMd,
  },
  registerButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  rulesCard: {
    padding: 16,
  },
  ruleItem: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
  },
  ruleBullet: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: themeColors.primary[500],
    justifyContent: "center",
    alignItems: "center",
  },
  ruleBulletText: {
    fontSize: 11,
    color: "#fff",
    fontWeight: "700",
  },
  ruleText: {
    fontSize: 14,
    color: themeColors.muted.foreground,
    flex: 1,
    lineHeight: 22,
  },
});
