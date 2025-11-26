import React from "react";
import { View, Text, TouchableOpacity, Image, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Calendar, MapPin, Users, Heart, Share2 } from "lucide-react-native";
import { Tournament } from "../../types";
import { formatDate, formatNumber } from "../../utils/format";
import { StatusBadge } from "../badges/StatusBadge";
import { colors, iconSizes } from "../../constants/design-tokens";
import { tournamentCardStyles } from "./TournamentCardStyle";

/**
 * TournamentCard Props
 */
export interface TournamentCardProps {
  /** Tournament data */
  tournament: Tournament;
  /** Card variant */
  variant?: "compact" | "full" | "featured";
  /** Callback when card is pressed */
  onPress?: () => void;
  /** Show action buttons (favorite, share) */
  showActions?: boolean;
  /** Whether tournament is favorited */
  isFavorite?: boolean;
  /** Callback when favorite button is pressed */
  onToggleFavorite?: () => void;
  /** Callback when share button is pressed */
  onShare?: () => void;
  /** Show registration status */
  showRegistration?: boolean;
  /** Callback when register button is pressed */
  onRegister?: () => void;
  /** Custom style */
  style?: ViewStyle;
}

/**
 * TournamentCard Component
 *
 * Displays tournament information in various formats.
 * Used in 5+ screens: Home, TournamentList, TournamentDetail, etc.
 *
 * @example
 * ```tsx
 * <TournamentCard
 *   tournament={mockTournaments[0]}
 *   variant="full"
 *   showActions
 *   isFavorite={false}
 *   onToggleFavorite={() => console.log('Toggle favorite')}
 *   onPress={() => navigation.navigate('TournamentDetail', { id: tournament.id })}
 * />
 * ```
 */
