import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  CalendarX,
} from "lucide-react-native";
import { MatchCard, EmptyState } from "../../../components";
import { colors as themeColors } from "../../../theme/colors";
import { globalStyles } from "../../../styles/global.styles";
import { scheduleScreenStyles } from "./ScheduleScreenStyle";
import { Match } from "../../../types";
import { colors } from "../../../constants/design-tokens";

const ScheduleScreen: React.FC = () => {
  const navigation = useNavigation();
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedCourt, setSelectedCourt] = useState<string>("all");

  // Generate week dates (7 days from today)
  const getWeekDates = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const weekDates = getWeekDates();

  // Mock court list
  const courts = [
    { id: "all", name: "Tất cả sân" },
    { id: "court1", name: "Sân 1" },
    { id: "court2", name: "Sân 2" },
    { id: "court3", name: "Sân 3" },
    { id: "court4", name: "Sân 4" },
  ];

  // Mock matches
  const mockMatches: Match[] = [
    {
      id: "1",
      tournamentId: "1",
      tournamentName: "Giải Cầu Lông Mở Rộng TP.HCM 2024",
      roundName: "Bảng A",
      scheduledTime: "2024-03-20T09:00:00.000Z",
      courtNumber: "Sân 1",
      status: "scheduled",
      homePlayer: "Nguyễn Văn A",
      awayPlayer: "Trần Văn B",
      homePlayerId: "1",
      awayPlayerId: "2",
    },
    {
      id: "2",
      tournamentId: "1",
      tournamentName: "Giải Cầu Lông Mở Rộng TP.HCM 2024",
      roundName: "Bảng B",
      scheduledTime: "2024-03-20T10:30:00.000Z",
      courtNumber: "Sân 2",
      status: "scheduled",
      homePlayer: "Lê Thị C",
      awayPlayer: "Phạm Thị D",
      homePlayerId: "3",
      awayPlayerId: "4",
    },
    {
      id: "3",
      tournamentId: "1",
      tournamentName: "Giải Cầu Lông Mở Rộng TP.HCM 2024",
      roundName: "Vòng 1/8",
      scheduledTime: "2024-03-20T13:00:00.000Z",
      courtNumber: "Sân 1",
      status: "scheduled",
      homePlayer: "A/B",
      awayPlayer: "C/D",
      homePlayerId: "5",
      awayPlayerId: "6",
    },
    {
      id: "4",
      tournamentId: "1",
      tournamentName: "Giải Cầu Lông Mở Rộng TP.HCM 2024",
      roundName: "Bảng A",
      scheduledTime: "2024-03-20T14:30:00.000Z",
      courtNumber: "Sân 3",
      status: "scheduled",
      homePlayer: "Đặng Văn G",
      awayPlayer: "Bùi Văn H",
      homePlayerId: "7",
      awayPlayerId: "8",
    },
    {
      id: "5",
      tournamentId: "1",
      tournamentName: "Giải Cầu Lông Mở Rộng TP.HCM 2024",
      roundName: "Bảng C",
      scheduledTime: "2024-03-20T16:00:00.000Z",
      courtNumber: "Sân 2",
      status: "scheduled",
      homePlayer: "C/I",
      awayPlayer: "D/J",
      homePlayerId: "9",
      awayPlayerId: "10",
    },
  ];

  // Filter matches by date and court
  const filteredMatches = mockMatches.filter((match) => {
    const matchDate = new Date(match.scheduledTime);
    const isSameDay =
      matchDate.getDate() === selectedDate.getDate() &&
      matchDate.getMonth() === selectedDate.getMonth() &&
      matchDate.getFullYear() === selectedDate.getFullYear();

    const matchesCourt =
      selectedCourt === "all" ||
      match.courtNumber === courts.find((c) => c.id === selectedCourt)?.name;

    return isSameDay && matchesCourt;
  });

  // Group matches by time
  const groupMatchesByTime = () => {
    const groups: { [key: string]: Match[] } = {};
    filteredMatches.forEach((match) => {
      const time = new Date(match.scheduledTime).toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
      });
      if (!groups[time]) {
        groups[time] = [];
      }
      groups[time].push(match);
    });
    return groups;
  };

  const groupedMatches = groupMatchesByTime();
  const timeSlots = Object.keys(groupedMatches).sort();

  const formatDateShort = (date: Date) => {
    return {
      day: date.getDate(),
      weekday: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"][date.getDay()],
    };
  };

  const handleMatchPress = (match: Match) => {
    console.log("Open match detail:", match.id);
    // navigation.navigate("MatchDetail", { matchId: match.id });
  };

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
        style={scheduleScreenStyles.header}
      >
        <View style={scheduleScreenStyles.headerContent}>
          <View style={scheduleScreenStyles.headerTitleRow}>
            <Calendar size={32} color="#fff" />
            <Text style={scheduleScreenStyles.headerTitle}>Lịch thi đấu</Text>
          </View>
          <Text style={scheduleScreenStyles.headerSubtitle}>
            {filteredMatches.length} trận đấu
          </Text>
        </View>
      </LinearGradient>
