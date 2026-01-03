import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Trophy,
  FileText,
} from "lucide-react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { colors as themeColors } from "../../../theme/colors";
import { globalStyles } from "../../../styles/global.styles";
import {
  StatusBadge,
  MatchCard,
  RankingTable,
  EmptyState,
} from "../../../components";
import { Match, Ranking } from "../../../types";

import { tournamentDetailScreenStyles } from "./TournamentDetailScreenStyle";
const { width } = Dimensions.get("window");

type Tab = "overview" | "schedule" | "ranking" | "rules";

interface TournamentDetail {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  status: "registration_open" | "registration_closed" | "ongoing" | "completed";
  bannerUrl?: string;
  registrationDeadline: string;
  totalPlayers: number;
  categories: string[];
  organizer: string;
  rules: string[];
}

const TournamentDetailScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as { id: string };

  const [activeTab, setActiveTab] = useState<Tab>("overview");

  // Mock data - Replace with actual API call
  const tournament: TournamentDetail = {
    id,
    name: "Giải vô địch quốc gia 2024",
    description:
      "Giải đấu cầu lông chuyên nghiệp quy tụ các tay vợt xuất sắc nhất toàn quốc. Đây là sân chơi để các vận động viên thể hiện kỹ năng và tranh tài để giành danh hiệu cao quý.",
    startDate: "2024-03-25T00:00:00Z",
    endDate: "2024-04-05T23:59:59Z",
    location: "Cung thể thao quốc gia, Hà Nội",
    status: "registration_open",
    bannerUrl: "https://picsum.photos/seed/tournament1/800/400",
    registrationDeadline: "2024-03-20T23:59:59Z",
    totalPlayers: 128,
    categories: ["Nam đơn", "Nữ đơn", "Nam đôi", "Nữ đôi", "Đôi nam nữ"],
    organizer: "Liên đoàn Cầu lông Việt Nam",
    rules: [
      "Tất cả trận đấu sử dụng hệ thống 21 điểm, phải thắng cách biệt 2 điểm",
      "Mỗi trận đấu tối đa 3 set (best of 3)",
      "Thời gian khởi động: 5 phút trước mỗi trận",
      "Vận động viên phải có mặt 15 phút trước giờ thi đấu",
      "Sử dụng cầu Yonex Aerosensa 50 (chính thức)",
      "Không được phép thay đổi vợt trong quá trình thi đấu trừ khi vợt bị hỏng",
      "Thời gian nghỉ giữa các set: 2 phút",
      "Mỗi bên được quyền timeout 1 phút/set khi đạt 11 điểm",
    ],
  };

  const mockMatches: Match[] = [
    {
      id: "m1",
      homePlayer: "Nguyễn Văn A",
      awayPlayer: "Trần Văn B",
      homePlayerId: "p1",
      awayPlayerId: "p2",
      tournamentId: id,
      tournamentName: tournament.name,
      roundName: "Vòng 1",
      courtNumber: "1",
      scheduledTime: "2024-03-25T09:00:00Z",
      status: "scheduled",
    },
    {
      id: "m2",
      homePlayer: "Lê Thị C",
      awayPlayer: "Phạm Thị D",
      homePlayerId: "p3",
      awayPlayerId: "p4",
      tournamentId: id,
      tournamentName: tournament.name,
      roundName: "Vòng 1",
      courtNumber: "2",
      scheduledTime: "2024-03-25T10:30:00Z",
      status: "scheduled",
    },
  ];

  const mockRankings: Ranking[] = [
    {
      id: "r1",
      tournamentId: id,
      playerId: "p1",
      playerName: "Nguyễn Văn A",
      position: 1,
      wins: 5,
      losses: 0,
      points: 15,
      winRate: 100,
      matchesPlayed: 5,
      updatedAt: "2024-03-20T10:00:00Z",
    },
    {
      id: "r2",
      tournamentId: id,
      playerId: "p2",
      playerName: "Trần Văn B",
      position: 2,
      wins: 4,
      losses: 1,
      points: 12,
      winRate: 80,
      matchesPlayed: 5,
      updatedAt: "2024-03-20T10:00:00Z",
    },
  ];

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const getStatusLabel = (): string => {
    switch (tournament.status) {
      case "registration_open":
        return "Đang mở đăng ký";
      case "registration_closed":
        return "Đã đóng đăng ký";
      case "ongoing":
        return "Đang diễn ra";
      case "completed":
        return "Đã kết thúc";
      default:
        return tournament.status;
    }
  };

  const renderOverview = () => (
    <View style={tournamentDetailScreenStyles.tabContent}>
      <View style={[globalStyles.card, tournamentDetailScreenStyles.infoCard]}>
        <Text style={tournamentDetailScreenStyles.sectionTitle}>Thông tin giải đấu</Text>
        <Text style={tournamentDetailScreenStyles.description}>{tournament.description}</Text>

        <View style={tournamentDetailScreenStyles.infoRow}>
          <Calendar size={20} color={themeColors.muted.foreground} />
          <Text style={tournamentDetailScreenStyles.infoLabel}>Thời gian:</Text>
          <Text style={tournamentDetailScreenStyles.infoValue}>
            {formatDate(tournament.startDate)} -{" "}
            {formatDate(tournament.endDate)}
          </Text>
        </View>

        <View style={tournamentDetailScreenStyles.infoRow}>
          <MapPin size={20} color={themeColors.muted.foreground} />
          <Text style={tournamentDetailScreenStyles.infoLabel}>Địa điểm:</Text>
          <Text style={tournamentDetailScreenStyles.infoValue}>{tournament.location}</Text>
        </View>

        <View style={tournamentDetailScreenStyles.infoRow}>
          <Users size={20} color={themeColors.muted.foreground} />
          <Text style={tournamentDetailScreenStyles.infoLabel}>Ban tổ chức:</Text>
          <Text style={tournamentDetailScreenStyles.infoValue}>{tournament.organizer}</Text>
        </View>

        <View style={tournamentDetailScreenStyles.infoRow}>
          <Trophy size={20} color={themeColors.muted.foreground} />
          <Text style={tournamentDetailScreenStyles.infoLabel}>Số VĐV:</Text>
          <Text style={tournamentDetailScreenStyles.infoValue}>{tournament.totalPlayers}</Text>
        </View>
      </View>

      <View style={[globalStyles.card, tournamentDetailScreenStyles.categoriesCard]}>
        <Text style={tournamentDetailScreenStyles.sectionTitle}>Nội dung thi đấu</Text>
        <View style={tournamentDetailScreenStyles.categoriesGrid}>
          {tournament.categories.map((category, index) => (
            <View key={index} style={tournamentDetailScreenStyles.categoryChip}>
              <Text style={tournamentDetailScreenStyles.categoryText}>{category}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={[globalStyles.card, tournamentDetailScreenStyles.registrationCard]}>
        <Text style={tournamentDetailScreenStyles.registrationTitle}>
          Hạn đăng ký: {formatDate(tournament.registrationDeadline)}
        </Text>
        {tournament.status === "registration_open" && (
          <TouchableOpacity style={tournamentDetailScreenStyles.registerButton}>
            <Text style={tournamentDetailScreenStyles.registerButtonText}>Đăng ký tham gia</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  const renderSchedule = () => (
    <View style={tournamentDetailScreenStyles.tabContent}>
      {mockMatches.length > 0 ? (
        mockMatches.map((match) => (
          <MatchCard
            key={match.id}
            match={match}
            variant="compact"
            onPress={() =>
              (navigation as any).navigate("MatchDetail", { id: match.id })
            }
          />
        ))
      ) : (
        <EmptyState
          icon={Calendar}
          title="Chưa có lịch thi đấu"
          description="Lịch thi đấu sẽ được cập nhật sau khi đóng đăng ký"
        />
      )}
    </View>
  );

  const renderRanking = () => (
    <View style={tournamentDetailScreenStyles.tabContent}>
      {mockRankings.length > 0 ? (
        <RankingTable rankings={mockRankings} variant="full" />
      ) : (
        <EmptyState
          icon={Trophy}
          title="Chưa có bảng xếp hạng"
          description="Bảng xếp hạng sẽ được cập nhật sau khi giải đấu bắt đầu"
        />
      )}
    </View>
  );

  const renderRules = () => (
    <View style={tournamentDetailScreenStyles.tabContent}>
      <View style={[globalStyles.card, tournamentDetailScreenStyles.rulesCard]}>
        <Text style={tournamentDetailScreenStyles.sectionTitle}>Thể lệ giải đấu</Text>
        {tournament.rules.map((rule, index) => (
          <View key={index} style={tournamentDetailScreenStyles.ruleItem}>
            <View style={tournamentDetailScreenStyles.ruleBullet}>
              <Text style={tournamentDetailScreenStyles.ruleBulletText}>{index + 1}</Text>
            </View>
            <Text style={tournamentDetailScreenStyles.ruleText}>{rule}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView
      style={globalStyles.flex1} 
    >
      {/* Header */}
      <LinearGradient
        colors={[
          themeColors.primary[400],
          themeColors.primary[500],
          themeColors.primary[600],
        ]}
        style={tournamentDetailScreenStyles.header}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tournamentDetailScreenStyles.backButton}
        >
          <ArrowLeft size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={tournamentDetailScreenStyles.headerTitle} numberOfLines={1}>
          {tournament.name}
        </Text>
        <View style={{ width: 24 }} />
      </LinearGradient>

      <ScrollView
        style={globalStyles.flex1}
        showsVerticalScrollIndicator={false}
      >
        {/* Banner */}
        {tournament.bannerUrl ? (
          <Image
            source={{ uri: tournament.bannerUrl }}
            style={tournamentDetailScreenStyles.banner}
            resizeMode="cover"
          />
        ) : (
          <LinearGradient
            colors={[
              themeColors.primary[400],
              themeColors.primary[500],
              themeColors.primary[600],
            ]}
            style={tournamentDetailScreenStyles.bannerPlaceholder}
          >
            <Trophy size={64} color="#fff" />
          </LinearGradient>
        )}

        {/* Status Badge */}
        <View style={tournamentDetailScreenStyles.statusContainer}>
          <StatusBadge status={tournament.status} />
        </View>

        {/* Tabs */}
        <View style={tournamentDetailScreenStyles.tabsContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={tournamentDetailScreenStyles.tabsContent}
          >
            <TouchableOpacity
              style={[tournamentDetailScreenStyles.tab, activeTab === "overview" && tournamentDetailScreenStyles.activeTab]}
              onPress={() => setActiveTab("overview")}
            >
              <Text
                style={[
                  tournamentDetailScreenStyles.tabText,
                  activeTab === "overview" && tournamentDetailScreenStyles.activeTabText,
                ]}
              >
                Tổng quan
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[tournamentDetailScreenStyles.tab, activeTab === "schedule" && tournamentDetailScreenStyles.activeTab]}
              onPress={() => setActiveTab("schedule")}
            >
              <Text
                style={[
                  tournamentDetailScreenStyles.tabText,
                  activeTab === "schedule" && tournamentDetailScreenStyles.activeTabText,
                ]}
              >
                Lịch thi đấu
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[tournamentDetailScreenStyles.tab, activeTab === "ranking" && tournamentDetailScreenStyles.activeTab]}
              onPress={() => setActiveTab("ranking")}
            >
              <Text
                style={[
                  tournamentDetailScreenStyles.tabText,
                  activeTab === "ranking" && tournamentDetailScreenStyles.activeTabText,
                ]}
              >
                Xếp hạng
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[tournamentDetailScreenStyles.tab, activeTab === "rules" && tournamentDetailScreenStyles.activeTab]}
              onPress={() => setActiveTab("rules")}
            >
              <Text
                style={[
                  tournamentDetailScreenStyles.tabText,
                  activeTab === "rules" && tournamentDetailScreenStyles.activeTabText,
                ]}
              >
                Thể lệ
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Tab Content */}
        {activeTab === "overview" && renderOverview()}
        {activeTab === "schedule" && renderSchedule()}
        {activeTab === "ranking" && renderRanking()}
        {activeTab === "rules" && renderRules()}

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
};


export default TournamentDetailScreen;