export const TournamentCard: React.FC<TournamentCardProps> = ({
  tournament,
  variant = "full",
  onPress,
  showActions = false,
  isFavorite = false,
  onToggleFavorite,
  onShare,
  showRegistration = false,
  onRegister,
  style,
}) => {
  const canRegister =
    tournament.status === "registration_open" &&
    tournament.maxParticipants &&
    tournament.currentParticipants < tournament.maxParticipants;

  // Compact variant - small card for lists
  if (variant === "compact") {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[tournamentCardStyles.compact_container, style]}
        activeOpacity={0.7}
      >
        {/* Tournament Logo */}
        {tournament.logoUrl && (
          <Image
            source={{ uri: tournament.logoUrl }}
            style={tournamentCardStyles.compact_logo}
            resizeMode="cover"
          />
        )}

        {/* Info */}
        <View style={tournamentCardStyles.compact_info}>
          <Text style={tournamentCardStyles.compact_title} numberOfLines={1}>
            {tournament.name}
          </Text>
          <View style={tournamentCardStyles.compact_dateRow}>
            <Calendar size={iconSizes.xs} color="#94a3b8" />
            <Text style={tournamentCardStyles.compact_dateText}>
              {formatDate(tournament.startDate)}
            </Text>
          </View>
        </View>

        {/* Status Badge */}
        <StatusBadge
          variant="tournament"
          status={tournament.status}
          size="small"
        />
      </TouchableOpacity>
    );
  }

  // Featured variant - hero card for home screen
  if (variant === "featured") {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[tournamentCardStyles.featured_container, style]}
        activeOpacity={0.9}
      >
        {/* Background Image with Gradient Overlay */}
        <View style={tournamentCardStyles.featured_imageContainer}>
          {tournament.bannerUrl ? (
            <Image
              source={{ uri: tournament.bannerUrl }}
              style={tournamentCardStyles.featured_image}
              resizeMode="cover"
            />
          ) : (
            <LinearGradient
              colors={["#e89b3c", "#b56b18"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ width: "100%", height: "100%" }}
            />
          )}

          {/* Gradient Overlay */}
          <LinearGradient
            colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={tournamentCardStyles.featured_gradientOverlay}
          />

          {/* Content Overlay */}
          <View style={tournamentCardStyles.featured_contentOverlay}>
            {/* Status Badge */}
            <View style={tournamentCardStyles.featured_statusBadge}>
              <StatusBadge variant="tournament" status={tournament.status} />
            </View>

            {/* Tournament Info */}
            <Text style={tournamentCardStyles.featured_title} numberOfLines={2}>
              {tournament.name}
            </Text>

            <View style={tournamentCardStyles.featured_dateRow}>
              <Calendar size={iconSizes.sm} color="#fff" />
              <Text style={tournamentCardStyles.featured_dateText}>
                {formatDate(tournament.startDate)} -{" "}
                {formatDate(tournament.endDate)}
              </Text>
            </View>

            <View style={tournamentCardStyles.featured_locationRow}>
              <MapPin size={iconSizes.sm} color="#fff" />
              <Text
                style={tournamentCardStyles.featured_locationText}
                numberOfLines={1}
              >
                {tournament.location}
              </Text>
            </View>
          </View>
        </View>

        {/* Actions */}
        {showActions && (
          <View style={tournamentCardStyles.featured_actionsContainer}>
            <View style={tournamentCardStyles.featured_participantsRow}>
              <Users size={iconSizes.sm} color="#94a3b8" />
              <Text style={tournamentCardStyles.featured_participantsText}>
                {formatNumber(tournament.currentParticipants)}
                {tournament.maxParticipants &&
                  ` / ${formatNumber(tournament.maxParticipants)}`}
              </Text>
            </View>

            <View style={tournamentCardStyles.featured_actionButtons}>
              {onToggleFavorite && (
                <TouchableOpacity
                  onPress={onToggleFavorite}
                  style={tournamentCardStyles.featured_actionButton}
                  activeOpacity={0.7}
                >
                  <Heart
                    size={iconSizes.sm}
                    color={isFavorite ? "#dc2626" : "#94a3b8"}
                    fill={isFavorite ? "#dc2626" : "none"}
                  />
                </TouchableOpacity>
              )}
              {onShare && (
                <TouchableOpacity
                  onPress={onShare}
                  style={tournamentCardStyles.featured_actionButton}
                  activeOpacity={0.7}
                >
                  <Share2 size={iconSizes.sm} color={colors.gray[400]} />
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
      </TouchableOpacity>
    );
  }

  // Full variant - detailed card
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[tournamentCardStyles.full_container, style]}
      activeOpacity={0.7}
    >
      {/* Header Image/Logo */}
      {(tournament.bannerUrl || tournament.logoUrl) && (
        <View style={tournamentCardStyles.full_headerImage}>
          <Image
            source={{ uri: tournament.bannerUrl || tournament.logoUrl }}
            style={tournamentCardStyles.full_bannerImage}
            resizeMode="cover"
          />
          {/* Status Badge Overlay */}
          <View style={tournamentCardStyles.full_statusBadgeOverlay}>
            <StatusBadge variant="tournament" status={tournament.status} />
          </View>
        </View>
      )}

      {/* Content */}
      <View style={tournamentCardStyles.full_content}>
        {/* Title */}
        <Text style={tournamentCardStyles.full_title} numberOfLines={2}>
          {tournament.name}
        </Text>

        {/* Description */}
        {tournament.description && (
          <Text style={tournamentCardStyles.full_description} numberOfLines={2}>
            {tournament.description}
          </Text>
        )}

        {/* Info Grid */}
        <View style={tournamentCardStyles.full_infoGrid}>
          {/* Date */}
          <View style={tournamentCardStyles.full_infoRow}>
            <Calendar size={iconSizes.sm} color="#94a3b8" />
            <Text style={tournamentCardStyles.full_infoText}>
              {formatDate(tournament.startDate)} -{" "}
              {formatDate(tournament.endDate)}
            </Text>
          </View>

          {/* Location */}
          <View style={tournamentCardStyles.full_infoRow}>
            <MapPin size={iconSizes.sm} color="#94a3b8" />
            <Text style={tournamentCardStyles.full_infoText} numberOfLines={1}>
              {tournament.location}
              {tournament.venue && ` • ${tournament.venue}`}
            </Text>
          </View>

          {/* Participants */}
          <View style={tournamentCardStyles.full_infoRow}>
            <Users size={iconSizes.sm} color="#94a3b8" />
            <Text style={tournamentCardStyles.full_infoText}>
              {formatNumber(tournament.currentParticipants)} người tham gia
              {tournament.maxParticipants &&
                ` / ${formatNumber(tournament.maxParticipants)}`}
            </Text>
          </View>
        </View>

        {/* Registration Deadline */}
        {tournament.registrationDeadline &&
          tournament.status === "registration_open" && (
            <View style={tournamentCardStyles.full_registrationDeadline}>
              <Text style={tournamentCardStyles.full_deadlineText}>
                Hạn đăng ký: {formatDate(tournament.registrationDeadline)}
              </Text>
            </View>
          )}

        {/* Actions */}
        {(showActions || showRegistration) && (
          <View style={tournamentCardStyles.full_actionsContainer}>
            {/* Action Buttons */}
            {showActions && (
              <View style={tournamentCardStyles.full_actionButtons}>
                {onToggleFavorite && (
                  <TouchableOpacity
                    onPress={onToggleFavorite}
                    style={tournamentCardStyles.full_actionButton}
                    activeOpacity={0.7}
                  >
                    <Heart
                      size={iconSizes.sm}
                      color={isFavorite ? colors.error[500] : colors.gray[400]}
                      fill={isFavorite ? colors.error[500] : "none"}
                    />
                    <Text
                      style={[
                        tournamentCardStyles.full_actionText,
                        isFavorite
                          ? tournamentCardStyles.full_actionText_favorite
                          : tournamentCardStyles.full_actionText_normal,
                      ]}
                    >
                      Yêu thích
                    </Text>
                  </TouchableOpacity>
                )}

                {onShare && (
                  <TouchableOpacity
                    onPress={onShare}
                    style={tournamentCardStyles.full_actionButton}
                    activeOpacity={0.7}
                  >
                    <Share2 size={iconSizes.sm} color={colors.gray[400]} />
                    <Text
                      style={[
                        tournamentCardStyles.full_actionText,
                        tournamentCardStyles.full_actionText_normal,
                      ]}
                    >
                      Chia sẻ
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            )}

            {/* Register Button */}
            {showRegistration && canRegister && onRegister && (
              <TouchableOpacity
                onPress={onRegister}
                style={tournamentCardStyles.full_registerButton}
                activeOpacity={0.7}
              >
                <Text style={tournamentCardStyles.full_registerButtonText}>
                  Đăng ký
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};
