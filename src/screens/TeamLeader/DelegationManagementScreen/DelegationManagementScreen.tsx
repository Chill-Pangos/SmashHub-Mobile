/**
 * DelegationManagementScreen - Team Leader
 * Manage sports delegation: view members, stats, team composition
 * UC-27: Delegation Management
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
import { useNavigation } from "@react-navigation/native";
import type { RootStackNavigationProp } from "../../../navigation/types";
import {
  Users,
  Trophy,
  Award,
  TrendingUp,
  Search,
  Plus,
  Medal,
  Target,
  BarChart3,
} from "lucide-react-native";
import {
  SafeAreaView,
  TabBar,
  SearchBar,
  FilterChips,
  AthleteCard,
  FloatingActionButton,
} from "../../../components";
import { User, Delegation, Team } from "../../../types";
import {
  mockDelegations,
  mockTeams,
  mockUsers,
  mockTournaments,
  getUserById,
  getTournamentById,
} from "../../../mockdata/mockData";
import { colors } from "../../../theme";
import { globalStyles } from "../../../styles/global.styles";
import styles from "./DelegationManagementScreenStyle";

type TabItem = {
  id: string;
  label: string;
  badge?: number;
};

type FilterOption = {
  id: string;
  label: string;
};

const DelegationManagementScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  // Mock data - In real app, fetch from API based on logged-in team leader
  const currentLeaderId = "201"; // Trưởng đoàn Lê Văn Phúc - Đội Hà Nội
  const delegation = mockDelegations.find(
    (d) => d.leaderId === currentLeaderId
  );
  const tournament = delegation
    ? getTournamentById(delegation.tournamentId)
    : null;

  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTeam, setSelectedTeam] = useState<string>("all");
  const [refreshing, setRefreshing] = useState(false);

  // Get all members
  const allMembers = useMemo(() => {
    if (!delegation) return [];

    const athletes = delegation.athletes
      .map((id) => getUserById(id))
      .filter(Boolean) as User[];
    const coaches = delegation.coaches
      .map((id) => getUserById(id))
      .filter(Boolean) as User[];

    return [...athletes, ...coaches];
  }, [delegation]);

  // Filter members by tab
  const filteredByTab = useMemo(() => {
    if (activeTab === "all") return allMembers;
    return allMembers.filter((m) => m.role === activeTab);
  }, [activeTab, allMembers]);

  // Filter by search and team
  const filteredMembers = useMemo(() => {
    let result = filteredByTab;

    // Search filter
    if (searchQuery) {
      result = result.filter(
        (m) =>
          m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.organization?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Team filter
    if (selectedTeam !== "all" && delegation) {
      const team = mockTeams.find((t) => t.id === selectedTeam);
      if (team) {
        result = result.filter((m) => team.athletes.includes(m.id));
      }
    }

    return result;
  }, [filteredByTab, searchQuery, selectedTeam, delegation]);

  // Calculate stats
  const stats = useMemo(() => {
    const athletesCount = allMembers.filter((m) => m.role === "athlete").length;
    const coachesCount = allMembers.filter((m) => m.role === "coach").length;
    const teamsCount = delegation?.teams.length || 0;

    return {
      totalMembers: allMembers.length,
      athletes: athletesCount,
      coaches: coachesCount,
      teams: teamsCount,
      wins: 8,
      losses: 3,
      medals: { gold: 2, silver: 3, bronze: 4 },
    };
  }, [allMembers, delegation]);

  // Tabs
  const tabs: TabItem[] = [
    { id: "all", label: "Tất cả", badge: allMembers.length },
    { id: "athlete", label: "VĐV", badge: stats.athletes },
    { id: "coach", label: "HLV", badge: stats.coaches },
  ];

  // Team filters
  const teamFilters: FilterOption[] = [
    { id: "all", label: "Tất cả đội" },
    ...mockTeams
      .filter((t) => t.delegationId === delegation?.id)
      .map((t) => ({ id: t.id, label: t.name })),
  ];

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const handleMemberPress = (member: User) => {
    console.log("View member profile:", member.name);
  };

  const handleAddMember = () => {
    navigation.navigate("AddAthletes");
  };

  const handleSendNotification = () => {
    console.log("Send notification to all members");
  };

  const handleExportList = () => {
    console.log("Export member list");
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
                <Users size={24} color="#ffffff" />
              </View>
              <View style={globalStyles.flex1}>
                <Text style={styles.headerTitle}>{delegation.name}</Text>
                <Text style={styles.headerSubtitle}>{tournament.name}</Text>
              </View>
            </View>
          </View>

          {/* Stats Cards */}
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <View
                style={[
                  styles.statIcon,
                  { backgroundColor: colors.status.info + "20" },
                ]}
              >
                <Users size={20} color={colors.status.info} />
              </View>
              <Text style={styles.statValue}>{stats.totalMembers}</Text>
              <Text style={styles.statLabel}>Thành viên</Text>
            </View>

            <View style={styles.statCard}>
              <View
                style={[
                  styles.statIcon,
                  { backgroundColor: colors.status.success + "20" },
                ]}
              >
                <Trophy size={20} color={colors.status.success} />
              </View>
              <Text style={styles.statValue}>
                {stats.wins}-{stats.losses}
              </Text>
              <Text style={styles.statLabel}>Thắng/Thua</Text>
            </View>

            <View style={styles.statCard}>
              <View
                style={[
                  styles.statIcon,
                  { backgroundColor: colors.status.warning + "20" },
                ]}
              >
                <Medal size={20} color={colors.status.warning} />
              </View>
              <Text style={styles.statValue}>
                {stats.medals.gold + stats.medals.silver + stats.medals.bronze}
              </Text>
              <Text style={styles.statLabel}>Huy chương</Text>
            </View>

            <View style={styles.statCard}>
              <View
                style={[
                  styles.statIcon,
                  { backgroundColor: colors.primary.DEFAULT + "20" },
                ]}
              >
                <Target size={20} color={colors.primary.DEFAULT} />
              </View>
              <Text style={styles.statValue}>{stats.teams}</Text>
              <Text style={styles.statLabel}>Đội thi đấu</Text>
            </View>
          </View>
        </LinearGradient>

        {/* Medals Detail */}
        <View style={styles.medalsSection}>
          <View style={globalStyles.flexRow}>
            <View style={styles.medalItem}>
              <View
                style={[
                  styles.medalBadge,
                  { backgroundColor: "#FFD700" + "20" },
                ]}
              >
                <Award size={20} color="#FFD700" />
              </View>
              <Text style={styles.medalCount}>{stats.medals.gold}</Text>
              <Text style={styles.medalLabel}>Vàng</Text>
            </View>

            <View style={styles.medalItem}>
              <View
                style={[
                  styles.medalBadge,
                  { backgroundColor: "#C0C0C0" + "20" },
                ]}
              >
                <Award size={20} color="#C0C0C0" />
              </View>
              <Text style={styles.medalCount}>{stats.medals.silver}</Text>
              <Text style={styles.medalLabel}>Bạc</Text>
            </View>

            <View style={styles.medalItem}>
              <View
                style={[
                  styles.medalBadge,
                  { backgroundColor: "#CD7F32" + "20" },
                ]}
              >
                <Award size={20} color="#CD7F32" />
              </View>
              <Text style={styles.medalCount}>{stats.medals.bronze}</Text>
              <Text style={styles.medalLabel}>Đồng</Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionsRow}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={handleSendNotification}
          >
            <BarChart3 size={18} color={colors.primary.DEFAULT} />
            <Text style={styles.actionButtonText}>Gửi thông báo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={handleExportList}
          >
            <TrendingUp size={18} color={colors.primary.DEFAULT} />
            <Text style={styles.actionButtonText}>Xuất danh sách</Text>
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <View style={styles.tabBar}>
          <TabBar
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </View>

        {/* Search and Filters */}
        <View style={styles.filtersContainer}>
          <View style={styles.searchBar}>
            <SearchBar
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Tìm kiếm thành viên..."
            />
          </View>

          <FilterChips
            filters={teamFilters}
            selectedFilters={[selectedTeam]}
            onFilterChange={(selected) => setSelectedTeam(selected[0] || "all")}
            multiSelect={false}
            style={styles.filterChips}
          />
        </View>

        {/* Members List */}
        <View style={styles.membersContainer}>
          <View style={styles.membersHeader}>
            <Text style={styles.membersTitle}>
              {filteredMembers.length} thành viên
            </Text>
          </View>

          {filteredMembers.map((member) => {
            // Find member's teams
            const memberTeams = mockTeams.filter(
              (t) =>
                t.delegationId === delegation.id &&
                (t.athletes.includes(member.id) || t.coachId === member.id)
            );

            return (
              <AthleteCard
                key={member.id}
                athlete={member}
                stats={{
                  ranking: Math.floor(Math.random() * 50) + 1,
                  wins: Math.floor(Math.random() * 15) + 5,
                  losses: Math.floor(Math.random() * 10) + 2,
                  winRate: Math.floor(Math.random() * 30) + 60,
                  organization: member.organization || delegation.name,
                }}
                variant="compact"
                onPress={() => handleMemberPress(member)}
                style={styles.memberCard}
              />
            );
          })}

          {filteredMembers.length === 0 && (
            <View style={styles.emptyState}>
              <Search size={48} color={colors.muted.foreground} />
              <Text style={styles.emptyTitle}>Không tìm thấy thành viên</Text>
              <Text style={styles.emptyText}>
                {searchQuery
                  ? "Thử thay đổi từ khóa tìm kiếm"
                  : "Chưa có thành viên trong đoàn"}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <FloatingActionButton
        icon={<Plus size={24} color="#ffffff" />}
        onPress={handleAddMember}
        label="Thêm thành viên"
      />
    </SafeAreaView>
  );
};

export default DelegationManagementScreen;
