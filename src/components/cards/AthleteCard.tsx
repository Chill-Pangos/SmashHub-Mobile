import React from "react";
import { View, Text, TouchableOpacity, Image, ViewStyle } from "react-native";
import {
  Trophy,
  TrendingUp,
  MoreVertical,
  User as UserIcon,
} from "lucide-react-native";
import { User } from "../../types";
import {
  formatNumber,
  formatPercentage,
  getInitials,
} from "../../utils/format";
import { colors, iconSizes } from "../../constants/design-tokens";
import { athleteCardStyles } from "./AthleteCardStyle";

/**
 * Athlete Stats for card display
 */
export interface AthleteStats {
  /** Current ranking position */
  ranking?: number;
  /** Win/loss record */
  wins?: number;
  losses?: number;
  /** Win rate percentage */
  winRate?: number;
  /** Total points */
  points?: number;
  /** Matches played */
  matchesPlayed?: number;
  /** Ranking trend (up/down/same) */
  trend?: "up" | "down" | "same";
  /** Organization/team */
  organization?: string;
}

/**
 * AthleteCard Props
 */
export interface AthleteCardProps {
  /** Athlete user data */
  athlete: User;
  /** Card variant */
  variant?: "compact" | "full" | "stats";
  /** Callback when card is pressed */
  onPress?: () => void;
  /** Show athlete statistics */
  stats?: AthleteStats;
  /** Show quick actions menu */
  showActions?: boolean;
  /** Callback when actions button is pressed */
  onActionsPress?: () => void;
  /** Show online status indicator */
  showOnlineStatus?: boolean;
  /** Custom style */
  style?: ViewStyle;
}

/**
 * AthleteCard Component
 *
 * Displays athlete information with avatar, name, and optional stats.
 * Used in 6+ screens: AthleteDirectory, MyAthletes, Teams, etc.
 *
 * @example
 * ```tsx
 * <AthleteCard
 *   athlete={mockUsers[0]}
 *   variant="stats"
 *   stats={{ ranking: 5, wins: 15, losses: 3, winRate: 83.3 }}
 *   showActions
 *   onActionsPress={() => showActionSheet()}
 *   onPress={() => navigation.navigate('AthleteProfile', { id: athlete.id })}
 * />
 * ```
 */
