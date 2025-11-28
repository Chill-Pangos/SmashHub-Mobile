import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  Calendar,
  MapPin,
  Filter,
  X,
  Clock,
  Search,
} from "lucide-react-native";

import { SearchBar } from "../../../components/inputs/SearchBar";
import {
  FilterChips,
  FilterItem,
} from "../../../components/inputs/FilterChips";
import { DateRangePicker } from "../../../components/inputs/DateRangePicker";
import { MatchList } from "../../../components/lists/MatchList";
import { EmptyState } from "../../../components/states/EmptyState";
import { LoadingSpinner } from "../../../components/states/LoadingSpinner";
import {
  ActionSheet,
  ActionSheetItem,
} from "../../../components/actions/ActionSheet";

import { mockMatches, mockTournaments } from "../../../mockdata/mockData";
import { Match } from "../../../types";
import { colors } from "../../../theme/colors";
import { colors as themeColors } from "../../../theme/colors";
import { iconSizes } from "../../../constants/design-tokens";
import { searchMatchScreenStyles as styles } from "./SearchMatchScreenStyle";

interface SearchHistory {
  id: string;
  query: string;
  timestamp: Date;
}

const SearchMatchScreen: React.FC = () => {
  const navigation = useNavigation() as any;
  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<Match[]>([]);

  // Filter state
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["all"]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [selectedTournament, setSelectedTournament] = useState<string | null>(
    null
  );

  // UI state
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // Mock search history
  const [searchHistory, setSearchHistory] = useState<SearchHistory[]>([
    {
      id: "h1",
      query: "Nguyễn Văn An",
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: "h2",
      query: "Giải Vô Địch",
      timestamp: new Date(Date.now() - 7200000),
    },
    {
      id: "h3",
      query: "Sân 1",
      timestamp: new Date(Date.now() - 86400000),
    },
  ]);

  // Filter options
  const statusFilters: FilterItem[] = [
    { id: "all", label: "Tất cả" },
    { id: "live", label: "Đang diễn ra", count: 2 },
    { id: "scheduled", label: "Sắp tới", count: 5 },
    { id: "completed", label: "Đã kết thúc", count: 10 },
  ];

  // Quick suggestions
  const suggestions = [
    { id: "s1", label: "Trận đang diễn ra", icon: Clock, filter: "live" },
    { id: "s2", label: "Hôm nay", icon: Calendar, filter: "today" },
    { id: "s3", label: "Tuần này", icon: Calendar, filter: "week" },
  ];

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);

    // Simulate API call
    setTimeout(() => {
      const results = mockMatches.filter(
        (match) =>
          match.homePlayer.toLowerCase().includes(query.toLowerCase()) ||
          match.awayPlayer.toLowerCase().includes(query.toLowerCase()) ||
          match.tournamentName.toLowerCase().includes(query.toLowerCase()) ||
          match.courtNumber?.toLowerCase().includes(query.toLowerCase())
      );

      setSearchResults(results);
      setIsSearching(false);

      // Add to history
      if (query.trim()) {
        setSearchHistory((prev) => [
          {
            id: Date.now().toString(),
            query: query.trim(),
            timestamp: new Date(),
          },
          ...prev.slice(0, 9), // Keep last 10
        ]);
      }
    }, 500);
  };

  // Apply filters
  const applyFilters = () => {
    let filtered = searchResults.length > 0 ? searchResults : mockMatches;

    // Status filter
    if (selectedFilters.length > 0 && !selectedFilters.includes("all")) {
      filtered = filtered.filter((match) =>
        selectedFilters.includes(match.status)
      );
    }

    // Date range filter
    if (startDate || endDate) {
      filtered = filtered.filter((match) => {
        const matchDate = new Date(match.scheduledTime);
        if (startDate && matchDate < startDate) return false;
        if (endDate && matchDate > endDate) return false;
        return true;
      });
    }

    return filtered;
  };

  const filteredMatches = applyFilters();

  // Handle quick suggestion
  const handleSuggestion = (filter: string) => {
    const now = new Date();
    switch (filter) {
      case "live":
        setSelectedFilters(["live"]);
        break;
      case "today":
        setStartDate(new Date(now.setHours(0, 0, 0, 0)));
        setEndDate(new Date(now.setHours(23, 59, 59, 999)));
        break;
      case "week":
        const weekStart = new Date(now);
        weekStart.setDate(now.getDate() - now.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);
        weekEnd.setHours(23, 59, 59, 999);
        setStartDate(weekStart);
        setEndDate(weekEnd);
        break;
    }
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedFilters(["all"]);
    setStartDate(undefined);
    setEndDate(undefined);
    setSelectedTournament(null);
  };

  const hasActiveFilters =
    selectedFilters.length > 1 ||
    !selectedFilters.includes("all") ||
    startDate ||
    endDate ||
    selectedTournament;

  const advancedFilterActions: ActionSheetItem[] = [
    {
      id: "date",
      label: "Chọn ngày",
      icon: <Calendar size={20} color={colors.foreground} />,
      onPress: () => {
        setShowAdvancedFilters(false);
        setTimeout(() => setShowDatePicker(true), 300);
      },
    },
    {
      id: "tournament",
      label: "Chọn giải đấu",
      icon: <MapPin size={20} color={colors.foreground} />,
      onPress: () => {
        setShowAdvancedFilters(false);
      },
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* Header */}
        <LinearGradient
          colors={[
            themeColors.primary[400],
            themeColors.primary[500],
            themeColors.primary[600],
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <View style={styles.headerContent}>
            <View style={styles.headerTitleRow}>
              <Search size={32} color="#fff" />
              <Text style={styles.headerTitle}>Tìm kiếm trận đấu</Text>
            </View>
            <Text style={styles.headerSubtitle}>
              {filteredMatches.length} kết quả
            </Text>
          </View>
        </LinearGradient>

        {/* Search Bar */}
        <View style={styles.searchSection}>
          <View style={styles.searchBarWrapper}>
            <SearchBar
              value={searchQuery}
              onChangeText={handleSearch}
              placeholder="Tìm VĐV, giải đấu, sân..."
              loading={isSearching}
              onClear={() => {
                setSearchQuery("");
                setSearchResults([]);
              }}
              autoFocus={false}
            />
          </View>

          {/* Advanced Filter Button */}
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => setShowAdvancedFilters(true)}
            activeOpacity={0.7}
          >
            <Filter size={iconSizes.md} color={colors.primary.DEFAULT} />
            {hasActiveFilters && <View style={styles.filterBadge} />}
          </TouchableOpacity>
        </View>

        {/* Status Filter Chips */}
        <View style={styles.filterChipsContainer}>
          <FilterChips
            filters={statusFilters}
            selectedFilters={selectedFilters}
            onFilterChange={setSelectedFilters}
            multiSelect={false}
            showClearAll={false}
          />
          {hasActiveFilters && (
            <TouchableOpacity
              style={styles.clearFiltersButton}
              onPress={clearAllFilters}
              activeOpacity={0.7}
            >
              <X size={16} color={colors.destructive.DEFAULT} />
              <Text style={styles.clearFiltersText}>Xóa lọc</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Quick Suggestions (when no search) */}
        {/* {!searchQuery && searchResults.length === 0 && (
          <View style={styles.suggestionsContainer}>
            <Text style={styles.sectionTitle}>Tìm kiếm nhanh</Text>
            <View style={styles.suggestionsList}>
              {suggestions.map((suggestion) => (
                <TouchableOpacity
                  key={suggestion.id}
                  style={styles.suggestionCard}
                  onPress={() => handleSuggestion(suggestion.filter)}
                  activeOpacity={0.7}
                >
                  <suggestion.icon
                    size={iconSizes.md}
                    color={colors.primary.DEFAULT}
                  />
                  <Text style={styles.suggestionLabel}>{suggestion.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )} */}

        {/* Search History */}
        {!searchQuery &&
          searchResults.length === 0 &&
          searchHistory.length > 0 && (
            <View style={styles.historyContainer}>
              <View style={styles.historyHeader}>
                <Text style={styles.sectionTitle}>Lịch sử tìm kiếm</Text>
                <TouchableOpacity
                  onPress={() => setSearchHistory([])}
                  activeOpacity={0.7}
                >
                  <Text style={styles.clearHistoryText}>Xóa tất cả</Text>
                </TouchableOpacity>
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.historyList}
              >
                {searchHistory.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.historyChip}
                    onPress={() => handleSearch(item.query)}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.historyChipText}>{item.query}</Text>
                    <TouchableOpacity
                      onPress={() =>
                        setSearchHistory((prev) =>
                          prev.filter((h) => h.id !== item.id)
                        )
                      }
                      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    >
                      <X size={14} color={colors.muted.foreground} />
                    </TouchableOpacity>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          )}

        {/* Results */}
        <View style={styles.resultsContainer}>
          {isSearching ? (
            <LoadingSpinner size="large" />
          ) : filteredMatches.length > 0 ? (
            <>
              <View style={styles.resultsHeader}>
                <Text style={styles.resultsCount}>
                  {filteredMatches.length} kết quả
                </Text>
              </View>
              <MatchList
                matches={filteredMatches}
                groupBy="date"
                onMatchPress={(match) =>
                  navigation.navigate("MatchDetail", { id: match.id })
                }
                showTournament
              />
            </>
          ) : searchQuery || hasActiveFilters ? (
            <EmptyState
              variant="no-results"
              title="Không tìm thấy trận đấu"
              description="Thử tìm kiếm với từ khóa khác hoặc điều chỉnh bộ lọc"
              actionText="Xóa bộ lọc"
              onAction={clearAllFilters}
            />
          ) : (
            <EmptyState
              variant="no-data"
              title="Tìm kiếm trận đấu"
              description="Nhập tên VĐV, giải đấu hoặc sân để tìm kiếm"
            />
          )}
        </View>

        {/* Date Picker Modal */}
        {showDatePicker && (
          <View style={styles.modalOverlay}>
            <View style={styles.datePickerContainer}>
              <DateRangePicker
                startDate={startDate}
                endDate={endDate}
                onChange={(start, end) => {
                  setStartDate(start);
                  setEndDate(end);
                }}
                showPresets
              />
              <TouchableOpacity
                style={styles.datePickerCloseButton}
                onPress={() => setShowDatePicker(false)}
              >
                <Text style={styles.datePickerCloseText}>Đóng</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Advanced Filters Action Sheet */}
        <ActionSheet
          visible={showAdvancedFilters}
          onClose={() => setShowAdvancedFilters(false)}
          title="Bộ lọc nâng cao"
          description="Chọn tiêu chí lọc trận đấu"
          actions={advancedFilterActions}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SearchMatchScreen;
