import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import {
  ArrowLeft,
  Clock,
  MapPin,
  Trophy,
  AlertCircle,
  TrendingUp,
  Target,
} from "lucide-react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { colors as themeColors } from "../../../theme/colors";
import { globalStyles } from "../../../styles/global.styles";
import StatusBadge from "../../../components/badges/StatusBadge";
import { ScoreBadge } from "../../../components/badges/ScoreBadge";
import { matchDetailScreenStyles } from "./MatchDetailScreenStyle";

interface MatchDetail {
  id: string;
  homePlayer: string;
  awayPlayer: string;
  homePlayerId: string;
  awayPlayerId: string;
  tournamentId: string;
  tournamentName: string;
  category: string;
  roundName: string;
  courtNumber: number;
  scheduledTime: string;
  status: "scheduled" | "live" | "completed" | "cancelled";
  homeScore?: number;
  awayScore?: number;
  sets?: Array<{
    homeScore: number;
    awayScore: number;
  }>;
  stats?: {
    homeStats: {
      aces: number;
      doubleFaults: number;
      winners: number;
      unforcedErrors: number;
    };
    awayStats: {
      aces: number;
      doubleFaults: number;
      winners: number;
      unforcedErrors: number;
    };
  };
  events?: Array<{
    time: string;
    type: string;
    description: string;
  }>;
}

const MatchDetailScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as { id?: string } | undefined;
  const id = params?.id || "default-match-id";

  const [showComplaintForm, setShowComplaintForm] = useState(false);

  // Mock data - Replace with actual API call
  const matchDetail: MatchDetail = {
    id,
    homePlayer: "Nguyễn Văn A",
    awayPlayer: "Trần Văn B",
    homePlayerId: "player1",
    awayPlayerId: "player2",
    tournamentId: "t1",
    tournamentName: "Giải vô địch quốc gia 2024",
    category: "Nam đơn",
    roundName: "Tứ kết",
    courtNumber: 1,
    scheduledTime: "2024-03-20T14:00:00Z",
    status: "live",
    homeScore: 2,
    awayScore: 1,
    sets: [
      { homeScore: 21, awayScore: 15 },
      { homeScore: 19, awayScore: 21 },
      { homeScore: 18, awayScore: 12 },
    ],
    stats: {
      homeStats: {
        aces: 8,
        doubleFaults: 3,
        winners: 24,
        unforcedErrors: 12,
      },
      awayStats: {
        aces: 5,
        doubleFaults: 5,
        winners: 18,
        unforcedErrors: 15,
      },
    },
    events: [
      {
        time: "14:00",
        type: "start",
        description: "Trận đấu bắt đầu",
      },
      {
        time: "14:25",
        type: "set_end",
        description: "Set 1 kết thúc: 21-15",
      },
      {
        time: "14:50",
        type: "set_end",
        description: "Set 2 kết thúc: 19-21",
      },
    ],
  };

  const formatTime = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const getStatusColor = (): string => {
    switch (matchDetail.status) {
      case "live":
        return themeColors.status.success;
      case "completed":
        return themeColors.status.info;
      case "scheduled":
        return themeColors.status.warning;
      case "cancelled":
        return themeColors.status.error;
      default:
        return themeColors.muted.foreground;
    }
  };

  const getStatusLabel = (): string => {
    switch (matchDetail.status) {
      case "live":
        return "Đang diễn ra";
      case "completed":
        return "Đã kết thúc";
      case "scheduled":
        return "Sắp diễn ra";
      case "cancelled":
        return "Đã hủy";
      default:
        return matchDetail.status;
    }
  };

  return (
    <SafeAreaView style={globalStyles.flex1} >
      <LinearGradient
        colors={[
          themeColors.primary[400],
          themeColors.primary[500],
          themeColors.primary[600],
        ]}
        style={matchDetailScreenStyles.header}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={matchDetailScreenStyles.backButton}
        >
          <ArrowLeft size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={matchDetailScreenStyles.headerTitle}>
          Chi tiết trận đấu
        </Text>
        <View style={{ width: 24 }} />
      </LinearGradient>

      <ScrollView
        style={globalStyles.flex1}
        showsVerticalScrollIndicator={false}
      >
        {/* Match Header */}
        <View style={matchDetailScreenStyles.matchHeader}>
          <Text style={matchDetailScreenStyles.tournamentName}>
            {matchDetail.tournamentName}
          </Text>
          <Text style={matchDetailScreenStyles.category}>
            {matchDetail.category} - {matchDetail.roundName}
          </Text>
          <View style={matchDetailScreenStyles.statusRow}>
            <StatusBadge status={matchDetail.status} />
            {matchDetail.status === "live" && (
              <View style={matchDetailScreenStyles.liveIndicator}>
                <View style={matchDetailScreenStyles.liveDot} />
                <Text style={matchDetailScreenStyles.liveText}>LIVE</Text>
              </View>
            )}
          </View>
        </View>

        {/* Players & Score */}
        <View style={[globalStyles.card, matchDetailScreenStyles.scoreCard]}>
          <View style={matchDetailScreenStyles.playerRow}>
            <Text style={matchDetailScreenStyles.playerName}>
              {matchDetail.homePlayer}
            </Text>
            {matchDetail.homeScore !== undefined &&
              matchDetail.awayScore !== undefined && (
                <ScoreBadge
                  homeScore={matchDetail.homeScore}
                  awayScore={matchDetail.awayScore}
                  variant="compact"
                  size="small"
                />
              )}
          </View>
          <View style={matchDetailScreenStyles.vsRow}>
            <Text style={matchDetailScreenStyles.vsText}>VS</Text>
          </View>
          <View style={matchDetailScreenStyles.playerRow}>
            <Text style={matchDetailScreenStyles.playerName}>
              {matchDetail.awayPlayer}
            </Text>
          </View>
        </View>

        {/* Set Scores */}
        {matchDetail.sets && matchDetail.sets.length > 0 && (
          <View style={[globalStyles.card, matchDetailScreenStyles.setsCard]}>
            <Text style={matchDetailScreenStyles.sectionTitle}>
              Tỷ số từng set
            </Text>
            {matchDetail.sets.map((set, index) => (
              <View key={index} style={matchDetailScreenStyles.setRow}>
                <Text style={matchDetailScreenStyles.setLabel}>
                  Set {index + 1}
                </Text>
                <View style={matchDetailScreenStyles.setScores}>
                  <Text
                    style={[
                      matchDetailScreenStyles.setScore,
                      set.homeScore > set.awayScore &&
                        matchDetailScreenStyles.winningScore,
                    ]}
                  >
                    {set.homeScore}
                  </Text>
                  <Text style={matchDetailScreenStyles.setDivider}>-</Text>
                  <Text
                    style={[
                      matchDetailScreenStyles.setScore,
                      set.awayScore > set.homeScore &&
                        matchDetailScreenStyles.winningScore,
                    ]}
                  >
                    {set.awayScore}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Match Info */}
        <View style={[globalStyles.card, matchDetailScreenStyles.infoCard]}>
          <View style={matchDetailScreenStyles.infoRow}>
            <Clock size={20} color={themeColors.muted.foreground} />
            <Text style={matchDetailScreenStyles.infoLabel}>Thời gian:</Text>
            <Text style={matchDetailScreenStyles.infoValue}>
              {formatTime(matchDetail.scheduledTime)} -{" "}
              {formatDate(matchDetail.scheduledTime)}
            </Text>
          </View>
          <View style={matchDetailScreenStyles.infoRow}>
            <MapPin size={20} color={themeColors.muted.foreground} />
            <Text style={matchDetailScreenStyles.infoLabel}>Sân:</Text>
            <Text style={matchDetailScreenStyles.infoValue}>
              Sân {matchDetail.courtNumber}
            </Text>
          </View>
          <View style={matchDetailScreenStyles.infoRow}>
            <Trophy size={20} color={themeColors.muted.foreground} />
            <Text style={matchDetailScreenStyles.infoLabel}>Giải đấu:</Text>
            <Text style={matchDetailScreenStyles.infoValue}>
              {matchDetail.tournamentName}
            </Text>
          </View>
        </View>

        {/* Statistics */}
        {matchDetail.stats && (
          <View style={[globalStyles.card, matchDetailScreenStyles.statsCard]}>
            <View style={matchDetailScreenStyles.statsHeader}>
              <TrendingUp size={20} color={themeColors.primary[500]} />
              <Text style={matchDetailScreenStyles.sectionTitle}>Thống kê</Text>
            </View>
            <View style={matchDetailScreenStyles.statsTable}>
              <View style={matchDetailScreenStyles.statsRow}>
                <Text style={matchDetailScreenStyles.statsValue}>
                  {matchDetail.stats.homeStats.aces}
                </Text>
                <Text style={matchDetailScreenStyles.statsLabel}>Ace</Text>
                <Text style={matchDetailScreenStyles.statsValue}>
                  {matchDetail.stats.awayStats.aces}
                </Text>
              </View>
              <View style={matchDetailScreenStyles.statsRow}>
                <Text style={matchDetailScreenStyles.statsValue}>
                  {matchDetail.stats.homeStats.winners}
                </Text>
                <Text style={matchDetailScreenStyles.statsLabel}>Winners</Text>
                <Text style={matchDetailScreenStyles.statsValue}>
                  {matchDetail.stats.awayStats.winners}
                </Text>
              </View>
              <View style={matchDetailScreenStyles.statsRow}>
                <Text style={matchDetailScreenStyles.statsValue}>
                  {matchDetail.stats.homeStats.unforcedErrors}
                </Text>
                <Text style={matchDetailScreenStyles.statsLabel}>
                  Lỗi tự gây
                </Text>
                <Text style={matchDetailScreenStyles.statsValue}>
                  {matchDetail.stats.awayStats.unforcedErrors}
                </Text>
              </View>
              <View style={matchDetailScreenStyles.statsRow}>
                <Text style={matchDetailScreenStyles.statsValue}>
                  {matchDetail.stats.homeStats.doubleFaults}
                </Text>
                <Text style={matchDetailScreenStyles.statsLabel}>Lỗi kép</Text>
                <Text style={matchDetailScreenStyles.statsValue}>
                  {matchDetail.stats.awayStats.doubleFaults}
                </Text>
              </View>
            </View>
          </View>
        )}

        {/* Timeline */}
        {matchDetail.events && matchDetail.events.length > 0 && (
          <View
            style={[globalStyles.card, matchDetailScreenStyles.timelineCard]}
          >
            <Text style={matchDetailScreenStyles.sectionTitle}>
              Diễn biến trận đấu
            </Text>
            {matchDetail.events.map((event, index) => (
              <View key={index} style={matchDetailScreenStyles.eventRow}>
                <View style={matchDetailScreenStyles.eventTime}>
                  <Text style={matchDetailScreenStyles.eventTimeText}>
                    {event.time}
                  </Text>
                </View>
                <View style={matchDetailScreenStyles.eventDot} />
                <View style={matchDetailScreenStyles.eventContent}>
                  <Text style={matchDetailScreenStyles.eventDescription}>
                    {event.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Complaint Button */}
        <TouchableOpacity
          style={matchDetailScreenStyles.complaintButton}
          onPress={() =>
            (navigation as any).navigate("SubmitComplaint", {
              matchId: matchDetail.id,
            })
          }
        >
          <AlertCircle size={20} color="#fff" />
          <Text style={matchDetailScreenStyles.complaintButtonText}>
            Gửi khiếu nại
          </Text>
        </TouchableOpacity>

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MatchDetailScreen;
