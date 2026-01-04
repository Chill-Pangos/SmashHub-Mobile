/**
 * PerformanceAnalyticsScreen (UC-22)
 * Analyze athlete performance with detailed statistics and trends
 */

import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import type { RootStackNavigationProp } from "../../../navigation/types";
import {
  TrendingUp,
  TrendingDown,
  Trophy,
  Target,
  Activity,
  User,
} from "lucide-react-native";
import { performanceAnalyticsScreenStyles as styles } from "./PerformanceAnalyticsScreenStyle";
import { SafeAreaView, EmptyState } from "../../../components";
import {
  mockAthletePerformances,
  getAthletePerformancesByCoach,
} from "../../../mockdata";
import { colors } from "../../../theme";
import { format, parseISO } from "date-fns";
import { vi } from "date-fns/locale";

const PerformanceAnalyticsScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [selectedAthleteId, setSelectedAthleteId] = useState<string | null>(
    null
  );

  const coachId = "101";
  const athletePerformances = getAthletePerformancesByCoach(coachId);
  const selectedPerformance = selectedAthleteId
    ? athletePerformances.find((p) => p.athleteId === selectedAthleteId)
    : null;

  const renderMetricCard = (
    label: string,
    value: string | number,
    trend?: number,
    icon?: React.ReactNode
  ) => (
    <View style={styles.metricCard}>
      {icon && <View style={styles.metricIcon}>{icon}</View>}
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricLabel}>{label}</Text>
      {trend !== undefined && trend !== 0 && (
        <View
          style={[
            styles.metricTrend,
            trend > 0 ? styles.metricTrendUp : styles.metricTrendDown,
          ]}
        >
          {trend > 0 ? (
            <TrendingUp size={12} color={colors.status.success} />
          ) : (
            <TrendingDown size={12} color={colors.status.error} />
          )}
          <Text
            style={[
              styles.metricTrendText,
              trend > 0 ? styles.metricTrendTextUp : styles.metricTrendTextDown,
            ]}
          >
            {Math.abs(trend)}%
          </Text>
        </View>
      )}
    </View>
  );

  const renderAthleteCard = (perf: (typeof athletePerformances)[0]) => {
    const rankChange = perf.stats.previousRank - perf.stats.currentRank;
    return (
      <TouchableOpacity
        key={perf.athleteId}
        style={[
          styles.athleteCard,
          selectedAthleteId === perf.athleteId && styles.athleteCardSelected,
        ]}
        onPress={() => setSelectedAthleteId(perf.athleteId)}
      >
        <View style={styles.athleteAvatar}>
          <Text style={styles.athleteAvatarText}>
            {perf.athleteName.charAt(0)}
          </Text>
        </View>
        <View style={styles.athleteCardInfo}>
          <Text style={styles.athleteCardName}>{perf.athleteName}</Text>
          <View style={styles.athleteCardStats}>
            <Text style={styles.athleteCardStat}>
              #{perf.stats.currentRank}
            </Text>
            {rankChange !== 0 && (
              <View style={styles.athleteCardTrend}>
                {rankChange > 0 ? (
                  <TrendingUp size={12} color={colors.status.success} />
                ) : (
                  <TrendingDown size={12} color={colors.status.error} />
                )}
              </View>
            )}
            <Text style={styles.athleteCardStat}>
              • {perf.stats.winRate.toFixed(0)}%
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderPerformanceTrend = () => {
    if (!selectedPerformance) return null;

    return (
      <View style={styles.trendSection}>
        <Text style={styles.sectionTitle}>Xu hướng hiệu suất</Text>
        <View style={styles.trendChart}>
          {selectedPerformance.performanceTrend.map((trend, index) => {
            const maxWinRate = Math.max(
              ...selectedPerformance.performanceTrend.map((t) => t.winRate)
            );
            const heightPercent = (trend.winRate / maxWinRate) * 100;
            return (
              <View key={trend.month} style={styles.trendBar}>
                <View style={styles.trendBarContainer}>
                  <View
                    style={[
                      styles.trendBarFill,
                      { height: `${heightPercent}%` },
                    ]}
                  />
                </View>
                <Text style={styles.trendLabel}>{trend.month}</Text>
              </View>
            );
          })}
        </View>
        <View style={styles.trendLegend}>
          <View style={styles.trendLegendItem}>
            <View
              style={[
                styles.trendLegendDot,
                { backgroundColor: colors.primary.DEFAULT },
              ]}
            />
            <Text style={styles.trendLegendText}>Tỷ lệ thắng</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderRecentMatches = () => {
    if (!selectedPerformance) return null;

    return (
      <View style={styles.matchesSection}>
        <Text style={styles.sectionTitle}>Trận đấu gần đây</Text>
        {selectedPerformance.recentMatches.map((match, index) => (
          <View key={index} style={styles.matchCard}>
            <View style={styles.matchHeader}>
              <Text style={styles.matchDate}>
                {format(parseISO(match.date), "dd MMM", { locale: vi })}
              </Text>
              <View
                style={[
                  styles.matchResult,
                  match.result === "win"
                    ? styles.matchResultWin
                    : styles.matchResultLoss,
                ]}
              >
                <Text
                  style={[
                    styles.matchResultText,
                    match.result === "win"
                      ? styles.matchResultTextWin
                      : styles.matchResultTextLoss,
                  ]}
                >
                  {match.result === "win" ? "THẮNG" : "THUA"}
                </Text>
              </View>
            </View>
            <Text style={styles.matchOpponent}>vs {match.opponent}</Text>
            <View style={styles.matchFooter}>
              <Text style={styles.matchScore}>{match.score}</Text>
              <Text style={styles.matchTournament}>{match.tournament}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[colors.primary[400], colors.primary[500], colors.primary[600]]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Phân tích hiệu suất</Text>
        <Text style={styles.headerSubtitle}>
          Theo dõi tiến bộ vận động viên
        </Text>
      </LinearGradient>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.athleteList}
      >
        {athletePerformances.map(renderAthleteCard)}
      </ScrollView>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {!selectedPerformance ? (
          <EmptyState
            title="Chọn vận động viên"
            description="Chọn một vận động viên để xem phân tích"
          />
        ) : (
          <>
            <View style={styles.statsGrid}>
              {renderMetricCard(
                "Trận đấu",
                selectedPerformance.stats.matchesPlayed,
                undefined,
                <Activity size={20} color={colors.primary.DEFAULT} />
              )}
              {renderMetricCard(
                "Tỷ lệ thắng",
                `${selectedPerformance.stats.winRate.toFixed(1)}%`,
                undefined,
                <Trophy size={20} color={colors.status.success} />
              )}
              {renderMetricCard(
                "Xếp hạng",
                `#${selectedPerformance.stats.currentRank}`,
                selectedPerformance.stats.previousRank -
                  selectedPerformance.stats.currentRank,
                <Target size={20} color={colors.status.info} />
              )}
              {renderMetricCard(
                "Chuyên cần",
                `${selectedPerformance.stats.trainingAttendance}%`,
                undefined,
                <User size={20} color={colors.status.warning} />
              )}
            </View>

            {renderPerformanceTrend()}
            {renderRecentMatches()}

            <View style={styles.evaluationSection}>
              <Text style={styles.sectionTitle}>Lịch sử đánh giá</Text>
              {selectedPerformance.evaluationHistory.length === 0 ? (
                <Text style={styles.noData}>Chưa có đánh giá</Text>
              ) : (
                selectedPerformance.evaluationHistory.map(
                  (evaluation, index) => (
                    <View key={index} style={styles.evaluationCard}>
                      <View style={styles.evaluationHeader}>
                        <Text style={styles.evaluationDate}>
                          {format(parseISO(evaluation.date), "dd MMM yyyy", {
                            locale: vi,
                          })}
                        </Text>
                        <View style={styles.evaluationRating}>
                          <Text style={styles.evaluationRatingText}>
                            {evaluation.overallRating.toFixed(1)}
                          </Text>
                        </View>
                      </View>
                      <Text style={styles.evaluationNotes}>
                        {evaluation.notes}
                      </Text>
                    </View>
                  )
                )
              )}
            </View>
          </>
        )}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PerformanceAnalyticsScreen;
