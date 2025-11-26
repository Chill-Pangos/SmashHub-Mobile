import { StyleSheet } from "react-native";
import { colors } from "../../constants/design-tokens";

export const skeletonLoaderStyles = StyleSheet.create({
  container: {},

  // Skeleton Item
  skeletonItem: {
    backgroundColor: `${colors.muted}80`, // 50% opacity
    borderRadius: 4,
  },

  // Card Skeleton
  cardContainer: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  cardImage: {
    width: 64,
    height: 64,
    borderRadius: 8,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    width: "75%",
    height: 20,
    marginBottom: 8,
  },
  cardLine: {
    width: "100%",
    height: 16,
    marginBottom: 8,
  },
  cardLineShort: {
    width: "50%",
    height: 16,
  },
  cardTags: {
    flexDirection: "row",
    marginTop: 16,
    gap: 8,
  },
  cardTag: {
    width: 80,
    height: 24,
    borderRadius: 12,
  },
  cardTagWide: {
    width: 96,
    height: 24,
    borderRadius: 12,
  },

  // List Item Skeleton
  listContainer: {
    backgroundColor: colors.card,
    padding: 16,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  listAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  listContent: {
    flex: 1,
  },
  listTitle: {
    width: "66%",
    height: 16,
    marginBottom: 8,
  },
  listSubtitle: {
    width: "50%",
    height: 12,
  },
  listAction: {
    width: 64,
    height: 32,
    borderRadius: 4,
  },

  // Table Row Skeleton
  tableContainer: {
    backgroundColor: colors.card,
    padding: 16,
    marginBottom: 4,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tableCell: {
    height: 16,
  },
  tableCellTiny: {
    width: 32,
    marginRight: 16,
  },
  tableCellMedium: {
    width: 128,
    marginRight: 16,
  },
  tableCellSmall: {
    width: 48,
    marginRight: 16,
  },
  tableCellNormal: {
    width: 64,
  },

  // Profile Skeleton
  profileContainer: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 24,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 24,
  },
  profileAvatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 16,
  },
  profileName: {
    width: 192,
    height: 24,
    marginBottom: 8,
  },
  profileRole: {
    width: 128,
    height: 16,
  },
  profileStats: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
    marginBottom: 24,
  },
  profileStatItem: {
    alignItems: "center",
  },
  profileStatValue: {
    width: 48,
    height: 24,
    marginBottom: 8,
  },
  profileStatLabel: {
    width: 64,
    height: 16,
  },
  profileInfo: {
    gap: 16,
  },
  profileInfoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileInfoIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 12,
  },
  profileInfoContent: {
    flex: 1,
  },
  profileInfoLabel: {
    width: "33%",
    height: 12,
    marginBottom: 8,
  },
  profileInfoValue: {
    width: "66%",
    height: 16,
  },

  // Text Skeleton
  textContainer: {
    marginBottom: 16,
  },
  textLineFull: {
    width: "100%",
    height: 16,
    marginBottom: 8,
  },
  textLineMost: {
    width: "83%",
    height: 16,
    marginBottom: 8,
  },
  textLineShort: {
    width: "80%",
    height: 16,
  },
});
