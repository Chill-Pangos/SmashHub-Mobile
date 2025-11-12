import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import { colors } from "../../constants/design-tokens";

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
  /** Custom className */
  className?: string;
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
  className = "",
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
      return (
        <TouchableOpacity
          key={tab.id}
          onPress={() => onTabChange(tab.id)}
          className={`
            flex-1 py-2 px-4 flex-row items-center justify-center
            ${isActive ? "bg-primary-500" : "bg-white dark:bg-gray-800"}
            ${isFirst ? "rounded-l-lg" : ""}
            ${isLast ? "rounded-r-lg" : ""}
            ${!isLast ? "border-r border-gray-300 dark:border-gray-600" : ""}
          `}
          style={{
            borderWidth: 1,
            borderColor: isActive ? colors.primary[500] : colors.gray[300],
          }}
          activeOpacity={0.7}
        >
          {tab.icon && <View className="mr-2">{tab.icon}</View>}
          <Text
            className={`text-sm font-medium ${
              isActive ? "text-white" : "text-gray-700 dark:text-gray-300"
            }`}
          >
            {tab.label}
          </Text>
          {tab.badge !== undefined && tab.badge > 0 && (
            <View
              className={`ml-2 px-2 py-0.5 rounded-full ${
                isActive ? "bg-white/20" : "bg-gray-100 dark:bg-gray-700"
              }`}
            >
              <Text
                className={`text-xs font-semibold ${
                  isActive ? "text-white" : "text-gray-600 dark:text-gray-400"
                }`}
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
          className={`
            py-2 px-4 rounded-full mr-2 flex-row items-center
            ${isActive ? "bg-primary-500" : "bg-gray-100 dark:bg-gray-700"}
          `}
          activeOpacity={0.7}
        >
          {tab.icon && <View className="mr-2">{tab.icon}</View>}
          <Text
            className={`text-sm font-medium ${
              isActive ? "text-white" : "text-gray-700 dark:text-gray-300"
            }`}
          >
            {tab.label}
          </Text>
          {tab.badge !== undefined && tab.badge > 0 && (
            <View
              className={`ml-2 px-2 py-0.5 rounded-full ${
                isActive ? "bg-white/20" : "bg-gray-200 dark:bg-gray-600"
              }`}
            >
              <Text
                className={`text-xs font-semibold ${
                  isActive ? "text-white" : "text-gray-600 dark:text-gray-400"
                }`}
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
        className={`
          py-3 px-4 mr-4 flex-row items-center
          ${!scrollable ? "flex-1" : ""}
        `}
        activeOpacity={0.7}
      >
        <View
          className={`${isActive ? "border-b-2 border-primary-500" : ""} pb-2`}
        >
          <View className="flex-row items-center">
            {tab.icon && <View className="mr-2">{tab.icon}</View>}
            <Text
              className={`text-base font-medium ${
                isActive
                  ? "text-primary-600 dark:text-primary-400"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {tab.label}
            </Text>
            {tab.badge !== undefined && tab.badge > 0 && (
              <View
                className={`ml-2 px-2 py-0.5 rounded-full ${
                  isActive
                    ? "bg-primary-100 dark:bg-primary-900/30"
                    : "bg-gray-100 dark:bg-gray-700"
                }`}
              >
                <Text
                  className={`text-xs font-semibold ${
                    isActive
                      ? "text-primary-700 dark:text-primary-400"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
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
  const tabsContainer = (
    <View
      className={`
        ${
          variant === "segmented"
            ? "flex-row p-1 bg-gray-100 dark:bg-gray-700 rounded-lg"
            : ""
        }
        ${variant === "pills" ? "flex-row" : ""}
        ${
          variant === "underline"
            ? "flex-row border-b border-gray-200 dark:border-gray-700"
            : ""
        }
        ${className}
      `}
    >
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
        className="flex-grow-0"
      >
        {tabsContainer}
      </ScrollView>
    );
  }

  // Segmented variant should not scroll, wrap in container
  if (variant === "segmented") {
    return <View className={`px-4 ${className}`}>{tabsContainer}</View>;
  }

  return tabsContainer;
};
