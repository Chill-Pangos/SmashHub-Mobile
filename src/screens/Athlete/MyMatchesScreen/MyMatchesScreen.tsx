/**
 * MyMatchesScreen - Athlete's Match History
 * UC-13: All matches (past, present, future) with statistics
 */

import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Calendar,
  TrendingUp,
  TrendingDown,
  Award,
  Target,
} from "lucide-react-native";
import { SafeAreaView } from "../../../components";
import { MatchCard } from "../../../components/cards/MatchCard";
import { FilterChips } from "../../../components/inputs/FilterChips";
import { colors } from "../../../theme/colors";
import { globalStyles } from "../../../styles/global.styles";
import { myMatchesScreenStyles as styles } from "./MyMatchesScreenStyle";
import { Match } from "../../../types";

type TabType = "upcoming" | "completed" | "all";

const MyMatchesScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("upcoming");
  const [selectedTournament, setSelectedTournament] = useState<string>("all");

  // Mock data - All matches
  const allMatches: Match[] = [
    {
      id: "m1",
      tournamentId: "t1",
      tournamentName: "Giải Cầu Lông Mở Rộng TP.HCM 2024",
      roundName: "Vòng 16",
      homePlayer: "Nguyễn Văn A",
      awayPlayer: "Bạn",
      homePlayerId: "p1",
      awayPlayerId: "current",
      scheduledTime: "2024-01-05T09:00:00.000Z",
      courtNumber: "Sân 1",
      status: "scheduled",
    },
    {
      id: "m2",
      tournamentId: "t1",
      tournamentName: "Giải Cầu Lông Mở Rộng TP.HCM 2024",
      roundName: "Vòng 32",
      homePlayer: "Bạn",
      awayPlayer: "Trần Văn B",
      homePlayerId: "current",
      awayPlayerId: "p2",
      homeScore: 2,
      awayScore: 1,
      scheduledTime: "2024-01-02T14:30:00.000Z",
      courtNumber: "Sân 3",
      status: "completed",
      winnerId: "current",
    },
    {
      id: "m3",
      tournamentId: "t2",
      tournamentName: "Giải Vô Địch Quốc Gia 2024",
      roundName: "Tứ kết",
      homePlayer: "Lê Văn C",
      awayPlayer: "Bạn",
      homePlayerId: "p3",
      awayPlayerId: "current",
      homeScore: 2,
      awayScore: 0,
      scheduledTime: "2023-12-28T10:00:00.000Z",
      courtNumber: "Sân 2",
      status: "completed",
      winnerId: "p3",
    },
    {
      id: "m4",
      tournamentId: "t2",
      tournamentName: "Giải Vô Địch Quốc Gia 2024",
      roundName: "Vòng 16",
      homePlayer: "Bạn",
      awayPlayer: "Phạm Văn D",
      homePlayerId: "current",
      awayPlayerId: "p4",
      homeScore: 2,
      awayScore: 0,
      scheduledTime: "2023-12-25T15:00:00.000Z",
      courtNumber: "Sân 1",
      status: "completed",
      winnerId: "current",
    },
    {
      id: "m5",
      tournamentId: "t1",
      tournamentName: "Giải Cầu Lông Mở Rộng TP.HCM 2024",
      roundName: "Bán kết",
      homePlayer: "Bạn",
      awayPlayer: "Hoàng Văn E",
      homePlayerId: "current",
      awayPlayerId: "p5",
      scheduledTime: "2024-01-08T16:00:00.000Z",
      courtNumber: "Sân 2",
      status: "scheduled",
    },
  ];

  // Calculate statistics
  const completedMatches = allMatches.filter((m) => m.status === "completed");
  const upcomingMatches = allMatches.filter((m) => m.status === "scheduled");

  const wins = completedMatches.filter((m) => m.winnerId === "current").length;
  const losses = completedMatches.filter(
    (m) => m.status === "completed" && m.winnerId !== "current"
  ).length;
  const totalCompleted = completedMatches.length;
  const winRate = totalCompleted > 0 ? (wins / totalCompleted) * 100 : 0;

  // Filter tournaments
  const tournaments = Array.from(
    new Set(allMatches.map((m) => m.tournamentName))
  );
  const tournamentFilters = [
    { id: "all", label: "Tất cả giải" },
    ...tournaments.map((t) => ({ id: t, label: t })),
  ];

  // Filter matches based on tab and tournament
  const getFilteredMatches = (): Match[] => {
    let filtered = allMatches;

    // Filter by tab
    if (activeTab === "upcoming") {
      filtered = upcomingMatches;
    } else if (activeTab === "completed") {
      filtered = completedMatches;
    }

    // Filter by tournament
    if (selectedTournament !== "all") {
      filtered = filtered.filter(
        (m) => m.tournamentName === selectedTournament
      );
    }

    return filtered;
  };

  const filteredMatches = getFilteredMatches();

  return (
    <SafeAreaView style={globalStyles.flex1} edges={["top"]}>
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
          <Text style={styles.headerTitle}>Trận Đấu Của Tôi</Text>
          <Text style={styles.headerSubtitle}>
            Lịch sử và thống kê các trận đấu
          </Text>
        </LinearGradient>

        {/* Statistics Cards */}
        <View style={styles.statsContainer}>
          {/* Win/Loss Stats */}
          <View style={styles.statCard}>
            <View style={styles.statIconContainer}>
              <Award size={24} color={colors.primary.DEFAULT} />
            </View>
            <Text style={styles.statValue}>{wins}</Text>
            <Text style={styles.statLabel}>Thắng</Text>
          </View>

          <View style={styles.statCard}>
            <View style={[styles.statIconContainer, styles.statIconLoss]}>
              <Target size={24} color={colors.destructive.DEFAULT} />
            </View>
            <Text style={styles.statValue}>{losses}</Text>
            <Text style={styles.statLabel}>Thua</Text>
          </View>

          <View style={styles.statCard}>
            <View style={[styles.statIconContainer, styles.statIconRate]}>
              <TrendingUp size={24} color={colors.status.success} />
            </View>
            <Text style={styles.statValue}>{winRate.toFixed(0)}%</Text>
            <Text style={styles.statLabel}>Tỷ lệ thắng</Text>
          </View>
        </View>

        {/* Win Rate Progress Bar */}
        <View style={styles.winRateCard}>
          <View style={styles.winRateHeader}>
            <Text style={styles.winRateTitle}>Phong độ gần đây</Text>
            <Text style={styles.winRateSubtitle}>
              {wins}/{totalCompleted} trận thắng
            </Text>
          </View>
          <View style={styles.winRateBarContainer}>
            <View style={styles.winRateBarBg}>
              <View style={[styles.winRateBarFill, { width: `${winRate}%` }]} />
            </View>
            <View style={styles.winRateLegend}>
              <View style={styles.winRateLegendItem}>
                <View style={styles.winDot} />
                <Text style={styles.winRateLegendText}>Thắng {wins}</Text>
              </View>
              <View style={styles.winRateLegendItem}>
                <View style={styles.lossDot} />
                <Text style={styles.winRateLegendText}>Thua {losses}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "upcoming" && styles.tabActive]}
            onPress={() => setActiveTab("upcoming")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "upcoming" && styles.tabTextActive,
              ]}
            >
              Sắp tới ({upcomingMatches.length})
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === "completed" && styles.tabActive]}
            onPress={() => setActiveTab("completed")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "completed" && styles.tabTextActive,
              ]}
            >
              Đã đấu ({completedMatches.length})
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === "all" && styles.tabActive]}
            onPress={() => setActiveTab("all")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "all" && styles.tabTextActive,
              ]}
            >
              Tất cả ({allMatches.length})
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tournament Filter */}
        <View style={styles.filterContainer}>
          <FilterChips
            filters={tournamentFilters}
            selectedFilters={[selectedTournament]}
            onFilterChange={(selected) => setSelectedTournament(selected[0] || "all")}
            multiSelect={false}
          />
        </View>

        {/* Matches List */}
        <View style={styles.matchesContainer}>
          <Text style={styles.sectionTitle}>
            {activeTab === "upcoming" && "Các trận sắp tới"}
            {activeTab === "completed" && "Lịch sử thi đấu"}
            {activeTab === "all" && "Tất cả trận đấu"}
          </Text>

          {filteredMatches.length === 0 ? (
            <View style={styles.emptyState}>
              <Calendar size={48} color={colors.muted.foreground} />
              <Text style={styles.emptyText}>Không có trận đấu nào</Text>
              <Text style={styles.emptySubtext}>
                {activeTab === "upcoming"
                  ? "Chưa có trận đấu sắp tới"
                  : "Chưa có lịch sử thi đấu"}
              </Text>
            </View>
          ) : (
            filteredMatches.map((match) => (
              <View key={match.id} style={styles.matchCardWrapper}>
                <MatchCard match={match} onPress={() => {}} />
                {match.status === "completed" && (
                  <View style={styles.matchResultBadge}>
                    {match.winnerId === "current" ? (
                      <View style={styles.winBadge}>
                        <TrendingUp size={16} color="#fff" />
                        <Text style={styles.winBadgeText}>Thắng</Text>
                      </View>
                    ) : (
                      <View style={styles.lossBadge}>
                        <TrendingDown size={16} color="#fff" />
                        <Text style={styles.lossBadgeText}>Thua</Text>
                      </View>
                    )}
                  </View>
                )}
              </View>
            ))
          )}
        </View>

        <View style={globalStyles.pb6} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyMatchesScreen;