export const AthleteCard: React.FC<AthleteCardProps> = ({
  athlete,
  variant = "full",
  onPress,
  stats,
  showActions = false,
  onActionsPress,
  showOnlineStatus = false,
  style,
}) => {
  // Calculate win/loss record if stats available
  const winLossRecord =
    stats?.wins !== undefined && stats?.losses !== undefined
      ? `${stats.wins}W - ${stats.losses}L`
      : null;

  // Get trend icon
  const getTrendIcon = () => {
    if (!stats?.trend || stats.trend === "same") return null;
    const isUp = stats.trend === "up";
    return (
      <View
        style={
          isUp
            ? athleteCardStyles.stats_trendBadge_up
            : athleteCardStyles.stats_trendBadge_down
        }
      >
        <TrendingUp
          size={12}
          color={isUp ? colors.success[600] : colors.error[600]}
          style={{
            transform: [{ rotate: isUp ? "0deg" : "180deg" }],
          }}
        />
      </View>
    );
  };

  // Compact variant - minimal info
  if (variant === "compact") {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[athleteCardStyles.compact_container, style]}
        activeOpacity={0.7}
      >
        {/* Avatar */}
        <View style={athleteCardStyles.compact_avatarContainer}>
          {athlete.avatar ? (
            <Image
              source={{ uri: athlete.avatar }}
              style={athleteCardStyles.compact_avatar}
            />
          ) : (
            <View style={athleteCardStyles.compact_avatarPlaceholder}>
              <Text style={athleteCardStyles.compact_initialsText}>
                {getInitials(athlete.name)}
              </Text>
            </View>
          )}
          {/* Online Status */}
          {showOnlineStatus && athlete.isOnline && (
            <View style={athleteCardStyles.compact_onlineIndicator} />
          )}
        </View>

        {/* Info */}
        <View style={athleteCardStyles.compact_info}>
          <Text style={athleteCardStyles.compact_name} numberOfLines={1}>
            {athlete.name}
          </Text>
          <Text
            style={athleteCardStyles.compact_organization}
            numberOfLines={1}
          >
            {athlete.organization || stats?.organization || "Không có đơn vị"}
          </Text>
        </View>

        {/* Ranking Badge (if available) */}
        {stats?.ranking && (
          <View style={athleteCardStyles.compact_rankingBadge}>
            <Trophy size={14} color="#f59e0b" />
            <Text style={athleteCardStyles.compact_rankingText}>
              #{stats.ranking}
            </Text>
          </View>
        )}

        {/* Actions Button */}
        {showActions && onActionsPress && (
          <TouchableOpacity
            onPress={onActionsPress}
            style={athleteCardStyles.compact_actionButton}
            activeOpacity={0.7}
          >
            <MoreVertical size={iconSizes.sm} color={colors.gray[400]} />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  }

  // Stats variant - compact with performance metrics
  if (variant === "stats") {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[athleteCardStyles.stats_container, style]}
        activeOpacity={0.7}
      >
        <View style={athleteCardStyles.stats_topRow}>
          {/* Avatar */}
          <View style={athleteCardStyles.stats_avatarContainer}>
            {athlete.avatar ? (
              <Image
                source={{ uri: athlete.avatar }}
                style={athleteCardStyles.stats_avatar}
              />
            ) : (
              <View style={athleteCardStyles.stats_avatarPlaceholder}>
                <Text style={athleteCardStyles.stats_initialsText}>
                  {getInitials(athlete.name)}
                </Text>
              </View>
            )}
            {showOnlineStatus && athlete.isOnline && (
              <View style={athleteCardStyles.stats_onlineIndicator} />
            )}
          </View>

          {/* Info & Stats */}
          <View style={athleteCardStyles.stats_infoContainer}>
            <View style={athleteCardStyles.stats_headerRow}>
              <View style={athleteCardStyles.stats_nameContainer}>
                <Text style={athleteCardStyles.stats_name} numberOfLines={1}>
                  {athlete.name}
                </Text>
                <Text
                  style={athleteCardStyles.stats_organization}
                  numberOfLines={1}
                >
                  {athlete.organization ||
                    stats?.organization ||
                    "Không có đơn vị"}
                </Text>
              </View>

              {showActions && onActionsPress && (
                <TouchableOpacity
                  onPress={onActionsPress}
                  style={athleteCardStyles.stats_actionButton}
                  activeOpacity={0.7}
                >
                  <MoreVertical size={iconSizes.sm} color={colors.gray[400]} />
                </TouchableOpacity>
              )}
            </View>

            {/* Stats Row */}
            {stats && (
              <View style={athleteCardStyles.stats_statsRow}>
                {/* Ranking */}
                {stats.ranking && (
                  <View style={athleteCardStyles.stats_rankingContainer}>
                    <Trophy size={iconSizes.sm} color={colors.warning[500]} />
                    <Text style={athleteCardStyles.stats_rankingText}>
                      #{stats.ranking}
                    </Text>
                    {getTrendIcon()}
                  </View>
                )}

                {/* Win/Loss */}
                {winLossRecord && (
                  <View style={athleteCardStyles.stats_winLossContainer}>
                    <Text style={athleteCardStyles.stats_winLossText}>
                      {winLossRecord}
                    </Text>
                  </View>
                )}

                {/* Win Rate */}
                {stats.winRate !== undefined && (
                  <View style={athleteCardStyles.stats_winRateBadge}>
                    <Text style={athleteCardStyles.stats_winRateText}>
                      {formatPercentage(stats.winRate)}
                    </Text>
                  </View>
                )}
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  // Full variant - detailed card
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[athleteCardStyles.full_container, style]}
      activeOpacity={0.7}
    >
      {/* Header Section */}
      <View style={athleteCardStyles.full_header}>
        <View style={athleteCardStyles.full_topRow}>
          {/* Avatar */}
          <View style={athleteCardStyles.full_avatarContainer}>
            {athlete.avatar ? (
              <Image
                source={{ uri: athlete.avatar }}
                style={athleteCardStyles.full_avatar}
              />
            ) : (
              <View style={athleteCardStyles.full_avatarPlaceholder}>
                <UserIcon size={iconSizes.lg} color={colors.gray[400]} />
              </View>
            )}
            {showOnlineStatus && athlete.isOnline && (
              <View style={athleteCardStyles.full_onlineIndicator} />
            )}
          </View>

          {/* Info */}
          <View style={athleteCardStyles.full_infoContainer}>
            <View style={athleteCardStyles.full_headerRow}>
              <View style={athleteCardStyles.full_nameContainer}>
                <Text style={athleteCardStyles.full_name} numberOfLines={1}>
                  {athlete.name}
                </Text>
                <Text
                  style={athleteCardStyles.full_organization}
                  numberOfLines={1}
                >
                  {athlete.organization ||
                    stats?.organization ||
                    "Không có đơn vị"}
                </Text>
                {athlete.role && (
                  <View style={athleteCardStyles.full_roleBadge}>
                    <Text style={athleteCardStyles.full_roleText}>
                      {athlete.role === "athlete"
                        ? "Vận động viên"
                        : athlete.role === "coach"
                        ? "Huấn luyện viên"
                        : athlete.role === "team_leader"
                        ? "Trưởng đoàn"
                        : "Khán giả"}
                    </Text>
                  </View>
                )}
              </View>

              {showActions && onActionsPress && (
                <TouchableOpacity
                  onPress={onActionsPress}
                  style={athleteCardStyles.full_actionButton}
                  activeOpacity={0.7}
                >
                  <MoreVertical size={iconSizes.md} color={colors.gray[400]} />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>

        {/* Bio (if available) */}
        {athlete.bio && (
          <Text style={athleteCardStyles.full_bio} numberOfLines={2}>
            {athlete.bio}
          </Text>
        )}
      </View>

      {/* Stats Section */}
      {stats && (
        <View style={athleteCardStyles.full_statsSection}>
          <View style={athleteCardStyles.full_statsRow}>
            {/* Ranking */}
            {stats.ranking && (
              <View style={athleteCardStyles.full_statItem}>
                <View style={athleteCardStyles.full_statIconRow}>
                  <Trophy size={iconSizes.sm} color={colors.warning[500]} />
                  {getTrendIcon()}
                </View>
                <Text style={athleteCardStyles.full_statValue}>
                  #{stats.ranking}
                </Text>
                <Text style={athleteCardStyles.full_statLabel}>Hạng</Text>
              </View>
            )}

            {/* Win/Loss */}
            {stats.wins !== undefined && stats.losses !== undefined && (
              <View style={athleteCardStyles.full_statItem}>
                <Text
                  style={[
                    athleteCardStyles.full_statValue,
                    { marginBottom: 4 },
                  ]}
                >
                  {stats.wins}-{stats.losses}
                </Text>
                <Text style={athleteCardStyles.full_statLabel}>Thắng/Thua</Text>
              </View>
            )}

            {/* Win Rate */}
            {stats.winRate !== undefined && (
              <View style={athleteCardStyles.full_statItem}>
                <Text style={athleteCardStyles.full_statValue_green}>
                  {formatPercentage(stats.winRate)}
                </Text>
                <Text style={athleteCardStyles.full_statLabel}>
                  Tỉ lệ thắng
                </Text>
              </View>
            )}

            {/* Points */}
            {stats.points !== undefined && (
              <View style={athleteCardStyles.full_statItem}>
                <Text
                  style={[
                    athleteCardStyles.full_statValue,
                    { marginBottom: 4 },
                  ]}
                >
                  {formatNumber(stats.points)}
                </Text>
                <Text style={athleteCardStyles.full_statLabel}>Điểm</Text>
              </View>
            )}
          </View>
        </View>
      )}

      {/* Contact Info (if available) */}
      {(athlete.phone || athlete.email) && (
        <View style={athleteCardStyles.full_contactSection}>
          {athlete.phone && (
            <Text style={athleteCardStyles.full_contactItem}>
              📱 {athlete.phone}
            </Text>
          )}
          {athlete.email && (
            <Text
              style={[
                athleteCardStyles.full_contactItem,
                athleteCardStyles.full_contactItemLast,
              ]}
              numberOfLines={1}
            >
              ✉️ {athlete.email}
            </Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};
