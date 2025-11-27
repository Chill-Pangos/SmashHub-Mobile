import { StyleSheet } from "react-native";
import { colors, shadows } from "../../constants/design-tokens";

export const matchCardStyles = StyleSheet.create({
  // Compact variant
  compact_container: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 12,
    ...shadows.sm,
  },
  compact_tournamentText: {
    fontSize: 12,
    color: colors.muted.foreground,
    marginBottom: 8,
  },
  compact_playersRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  compact_playersContainer: {
    flex: 1,
  },
  compact_playerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  compact_playerRowLast: {
    marginBottom: 0,
  },
  compact_playerText: {
    fontSize: 14,
  },
  compact_playerText_winner: {
    fontWeight: "bold",
    color: colors.foreground,
  },
  compact_playerText_loser: {
    color: colors.muted.foreground,
  },
  compact_playerText_highlight: {
    color: colors.primary[500],
  },
  compact_scoreContainer: {
    alignItems: "flex-end",
    marginLeft: 8,
  },
  compact_scoresColumn: {
    alignItems: "flex-end",
  },
  compact_scoreText: {
    fontSize: 16,
    color: colors.foreground,
  },
  compact_scoreText_bold: {
    fontWeight: "bold",
  },
  compact_liveBadge: {
    backgroundColor: colors.destructive.DEFAULT,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 4,
  },
  compact_liveBadgeText: {
    color: colors.destructiveForeground,
    fontSize: 12,
    fontWeight: "bold",
  },
  compact_timeText: {
    fontSize: 12,
    color: colors.muted.foreground,
  },

  // Live variant
  live_animatedContainer: {
    // Animated wrapper - no styles needed
  },
  live_container: {
    backgroundColor: colors.card,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.destructive.DEFAULT,
    overflow: "hidden",
  },
  live_header: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  live_headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  live_headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  live_pulseDot: {
    width: 8,
    height: 8,
    backgroundColor: colors.destructive.foreground,
    borderRadius: 4,
    marginRight: 8,
  },
  live_headerText: {
    color: colors.destructiveForeground,
    fontWeight: "bold",
    fontSize: 14,
  },
  live_courtText: {
    color: colors.destructiveForeground,
    fontSize: 14,
  },
  live_content: {
    padding: 16,
  },
  live_tournamentText: {
    fontSize: 14,
    color: colors.gray[600],
    marginBottom: 12,
  },
  live_playersContainer: {
    gap: 12,
  },
  live_playerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  live_playerLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  live_avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  } as any,
  live_playerName: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  live_playerName_winner: {
    color: colors.status.success,
  },
  live_playerName_normal: {
    color: colors.gray[900],
  },
  live_score: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.gray[900],
    marginLeft: 8,
  },
  live_detailedScore: {
    marginTop: 16,
    padding: 12,
    backgroundColor: colors.gray[50],
    borderRadius: 8,
  },
  live_setsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  live_setsText: {
    fontSize: 12,
    color: colors.gray[500],
    fontWeight: "500",
  },
  live_setsRow: {
    flexDirection: "row",
    gap: 8,
  },
  live_setContainer: {
    flex: 1,
    alignItems: "center",
  },
  live_setLabel: {
    fontSize: 12,
    color: colors.gray[500],
    marginBottom: 4,
  },
  live_setScore: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.gray[900],
  },
  live_refereeRow: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  live_refereeText: {
    fontSize: 12,
    color: colors.gray[500],
    marginLeft: 4,
  },

  // Full variant
  full_container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.gray[200],
    overflow: "hidden",
  },
  full_header: {
    backgroundColor: colors.gray[50],
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  full_headerLeft: {
    flex: 1,
  },
  full_tournamentText: {
    fontSize: 12,
    color: colors.gray[600],
    marginBottom: 4,
  },
  full_roundText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.gray[900],
  },
  full_content: {
    padding: 16,
  },
  full_playerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  full_playerContainerLast: {
    marginTop: 12,
  },
  full_playerLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  full_avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  } as any,
  full_avatarPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.gray[200],
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  full_playerName: {
    fontSize: 16,
    flex: 1,
  },
  full_playerName_winner: {
    fontWeight: "bold",
    color: colors.gray[900],
  },
  full_playerName_normal: {
    color: colors.gray[700],
  },
  full_playerName_highlight: {
    color: colors.primary[600],
  },
  full_playerScore: {
    fontSize: 24,
    marginLeft: 12,
  },
  full_playerScore_winner: {
    fontWeight: "bold",
    color: colors.gray[900],
  },
  full_playerScore_normal: {
    color: colors.gray[600],
  },
  full_divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  full_dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.gray[200],
  },
  full_vsText: {
    fontSize: 12,
    color: colors.gray[400],
    marginHorizontal: 8,
    fontWeight: "500",
  },
  full_detailedScore: {
    marginTop: 16,
    padding: 12,
    backgroundColor: colors.gray[50],
    borderRadius: 8,
  },
  full_setsTitle: {
    fontSize: 12,
    color: colors.gray[500],
    fontWeight: "500",
    marginBottom: 8,
  },
  full_setsRow: {
    flexDirection: "row",
    gap: 8,
  },
  full_setContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 8,
    borderRadius: 4,
  },
  full_setLabel: {
    fontSize: 12,
    color: colors.gray[500],
    marginBottom: 4,
  },
  full_setScore: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.gray[900],
  },
  full_matchInfo: {
    marginTop: 16,
    gap: 8,
  },
  full_infoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  full_infoText: {
    fontSize: 14,
    color: colors.gray[600],
    marginLeft: 8,
  },
  full_infoRowSplit: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  full_infoLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  full_infoRight: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
});
