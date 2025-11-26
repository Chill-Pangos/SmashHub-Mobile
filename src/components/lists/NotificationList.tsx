import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  ViewStyle,
} from "react-native";
import {
  Bell,
  Trophy,
  AlertCircle,
  Megaphone,
  X,
  Dumbbell,
  Star,
  Activity,
  Settings,
} from "lucide-react-native";
import { Notification } from "../../types";
import { formatRelativeTime } from "../../utils/format";
import { EmptyState } from "../states/EmptyState";
import { LoadingSpinner } from "../states/LoadingSpinner";
import { iconSizes } from "../../constants/design-tokens";
import { iconColors } from "../../styles/iconColors";
import { notificationListStyles } from "./NotificationListStyle";
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
  /** Custom style */
  style?: ViewStyle;
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
  style,
}) => {
  /**
   * Get icon for notification type
   */
  const getNotificationIcon = (type: Notification["type"]) => {
    const iconColor = {
      match: iconColors.primary,
      tournament: iconColors.warning,
      complaint: iconColors.error,
      announcement: iconColors.info,
      training: iconColors.success,
      evaluation: iconColors.warning,
      general: iconColors.muted,
      system: iconColors.muted,
      default: iconColors.muted,
    };

    const IconComponent = {
      match: Trophy,
      tournament: Trophy,
      complaint: AlertCircle,
      announcement: Megaphone,
      training: Dumbbell,
      evaluation: Star,
      general: Bell,
      system: Settings,
      default: Bell,
    };

    const Icon = IconComponent[type] || IconComponent.default;
    const color = iconColor[type] || iconColor.default;

    return <Icon size={iconSizes.md} color={color} />;
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
    <View style={notificationListStyles.swipeActionsContainer}>
      {!notification.isRead && onMarkAsRead && (
        <TouchableOpacity
          onPress={() => onMarkAsRead(notification.id)}
          style={[
            notificationListStyles.swipeAction,
            notificationListStyles.swipeAction_read,
          ]}
          activeOpacity={0.7}
        >
          <Bell size={iconSizes.md} color="#fff" />
          <Text style={notificationListStyles.swipeActionText}>Đã đọc</Text>
        </TouchableOpacity>
      )}
      {onDelete && (
        <TouchableOpacity
          onPress={() => onDelete(notification.id)}
          style={[
            notificationListStyles.swipeAction,
            notificationListStyles.swipeAction_delete,
          ]}
          activeOpacity={0.7}
        >
          <X size={iconSizes.md} color="#fff" />
          <Text style={notificationListStyles.swipeActionText}>Xóa</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  /**
   * Render notification item
   */
  const renderNotification = (notification: Notification) => {
    const content = (
      <View style={notificationListStyles.itemContainer}>
        <TouchableOpacity
          onPress={() => onNotificationPress?.(notification)}
          style={[
            notificationListStyles.itemPressable,
            !notification.isRead && notificationListStyles.itemPressable_unread,
          ]}
          activeOpacity={0.7}
        >
          {/* Icon */}
          <View
            style={[
              notificationListStyles.iconContainer,
              notificationListStyles[`iconContainer_${notification.type}`] ||
                notificationListStyles.iconContainer_default,
            ]}
          >
            {getNotificationIcon(notification.type)}
          </View>

          {/* Content */}
          <View style={notificationListStyles.contentContainer}>
            <View style={notificationListStyles.titleRow}>
              <Text style={notificationListStyles.title} numberOfLines={2}>
                {notification.title}
              </Text>
              {!notification.isRead && (
                <View style={notificationListStyles.unreadBadge} />
              )}
            </View>
            <Text style={notificationListStyles.message} numberOfLines={2}>
              {notification.message}
            </Text>
            <Text style={notificationListStyles.timeText}>
              {formatRelativeTime(notification.createdAt)}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
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
        <View style={notificationListStyles.groupHeader}>
          <Text style={notificationListStyles.groupHeaderText}>
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
      <View style={[notificationListStyles.loadingContainer, style]}>
        <LoadingSpinner overlay={false} />
      </View>
    );
  }

  // Empty state
  if (!loading && notifications.length === 0) {
    return (
      <View style={[notificationListStyles.emptyContainer, style]}>
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
      style={[notificationListStyles.list, style]}
      contentContainerStyle={notificationListStyles.listContent}
      refreshControl={
        onRefresh ? (
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={iconColors.primary}
          />
        ) : undefined
      }
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      showsVerticalScrollIndicator={false}
    />
  );
};
