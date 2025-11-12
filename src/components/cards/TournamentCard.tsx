import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Calendar, MapPin, Users, Heart, Share2 } from "lucide-react-native";
import { Tournament } from "../../types";
import { formatDate, formatNumber } from "../../utils/format";
import { StatusBadge } from "../badges/StatusBadge";
import { colors, iconSizes } from "../../constants/design-tokens";

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
  /** Custom className for styling */
  className?: string;
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
  className = "",
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
        className={`bg-white dark:bg-gray-800 rounded-lg p-3 flex-row items-center border border-gray-200 dark:border-gray-700 ${className}`}
        activeOpacity={0.7}
      >
        {/* Tournament Logo */}
        {tournament.logoUrl && (
          <Image
            source={{ uri: tournament.logoUrl }}
            className="w-12 h-12 rounded-md mr-3"
            resizeMode="cover"
          />
        )}

        {/* Info */}
        <View className="flex-1">
          <Text
            className="text-base font-semibold text-gray-900 dark:text-white mb-1"
            numberOfLines={1}
          >
            {tournament.name}
          </Text>
          <View className="flex-row items-center">
            <Calendar size={iconSizes.xs} color={colors.gray[500]} />
            <Text className="text-xs text-gray-500 dark:text-gray-400 ml-1">
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
        className={`rounded-xl overflow-hidden ${className}`}
        activeOpacity={0.9}
      >
        {/* Background Image with Gradient Overlay */}
        <View className="relative h-48">
          {tournament.bannerUrl ? (
            <Image
              source={{ uri: tournament.bannerUrl }}
              className="w-full h-full"
              resizeMode="cover"
            />
          ) : (
            <View className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700" />
          )}

          {/* Gradient Overlay */}
          <View className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Content Overlay */}
          <View className="absolute inset-0 p-4 justify-end">
            {/* Status Badge */}
            <View className="absolute top-4 right-4">
              <StatusBadge variant="tournament" status={tournament.status} />
            </View>

            {/* Tournament Info */}
            <Text
              className="text-2xl font-bold text-white mb-2"
              numberOfLines={2}
            >
              {tournament.name}
            </Text>

            <View className="flex-row items-center mb-2">
              <Calendar size={iconSizes.sm} color="#fff" />
              <Text className="text-white text-sm ml-2">
                {formatDate(tournament.startDate)} -{" "}
                {formatDate(tournament.endDate)}
              </Text>
            </View>

            <View className="flex-row items-center">
              <MapPin size={iconSizes.sm} color="#fff" />
              <Text className="text-white text-sm ml-2" numberOfLines={1}>
                {tournament.location}
              </Text>
            </View>
          </View>
        </View>

        {/* Actions */}
        {showActions && (
          <View className="bg-white dark:bg-gray-800 px-4 py-3 flex-row justify-between">
            <View className="flex-row items-center">
              <Users size={iconSizes.sm} color={colors.gray[500]} />
              <Text className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                {formatNumber(tournament.currentParticipants)}
                {tournament.maxParticipants &&
                  ` / ${formatNumber(tournament.maxParticipants)}`}
              </Text>
            </View>

            <View className="flex-row space-x-3">
              {onToggleFavorite && (
                <TouchableOpacity onPress={onToggleFavorite} className="p-1">
                  <Heart
                    size={iconSizes.sm}
                    color={isFavorite ? colors.error[500] : colors.gray[400]}
                    fill={isFavorite ? colors.error[500] : "none"}
                  />
                </TouchableOpacity>
              )}
              {onShare && (
                <TouchableOpacity onPress={onShare} className="p-1">
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
      className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 ${className}`}
      activeOpacity={0.8}
    >
      {/* Header Image/Logo */}
      {(tournament.bannerUrl || tournament.logoUrl) && (
        <View className="relative h-32 bg-gray-100 dark:bg-gray-700">
          <Image
            source={{ uri: tournament.bannerUrl || tournament.logoUrl }}
            className="w-full h-full"
            resizeMode="cover"
          />
          {/* Status Badge Overlay */}
          <View className="absolute top-3 right-3">
            <StatusBadge variant="tournament" status={tournament.status} />
          </View>
        </View>
      )}

      {/* Content */}
      <View className="p-4">
        {/* Title */}
        <Text
          className="text-lg font-bold text-gray-900 dark:text-white mb-2"
          numberOfLines={2}
        >
          {tournament.name}
        </Text>

        {/* Description */}
        {tournament.description && (
          <Text
            className="text-sm text-gray-600 dark:text-gray-400 mb-3"
            numberOfLines={2}
          >
            {tournament.description}
          </Text>
        )}

        {/* Info Grid */}
        <View className="space-y-2">
          {/* Date */}
          <View className="flex-row items-center">
            <Calendar size={iconSizes.sm} color={colors.gray[500]} />
            <Text className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {formatDate(tournament.startDate)} -{" "}
              {formatDate(tournament.endDate)}
            </Text>
          </View>

          {/* Location */}
          <View className="flex-row items-center">
            <MapPin size={iconSizes.sm} color={colors.gray[500]} />
            <Text
              className="text-sm text-gray-700 dark:text-gray-300 ml-2"
              numberOfLines={1}
            >
              {tournament.location}
              {tournament.venue && ` • ${tournament.venue}`}
            </Text>
          </View>

          {/* Participants */}
          <View className="flex-row items-center">
            <Users size={iconSizes.sm} color={colors.gray[500]} />
            <Text className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {formatNumber(tournament.currentParticipants)} người tham gia
              {tournament.maxParticipants &&
                ` / ${formatNumber(tournament.maxParticipants)}`}
            </Text>
          </View>
        </View>

        {/* Registration Deadline */}
        {tournament.registrationDeadline &&
          tournament.status === "registration_open" && (
            <View className="mt-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-2">
              <Text className="text-xs text-blue-700 dark:text-blue-300">
                Hạn đăng ký: {formatDate(tournament.registrationDeadline)}
              </Text>
            </View>
          )}

        {/* Actions */}
        {(showActions || showRegistration) && (
          <View className="flex-row items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            {/* Action Buttons */}
            {showActions && (
              <View className="flex-row space-x-4">
                {onToggleFavorite && (
                  <TouchableOpacity
                    onPress={onToggleFavorite}
                    className="flex-row items-center"
                  >
                    <Heart
                      size={iconSizes.sm}
                      color={isFavorite ? colors.error[500] : colors.gray[400]}
                      fill={isFavorite ? colors.error[500] : "none"}
                    />
                    <Text
                      className={`text-sm ml-1 ${
                        isFavorite
                          ? "text-red-500 dark:text-red-400"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      Yêu thích
                    </Text>
                  </TouchableOpacity>
                )}

                {onShare && (
                  <TouchableOpacity
                    onPress={onShare}
                    className="flex-row items-center"
                  >
                    <Share2 size={iconSizes.sm} color={colors.gray[400]} />
                    <Text className="text-sm text-gray-500 dark:text-gray-400 ml-1">
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
                className="bg-primary-500 rounded-lg px-4 py-2 ml-auto"
                activeOpacity={0.8}
              >
                <Text className="text-white text-sm font-semibold">
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
