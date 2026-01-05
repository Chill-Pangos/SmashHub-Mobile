import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Trophy, ChevronDown, TrophyIcon } from "lucide-react-native";
import { RankingTable, EmptyState } from "../../../components";
import { colors as themeColors } from "../../../theme/colors";
import { globalStyles } from "../../../styles/global.styles";
import { rankingScreenStyles } from "./RankingScreenStyle";
import { colors } from "../../../constants/design-tokens";
import { Ranking } from "../../../types";

const RankingScreen: React.FC = () => {
  const navigation = useNavigation();
  const [selectedTournament, setSelectedTournament] = useState("1");
  const [selectedCategory, setSelectedCategory] = useState("MS");

  // Mock tournament options
  const tournaments = [
    { id: "1", name: "Giải Cầu Lông Mở Rộng TP.HCM 2024" },
    { id: "2", name: "Giải Vô Địch Sinh Viên 2024" },
    { id: "3", name: "Giải Cầu Lông Cúp Mùa Xuân" },
  ];

  // Mock category options
  const categories = [
    { id: "MS", name: "Đơn nam" },
    { id: "WS", name: "Đơn nữ" },
    { id: "MD", name: "Đôi nam" },
    { id: "WD", name: "Đôi nữ" },
    { id: "XD", name: "Đôi nam nữ" },
  ];

  // Mock ranking data
  const mockRankings: { [key: string]: Ranking[] } = {
    MS: [
      {
        id: "r1",
        tournamentId: "1",
        playerId: "1",
        playerName: "Nguyễn Văn A",
        position: 1,
        wins: 5,
        losses: 0,
        points: 15,
        winRate: 100,
        matchesPlayed: 5,
        updatedAt: "2024-03-20T00:00:00.000Z",
      },
      {
        id: "r2",
        tournamentId: "1",
        playerId: "2",
        playerName: "Trần Văn B",
        position: 2,
        wins: 4,
        losses: 1,
        points: 12,
        winRate: 80,
        matchesPlayed: 5,
        updatedAt: "2024-03-20T00:00:00.000Z",
      },
      {
        id: "r3",
        tournamentId: "1",
        playerId: "3",
        playerName: "Đặng Văn G",
        position: 3,
        wins: 3,
        losses: 2,
        points: 9,
        winRate: 60,
        matchesPlayed: 5,
        updatedAt: "2024-03-20T00:00:00.000Z",
      },
      {
        id: "r4",
        tournamentId: "1",
        playerId: "4",
        playerName: "Hoàng Văn E",
        position: 4,
        wins: 2,
        losses: 3,
        points: 6,
        winRate: 40,
        matchesPlayed: 5,
        updatedAt: "2024-03-20T00:00:00.000Z",
      },
      {
        id: "r5",
        tournamentId: "1",
        playerId: "5",
        playerName: "Võ Văn F",
        position: 5,
        wins: 1,
        losses: 4,
        points: 3,
        winRate: 20,
        matchesPlayed: 5,
        updatedAt: "2024-03-20T00:00:00.000Z",
      },
      {
        id: "r6",
        tournamentId: "1",
        playerId: "6",
        playerName: "Bùi Văn H",
        position: 6,
        wins: 0,
        losses: 5,
        points: 0,
        winRate: 0,
        matchesPlayed: 5,
        updatedAt: "2024-03-20T00:00:00.000Z",
      },
    ],
    WS: [
      {
        id: "r7",
        tournamentId: "1",
        playerId: "7",
        playerName: "Lê Thị C",
        position: 1,
        wins: 4,
        losses: 0,
        points: 12,
        winRate: 100,
        matchesPlayed: 4,
        updatedAt: "2024-03-20T00:00:00.000Z",
      },
      {
        id: "r8",
        tournamentId: "1",
        playerId: "8",
        playerName: "Phạm Thị D",
        position: 2,
        wins: 3,
        losses: 1,
        points: 9,
        winRate: 75,
        matchesPlayed: 4,
        updatedAt: "2024-03-20T00:00:00.000Z",
      },
      {
        id: "r9",
        tournamentId: "1",
        playerId: "9",
        playerName: "Mai Thị I",
        position: 3,
        wins: 2,
        losses: 2,
        points: 6,
        winRate: 50,
        matchesPlayed: 4,
        updatedAt: "2024-03-20T00:00:00.000Z",
      },
      {
        id: "r10",
        tournamentId: "1",
        playerId: "10",
        playerName: "Ngô Thị J",
        position: 4,
        wins: 1,
        losses: 3,
        points: 3,
        winRate: 25,
        matchesPlayed: 4,
        updatedAt: "2024-03-20T00:00:00.000Z",
      },
      {
        id: "r11",
        tournamentId: "1",
        playerId: "11",
        playerName: "Trương Thị K",
        position: 5,
        wins: 0,
        losses: 4,
        points: 0,
        winRate: 0,
        matchesPlayed: 4,
        updatedAt: "2024-03-20T00:00:00.000Z",
      },
    ],
    MD: [
      {
        id: "r12",
        tournamentId: "1",
        playerId: "12",
        playerName: "A/B",
        position: 1,
        wins: 3,
        losses: 0,
        points: 9,
        winRate: 100,
        matchesPlayed: 3,
        updatedAt: "2024-03-20T00:00:00.000Z",
      },
      {
        id: "r13",
        tournamentId: "1",
        playerId: "13",
        playerName: "E/F",
        position: 2,
        wins: 2,
        losses: 1,
        points: 6,
        winRate: 67,
        matchesPlayed: 3,
        updatedAt: "2024-03-20T00:00:00.000Z",
      },
      {
        id: "r14",
        tournamentId: "1",
        playerId: "14",
        playerName: "G/H",
        position: 3,
        wins: 1,
        losses: 2,
        points: 3,
        winRate: 33,
        matchesPlayed: 3,
        updatedAt: "2024-03-20T00:00:00.000Z",
      },
      {
        id: "r15",
        tournamentId: "1",
        playerId: "15",
        playerName: "L/M",
        position: 4,
        wins: 0,
        losses: 3,
        points: 0,
        winRate: 0,
        matchesPlayed: 3,
        updatedAt: "2024-03-20T00:00:00.000Z",
      },
    ],
    WD: [
      {
        id: "r16",
        tournamentId: "1",
        playerId: "16",
        playerName: "C/I",
        position: 1,
        wins: 3,
        losses: 0,
        points: 9,
        winRate: 100,
        matchesPlayed: 3,
        updatedAt: "2024-03-20T00:00:00.000Z",
      },
      {
        id: "r17",
        tournamentId: "1",
        playerId: "17",
        playerName: "D/J",
        position: 2,
        wins: 2,
        losses: 1,
        points: 6,
        winRate: 67,
        matchesPlayed: 3,
        updatedAt: "2024-03-20T00:00:00.000Z",
      },
      {
        id: "r18",
        tournamentId: "1",
        playerId: "18",
        playerName: "K/N",
        position: 3,
        wins: 1,
        losses: 2,
        points: 3,
        winRate: 33,
        matchesPlayed: 3,
        updatedAt: "2024-03-20T00:00:00.000Z",
      },
      {
        id: "r19",
        tournamentId: "1",
        playerId: "19",
        playerName: "O/P",
        position: 4,
        wins: 0,
        losses: 3,
        points: 0,
        winRate: 0,
        matchesPlayed: 3,
        updatedAt: "2024-03-20T00:00:00.000Z",
      },
    ],
    XD: [
      {
        id: "r20",
        tournamentId: "1",
        playerId: "20",
        playerName: "A/C",
        position: 1,
        wins: 3,
        losses: 0,
        points: 9,
        winRate: 100,
        matchesPlayed: 3,
        updatedAt: "2024-03-20T00:00:00.000Z",
      },
      {
        id: "r21",
        tournamentId: "1",
        playerId: "21",
        playerName: "B/D",
        position: 2,
        wins: 2,
        losses: 1,
        points: 6,
        winRate: 67,
        matchesPlayed: 3,
        updatedAt: "2024-03-20T00:00:00.000Z",
      },
      {
        id: "r22",
        tournamentId: "1",
        playerId: "22",
        playerName: "E/I",
        position: 3,
        wins: 1,
        losses: 2,
        points: 3,
        winRate: 33,
        matchesPlayed: 3,
        updatedAt: "2024-03-20T00:00:00.000Z",
      },
      {
        id: "r23",
        tournamentId: "1",
        playerId: "23",
        playerName: "F/J",
        position: 4,
        wins: 0,
        losses: 3,
        points: 0,
        winRate: 0,
        matchesPlayed: 3,
        updatedAt: "2024-03-20T00:00:00.000Z",
      },
    ],
  };

  const currentRankings = mockRankings[selectedCategory] || [];

  return (
    <SafeAreaView style={globalStyles.flex1} edges={["top"]}>
      {/* Header */}
      <LinearGradient
        colors={[
          themeColors.primary[400],
          themeColors.primary[500],
          themeColors.primary[600],
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={rankingScreenStyles.header}
      >
        <View style={rankingScreenStyles.headerContent}>
          <View style={rankingScreenStyles.headerTitleRow}>
            <Trophy size={32} color="#fff" />
            <Text style={rankingScreenStyles.headerTitle}>Bảng xếp hạng</Text>
          </View>
          <Text style={rankingScreenStyles.headerSubtitle}>
            {tournaments.find((t) => t.id === selectedTournament)?.name}
          </Text>
        </View>
      </LinearGradient>

      {/* Tournament Selector */}
      <TouchableOpacity style={rankingScreenStyles.selector}>
        <View style={rankingScreenStyles.selectorContent}>
          <Text style={rankingScreenStyles.selectorLabel}>Giải đấu</Text>
          <Text style={rankingScreenStyles.selectorValue}>
            {tournaments.find((t) => t.id === selectedTournament)?.name}
          </Text>
        </View>
        <ChevronDown size={20} color={colors.mutedForeground} />
      </TouchableOpacity>

      {/* Category Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={rankingScreenStyles.categoryTabsContainer}
        contentContainerStyle={rankingScreenStyles.categoryTabs}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              rankingScreenStyles.categoryTab,
              selectedCategory === category.id &&
                rankingScreenStyles.categoryTabActive,
            ]}
            onPress={() => setSelectedCategory(category.id)}
          >
            <Text
              style={[
                rankingScreenStyles.categoryTabText,
                selectedCategory === category.id &&
                  rankingScreenStyles.categoryTabTextActive,
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Ranking Table */}
      {currentRankings.length > 0 ? (
        <ScrollView
          contentContainerStyle={rankingScreenStyles.tableContainer}
          showsVerticalScrollIndicator={false}
        >
          <RankingTable rankings={currentRankings} variant="full" />
        </ScrollView>
      ) : (
        <EmptyState
          icon={Trophy}
          title="Chưa có xếp hạng"
          description="Bảng xếp hạng sẽ được cập nhật sau các trận đấu"
        />
      )}
    </SafeAreaView>
  );
};

export default RankingScreen;
