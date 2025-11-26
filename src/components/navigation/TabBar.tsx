import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ViewStyle,
} from "react-native";
import { colors } from "../../theme/colors";
import { tabBarStyles } from "./TabBarStyle";

/**
 * Tab Item
 */
export interface TabItem {
  /** Unique tab identifier */
  id: string;
  /** Tab label */
  label: string;
  /** Optional badge count */
  badge?: number;
  /** Optional icon */
  icon?: React.ReactNode;
}

/**
 * TabBar Props
 */
export interface TabBarProps {
  /** Array of tab items */
  tabs: TabItem[];
  /** ID of active tab */
  activeTab: string;
  /** Callback when tab changes */
  onTabChange: (tabId: string) => void;
  /** Tab bar variant */
  variant?: "segmented" | "pills" | "underline";
  /** Enable scrolling for many tabs */
  scrollable?: boolean;
}

/**
 * TabBar Component
 *
 * Customizable tab navigation with multiple variants.
 * Used in 5+ screens for content filtering/navigation.
 *
 * @example
 * ```tsx
 * const tabs = [
 *   { id: '1', label: 'Tất cả', badge: 12 },
 *   { id: '2', label: 'Đang diễn ra', badge: 5 },
 *   { id: '3', label: 'Sắp tới', badge: 7 }
 * ];
 *
 * <TabBar
 *   tabs={tabs}
 *   activeTab="1"
 *   onTabChange={(id) => setActiveTab(id)}
 *   variant="pills"
 * />
 * ```
 */
export const TabBar: React.FC<TabBarProps> = ({
  tabs,
  activeTab,
  onTabChange,
  variant = "underline",
  scrollable = false,
}) => {
  /**
   * Render individual tab based on variant
   */
  const renderTab = (tab: TabItem, index: number) => {
    const isActive = tab.id === activeTab;
    const isFirst = index === 0;
    const isLast = index === tabs.length - 1;

    // Segmented variant
    if (variant === "segmented") {
      const segmentedStyle: ViewStyle = {
        ...tabBarStyles.segmentedTab,
        backgroundColor: isActive ? colors.primary.DEFAULT : colors.card,
        borderColor: isActive ? colors.primary.DEFAULT : colors.border,
        borderTopLeftRadius: isFirst ? 8 : 0,
        borderBottomLeftRadius: isFirst ? 8 : 0,
        borderTopRightRadius: isLast ? 8 : 0,
        borderBottomRightRadius: isLast ? 8 : 0,
        borderRightWidth: isLast ? 1 : 0,
      };

      return (
        <TouchableOpacity
          key={tab.id}
          onPress={() => onTabChange(tab.id)}
          style={segmentedStyle}
          activeOpacity={0.7}
        >
          {tab.icon && (
            <View style={tabBarStyles.iconContainer}>{tab.icon}</View>
          )}
          <Text
            style={[
              tabBarStyles.segmentedTabText,
              { color: isActive ? "#ffffff" : colors.foreground },
            ]}
          >
            {tab.label}
          </Text>
          {tab.badge !== undefined && tab.badge > 0 && (
            <View
              style={[
                tabBarStyles.badge,
                {
                  backgroundColor: isActive
                    ? "rgba(255, 255, 255, 0.2)"
                    : colors.muted.DEFAULT,
                },
              ]}
            >
              <Text
                style={[
                  tabBarStyles.badgeText,
                  { color: isActive ? "#ffffff" : colors.muted.foreground },
                ]}
              >
                {tab.badge > 99 ? "99+" : tab.badge}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      );
    }

    // Pills variant
    if (variant === "pills") {
      return (
        <TouchableOpacity
          key={tab.id}
          onPress={() => onTabChange(tab.id)}
          style={[
            tabBarStyles.pillTab,
            {
              backgroundColor: isActive
                ? colors.primary.DEFAULT
                : colors.muted.DEFAULT,
            },
          ]}
          activeOpacity={0.7}
        >
          {tab.icon && (
            <View style={tabBarStyles.iconContainer}>{tab.icon}</View>
          )}
          <Text
            style={[
              tabBarStyles.pillTabText,
              { color: isActive ? "#ffffff" : colors.foreground },
            ]}
          >
            {tab.label}
          </Text>
          {tab.badge !== undefined && tab.badge > 0 && (
            <View
              style={[
                tabBarStyles.badge,
                {
                  backgroundColor: isActive
                    ? "rgba(255, 255, 255, 0.2)"
                    : colors.muted.foreground,
                },
              ]}
            >
              <Text
                style={[
                  tabBarStyles.badgeText,
                  { color: isActive ? "#ffffff" : colors.card },
                ]}
              >
                {tab.badge > 99 ? "99+" : tab.badge}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      );
    }

    // Underline variant (default)
    return (
      <TouchableOpacity
        key={tab.id}
        onPress={() => onTabChange(tab.id)}
        style={[tabBarStyles.underlineTab, !scrollable && { flex: 1 }]}
        activeOpacity={0.7}
      >
        <View
          style={[
            tabBarStyles.underlineTabInner,
            isActive && {
              borderBottomWidth: 2,
              borderBottomColor: colors.primary.DEFAULT,
            },
          ]}
        >
          <View style={tabBarStyles.underlineTabContent}>
            {tab.icon && (
              <View style={tabBarStyles.iconContainer}>{tab.icon}</View>
            )}
            <Text
              style={[
                tabBarStyles.underlineTabText,
                {
                  color: isActive
                    ? colors.primary.DEFAULT
                    : colors.muted.foreground,
                },
              ]}
            >
              {tab.label}
            </Text>
            {tab.badge !== undefined && tab.badge > 0 && (
              <View
                style={[
                  tabBarStyles.badge,
                  {
                    backgroundColor: isActive
                      ? colors.primary.DEFAULT
                      : colors.muted.DEFAULT,
                  },
                ]}
              >
                <Text
                  style={[
                    tabBarStyles.badgeText,
                    {
                      color: isActive
                        ? colors.primary.foreground
                        : colors.muted.foreground,
                    },
                  ]}
                >
                  {tab.badge > 99 ? "99+" : tab.badge}
                </Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  // Container for tabs
  const getContainerStyle = (): ViewStyle => {
    if (variant === "segmented") {
      return tabBarStyles.segmentedContainer;
    }
    if (variant === "pills") {
      return tabBarStyles.pillsContainer;
    }
    return tabBarStyles.underlineContainer;
  };

  const tabsContainer = (
    <View style={getContainerStyle()}>
      {tabs.map((tab, index) => renderTab(tab, index))}
    </View>
  );

  // Wrap in ScrollView if scrollable
  if (scrollable && variant !== "segmented") {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: variant === "pills" ? 16 : 0,
        }}
        style={tabBarStyles.scrollContainer}
      >
        {tabsContainer}
      </ScrollView>
    );
  }

  // Segmented variant should not scroll
  if (variant === "segmented") {
    return <View style={tabBarStyles.segmentedWrapper}>{tabsContainer}</View>;
  }

  return tabsContainer;
};
