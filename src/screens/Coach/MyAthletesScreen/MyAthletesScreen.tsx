/**
 * MyAthletesScreen (UC-18)
 * Display list of athletes under coach's training with stats and management options
 */

import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import type { RootStackNavigationProp } from "../../../navigation/types";
import {
  Search,
  TrendingUp,
  TrendingDown,
  Calendar,
  Trophy,
  User,
  FileText,
} from "lucide-react-native";
import { myAthletesScreenStyles as styles } from "./MyAthletesScreenStyle";
import {
  SafeAreaView,
  Loading,
  EmptyState,
  AthleteCard,
} from "../../../components";
import {
  mockAthletePerformances,
  getAthletePerformancesByCoach,
  getUserById,
} from "../../../mockdata";
import { colors } from "../../../theme";

const MyAthletesScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<
    "all" | "top" | "needsWork"
  >("all");

  // Mock coach ID - in real app, get from auth context
  const coachId = "101";

  // Get athletes for this coach
  const athletePerformances = getAthletePerformancesByCoach(coachId);

  // Filter athletes based on search and filters
  const filteredAthletes = athletePerformances.filter((perf) => {
    const matchesSearch = perf.athleteName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    switch (selectedFilter) {
      case "top":
        return perf.stats.winRate >= 70;
      case "needsWork":
        return perf.stats.winRate < 60 || perf.stats.trainingAttendance < 90;
      default:
        return true;
    }
  });

  const handleAthletePress = (athleteId: string) => {
    navigation.navigate("AthleteEvaluation", { athleteId });
  };

  const handleCreatePlan = (athleteId: string) => {
    navigation.navigate("CreateTrainingPlan", { athleteId });
  };

  const handleTacticalReport = () => {
    navigation.navigate("TacticalReport");
  };

  const renderStatCard = (
    title: string,
    value: string | number,
    icon: React.ReactNode,
    trend?: "up" | "down"
  ) => (
    <View style={styles.statCard}>
      <View style={styles.statIcon}>{icon}</View>
      <View style={styles.statContent}>
        <Text style={styles.statValue}>{value}</Text>
        <Text style={styles.statTitle}>{title}</Text>
      </View>
      {trend && (
        <View style={styles.statTrend}>
          {trend === "up" ? (
            <TrendingUp size={16} color={colors.status.success} />
          ) : (
            <TrendingDown size={16} color={colors.status.error} />
          )}
        </View>
      )}
    </View>
  );

  const renderAthleteCard = (perf: (typeof athletePerformances)[0]) => {
    const athlete = getUserById(perf.athleteId);
    const rankChange = perf.stats.previousRank - perf.stats.currentRank;
    const rankTrend =
      rankChange > 0 ? "up" : rankChange < 0 ? "down" : undefined;

    return (
      <TouchableOpacity
        key={perf.athleteId}
        style={styles.athleteCard}
        onPress={() => handleAthletePress(perf.athleteId)}
      >
        <View style={styles.athleteHeader}>
          <View style={styles.athleteInfo}>
            <View style={styles.avatarContainer}>
              {perf.avatar ? (
                <Text style={styles.avatarText}>
                  {perf.athleteName.charAt(0)}
                </Text>
              ) : (
                <User size={24} color={colors.primary.DEFAULT} />
              )}
            </View>
            <View style={styles.athleteDetails}>
              <Text style={styles.athleteName}>{perf.athleteName}</Text>
              <Text style={styles.athleteOrg}>
                {athlete?.organization || "Chưa xác định"}
              </Text>
            </View>
          </View>
          <View style={styles.rankBadge}>
            <Text style={styles.rankText}>#{perf.stats.currentRank}</Text>
            {rankTrend && (
              <View style={styles.rankTrendIcon}>
                {rankTrend === "up" ? (
                  <TrendingUp size={12} color={colors.status.success} />
                ) : (
                  <TrendingDown size={12} color={colors.status.error} />
                )}
              </View>
            )}
          </View>
        </View>

        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <Text style={styles.statItemValue}>{perf.stats.matchesPlayed}</Text>
            <Text style={styles.statItemLabel}>Trận đấu</Text>
          </View>
          <View style={styles.statItem}>
            <Text
              style={[styles.statItemValue, { color: colors.status.success }]}
            >
              {perf.stats.wins}
            </Text>
            <Text style={styles.statItemLabel}>Thắng</Text>
          </View>
          <View style={styles.statItem}>
            <Text
              style={[styles.statItemValue, { color: colors.status.error }]}
            >
              {perf.stats.losses}
            </Text>
            <Text style={styles.statItemLabel}>Thua</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statItemValue}>
              {perf.stats.winRate.toFixed(1)}%
            </Text>
            <Text style={styles.statItemLabel}>Tỷ lệ thắng</Text>
          </View>
        </View>

        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>Chuyên cần</Text>
            <Text style={styles.progressValue}>
              {perf.stats.trainingAttendance}%
            </Text>
          </View>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${perf.stats.trainingAttendance}%`,
                  backgroundColor:
                    perf.stats.trainingAttendance >= 90
                      ? colors.status.success
                      : perf.stats.trainingAttendance >= 75
                      ? colors.status.warning
                      : colors.status.error,
                },
              ]}
            />
          </View>
        </View>

        <View style={styles.cardActions}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleCreatePlan(perf.athleteId)}
          >
            <Calendar size={16} color={colors.primary.DEFAULT} />
            <Text style={styles.actionButtonText}>Kế hoạch</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleAthletePress(perf.athleteId)}
          >
            <Trophy size={16} color={colors.primary.DEFAULT} />
            <Text style={styles.actionButtonText}>Đánh giá</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={handleTacticalReport}
          >
            <FileText size={16} color={colors.primary.DEFAULT} />
            <Text style={styles.actionButtonText}>Chiến thuật</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <Loading />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Header */}
      <LinearGradient
        colors={[colors.primary[400], colors.primary[500], colors.primary[600]]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Vận động viên</Text>
        <Text style={styles.headerSubtitle}>Quản lý và theo dõi tiến độ</Text>
      </LinearGradient>

      {/* Summary Stats */}
      <View style={styles.statsContainer}>
        {renderStatCard(
          "Tổng VĐV",
          athletePerformances.length,
          <User size={20} color={colors.primary.DEFAULT} />
        )}
        {renderStatCard(
          "VĐV xuất sắc",
          athletePerformances.filter((p) => p.stats.winRate >= 70).length,
          <Trophy size={20} color={colors.status.success} />
        )}
        {renderStatCard(
          "Cần cải thiện",
          athletePerformances.filter((p) => p.stats.winRate < 60).length,
          <TrendingDown size={20} color={colors.status.error} />
        )}
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search size={20} color={colors.muted.foreground} />
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm vận động viên..."
            placeholderTextColor={colors.muted.foreground}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Filter Chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <TouchableOpacity
          style={[
            styles.filterChip,
            selectedFilter === "all" && styles.filterChipActive,
          ]}
          onPress={() => setSelectedFilter("all")}
        >
          <Text
            style={[
              styles.filterChipText,
              selectedFilter === "all" && styles.filterChipTextActive,
            ]}
          >
            Tất cả ({athletePerformances.length})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterChip,
            selectedFilter === "top" && styles.filterChipActive,
          ]}
          onPress={() => setSelectedFilter("top")}
        >
          <Text
            style={[
              styles.filterChipText,
              selectedFilter === "top" && styles.filterChipTextActive,
            ]}
          >
            Xuất sắc (
            {athletePerformances.filter((p) => p.stats.winRate >= 70).length})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterChip,
            selectedFilter === "needsWork" && styles.filterChipActive,
          ]}
          onPress={() => setSelectedFilter("needsWork")}
        >
          <Text
            style={[
              styles.filterChipText,
              selectedFilter === "needsWork" && styles.filterChipTextActive,
            ]}
          >
            Cần cải thiện (
            {
              athletePerformances.filter(
                (p) => p.stats.winRate < 60 || p.stats.trainingAttendance < 90
              ).length
            }
            )
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Athletes List */}
      <ScrollView
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
      >
        {filteredAthletes.length === 0 ? (
          <EmptyState
            title="Không tìm thấy vận động viên"
            description="Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm"
          />
        ) : (
          filteredAthletes.map(renderAthleteCard)
        )}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyAthletesScreen;
