import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import {
  Bell,
  Trophy,
  AlertCircle,
  Megaphone,
  X,
  Dumbbell,
  Star,
} from "lucide-react-native";
import { Notification } from "../../types";
import { formatRelativeTime } from "../../utils/format";
import { EmptyState } from "../states/EmptyState";
import { LoadingSpinner } from "../states/LoadingSpinner";
import { colors, iconSizes } from "../../constants/design-tokens";
import { Swipeable } from "react-native-gesture-handler";

/**
 * NotificationList Props
 */
export interface NotificationListProps {
  /** Array of notifications to display */
  notifications: Notification[];
  /** Callback when notification is pressed */
  onNotificationPress?: (notification: Notification) => void;
  /** Callback when notification is marked as read */
  onMarkAsRead?: (notificationId: string) => void;
  /** Callback when notification is deleted */
  onDelete?: (notificationId: string) => void;
  /** Group notifications by date */
  groupByDate?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Refreshing state */
  refreshing?: boolean;
  /** Callback when pull to refresh */
  onRefresh?: () => void;
  /** Callback when end is reached */
  onEndReached?: () => void;
  /** Show swipe actions */
  showSwipeActions?: boolean;
  /** Custom className */
  className?: string;
}

/**
 * Grouped notifications
 */
interface GroupedNotifications {
  title: string;
  data: Notification[];
}

/**
 * NotificationList Component
 *
 * Displays list of notifications with swipe actions and grouping.
 * Used in 3+ screens for notification center.
 *
 * @example
 * ```tsx
 * <NotificationList
 *   notifications={mockNotifications}
 *   groupByDate
 *   showSwipeActions
 *   onNotificationPress={(notif) => handlePress(notif)}
 *   onMarkAsRead={(id) => markAsRead(id)}
 *   onDelete={(id) => deleteNotification(id)}
 * />
 * ```
 */
