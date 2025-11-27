import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowLeft, Bell } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { colors as themeColors } from "../../../theme/colors";
import { globalStyles } from "../../../styles/global.styles";
import { FilterChips } from "../../../components/inputs/FilterChips";
import { NotificationList } from "../../../components/lists/NotificationList";
import { EmptyState } from "../../../components/states/EmptyState";
import { notificationCenterScreenStyles } from "./NotificationCenterScreenStyle";
import { Notification } from "../../../types";

const NotificationCenterScreen: React.FC = () => {
  const navigation = useNavigation();

  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  // Mock data - Replace with actual API call
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "n1",
      userId: "user1",
      type: "match",
      title: "Trận đấu sắp bắt đầu",
      message: "Trận đấu của bạn sẽ bắt đầu trong 30 phút tại Sân 1",
      createdAt: "2024-03-20T08:30:00Z",
      isRead: false,
      relatedId: "m1",
    },
    {
      id: "n2",
      userId: "user1",
      type: "tournament",
      title: "Giải đấu mới",
      message: "Giải vô địch quốc gia 2024 đã mở đăng ký",
      createdAt: "2024-03-19T14:00:00Z",
      isRead: false,
      relatedId: "t1",
    },
    {
      id: "n3",
      userId: "user1",
      type: "complaint",
      title: "Khiếu nại được xử lý",
      message: "Khiếu nại của bạn đã được xem xét và giải quyết",
      createdAt: "2024-03-19T10:15:00Z",
      isRead: true,
      relatedId: "c1",
    },
    {
      id: "n4",
      userId: "user1",
      type: "announcement",
      title: "Thông báo quan trọng",
      message: "Lịch thi đấu vòng bán kết đã được cập nhật",
      createdAt: "2024-03-18T16:45:00Z",
      isRead: true,
    },
    {
      id: "n5",
      userId: "user1",
      type: "match",
      title: "Kết quả trận đấu",
      message: "Bạn đã thắng trận đấu với tỷ số 2-1",
      createdAt: "2024-03-18T11:30:00Z",
      isRead: true,
      relatedId: "m2",
    },
    {
      id: "n6",
      userId: "user1",
      type: "tournament",
      title: "Đóng đăng ký giải đấu",
      message: "Giải mùa xuân 2024 sẽ đóng đăng ký vào 22/03",
      createdAt: "2024-03-17T09:00:00Z",
      isRead: true,
      relatedId: "t2",
    },
  ]);

  const filters = [
    { id: "all", label: "Tất cả" },
    { id: "match", label: "Trận đấu" },
    { id: "tournament", label: "Giải đấu" },
    { id: "complaint", label: "Khiếu nại" },
    { id: "announcement", label: "Thông báo" },
  ];

  const filteredNotifications = notifications.filter(
    (notification) =>
      selectedFilter === "all" || notification.type === selectedFilter
  );

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const handleNotificationPress = (notification: Notification) => {
    // Mark as read
    setNotifications((prev) =>
      prev.map((n) => (n.id === notification.id ? { ...n, isRead: true } : n))
    );

    // Navigate to related screen
    if (notification.relatedId) {
      switch (notification.type) {
        case "match":
          (navigation as any).navigate("MatchDetail", {
            id: notification.relatedId,
          });
          break;
        case "tournament":
          (navigation as any).navigate("TournamentDetail", {
            id: notification.relatedId,
          });
          break;
        case "complaint":
          (navigation as any).navigate("ComplaintTracking", {
            id: notification.relatedId,
          });
          break;
      }
    }
  };

  const handleMarkAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  return (
    <SafeAreaView style={globalStyles.flex1} edges={["top"]}>
      <LinearGradient
        colors={[
          themeColors.primary[400],
          themeColors.primary[500],
          themeColors.primary[600],
        ]}
        style={notificationCenterScreenStyles.header}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={notificationCenterScreenStyles.backButton}
        >
          <ArrowLeft size={24} color="#fff" />
        </TouchableOpacity>
        <View style={notificationCenterScreenStyles.headerContent}>
          <Text style={notificationCenterScreenStyles.headerTitle}>
            Thông báo
          </Text>
          {unreadCount > 0 && (
            <View style={notificationCenterScreenStyles.unreadBadge}>
              <Text style={notificationCenterScreenStyles.unreadText}>
                {unreadCount}
              </Text>
            </View>
          )}
        </View>
        <View style={{ width: 24 }} />
      </LinearGradient>

      {/* Filter */}
      <View style={notificationCenterScreenStyles.filterContainer}>
        <FilterChips
          filters={filters}
          selectedFilters={[selectedFilter]}
          onFilterChange={(selected) => setSelectedFilter(selected[0] || "all")}
          multiSelect={false}
        />
      </View>

      {/* Mark all as read */}
      {unreadCount > 0 && (
        <TouchableOpacity
          style={notificationCenterScreenStyles.markAllButton}
          onPress={handleMarkAllAsRead}
        >
          <Text style={notificationCenterScreenStyles.markAllText}>
            Đánh dấu đã đọc tất cả
          </Text>
        </TouchableOpacity>
      )}

      {/* Notification List */}
      <ScrollView
        style={globalStyles.flex1}
        contentContainerStyle={notificationCenterScreenStyles.listContainer}
        showsVerticalScrollIndicator={false}
      >
        {filteredNotifications.length > 0 ? (
          <NotificationList
            notifications={filteredNotifications}
            onNotificationPress={handleNotificationPress}
          />
        ) : (
          <EmptyState
            icon={Bell}
            title="Không có thông báo"
            description="Bạn chưa có thông báo nào trong mục này"
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationCenterScreen;
