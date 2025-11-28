import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  Heart,
  Share2,
  Calendar,
  Bell,
  Trash2,
  CheckSquare,
  Square,
} from "lucide-react-native";

import { SearchBar } from "../../../components/inputs/SearchBar";
import { TabBar, TabItem } from "../../../components/navigation/TabBar";
import { MatchList } from "../../../components/lists/MatchList";
import { EmptyState } from "../../../components/states/EmptyState";
import { LoadingSpinner } from "../../../components/states/LoadingSpinner";
import {
  ActionSheet,
  ActionSheetItem,
} from "../../../components/actions/ActionSheet";
import { FloatingActionButton } from "../../../components/actions/FloatingActionButton";

import { mockMatches } from "../../../mockdata/mockData";
import { Match } from "../../../types";
import { colors } from "../../../theme/colors";
import { iconSizes } from "../../../constants/design-tokens";
import { favoriteMatchesScreenStyles as styles } from "./FavoriteMatchesScreenStyle";

const FavoriteMatchesScreen: React.FC = () => {
  const navigation = useNavigation() as any;
  // State
  const [activeTab, setActiveTab] = useState("upcoming");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMatches, setSelectedMatches] = useState<string[]>([]);
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [showActionsSheet, setShowActionsSheet] = useState(false);

  // Mock favorite matches (first 4 matches as favorites)
  const [favoriteMatchIds, setFavoriteMatchIds] = useState<string[]>([
    "m1",
    "m2",
    "m3",
    "m4",
  ]);

  const favoriteMatches = mockMatches.filter((m) =>
    favoriteMatchIds.includes(m.id)
  );

  // Tab configuration
  const tabs: TabItem[] = [
    {
      id: "upcoming",
      label: "Sắp tới",
      badge: favoriteMatches.filter((m) => m.status === "scheduled").length,
    },
    {
      id: "live",
      label: "Đang diễn",
      badge: favoriteMatches.filter((m) => m.status === "live").length,
    },
    {
      id: "past",
      label: "Đã qua",
      badge: favoriteMatches.filter((m) => m.status === "completed").length,
    },
    {
      id: "all",
      label: "Tất cả",
      badge: favoriteMatches.length,
    },
  ];

  // Filter matches by tab
  const getFilteredMatches = () => {
    let filtered = favoriteMatches;

    // Filter by tab
    switch (activeTab) {
      case "upcoming":
        filtered = filtered.filter((m) => m.status === "scheduled");
        break;
      case "live":
        filtered = filtered.filter((m) => m.status === "live");
        break;
      case "past":
        filtered = filtered.filter((m) => m.status === "completed");
        break;
    }

    // Filter by search
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (m) =>
          m.homePlayer.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.awayPlayer.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.tournamentName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredMatches = getFilteredMatches();

  // Handle toggle favorite
  const toggleFavorite = (matchId: string) => {
    setFavoriteMatchIds((prev) =>
      prev.includes(matchId)
        ? prev.filter((id) => id !== matchId)
        : [...prev, matchId]
    );
  };

  // Handle selection
  const toggleSelect = (matchId: string) => {
    setSelectedMatches((prev) =>
      prev.includes(matchId)
        ? prev.filter((id) => id !== matchId)
        : [...prev, matchId]
    );
  };

  const selectAll = () => {
    setSelectedMatches(filteredMatches.map((m) => m.id));
  };

  const deselectAll = () => {
    setSelectedMatches([]);
  };

  // Handle bulk actions
  const handleRemoveSelected = () => {
    Alert.alert(
      "Xóa khỏi yêu thích",
      `Bạn có chắc muốn xóa ${selectedMatches.length} trận đấu khỏi danh sách yêu thích?`,
      [
        { text: "Hủy", style: "cancel" },
        {
          text: "Xóa",
          style: "destructive",
          onPress: () => {
            setFavoriteMatchIds((prev) =>
              prev.filter((id) => !selectedMatches.includes(id))
            );
            setSelectedMatches([]);
            setIsSelectionMode(false);
          },
        },
      ]
    );
  };

  const handleShareSelected = () => {
    Alert.alert(
      "Chia sẻ",
      `Chia sẻ ${selectedMatches.length} trận đấu yêu thích`
    );
    setShowActionsSheet(false);
  };

  const handleAddToCalendar = () => {
    Alert.alert(
      "Thêm vào lịch",
      `Thêm ${selectedMatches.length} trận đấu vào lịch`
    );
    setShowActionsSheet(false);
  };

  const handleSetNotifications = () => {
    Alert.alert(
      "Đặt thông báo",
      `Đặt thông báo cho ${selectedMatches.length} trận đấu`
    );
    setShowActionsSheet(false);
  };

  // Action sheet items
  const actionSheetItems: ActionSheetItem[] = [
    {
      id: "share",
      label: "Chia sẻ",
      icon: <Share2 size={20} color={colors.foreground} />,
      onPress: handleShareSelected,
      disabled: selectedMatches.length === 0,
    },
    {
      id: "calendar",
      label: "Thêm vào lịch",
      icon: <Calendar size={20} color={colors.foreground} />,
      onPress: handleAddToCalendar,
      disabled: selectedMatches.length === 0,
    },
    {
      id: "notifications",
      label: "Đặt thông báo",
      icon: <Bell size={20} color={colors.foreground} />,
      onPress: handleSetNotifications,
      disabled: selectedMatches.length === 0,
    },
    {
      id: "remove",
      label: "Xóa khỏi yêu thích",
      icon: <Trash2 size={20} color={colors.destructive.DEFAULT} />,
      onPress: handleRemoveSelected,
      destructive: true,
      disabled: selectedMatches.length === 0,
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          <Heart
            size={24}
            color={colors.primary.DEFAULT}
            fill={colors.primary.DEFAULT}
          />
          <Text style={styles.headerTitle}>Trận yêu thích</Text>
        </View>

        {isSelectionMode && (
          <View style={styles.selectionActions}>
            <TouchableOpacity
              onPress={
                selectedMatches.length === filteredMatches.length
                  ? deselectAll
                  : selectAll
              }
              style={styles.selectionButton}
              activeOpacity={0.7}
            >
              {selectedMatches.length === filteredMatches.length ? (
                <CheckSquare size={20} color={colors.primary.DEFAULT} />
              ) : (
                <Square size={20} color={colors.muted.foreground} />
              )}
              <Text style={styles.selectionButtonText}>
                {selectedMatches.length === filteredMatches.length
                  ? "Bỏ chọn tất cả"
                  : "Chọn tất cả"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsSelectionMode(false);
                setSelectedMatches([]);
              }}
              style={styles.cancelButton}
              activeOpacity={0.7}
            >
              <Text style={styles.cancelButtonText}>Hủy</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Tìm trong yêu thích..."
          onClear={() => setSearchQuery("")}
        />
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TabBar
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          variant="underline"
          scrollable
        />
      </View>

      {/* Selection Info */}
      {isSelectionMode && selectedMatches.length > 0 && (
        <View style={styles.selectionInfo}>
          <Text style={styles.selectionInfoText}>
            Đã chọn {selectedMatches.length} trận
          </Text>
        </View>
      )}

      {/* Matches List */}
      <View style={styles.content}>
        {isLoading ? (
          <LoadingSpinner size="large" />
        ) : filteredMatches.length > 0 ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
          >
            <MatchList
              matches={filteredMatches}
              groupBy="tournament"
              onMatchPress={(match) => {
                if (isSelectionMode) {
                  toggleSelect(match.id);
                } else {
                  navigation.navigate("MatchDetail", { id: match.id });
                }
              }}
              showTournament={false}
            />
          </ScrollView>
        ) : searchQuery.trim() ? (
          <EmptyState
            variant="no-results"
            title="Không tìm thấy"
            description="Không có trận đấu nào phù hợp với tìm kiếm"
            actionText="Xóa tìm kiếm"
            onAction={() => setSearchQuery("")}
          />
        ) : activeTab === "all" ? (
          <EmptyState
            variant="no-data"
            title="Chưa có trận yêu thích"
            description="Bấm vào biểu tượng trái tim ở màn hình trận đấu để thêm vào danh sách yêu thích"
            actionText="Tìm trận đấu"
            onAction={() => navigation.navigate("SearchMatch")}
          />
        ) : (
          <EmptyState
            variant="no-data"
            title="Không có trận nào"
            description={`Không có trận yêu thích nào ${
              activeTab === "upcoming"
                ? "sắp tới"
                : activeTab === "live"
                ? "đang diễn"
                : "đã qua"
            }`}
          />
        )}
      </View>

      {/* FAB - Actions or Select Mode */}
      {filteredMatches.length > 0 && !isSelectionMode && (
        <FloatingActionButton
          icon={<Heart size={24} color="#ffffff" />}
          label="Thao tác"
          onPress={() => setIsSelectionMode(true)}
          position="bottom-right"
        />
      )}

      {isSelectionMode && selectedMatches.length > 0 && (
        <FloatingActionButton
          icon={<Share2 size={24} color="#ffffff" />}
          label="Thao tác"
          onPress={() => setShowActionsSheet(true)}
          position="bottom-right"
        />
      )}

      {/* Action Sheet */}
      <ActionSheet
        visible={showActionsSheet}
        onClose={() => setShowActionsSheet(false)}
        title="Thao tác với trận đã chọn"
        description={`${selectedMatches.length} trận đấu được chọn`}
        actions={actionSheetItems}
      />
    </SafeAreaView>
  );
};

export default FavoriteMatchesScreen;
