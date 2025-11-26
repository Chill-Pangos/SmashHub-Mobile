import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  ViewStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Calendar, MapPin, User as UserIcon, Clock } from "lucide-react-native";
import { Match } from "../../types";
import { formatTime, formatDate, formatRelativeTime } from "../../utils/format";
import { StatusBadge } from "../badges/StatusBadge";
import { colors, iconSizes } from "../../constants/design-tokens";
import { matchCardStyles } from "./MatchCardStyle";

/**
 * MatchCard Props
 */
export interface MatchCardProps {
  /** Match data */
  match: Match;
  /** Card variant */
  variant?: "compact" | "full" | "live";
  /** Callback when card is pressed */
  onPress?: () => void;
  /** Show tournament info */
  showTournament?: boolean;
  /** Show detailed score (sets/games) */
  showDetailedScore?: boolean;
  /** Highlight specific athlete */
  highlightAthlete?: string;
  /** Show favorite toggle */
  showFavorite?: boolean;
  /** Whether match is favorited */
  isFavorite?: boolean;
  /** Callback when favorite button is pressed */
  onToggleFavorite?: () => void;
  /** Custom style for container */
  style?: ViewStyle;
}

/**
 * MatchCard Component
 *
 * Displays match information with player avatars, scores, and status.
 * Used in 8+ screens: Schedule, MyMatches, MatchDetail, etc.
 *
 * @example
 * ```tsx
 * <MatchCard
 *   match={mockMatches[0]}
 *   variant="live"
 *   showTournament
 *   onPress={() => navigation.navigate('MatchDetail', { id: match.id })}
 * />
 * ```
 */
