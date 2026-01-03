/**
 * MyRankingScreen - Personal Ranking Display
 * UC-14: Ranking across tournaments with trend analysis
 */

import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Award,
  Users,
  Target,
  BarChart3,
} from "lucide-react-native";
import { SafeAreaView } from "../../../components";
import { colors } from "../../../theme/colors";
import { globalStyles } from "../../../styles/global.styles";
import { myRankingScreenStyles as styles } from "./MyRankingScreenStyle";

type TabType = "current" | "history" | "comparison";

interface RankingData {
  tournamentId: string;
  tournamentName: string;
  position: number;
  previousPosition: number;
  totalPlayers: number;
  points: number;
  wins: number;
  losses: number;
  winRate: number;
  lastUpdated: string;
}

interface RankingHistory {
  date: string;
  position: number;
  points: number;
}

const MyRankingScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("current");

  // Mock current rankings
  const currentRankings: RankingData[] = [
    {
      tournamentId: "t1",
      tournamentName: "Giải Cầu Lông Mở Rộng TP.HCM 2024",
      position: 8,
      previousPosition: 12,
      totalPlayers: 64,
      points: 450,
      wins: 15,
      losses: 3,
      winRate: 83.3,
      lastUpdated: "2024-01-03T10:00:00.000Z",
    },
    {
      tournamentId: "t2",
      tournamentName: "Giải Vô Địch Quốc Gia 2024",
      position: 16,
      previousPosition: 18,
      totalPlayers: 128,
      points: 680,
      wins: 22,
      losses: 8,
      winRate: 73.3,
      lastUpdated: "2024-01-02T15:30:00.000Z",
    },
  ];

  // Mock ranking history
  const rankingHistory: RankingHistory[] = [
    { date: "2024-01-03", position: 8, points: 450 },
    { date: "2024-01-02", position: 10, points: 420 },
    { date: "2024-01-01", position: 12, points: 390 },
    { date: "2023-12-31", position: 12, points: 380 },
    { date: "2023-12-30", position: 15, points: 350 },
    { date: "2023-12-29", position: 18, points: 320 },
  ];

  // Calculate overall stats
  const totalWins = currentRankings.reduce((sum, r) => sum + r.wins, 0);
  const totalLosses = currentRankings.reduce((sum, r) => sum + r.losses, 0);
  const totalMatches = totalWins + totalLosses;
  const overallWinRate =
    totalMatches > 0 ? (totalWins / totalMatches) * 100 : 0;
  const bestRank = Math.min(...currentRankings.map((r) => r.position));
  const totalPoints = currentRankings.reduce((sum, r) => sum + r.points, 0);

  const getTrendIcon = (current: number, previous: number) => {
    if (current < previous)
      return <TrendingUp size={20} color={colors.status.success} />;
    if (current > previous)
      return <TrendingDown size={20} color={colors.destructive.DEFAULT} />;
    return <Minus size={20} color={colors.muted.foreground} />;
  };

  const getTrendText = (current: number, previous: number) => {
    const diff = Math.abs(current - previous);
    if (current < previous) return `+${diff} bậc`;
    if (current > previous) return `-${diff} bậc`;
    return "Giữ nguyên";
  };

  const getTrendColor = (current: number, previous: number) => {
    if (current < previous) return colors.status.success;
    if (current > previous) return colors.destructive.DEFAULT;
    return colors.muted.foreground;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
    });
  };

  return (
    <SafeAreaView style={globalStyles.flex1}>
      <ScrollView style={globalStyles.flex1}>
        {/* Header with gradient */}
        <LinearGradient
          colors={[
            colors.primary[400],
            colors.primary[500],
            colors.primary[600],
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <Text style={styles.headerTitle}>Xếp Hạng Của Tôi</Text>
          <Text style={styles.headerSubtitle}>
            Thứ hạng và thống kê cá nhân
          </Text>
        </LinearGradient>

        {/* Overall Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <View style={styles.statIconContainer}>
              <Award size={24} color={colors.primary.DEFAULT} />
            </View>
            <Text style={styles.statValue}>{bestRank}</Text>
            <Text style={styles.statLabel}>Hạng cao nhất</Text>
          </View>

          <View style={styles.statCard}>
            <View style={[styles.statIconContainer, styles.statIconPoints]}>
              <Target size={24} color={colors.status.info} />
            </View>
            <Text style={styles.statValue}>{totalPoints}</Text>
            <Text style={styles.statLabel}>Tổng điểm</Text>
          </View>

          <View style={styles.statCard}>
            <View style={[styles.statIconContainer, styles.statIconRate]}>
              <BarChart3 size={24} color={colors.status.success} />
            </View>
            <Text style={styles.statValue}>{overallWinRate.toFixed(0)}%</Text>
            <Text style={styles.statLabel}>Tỷ lệ thắng</Text>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "current" && styles.tabActive]}
            onPress={() => setActiveTab("current")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "current" && styles.tabTextActive,
              ]}
            >
              Hiện tại
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === "history" && styles.tabActive]}
            onPress={() => setActiveTab("history")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "history" && styles.tabTextActive,
              ]}
            >
              Lịch sử
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === "comparison" && styles.tabActive]}
            onPress={() => setActiveTab("comparison")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "comparison" && styles.tabTextActive,
              ]}
            >
              So sánh
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tab Content */}
        {activeTab === "current" && (
          <View style={styles.contentContainer}>
            <Text style={styles.sectionTitle}>Xếp hạng theo giải</Text>
            {currentRankings.map((ranking) => (
              <View key={ranking.tournamentId} style={styles.rankingCard}>
                {/* Tournament Name */}
                <Text style={styles.tournamentName}>
                  {ranking.tournamentName}
                </Text>

                {/* Main Ranking Display */}
                <View style={styles.mainRankDisplay}>
                  <View style={styles.rankBadge}>
                    <Text style={styles.rankNumber}>{ranking.position}</Text>
                    <Text style={styles.rankTotal}>
                      / {ranking.totalPlayers}
                    </Text>
                  </View>

                  <View style={styles.rankDetails}>
                    <View style={styles.trendContainer}>
                      {getTrendIcon(ranking.position, ranking.previousPosition)}
                      <Text
                        style={[
                          styles.trendText,
                          {
                            color: getTrendColor(
                              ranking.position,
                              ranking.previousPosition
                            ),
                          },
                        ]}
                      >
                        {getTrendText(
                          ranking.position,
                          ranking.previousPosition
                        )}
                      </Text>
                    </View>
                    <Text style={styles.percentile}>
                      Top{" "}
                      {(
                        (ranking.position / ranking.totalPlayers) *
                        100
                      ).toFixed(0)}
                      %
                    </Text>
                  </View>
                </View>

                {/* Stats Grid */}
                <View style={styles.statsGrid}>
                  <View style={styles.statItem}>
                    <Text style={styles.statItemLabel}>Điểm</Text>
                    <Text style={styles.statItemValue}>{ranking.points}</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Text style={styles.statItemLabel}>Thắng/Thua</Text>
                    <Text style={styles.statItemValue}>
                      {ranking.wins}/{ranking.losses}
                    </Text>
                  </View>
                  <View style={styles.statItem}>
                    <Text style={styles.statItemLabel}>Tỷ lệ</Text>
                    <Text style={styles.statItemValue}>
                      {ranking.winRate.toFixed(0)}%
                    </Text>
                  </View>
                </View>

                {/* Last Updated */}
                <Text style={styles.lastUpdated}>
                  Cập nhật:{" "}
                  {new Date(ranking.lastUpdated).toLocaleString("vi-VN")}
                </Text>
              </View>
            ))}
          </View>
        )}

        {activeTab === "history" && (
          <View style={styles.contentContainer}>
            <Text style={styles.sectionTitle}>Biến động xếp hạng</Text>

            {/* Simple Line Chart Representation */}
            <View style={styles.chartCard}>
              <View style={styles.chartHeader}>
                <Text style={styles.chartTitle}>Xu hướng 7 ngày gần đây</Text>
                <View style={styles.chartLegend}>
                  <View style={styles.improvementDot} />
                  <Text style={styles.chartLegendText}>Cải thiện</Text>
                </View>
              </View>

              <View style={styles.chartContainer}>
                {rankingHistory.map((item, index) => {
                  const maxPos = Math.max(
                    ...rankingHistory.map((h) => h.position)
                  );
                  const minPos = Math.min(
                    ...rankingHistory.map((h) => h.position)
                  );
                  const range = maxPos - minPos || 1;
                  const heightPercent =
                    ((maxPos - item.position) / range) * 100;

                  return (
                    <View key={index} style={styles.chartBar}>
                      <View style={styles.chartBarContainer}>
                        <View
                          style={[
                            styles.chartBarFill,
                            { height: `${Math.max(heightPercent, 10)}%` },
                          ]}
                        />
                      </View>
                      <Text style={styles.chartBarValue}>#{item.position}</Text>
                      <Text style={styles.chartBarLabel}>
                        {formatDate(item.date)}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>

            {/* History List */}
            <Text style={styles.sectionTitle}>Chi tiết lịch sử</Text>
            {rankingHistory.map((item, index) => (
              <View key={index} style={styles.historyItem}>
                <View style={styles.historyDate}>
                  <Text style={styles.historyDateText}>
                    {new Date(item.date).toLocaleDateString("vi-VN")}
                  </Text>
                </View>
                <View style={styles.historyDetails}>
                  <Text style={styles.historyPosition}>
                    Hạng {item.position}
                  </Text>
                  <Text style={styles.historyPoints}>{item.points} điểm</Text>
                </View>
                {index < rankingHistory.length - 1 && (
                  <View style={styles.historyTrend}>
                    {item.position < rankingHistory[index + 1].position ? (
                      <TrendingUp size={16} color={colors.status.success} />
                    ) : item.position > rankingHistory[index + 1].position ? (
                      <TrendingDown
                        size={16}
                        color={colors.destructive.DEFAULT}
                      />
                    ) : (
                      <Minus size={16} color={colors.muted.foreground} />
                    )}
                  </View>
                )}
              </View>
            ))}
          </View>
        )}

        {activeTab === "comparison" && (
          <View style={styles.contentContainer}>
            <Text style={styles.sectionTitle}>So sánh với VĐV khác</Text>

            <View style={styles.comparisonCard}>
              <View style={styles.comparisonHeader}>
                <Users size={24} color={colors.primary.DEFAULT} />
                <Text style={styles.comparisonTitle}>So sánh trong nhóm</Text>
              </View>

              <View style={styles.comparisonItem}>
                <Text style={styles.comparisonLabel}>Vị trí trung bình</Text>
                <View style={styles.comparisonBar}>
                  <View style={styles.comparisonBarBg}>
                    <View
                      style={[styles.comparisonBarFill, { width: "60%" }]}
                    />
                  </View>
                  <Text style={styles.comparisonValue}>12/64</Text>
                </View>
              </View>

              <View style={styles.comparisonItem}>
                <Text style={styles.comparisonLabel}>Điểm trung bình</Text>
                <View style={styles.comparisonBar}>
                  <View style={styles.comparisonBarBg}>
                    <View
                      style={[styles.comparisonBarFill, { width: "75%" }]}
                    />
                  </View>
                  <Text style={styles.comparisonValue}>565</Text>
                </View>
              </View>

              <View style={styles.comparisonItem}>
                <Text style={styles.comparisonLabel}>Tỷ lệ thắng</Text>
                <View style={styles.comparisonBar}>
                  <View style={styles.comparisonBarBg}>
                    <View
                      style={[styles.comparisonBarFill, { width: "83%" }]}
                    />
                  </View>
                  <Text style={styles.comparisonValue}>78%</Text>
                </View>
              </View>

              <Text style={styles.comparisonNote}>
                Bạn đang ở top 20% VĐV trong các giải đấu
              </Text>
            </View>
          </View>
        )}

        <View style={globalStyles.pb6} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyRankingScreen;
