import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Calendar,
  Clock,
  MapPin,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
} from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  MatchCard,
  StatusBadge,
} from "../../../components";
import { colors as themeColors } from "../../../theme/colors";
import { globalStyles } from "../../../styles/global.styles";
import { myScheduleScreenStyles } from "./MyScheduleScreenStyle";
import { Match } from "../../../types";

const MyScheduleScreen: React.FC = () => {
  const navigation = useNavigation();
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);

  // Mock data - upcoming matches
  const upcomingMatches: Match[] = [
    {
      id: "m1",
      tournamentId: "t1",
      tournamentName: "Giải Cầu Lông Mở Rộng TP.HCM 2024",
      roundName: "Vòng 16",
      homePlayer: "Nguyễn Văn A",
      awayPlayer: "Bạn",
      homePlayerId: "p1",
      awayPlayerId: "current-user",
      scheduledTime: "2024-01-04T09:00:00.000Z",
      courtNumber: "Sân 1",
      status: "scheduled",
    },
    {
      id: "m2",
      tournamentId: "t2",
      tournamentName: "Giải Vô Địch Sinh Viên 2024",
      roundName: "Tứ kết",
      homePlayer: "Bạn",
      awayPlayer: "Trần Văn B",
      homePlayerId: "current-user",
      awayPlayerId: "p2",
      scheduledTime: "2024-01-05T14:00:00.000Z",
      courtNumber: "Sân 2",
      status: "scheduled",
    },
    {
      id: "m3",
      tournamentId: "t1",
      tournamentName: "Giải Cầu Lông Mở Rộng TP.HCM 2024",
      roundName: "Bán kết",
      homePlayer: "Lê Văn C",
      awayPlayer: "Bạn",
      homePlayerId: "p3",
      awayPlayerId: "current-user",
      scheduledTime: "2024-01-07T10:30:00.000Z",
      courtNumber: "Sân 3",
      status: "scheduled",
    },
  ];

  // Get next match
  const nextMatch = upcomingMatches[0];

  // Format date for display
  const formatDate = (date: Date): string => {
    const days = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
    const day = days[date.getDay()];
    return `${day}, ${date.getDate()}/${date.getMonth() + 1}`;
  };

  // Format time
  const formatTime = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Get time until match
  const getTimeUntil = (dateString: string): string => {
    const matchDate = new Date(dateString);
    const diff = matchDate.getTime() - Date.now();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} ngày nữa`;
    if (hours > 0) return `${hours} giờ nữa`;
    return "Sắp bắt đầu";
  };

  // Get week dates
  const getWeekDates = () => {
    const dates = [];
    const start = new Date(today);
    start.setDate(start.getDate() - 3);

    for (let i = 0; i < 7; i++) {
      const date = new Date(start);
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const weekDates = getWeekDates();

  return (
    <SafeAreaView edges={["top"]}>
      <ScrollView>
        {/* Header */}
        <LinearGradient
          colors={[
            themeColors.primary[400],
            themeColors.primary.DEFAULT,
            themeColors.primary[600],
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={myScheduleScreenStyles.header}
        >
          <View style={globalStyles.flexRowBetween}>
            <Text style={myScheduleScreenStyles.headerTitle}>
              Lịch Thi Đấu
            </Text>
            <Calendar size={24} color="#fff" />
          </View>

          {/* Week Selector */}
          <View style={myScheduleScreenStyles.weekSelector}>
            <TouchableOpacity style={myScheduleScreenStyles.weekArrow}>
              <ChevronLeft size={20} color="#fff" />
            </TouchableOpacity>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={globalStyles.flex1}
            >
              {weekDates.map((date, index) => {
                const isSelected =
                  date.toDateString() === selectedDate.toDateString();
                const isToday = date.toDateString() === today.toDateString();
                return (
                  <TouchableOpacity
                    key={index}
                    style={[
                      myScheduleScreenStyles.dateItem,
                      isSelected && myScheduleScreenStyles.dateItemSelected,
                    ]}
                    onPress={() => setSelectedDate(date)}
                  >
                    <Text
                      style={[
                        myScheduleScreenStyles.dateDay,
                        isSelected && myScheduleScreenStyles.dateDaySelected,
                      ]}
                    >
                      {formatDate(date).split(",")[0]}
                    </Text>
                    <Text
                      style={[
                        myScheduleScreenStyles.dateNumber,
                        isSelected && myScheduleScreenStyles.dateNumberSelected,
                      ]}
                    >
                      {date.getDate()}
                    </Text>
                    {isToday && (
                      <View style={myScheduleScreenStyles.todayDot} />
                    )}
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            <TouchableOpacity style={myScheduleScreenStyles.weekArrow}>
              <ChevronRight size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Next Match Card */}
        {nextMatch && (
          <View style={[globalStyles.px4, globalStyles.py4]}>
            <Text style={myScheduleScreenStyles.sectionTitle}>
              Trận Đấu Tiếp Theo
            </Text>
            <View
              style={[
                globalStyles.card,
                globalStyles.mt3,
                myScheduleScreenStyles.nextMatchCard,
              ]}
            >
              <LinearGradient
                colors={[themeColors.primary[50], "#ffffff"]}
                style={myScheduleScreenStyles.nextMatchGradient}
              >
                {/* Tournament Info */}
                <View style={globalStyles.flexRowBetween}>
                  <View style={globalStyles.flex1}>
                    <Text style={myScheduleScreenStyles.nextMatchTournament}>
                      {nextMatch.tournamentName}
                    </Text>
                    <Text style={myScheduleScreenStyles.nextMatchRound}>
                      {nextMatch.roundName}
                    </Text>
                  </View>
                  <StatusBadge status="scheduled" />
                </View>

                {/* Time Until Match */}
                <View style={myScheduleScreenStyles.countdownContainer}>
                  <Clock size={32} color={themeColors.primary.DEFAULT} />
                  <View style={globalStyles.ml3}>
                    <Text style={myScheduleScreenStyles.countdownLabel}>
                      Thời gian còn lại
                    </Text>
                    <Text style={myScheduleScreenStyles.countdownTime}>
                      {getTimeUntil(nextMatch.scheduledTime)}
                    </Text>
                  </View>
                </View>

                {/* Match Details */}
                <View style={myScheduleScreenStyles.nextMatchDetails}>
                  <View style={globalStyles.flexRowCenter}>
                    <Clock size={16} color={themeColors.muted.foreground} />
                    <Text style={myScheduleScreenStyles.detailText}>
                      {formatTime(nextMatch.scheduledTime)}
                    </Text>
                  </View>
                  <View style={globalStyles.flexRowCenter}>
                    <MapPin size={16} color={themeColors.muted.foreground} />
                    <Text style={myScheduleScreenStyles.detailText}>
                      {nextMatch.courtNumber}
                    </Text>
                  </View>
                </View>

                {/* Players */}
                <View style={myScheduleScreenStyles.playersContainer}>
                  <View style={myScheduleScreenStyles.playerBox}>
                    <Text style={myScheduleScreenStyles.playerLabel}>
                      {nextMatch.homePlayerId === "current-user"
                        ? "Bạn"
                        : nextMatch.homePlayer}
                    </Text>
                  </View>
                  <Text style={myScheduleScreenStyles.vsText}>VS</Text>
                  <View style={myScheduleScreenStyles.playerBox}>
                    <Text style={myScheduleScreenStyles.playerLabel}>
                      {nextMatch.awayPlayerId === "current-user"
                        ? "Bạn"
                        : nextMatch.awayPlayer}
                    </Text>
                  </View>
                </View>

                {/* Action Button */}
                <TouchableOpacity
                  style={myScheduleScreenStyles.viewDetailsButton}
                  onPress={() => navigation.navigate("MatchDetail" as never)}
                >
                  <LinearGradient
                    colors={[
                      themeColors.primary.DEFAULT,
                      themeColors.primary[600],
                    ]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={myScheduleScreenStyles.viewDetailsGradient}
                  >
                    <Text style={myScheduleScreenStyles.viewDetailsText}>
                      Xem Chi Tiết
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </LinearGradient>
            </View>

            {/* Preparation Checklist */}
            <View
              style={[
                globalStyles.card,
                globalStyles.mt4,
                myScheduleScreenStyles.checklistCard,
              ]}
            >
              <View style={globalStyles.flexRowCenter}>
                <AlertCircle
                  size={20}
                  color={themeColors.status.warning}
                  style={globalStyles.mr2}
                />
                <Text style={myScheduleScreenStyles.checklistTitle}>
                  Danh Sách Chuẩn Bị
                </Text>
              </View>

              {["Mang vợt", "Kiểm tra giày", "Đến sân sớm 15 phút"].map(
                (item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={myScheduleScreenStyles.checklistItem}
                  >
                    <View style={myScheduleScreenStyles.checkbox} />
                    <Text style={myScheduleScreenStyles.checklistText}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                )
              )}
            </View>
          </View>
        )}

        {/* All Upcoming Matches */}
        <View style={[globalStyles.px4, globalStyles.pb6]}>
          <Text style={myScheduleScreenStyles.sectionTitle}>
            Lịch Thi Đấu Sắp Tới
          </Text>
          {upcomingMatches.slice(1).map((match) => (
            <View key={match.id} style={globalStyles.mt3}>
              <MatchCard match={match} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyScheduleScreen;
