/**
 * DelegationScheduleScreen - Team Leader
 * View and manage delegation's schedule with conflict detection
 * UC-28: Delegation Schedule
 */

import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Calendar,
  Clock,
  AlertTriangle,
  Users,
  MapPin,
  ChevronRight,
} from "lucide-react-native";
import {
  SafeAreaView,
  DateRangePicker,
  FilterChips,
  MatchCard,
} from "../../../components";
import { Match } from "../../../types";
import {
  mockDelegations,
  mockMatches,
  getUserById,
  getTournamentById,
} from "../../../mockdata/mockData";
import { colors } from "../../../theme";
import { globalStyles } from "../../../styles/global.styles";
import styles from "./DelegationScheduleScreenStyle";

type FilterOption = {
  id: string;
  label: string;
};

type AthleteSchedule = {
  athleteId: string;
  athleteName: string;
  matches: Match[];
  hasConflict: boolean;
};

const DelegationScheduleScreen: React.FC = () => {
  const currentLeaderId = "201"; // Trưởng đoàn Lê Văn Phúc - Đội Hà Nội
  const delegation = mockDelegations.find(
    (d) => d.leaderId === currentLeaderId
  );
  const tournament = delegation
    ? getTournamentById(delegation.tournamentId)
    : null;

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedAthlete, setSelectedAthlete] = useState<string>("all");
  const [refreshing, setRefreshing] = useState(false);

  // Get delegation matches
  const delegationMatches = useMemo(() => {
    if (!delegation) return [];

    return mockMatches.filter(
      (match) =>
        delegation.athletes.includes(match.homePlayerId) ||
        delegation.athletes.includes(match.awayPlayerId)
    );
  }, [delegation]);

  // Get matches for selected date
  const todayMatches = useMemo(() => {
    const dateStr = selectedDate.toISOString().split("T")[0];
    return delegationMatches.filter((match) => {
      const matchDate = new Date(match.scheduledTime)
        .toISOString()
        .split("T")[0];
      return matchDate === dateStr;
    });
  }, [delegationMatches, selectedDate]);

  // Filter by athlete
  const filteredMatches = useMemo(() => {
    if (selectedAthlete === "all") return todayMatches;
    return todayMatches.filter(
      (m) =>
        m.homePlayerId === selectedAthlete || m.awayPlayerId === selectedAthlete
    );
  }, [todayMatches, selectedAthlete]);

  // Build athlete schedules with conflict detection
  const athleteSchedules = useMemo(() => {
    if (!delegation) return [];

    const schedules: AthleteSchedule[] = delegation.athletes.map(
      (athleteId) => {
        const athlete = getUserById(athleteId);
        const athleteMatches = todayMatches
          .filter(
            (m) => m.homePlayerId === athleteId || m.awayPlayerId === athleteId
          )
          .sort(
            (a, b) =>
              new Date(a.scheduledTime).getTime() -
              new Date(b.scheduledTime).getTime()
          );

        // Check for time conflicts
        let hasConflict = false;
        for (let i = 0; i < athleteMatches.length - 1; i++) {
          const current = new Date(athleteMatches[i].scheduledTime);
          const next = new Date(athleteMatches[i + 1].scheduledTime);
          const diffMinutes =
            (next.getTime() - current.getTime()) / (1000 * 60);
          if (diffMinutes < 60) {
            // Less than 1 hour gap
            hasConflict = true;
            break;
          }
        }

        return {
          athleteId,
          athleteName: athlete?.name || "Unknown",
          matches: athleteMatches,
          hasConflict,
        };
      }
    );

    return schedules.filter((s) => s.matches.length > 0);
  }, [delegation, todayMatches]);

  // Athlete filters
  const athleteFilters: FilterOption[] = [
    { id: "all", label: "Tất cả VĐV" },
    ...(delegation?.athletes.map((id) => {
      const athlete = getUserById(id);
      return { id, label: athlete?.name || "Unknown" };
    }) || []),
  ];

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const handleMatchPress = (match: Match) => {
    console.log("View match details:", match.id);
  };

  const handleDateChange = (startDate?: Date, endDate?: Date) => {
    if (startDate) {
      setSelectedDate(startDate);
    }
  };

  if (!delegation || !tournament) {
    return (
      <SafeAreaView style={globalStyles.flex1} edges={["top"]}>
        <View style={[globalStyles.flex1, globalStyles.flexCenter]}>
          <Text style={globalStyles.textCenter}>
            Không tìm thấy đoàn thể thao
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const conflictsCount = athleteSchedules.filter((s) => s.hasConflict).length;

  return (
    <SafeAreaView style={globalStyles.flex1} edges={["top"]}>
      <ScrollView
        style={globalStyles.flex1}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        {/* Header with Gradient */}
        <LinearGradient
          colors={[
            colors.primary[400],
            colors.primary.DEFAULT,
            colors.primary[600],
          ]}
          style={styles.headerGradient}
        >
          <View style={styles.headerContent}>
            <View style={globalStyles.flexRow}>
              <View style={styles.headerIcon}>
                <Calendar size={24} color="#ffffff" />
              </View>
              <View style={globalStyles.flex1}>
                <Text style={styles.headerTitle}>Lịch Đoàn</Text>
                <Text style={styles.headerSubtitle}>{delegation.name}</Text>
              </View>
            </View>
          </View>

          {/* Quick Stats */}
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Clock size={18} color="#ffffff" />
              <Text style={styles.statText}>
                {todayMatches.length} trận hôm nay
              </Text>
            </View>
            {conflictsCount > 0 && (
              <View
                style={[
                  styles.statItem,
                  { backgroundColor: colors.destructive.DEFAULT + "20" },
                ]}
              >
                <AlertTriangle size={18} color={colors.destructive.DEFAULT} />
                <Text
                  style={[
                    styles.statText,
                    { color: colors.destructive.DEFAULT },
                  ]}
                >
                  {conflictsCount} xung đột
                </Text>
              </View>
            )}
          </View>
        </LinearGradient>

        {/* Date Picker */}
        <View style={styles.datePickerContainer}>
          <DateRangePicker
            startDate={selectedDate}
            onChange={handleDateChange}
            singleDate
          />
        </View>

        {/* Athlete Filter */}
        <View style={styles.filtersContainer}>
          <FilterChips
            filters={athleteFilters}
            selectedFilters={[selectedAthlete]}
            onFilterChange={(selected) =>
              setSelectedAthlete(selected[0] || "all")
            }
            multiSelect={false}
          />
        </View>

        {/* Athlete Schedules */}
        {selectedAthlete === "all" ? (
          <View style={styles.schedulesContainer}>
            <Text style={styles.sectionTitle}>Lịch theo VĐV</Text>
            {athleteSchedules.map((schedule) => (
              <View key={schedule.athleteId} style={styles.athleteScheduleCard}>
                <View style={styles.athleteScheduleHeader}>
                  <View style={globalStyles.flexRow}>
                    <Users size={20} color={colors.primary.DEFAULT} />
                    <Text style={styles.athleteName}>
                      {schedule.athleteName}
                    </Text>
                  </View>
                  {schedule.hasConflict && (
                    <View style={styles.conflictBadge}>
                      <AlertTriangle
                        size={14}
                        color={colors.destructive.DEFAULT}
                      />
                      <Text style={styles.conflictText}>Xung đột</Text>
                    </View>
                  )}
                </View>

                <View style={styles.matchesTimeline}>
                  {schedule.matches.map((match, index) => {
                    const time = new Date(
                      match.scheduledTime
                    ).toLocaleTimeString("vi-VN", {
                      hour: "2-digit",
                      minute: "2-digit",
                    });

                    return (
                      <TouchableOpacity
                        key={match.id}
                        style={styles.timelineItem}
                        onPress={() => handleMatchPress(match)}
                      >
                        <View style={styles.timelineTime}>
                          <Clock size={14} color={colors.muted.foreground} />
                          <Text style={styles.timeText}>{time}</Text>
                        </View>
                        <View style={styles.timelineDot} />
                        <View style={styles.timelineContent}>
                          <Text style={styles.matchOpponent}>
                            vs{" "}
                            {match.homePlayerId === schedule.athleteId
                              ? match.awayPlayer
                              : match.homePlayer}
                          </Text>
                          <View style={globalStyles.flexRow}>
                            <MapPin size={12} color={colors.muted.foreground} />
                            <Text style={styles.matchCourt}>
                              {match.courtNumber}
                            </Text>
                          </View>
                        </View>
                        <ChevronRight
                          size={16}
                          color={colors.muted.foreground}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ))}

            {athleteSchedules.length === 0 && (
              <View style={styles.emptyState}>
                <Calendar size={48} color={colors.muted.foreground} />
                <Text style={styles.emptyTitle}>Không có trận đấu</Text>
                <Text style={styles.emptyText}>
                  Không có trận đấu nào trong ngày đã chọn
                </Text>
              </View>
            )}
          </View>
        ) : (
          // Single Athlete View
          <View style={styles.matchesContainer}>
            <Text style={styles.sectionTitle}>
              {filteredMatches.length} trận đấu
            </Text>
            {filteredMatches.map((match) => (
              <MatchCard
                key={match.id}
                match={match}
                variant="full"
                onPress={() => handleMatchPress(match)}
                style={styles.matchCard}
              />
            ))}

            {filteredMatches.length === 0 && (
              <View style={styles.emptyState}>
                <Calendar size={48} color={colors.muted.foreground} />
                <Text style={styles.emptyTitle}>Không có trận đấu</Text>
                <Text style={styles.emptyText}>
                  VĐV không có trận đấu trong ngày đã chọn
                </Text>
              </View>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DelegationScheduleScreen;