export const NotificationList: React.FC<NotificationListProps> = ({
  notifications,
  onNotificationPress,
  onMarkAsRead,
  onDelete,
  groupByDate = false,
  loading = false,
  refreshing = false,
  onRefresh,
  onEndReached,
  showSwipeActions = true,
  className = "",
}) => {
  /**
   * Get icon for notification type
   */
  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "match":
        return <Trophy size={iconSizes.md} color={colors.primary[500]} />;
      case "tournament":
        return <Trophy size={iconSizes.md} color={colors.warning[500]} />;
      case "complaint":
        return <AlertCircle size={iconSizes.md} color={colors.error[500]} />;
      case "announcement":
        return <Megaphone size={iconSizes.md} color={colors.info[500]} />;
      case "training":
        return <Dumbbell size={iconSizes.md} color={colors.success[500]} />;
      case "evaluation":
        return <Star size={iconSizes.md} color={colors.accent[500]} />;
      default:
        return <Bell size={iconSizes.md} color={colors.gray[500]} />;
    }
  };

  /**
   * Group notifications by date
   */
  const groupNotifications = (): GroupedNotifications[] => {
    if (!groupByDate) {
      return [{ title: "", data: notifications }];
    }

    const groups: { [key: string]: Notification[] } = {};
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    notifications.forEach((notification) => {
      const notifDate = new Date(notification.createdAt);
      const notifDay = new Date(
        notifDate.getFullYear(),
        notifDate.getMonth(),
        notifDate.getDate()
      );

      let groupKey: string;
      if (notifDay.getTime() === today.getTime()) {
        groupKey = "Hôm nay";
      } else if (notifDay.getTime() === yesterday.getTime()) {
        groupKey = "Hôm qua";
      } else {
        const daysAgo = Math.floor(
          (today.getTime() - notifDay.getTime()) / (1000 * 60 * 60 * 24)
        );
        if (daysAgo < 7) {
          groupKey = `${daysAgo} ngày trước`;
        } else {
          groupKey = "Cũ hơn";
        }
      }

      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(notification);
    });

    const order = ["Hôm nay", "Hôm qua"];
    return Object.entries(groups)
      .sort(([a], [b]) => {
        const aIndex = order.indexOf(a);
        const bIndex = order.indexOf(b);
        if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
        if (aIndex !== -1) return -1;
        if (bIndex !== -1) return 1;
        return a.localeCompare(b);
      })
      .map(([title, data]) => ({ title, data }));
  };

  /**
   * Render swipe actions
   */
  const renderRightActions = (notification: Notification) => (
    <View className="flex-row">
      {!notification.isRead && onMarkAsRead && (
        <TouchableOpacity
          onPress={() => onMarkAsRead(notification.id)}
          className="bg-primary-500 justify-center px-6"
          activeOpacity={0.7}
        >
          <Bell size={iconSizes.md} color="#fff" />
          <Text className="text-white text-xs mt-1">Đã đọc</Text>
        </TouchableOpacity>
      )}
      {onDelete && (
        <TouchableOpacity
          onPress={() => onDelete(notification.id)}
          className="bg-red-500 justify-center px-6"
          activeOpacity={0.7}
        >
          <X size={iconSizes.md} color="#fff" />
          <Text className="text-white text-xs mt-1">Xóa</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  /**
   * Render notification item
   */
  const renderNotification = (notification: Notification) => {
    const content = (
      <TouchableOpacity
        onPress={() => onNotificationPress?.(notification)}
        className={`flex-row p-4 border-b border-gray-200 dark:border-gray-700 ${
          !notification.isRead
            ? "bg-primary-50 dark:bg-primary-900/20"
            : "bg-white dark:bg-gray-800"
        }`}
        activeOpacity={0.7}
      >
        {/* Icon */}
        <View className="mr-3">{getNotificationIcon(notification.type)}</View>

        {/* Content */}
        <View className="flex-1">
          <Text
            className={`text-base mb-1 ${
              !notification.isRead
                ? "font-semibold text-gray-900 dark:text-white"
                : "text-gray-700 dark:text-gray-300"
            }`}
            numberOfLines={2}
          >
            {notification.title}
          </Text>
          <Text
            className="text-sm text-gray-600 dark:text-gray-400 mb-2"
            numberOfLines={2}
          >
            {notification.message}
          </Text>
          <Text className="text-xs text-gray-500 dark:text-gray-500">
            {formatRelativeTime(notification.createdAt)}
          </Text>
        </View>

        {/* Unread Badge */}
        {!notification.isRead && (
          <View className="ml-2">
            <View className="w-2 h-2 bg-primary-500 rounded-full" />
          </View>
        )}
      </TouchableOpacity>
    );

    if (showSwipeActions && (onMarkAsRead || onDelete)) {
      return (
        <Swipeable
          key={notification.id}
          renderRightActions={() => renderRightActions(notification)}
          overshootRight={false}
        >
          {content}
        </Swipeable>
      );
    }

    return <View key={notification.id}>{content}</View>;
  };

  /**
   * Render group
   */
  const renderGroup = ({ item: group }: { item: GroupedNotifications }) => (
    <View>
      {group.title && (
        <View className="bg-gray-100 dark:bg-gray-900 px-4 py-2">
          <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {group.title}
          </Text>
        </View>
      )}
      {group.data.map(renderNotification)}
    </View>
  );

  const groupedNotifications = groupNotifications();

  // Loading state
  if (loading && notifications.length === 0) {
    return (
      <View className={`flex-1 ${className}`}>
        <LoadingSpinner overlay={false} />
      </View>
    );
  }

  // Empty state
  if (!loading && notifications.length === 0) {
    return (
      <View className={`flex-1 ${className}`}>
        <EmptyState
          variant="no-data"
          icon={Bell}
          title="Chưa có thông báo"
          description="Bạn sẽ nhận được thông báo về trận đấu, giải đấu và các hoạt động khác tại đây"
        />
      </View>
    );
  }

  return (
    <FlatList
      data={groupedNotifications}
      renderItem={renderGroup}
      keyExtractor={(item, index) => `${item.title}-${index}`}
      className={className}
      refreshControl={
        onRefresh ? (
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.primary[500]}
          />
        ) : undefined
      }
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      showsVerticalScrollIndicator={false}
    />
  );
};