export const MatchCard: React.FC<MatchCardProps> = ({
  match,
  variant = "full",
  onPress,
  showTournament = false,
  showDetailedScore = false,
  highlightAthlete,
  showFavorite = false,
  isFavorite = false,
  onToggleFavorite,
  style,
}) => {
  // Animated pulse for live matches
  const pulseAnim = useState(new Animated.Value(1))[0];

  useEffect(() => {
    if (match.status === "live" && variant === "live") {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.05,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [match.status, variant]);

  // Check if player is winner
  const isHomeWinner = match.winnerId === match.homePlayerId;
  const isAwayWinner = match.winnerId === match.awayPlayerId;

  // Countdown timer for upcoming matches
  const [timeUntil, setTimeUntil] = useState<string>("");

  useEffect(() => {
    if (match.status === "scheduled") {
      const updateCountdown = () => {
        setTimeUntil(formatRelativeTime(match.scheduledTime));
      };
      updateCountdown();
      const interval = setInterval(updateCountdown, 60000); // Update every minute
      return () => clearInterval(interval);
    }
  }, [match.status, match.scheduledTime]);

  // Compact variant - minimal info
  if (variant === "compact") {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[matchCardStyles.compact_container, style]}
        activeOpacity={0.7}
      >
        {/* Tournament Name (if shown) */}
        {showTournament && (
          <Text
            style={matchCardStyles.compact_tournamentText}
            numberOfLines={1}
          >
            {match.tournamentName} • {match.roundName}
          </Text>
        )}

        <View style={matchCardStyles.compact_playersRow}>
          {/* Players */}
          <View style={matchCardStyles.compact_playersContainer}>
            <View style={matchCardStyles.compact_playerRow}>
              <Text
                style={[
                  matchCardStyles.compact_playerText,
                  isHomeWinner
                    ? matchCardStyles.compact_playerText_winner
                    : matchCardStyles.compact_playerText_loser,
                  highlightAthlete === match.homePlayerId &&
                    matchCardStyles.compact_playerText_highlight,
                ]}
                numberOfLines={1}
              >
                {match.homePlayer}
              </Text>
            </View>
            <View
              style={[
                matchCardStyles.compact_playerRow,
                matchCardStyles.compact_playerRowLast,
              ]}
            >
              <Text
                style={[
                  matchCardStyles.compact_playerText,
                  isAwayWinner
                    ? matchCardStyles.compact_playerText_winner
                    : matchCardStyles.compact_playerText_loser,
                  highlightAthlete === match.awayPlayerId &&
                    matchCardStyles.compact_playerText_highlight,
                ]}
                numberOfLines={1}
              >
                {match.awayPlayer}
              </Text>
            </View>
          </View>

          {/* Score or Time */}
          <View style={matchCardStyles.compact_scoreContainer}>
            {match.status === "completed" &&
            match.homeScore !== undefined &&
            match.awayScore !== undefined ? (
              <View style={matchCardStyles.compact_scoresColumn}>
                <Text
                  style={[
                    matchCardStyles.compact_scoreText,
                    isHomeWinner && matchCardStyles.compact_scoreText_bold,
                  ]}
                >
                  {match.homeScore}
                </Text>
                <Text
                  style={[
                    matchCardStyles.compact_scoreText,
                    isAwayWinner && matchCardStyles.compact_scoreText_bold,
                  ]}
                >
                  {match.awayScore}
                </Text>
              </View>
            ) : match.status === "live" ? (
              <View>
                <View style={matchCardStyles.compact_liveBadge}>
                  <Text style={matchCardStyles.compact_liveBadgeText}>
                    LIVE
                  </Text>
                </View>
                {match.homeScore !== undefined &&
                  match.awayScore !== undefined && (
                    <View style={matchCardStyles.compact_scoresColumn}>
                      <Text
                        style={[
                          matchCardStyles.compact_scoreText,
                          matchCardStyles.compact_scoreText_bold,
                        ]}
                      >
                        {match.homeScore}
                      </Text>
                      <Text
                        style={[
                          matchCardStyles.compact_scoreText,
                          matchCardStyles.compact_scoreText_bold,
                        ]}
                      >
                        {match.awayScore}
                      </Text>
                    </View>
                  )}
              </View>
            ) : (
              <Text style={matchCardStyles.compact_timeText}>
                {formatTime(match.scheduledTime)}
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  // Live variant - animated card for live matches
  if (variant === "live") {
    return (
      <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
        <TouchableOpacity
          onPress={onPress}
          style={[matchCardStyles.live_container, style]}
          activeOpacity={0.7}
        >
          {/* Live Badge Header */}
          <LinearGradient
            colors={["#dc2626", "#b91c1c"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={matchCardStyles.live_header}
          >
            <View style={matchCardStyles.live_headerRow}>
              <View style={matchCardStyles.live_headerLeft}>
                <View style={matchCardStyles.live_pulseDot} />
                <Text style={matchCardStyles.live_headerText}>
                  ĐANG DIỄN RA
                </Text>
              </View>
              {match.courtNumber && (
                <Text style={matchCardStyles.live_courtText}>
                  Sân {match.courtNumber}
                </Text>
              )}
            </View>
          </LinearGradient>

          {/* Match Content */}
          <View style={matchCardStyles.live_content}>
            {/* Tournament Info */}
            {showTournament && (
              <Text
                style={matchCardStyles.live_tournamentText}
                numberOfLines={1}
              >
                {match.tournamentName} • {match.roundName}
              </Text>
            )}

            {/* Players with Avatars */}
            <View style={matchCardStyles.live_playersContainer}>
              {/* Home Player */}
              <View style={matchCardStyles.live_playerRow}>
                <View style={matchCardStyles.live_playerLeft}>
                  {match.homePlayerAvatar && (
                    <Image
                      source={{ uri: match.homePlayerAvatar }}
                      style={matchCardStyles.live_avatar}
                    />
                  )}
                  <Text
                    style={[
                      matchCardStyles.live_playerName,
                      isHomeWinner
                        ? matchCardStyles.live_playerName_winner
                        : matchCardStyles.live_playerName_normal,
                    ]}
                    numberOfLines={1}
                  >
                    {match.homePlayer}
                  </Text>
                </View>
                <Text style={matchCardStyles.live_score}>
                  {match.homeScore ?? 0}
                </Text>
              </View>

              {/* Away Player */}
              <View style={matchCardStyles.live_playerRow}>
                <View style={matchCardStyles.live_playerLeft}>
                  {match.awayPlayerAvatar && (
                    <Image
                      source={{ uri: match.awayPlayerAvatar }}
                      style={matchCardStyles.live_avatar}
                    />
                  )}
                  <Text
                    style={[
                      matchCardStyles.live_playerName,
                      isAwayWinner
                        ? matchCardStyles.live_playerName_winner
                        : matchCardStyles.live_playerName_normal,
                    ]}
                    numberOfLines={1}
                  >
                    {match.awayPlayer}
                  </Text>
                </View>
                <Text style={matchCardStyles.live_score}>
                  {match.awayScore ?? 0}
                </Text>
              </View>
            </View>

            {/* Detailed Score (Sets) */}
            {showDetailedScore && match.score && (
              <View style={matchCardStyles.live_detailedScore}>
                <View style={matchCardStyles.live_setsHeader}>
                  <Text style={matchCardStyles.live_setsText}>
                    Sets: {match.score.homeSets} - {match.score.awaySets}
                  </Text>
                </View>
                <View style={matchCardStyles.live_setsRow}>
                  {match.score.sets.map((set) => (
                    <View
                      key={set.setNumber}
                      style={matchCardStyles.live_setContainer}
                    >
                      <Text style={matchCardStyles.live_setLabel}>
                        Set {set.setNumber}
                      </Text>
                      <Text style={matchCardStyles.live_setScore}>
                        {set.homeGames}-{set.awayGames}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {/* Referee */}
            {match.refereeName && (
              <View style={matchCardStyles.live_refereeRow}>
                <UserIcon size={iconSizes.xs} color={colors.gray[500]} />
                <Text style={matchCardStyles.live_refereeText}>
                  Trọng tài: {match.refereeName}
                </Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  }

  // Full variant - detailed card
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[matchCardStyles.full_container, style]}
      activeOpacity={0.7}
    >
      {/* Header */}
      <View style={matchCardStyles.full_header}>
        <View style={matchCardStyles.full_headerLeft}>
          {showTournament && (
            <Text style={matchCardStyles.full_tournamentText} numberOfLines={1}>
              {match.tournamentName}
            </Text>
          )}
          <Text style={matchCardStyles.full_roundText} numberOfLines={1}>
            {match.roundName}
          </Text>
        </View>
        <StatusBadge variant="match" status={match.status} size="small" />
      </View>

      {/* Players Section */}
      <View style={matchCardStyles.full_content}>
        {/* Home Player */}
        <View style={matchCardStyles.full_playerContainer}>
          <View style={matchCardStyles.full_playerLeft}>
            {match.homePlayerAvatar ? (
              <Image
                source={{ uri: match.homePlayerAvatar }}
                style={matchCardStyles.full_avatar}
              />
            ) : (
              <View style={matchCardStyles.full_avatarPlaceholder}>
                <UserIcon size={iconSizes.md} color={colors.gray[400]} />
              </View>
            )}
            <Text
              style={[
                matchCardStyles.full_playerName,
                isHomeWinner
                  ? matchCardStyles.full_playerName_winner
                  : matchCardStyles.full_playerName_normal,
                highlightAthlete === match.homePlayerId &&
                  matchCardStyles.full_playerName_highlight,
              ]}
              numberOfLines={2}
            >
              {match.homePlayer}
            </Text>
          </View>
          {match.status !== "scheduled" && match.homeScore !== undefined && (
            <Text
              style={[
                matchCardStyles.full_playerScore,
                isHomeWinner
                  ? matchCardStyles.full_playerScore_winner
                  : matchCardStyles.full_playerScore_normal,
              ]}
            >
              {match.homeScore}
            </Text>
          )}
        </View>

        {/* VS Divider */}
        <View style={matchCardStyles.full_divider}>
          <View style={matchCardStyles.full_dividerLine} />
          <Text style={matchCardStyles.full_vsText}>VS</Text>
          <View style={matchCardStyles.full_dividerLine} />
        </View>

        {/* Away Player */}
        <View
          style={[
            matchCardStyles.full_playerContainer,
            matchCardStyles.full_playerContainerLast,
          ]}
        >
          <View style={matchCardStyles.full_playerLeft}>
            {match.awayPlayerAvatar ? (
              <Image
                source={{ uri: match.awayPlayerAvatar }}
                style={matchCardStyles.full_avatar}
              />
            ) : (
              <View style={matchCardStyles.full_avatarPlaceholder}>
                <UserIcon size={iconSizes.md} color={colors.gray[400]} />
              </View>
            )}
            <Text
              style={[
                matchCardStyles.full_playerName,
                isAwayWinner
                  ? matchCardStyles.full_playerName_winner
                  : matchCardStyles.full_playerName_normal,
                highlightAthlete === match.awayPlayerId &&
                  matchCardStyles.full_playerName_highlight,
              ]}
              numberOfLines={2}
            >
              {match.awayPlayer}
            </Text>
          </View>
          {match.status !== "scheduled" && match.awayScore !== undefined && (
            <Text
              style={[
                matchCardStyles.full_playerScore,
                isAwayWinner
                  ? matchCardStyles.full_playerScore_winner
                  : matchCardStyles.full_playerScore_normal,
              ]}
            >
              {match.awayScore}
            </Text>
          )}
        </View>

        {/* Detailed Score */}
        {showDetailedScore && match.score && match.status !== "scheduled" && (
          <View style={matchCardStyles.full_detailedScore}>
            <Text style={matchCardStyles.full_setsTitle}>
              Chi tiết set ({match.score.homeSets} - {match.score.awaySets})
            </Text>
            <View style={matchCardStyles.full_setsRow}>
              {match.score.sets.map((set) => (
                <View
                  key={set.setNumber}
                  style={matchCardStyles.full_setContainer}
                >
                  <Text style={matchCardStyles.full_setLabel}>
                    Set {set.setNumber}
                  </Text>
                  <Text style={matchCardStyles.full_setScore}>
                    {set.homeGames}-{set.awayGames}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Match Info */}
        <View style={matchCardStyles.full_matchInfo}>
          {/* Time */}
          <View style={matchCardStyles.full_infoRow}>
            <Clock size={iconSizes.sm} color={colors.gray[500]} />
            <Text style={matchCardStyles.full_infoText}>
              {match.status === "scheduled" && timeUntil
                ? `${timeUntil} • ${formatTime(match.scheduledTime)}`
                : match.status === "live"
                ? "Đang diễn ra"
                : match.endTime
                ? `${formatDate(match.scheduledTime)} ${formatTime(
                    match.scheduledTime
                  )}`
                : formatDate(match.scheduledTime)}
            </Text>
          </View>

          {/* Court & Referee */}
          <View style={matchCardStyles.full_infoRowSplit}>
            {match.courtNumber && (
              <View style={matchCardStyles.full_infoLeft}>
                <MapPin size={iconSizes.sm} color={colors.gray[500]} />
                <Text style={matchCardStyles.full_infoText}>
                  Sân {match.courtNumber}
                </Text>
              </View>
            )}
            {match.refereeName && (
              <View style={matchCardStyles.full_infoRight}>
                <UserIcon size={iconSizes.sm} color={colors.gray[500]} />
                <Text style={matchCardStyles.full_infoText} numberOfLines={1}>
                  {match.refereeName}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
