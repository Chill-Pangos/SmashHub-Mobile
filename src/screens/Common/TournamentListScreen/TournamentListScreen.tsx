import React, { useState } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Trophy, Grid, List, SearchX } from "lucide-react-native";
import {
  TournamentCard,
  FilterChips,
  SearchBar,
  EmptyState,
} from "../../../components";
import { colors as themeColors } from "../../../theme/colors";
import { globalStyles } from "../../../styles/global.styles";
import { tournamentListScreenStyles } from "./TournamentListScreenStyle";
import { Tournament } from "../../../types";
import { colors } from "../../../constants/design-tokens";

type FilterItem = {
  id: string;
  label: string;
  count?: number;
};

const TournamentListScreen: React.FC = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string[]>(["all"]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");

  // Mock tournament data
  const mockTournaments: Tournament[] = [
    {
      id: "1",
      name: "Giải Cầu Lông Mở Rộng TP.HCM 2024",
      description: "Giải đấu cầu lông lớn nhất năm",
      startDate: "2024-04-15T00:00:00.000Z",
      endDate: "2024-04-20T00:00:00.000Z",
      location: "Nhà thi đấu Phú Thọ, TP.HCM",
      status: "registration_open",
      registrationDeadline: "2024-03-30T00:00:00.000Z",
      maxParticipants: 200,
      currentParticipants: 152,
      format: "Đơn nam, Đơn nữ, Đôi nam, Đôi nữ, Đôi nam nữ",
      bannerUrl: "https://picsum.photos/seed/tournament1/400/200",
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-03-15T00:00:00.000Z",
    },
    {
      id: "2",
      name: "Giải Vô Địch Sinh Viên 2024",
      description: "Giải đấu dành cho sinh viên các trường đại học",
      startDate: "2024-05-10T00:00:00.000Z",
      endDate: "2024-05-15T00:00:00.000Z",
      location: "Đại học Thể dục Thể thao TP.HCM",
      status: "registration_open",
      registrationDeadline: "2024-04-25T00:00:00.000Z",
      maxParticipants: 150,
      currentParticipants: 89,
      format: "Đơn nam, Đơn nữ, Đôi nam nữ",
      bannerUrl: "https://picsum.photos/seed/tournament2/400/200",
      createdAt: "2024-01-15T00:00:00.000Z",
      updatedAt: "2024-03-15T00:00:00.000Z",
    },
    {
      id: "3",
      name: "Giải Cầu Lông Cúp Mùa Xuân",
      description: "Giải đấu chào mừng Tết Nguyên Đán",
      startDate: "2024-02-15T00:00:00.000Z",
      endDate: "2024-02-18T00:00:00.000Z",
      location: "Cung Văn hóa Lao động, TP.HCM",
      status: "completed",
      registrationDeadline: "2024-01-30T00:00:00.000Z",
      maxParticipants: 100,
      currentParticipants: 100,
      format: "Đơn nam, Đơn nữ",
      bannerUrl: "https://picsum.photos/seed/tournament3/400/200",
      createdAt: "2023-12-01T00:00:00.000Z",
      updatedAt: "2024-02-18T00:00:00.000Z",
    },
    {
      id: "4",
      name: "Giải Trẻ U19 Toàn Quốc",
      description: "Giải đấu dành cho VĐV dưới 19 tuổi",
      startDate: "2024-06-01T00:00:00.000Z",
      endDate: "2024-06-05T00:00:00.000Z",
      location: "Cung thể thao Tiên Sơn, Đà Nẵng",
      status: "registration_open",
      registrationDeadline: "2024-05-15T00:00:00.000Z",
      maxParticipants: 120,
      currentParticipants: 45,
      format: "Đơn nam, Đơn nữ, Đôi nam, Đôi nữ",
      createdAt: "2024-02-01T00:00:00.000Z",
      updatedAt: "2024-03-15T00:00:00.000Z",
    },
    {
      id: "5",
      name: "Giải Cầu Lông Đồng Nai Mở Rộng",
      description: "Giải đấu khu vực phía Nam",
      startDate: "2024-03-20T00:00:00.000Z",
      endDate: "2024-03-24T00:00:00.000Z",
      location: "Nhà thi đấu Đồng Nai",
      status: "ongoing",
      registrationDeadline: "2024-03-05T00:00:00.000Z",
      maxParticipants: 180,
      currentParticipants: 180,
      format: "Đơn nam, Đơn nữ, Đôi nam, Đôi nữ, Đôi nam nữ",
      bannerUrl: "https://picsum.photos/seed/tournament5/400/200",
      createdAt: "2024-01-10T00:00:00.000Z",
      updatedAt: "2024-03-20T00:00:00.000Z",
    },
  ];

  // Filter options
  const statusFilters: FilterItem[] = [
    { id: "all", label: "Tất cả", count: mockTournaments.length },
    {
      id: "registration_open",
      label: "Đang đăng ký",
      count: mockTournaments.filter((t) => t.status === "registration_open")
        .length,
    },
    {
      id: "registration_closed",
      label: "Sắp diễn ra",
      count: mockTournaments.filter((t) => t.status === "registration_closed")
        .length,
    },
    {
      id: "ongoing",
      label: "Đang diễn ra",
      count: mockTournaments.filter((t) => t.status === "ongoing").length,
    },
    {
      id: "completed",
      label: "Đã kết thúc",
      count: mockTournaments.filter((t) => t.status === "completed").length,
    },
  ];

  // Filter tournaments
  const filteredTournaments = mockTournaments.filter((tournament) => {
    // Search filter
    if (
      searchQuery &&
      !tournament.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    // Status filter
    if (
      selectedStatus.length > 0 &&
      !selectedStatus.includes("all") &&
      !selectedStatus.includes(tournament.status)
    ) {
      return false;
    }
    return true;
  });

  const handleTournamentPress = (tournament: Tournament) => {
    console.log("Open tournament detail:", tournament.id);
    // navigation.navigate("TournamentDetail", { tournamentId: tournament.id });
  };

  const renderTournamentItem = ({ item }: { item: Tournament }) => (
    <TournamentCard
      tournament={item}
      variant={viewMode === "grid" ? "compact" : "full"}
      onPress={() => handleTournamentPress(item)}
      showActions
      style={
        viewMode === "grid"
          ? tournamentListScreenStyles.gridItem
          : tournamentListScreenStyles.listItem
      }
    />
  );

  return (
    <SafeAreaView style={globalStyles.flex1} edges={["top"]}>
      {/* Header */}
      <View style={{ backgroundColor: colors.background }}>
        <LinearGradient
          colors={[
            themeColors.primary[400],
            themeColors.primary[500],
            themeColors.primary[600],
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={tournamentListScreenStyles.header}
        >
          <View style={tournamentListScreenStyles.headerContent}>
            <View style={tournamentListScreenStyles.headerTitleRow}>
              <Trophy size={32} color="#fff" />
              <Text style={tournamentListScreenStyles.headerTitle}>
                Giải đấu
              </Text>
            </View>
            <Text style={tournamentListScreenStyles.headerSubtitle}>
              {filteredTournaments.length} giải đấu
            </Text>
          </View>
        </LinearGradient>
      </View>

      {/* Search & View Toggle */}
      <View style={tournamentListScreenStyles.toolbar}>
        <SearchBar
          placeholder="Tìm kiếm giải đấu..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <View style={tournamentListScreenStyles.viewToggle}>
          <View
            style={[
              tournamentListScreenStyles.viewButton,
              viewMode === "grid" &&
                tournamentListScreenStyles.viewButtonActive,
            ]}
          >
            <Grid
              size={20}
              color={
                viewMode === "grid" ? themeColors.primary.DEFAULT : "#9ca3af"
              }
            />
          </View>
          <View
            style={[
              tournamentListScreenStyles.viewButton,
              viewMode === "list" &&
                tournamentListScreenStyles.viewButtonActive,
            ]}
          >
            <List
              size={20}
              color={
                viewMode === "list" ? themeColors.primary.DEFAULT : "#9ca3af"
              }
            />
          </View>
        </View>
      </View>

      {/* Filter Chips */}
      <FilterChips
        filters={statusFilters}
        selectedFilters={selectedStatus}
        onFilterChange={setSelectedStatus}
        multiSelect={false}
        showClearAll
        scrollable={true}
        style={{ backgroundColor: colors.background }}
      />

      {/* Tournament List */}
      {filteredTournaments.length > 0 ? (
        <FlatList
          data={filteredTournaments}
          renderItem={renderTournamentItem}
          keyExtractor={(item) => item.id}
          numColumns={viewMode === "grid" ? 2 : 1}
          key={viewMode}
          contentContainerStyle={tournamentListScreenStyles.listContent}
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: colors.background }}
        />
      ) : (
        <EmptyState
          icon={SearchX}
          title="Không tìm thấy giải đấu"
          description="Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm"
        />
      )}
    </SafeAreaView>
  );
};

export default TournamentListScreen;
