import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import {
  Trophy,
  Calendar,
  Bell,
  Users,
  Award,
  Search,
  TrendingUp,
} from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@/hooks";
import { useRole } from "@/hooks";
import { MatchCard, TournamentCard } from "../../../components";
import { Match, Tournament } from "../../../types";
import { colors as themeColors } from "../../../theme/colors";
import { globalStyles } from "../../../styles/global.styles";
import { homeScreenStyles } from "./HomeScreenStyle";

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const { getRoleById, getHighestPriorityRole } = useRole();

  // Get user's highest priority role
  const getUserRole = () => {
    if (!user || !user.roles || user.roles.length === 0) return null;
    const highestRoleId = getHighestPriorityRole(user.roles);
    if (!highestRoleId) return null;
    const role = getRoleById(highestRoleId);
    return role?.name || null;
  };

  const userRole = getUserRole();

  // Role-specific quick actions
  const getQuickActions = () => {
    switch (userRole) {
      case "athlete":
        return [
          {
            id: 1,
            icon: Trophy,
            label: "Giải đấu",
            route: "TournamentList",
            bgColor: themeColors.status.info,
          },
          {
            id: 2,
            icon: Calendar,
            label: "Lịch thi đấu",
            route: "MySchedule",
            bgColor: themeColors.status.success,
          },
          {
            id: 2,
            icon: Trophy,
            label: "Trận đấu",
            route: "MyMatches",
            bgColor: themeColors.status.info,
          },
          {
            id: 3,
            icon: Award,
            label: "BXH",
            route: "MyRanking",
            bgColor: themeColors.status.warning,
          },
          {
            id: 4,
            icon: Bell,
            label: "Thông báo",
            route: "NotificationCenter",
            bgColor: themeColors.status.error,
          },
        ];
      case "coach":
        return [
          {
            id: 1,
            icon: Trophy,
            label: "Giải đấu",
            route: "TournamentList",
            bgColor: themeColors.status.info,
          },
          {
            id: 2,
            icon: Users,
            label: "VĐV của tôi",
            route: "MyAthletes",
            bgColor: themeColors.accent.DEFAULT,
          },
          {
            id: 3,
            icon: Calendar,
            label: "Kế hoạch",
            route: "TrainingPlans",
            bgColor: themeColors.status.success,
          },
          {
            id: 4,
            icon: TrendingUp,
            label: "Phân tích",
            route: "PerformanceAnalytics",
            bgColor: themeColors.accent.DEFAULT,
          },
          {
            id: 5,
            icon: Bell,
            label: "Khiếu nại",
            route: "CoachComplaintManagement",
            bgColor: themeColors.status.warning,
          },
        ];
      case "team_leader":
        return [
          {
            id: 1,
            icon: Trophy,
            label: "Giải đấu",
            route: "TournamentList",
            bgColor: themeColors.status.info,
          },
          {
            id: 2,
            icon: Users,
            label: "Quản lý đoàn",
            route: "DelegationManagement",
            bgColor: themeColors.accent.DEFAULT,
          },
          {
            id: 3,
            icon: Calendar,
            label: "Lịch đoàn",
            route: "DelegationSchedule",
            bgColor: themeColors.status.success,
          },
          {
            id: 4,
            icon: Trophy,
            label: "Đội",
            route: "TeamManagement",
            bgColor: themeColors.accent.DEFAULT,
          },
          {
            id: 5,
            icon: Bell,
            label: "Khiếu nại",
            route: "ComplaintReview",
            bgColor: themeColors.status.warning,
          },
        ];
      default: // spectator
        return [
          {
            id: 1,
            icon: Trophy,
            label: "Giải đấu",
            route: "TournamentList",
            bgColor: themeColors.status.info,
          },
          {
            id: 2,
            icon: Calendar,
            label: "Lịch thi đấu",
            route: "Schedule",
            bgColor: themeColors.status.success,
          },
          {
            id: 3,
            icon: Search,
            label: "Tìm kiếm",
            route: "SearchMatch",
            bgColor: themeColors.status.warning,
          },
          {
            id: 4,
            icon: Bell,
            label: "Thông báo",
            route: "NotificationCenter",
            bgColor: themeColors.status.error,
          },
        ];
    }
  };

  const quickActions = getQuickActions();

  // Mock featured tournament
  const featuredTournament: Tournament = {
    id: "t1",
    name: "Giải Vô Địch Quốc Gia 2024",
    description: "Giải đấu lớn nhất năm với sự tham gia của các VĐV hàng đầu",
    format: "Đơn nam, Đơn nữ, Đôi nam, Đôi nữ",
    startDate: new Date(2024, 11, 15).toISOString(),
    endDate: new Date(2024, 11, 20).toISOString(),
    location: "TP. Hồ Chí Minh",
    venue: "Nhà thi đấu Phú Thọ",
    logoUrl:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&h=400&fit=crop",
    bannerUrl:
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=600&fit=crop",
    status: "ongoing",
    currentParticipants: 128,
    maxParticipants: 128,
    registrationDeadline: new Date(2024, 11, 1).toISOString(),
    rules: "Thi đấu theo luật BWF quốc tế",
    prizes: "Tổng giải thưởng: 500.000.000 VNĐ",
    createdAt: new Date(2024, 9, 1).toISOString(),
    updatedAt: new Date(2024, 11, 15).toISOString(),
  };

  // Mock upcoming matches data with proper types
  const upcomingMatches: Match[] = [
    {
      id: "1",
      tournamentId: "t1",
      tournamentName: "Giải vô địch quốc gia 2024",
      roundName: "Vòng 1/16",
      homePlayerId: "p1",
      homePlayer: "Nguyễn Văn An",
      homePlayerAvatar: "https://i.pravatar.cc/150?img=12",
      awayPlayerId: "p2",
      awayPlayer: "Trần Thị Bình",
      awayPlayerAvatar: "https://i.pravatar.cc/150?img=23",
      scheduledTime: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // 2 hours from now
      courtNumber: "1",
      status: "scheduled",
      refereeName: "Lê Minh Tuấn",
    },
    {
      id: "2",
      tournamentId: "t1",
      tournamentName: "Giải vô địch quốc gia 2024",
      roundName: "Vòng 1/16",
      homePlayerId: "p3",
      homePlayer: "Lê Minh Châu",
      homePlayerAvatar: "https://i.pravatar.cc/150?img=31",
      awayPlayerId: "p4",
      awayPlayer: "Phạm Thu Hà",
      awayPlayerAvatar: "https://i.pravatar.cc/150?img=44",
      scheduledTime: new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString(), // 6 hours from now
      courtNumber: "2",
      status: "scheduled",
      refereeName: "Nguyễn Thị Mai",
    },
    {
      id: "3",
      tournamentId: "t1",
      tournamentName: "Giải vô địch quốc gia 2024",
      roundName: "Vòng 1/8",
      homePlayerId: "p5",
      homePlayer: "Hoàng Văn Dũng",
      homePlayerAvatar: "https://i.pravatar.cc/150?img=51",
      awayPlayerId: "p6",
      awayPlayer: "Đặng Quốc Khánh",
      awayPlayerAvatar: "https://i.pravatar.cc/150?img=68",
      scheduledTime: new Date(Date.now() + 8.5 * 60 * 60 * 1000).toISOString(), // 8.5 hours from now
      courtNumber: "1",
      status: "scheduled",
      refereeName: "Trần Văn Hùng",
    },
  ];

  return (
    <SafeAreaView style={globalStyles.flex1} edges={["top"]}>
      <ScrollView style={homeScreenStyles.container}>
        {/* Header */}
        <LinearGradient
          colors={[
            themeColors.primary[400],
            themeColors.primary[500],
            themeColors.primary[600],
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={homeScreenStyles.header}
        >
          <View style={homeScreenStyles.headerRow}>
            <View style={homeScreenStyles.headerLeft}>
              <Image
                source={{ uri: "https://i.pravatar.cc/150" }}
                style={homeScreenStyles.avatar}
              />
              <View style={homeScreenStyles.textContainer}>
                <Text style={homeScreenStyles.welcomeText}>Xin chào!</Text>
                <Text style={homeScreenStyles.userName}>
                  {user?.username || user?.email || "Người dùng"}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={homeScreenStyles.notificationButton}
              onPress={() => (navigation as any).navigate("NotificationCenter")}
            >
              <Bell color="#ffffff" size={24} />
              <View style={homeScreenStyles.notificationBadge}>
                <Text style={homeScreenStyles.notificationBadgeText}>3</Text>
              </View>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Quick Actions */}
        <View style={homeScreenStyles.quickActionsContainer}>
          <Text style={homeScreenStyles.sectionTitle}>Truy cập nhanh</Text>
          <View style={homeScreenStyles.quickActionsGrid}>
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <TouchableOpacity
                  key={action.id}
                  style={homeScreenStyles.quickActionItem}
                  onPress={() => (navigation as any).navigate(action.route)}
                >
                  <View
                    style={[
                      homeScreenStyles.quickActionIcon,
                      { backgroundColor: action.bgColor },
                    ]}
                  >
                    <Icon color="#ffffff" size={24} />
                  </View>
                  <Text style={homeScreenStyles.quickActionLabel}>
                    {action.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Featured Tournament */}
        <View style={homeScreenStyles.section}>
          <Text style={homeScreenStyles.sectionTitle}>Giải đấu nổi bật</Text>
          <TournamentCard
            tournament={featuredTournament}
            variant="featured"
            onPress={() =>
              (navigation as any).navigate("TournamentDetail", {
                id: featuredTournament.id,
              })
            }
            gradientColors={[
              themeColors.primary[400],
              themeColors.primary[500],
              themeColors.primary[600],
            ]}
            showActions
          />
        </View>

        {/* Upcoming Matches */}
        <View style={homeScreenStyles.section}>
          <View style={homeScreenStyles.sectionHeader}>
            <Text style={homeScreenStyles.sectionTitle}>Trận đấu sắp tới</Text>
            <TouchableOpacity
              onPress={() => (navigation as any).navigate("Schedule")}
            >
              <Text style={homeScreenStyles.seeAllText}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>

          {upcomingMatches.map((match) => (
            <MatchCard
              key={match.id}
              match={match}
              variant="compact"
              showTournament={false}
              onPress={() =>
                (navigation as any).navigate("MatchDetail", { id: match.id })
              }
            />
          ))}
        </View>

        {/* Stats Cards */}
        <View style={homeScreenStyles.section}>
          <View style={homeScreenStyles.statsRow}>
            <View style={homeScreenStyles.statCard}>
              <Trophy color="#0ea5e9" size={32} />
              <Text style={homeScreenStyles.statValue}>24</Text>
              <Text style={homeScreenStyles.statLabel}>Giải đấu</Text>
            </View>
            <View style={homeScreenStyles.statCard}>
              <Users color="#22c55e" size={32} />
              <Text style={homeScreenStyles.statValue}>1,234</Text>
              <Text style={homeScreenStyles.statLabel}>Vận động viên</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