</View>
      {/* Date Selector */}
      <View style={scheduleScreenStyles.dateSelector}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={scheduleScreenStyles.datesScroll}
        >
          {weekDates.map((date, index) => {
            const dateInfo = formatDateShort(date);
            const isSelected =
              date.getDate() === selectedDate.getDate() &&
              date.getMonth() === selectedDate.getMonth();
            const isToday =
              date.getDate() === today.getDate() &&
              date.getMonth() === today.getMonth();

            return (
              <TouchableOpacity
                key={index}
                style={[
                  scheduleScreenStyles.dateItem,
                  isSelected && scheduleScreenStyles.dateItemSelected,
                ]}
                onPress={() => setSelectedDate(date)}
              >
                <Text
                  style={[
                    scheduleScreenStyles.dateWeekday,
                    isSelected && scheduleScreenStyles.dateTextSelected,
                  ]}
                >
                  {dateInfo.weekday}
                </Text>
                <Text
                  style={[
                    scheduleScreenStyles.dateDay,
                    isSelected && scheduleScreenStyles.dateTextSelected,
                  ]}
                >
                  {dateInfo.day}
                </Text>
                {isToday && !isSelected && (
                  <View style={scheduleScreenStyles.todayDot} />
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Court Filter */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={scheduleScreenStyles.courtFilter}
        style={{ flexGrow: 0, flexShrink: 0 }}
        bounces={false}
      >
        {courts.map((court) => (
          <TouchableOpacity
            key={court.id}
            style={[
              scheduleScreenStyles.courtChip,
              selectedCourt === court.id &&
                scheduleScreenStyles.courtChipSelected,
            ]}
            onPress={() => setSelectedCourt(court.id)}
          >
            <MapPin
              size={16}
              color={
                selectedCourt === court.id
                  ? "#fff"
                  : themeColors.primary.DEFAULT
              }
            />
            <Text
              style={[
                scheduleScreenStyles.courtChipText,
                selectedCourt === court.id &&
                  scheduleScreenStyles.courtChipTextSelected,
              ]}
            >
              {court.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Schedule Timeline */}
      {timeSlots.length > 0 ? (
        <ScrollView
          contentContainerStyle={scheduleScreenStyles.timeline}
          showsVerticalScrollIndicator={false}
        >
          {timeSlots.map((time, index) => (
            <View key={time} style={scheduleScreenStyles.timeSlot}>
              <View style={scheduleScreenStyles.timeLabel}>
                <Clock size={16} color={themeColors.primary.DEFAULT} />
                <Text style={scheduleScreenStyles.timeText}>{time}</Text>
              </View>
              <View style={scheduleScreenStyles.timeMatches}>
                {groupedMatches[time].map((match) => (
                  <MatchCard
                    key={match.id}
                    match={match}
                    variant="compact"
                    onPress={() => handleMatchPress(match)}
                    style={scheduleScreenStyles.matchCard}
                  />
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      ) : (
        <EmptyState
          icon={CalendarX}
          title="Chưa có trận đấu"
          description={`Không có trận đấu nào vào ${selectedDate.getDate()}/${
            selectedDate.getMonth() + 1
          }`}
        />
      )}
    </SafeAreaView>
  );
};

export default ScheduleScreen;
