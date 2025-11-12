import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { X } from "lucide-react-native";
import { colors, iconSizes } from "../../constants/design-tokens";

/**
 * Filter Item
 */
export interface FilterItem {
  /** Unique filter identifier */
  id: string;
  /** Display label */
  label: string;
  /** Optional value (defaults to id) */
  value?: string;
  /** Optional count badge */
  count?: number;
}

/**
 * FilterChips Props
 */
export interface FilterChipsProps {
  /** Array of filter options */
  filters: FilterItem[];
  /** Array of selected filter IDs */
  selectedFilters: string[];
  /** Callback when filter selection changes */
  onFilterChange: (selectedIds: string[]) => void;
  /** Enable multiple selection (default: true) */
  multiSelect?: boolean;
  /** Show clear all button when filters selected */
  showClearAll?: boolean;
  /** Enable horizontal scrolling (default: true) */
  scrollable?: boolean;
  /** Custom className for container */
  className?: string;
}

/**
 * FilterChips Component
 *
 * Horizontal scrollable filter chips with single or multiple selection.
 * Used in 5+ screens for filtering content.
 *
 * @example
 * ```tsx
 * const filters = [
 *   { id: '1', label: 'Tất cả' },
 *   { id: '2', label: 'Đang diễn ra', count: 5 },
 *   { id: '3', label: 'Sắp tới', count: 12 },
 *   { id: '4', label: 'Đã kết thúc', count: 8 }
 * ];
 *
 * <FilterChips
 *   filters={filters}
 *   selectedFilters={['2', '3']}
 *   onFilterChange={(selected) => setSelectedFilters(selected)}
 *   showClearAll
 * />
 * ```
 */
export const FilterChips: React.FC<FilterChipsProps> = ({
  filters,
  selectedFilters,
  onFilterChange,
  multiSelect = true,
  showClearAll = true,
  scrollable = true,
  className = "",
}) => {
  /**
   * Handle chip press
   */
  const handleChipPress = (filterId: string) => {
    if (multiSelect) {
      // Multiple selection mode
      const isSelected = selectedFilters.includes(filterId);
      if (isSelected) {
        // Remove from selection
        onFilterChange(selectedFilters.filter((id) => id !== filterId));
      } else {
        // Add to selection
        onFilterChange([...selectedFilters, filterId]);
      }
    } else {
      // Single selection mode
      if (selectedFilters[0] === filterId) {
        // Deselect if already selected
        onFilterChange([]);
      } else {
        // Select new filter
        onFilterChange([filterId]);
      }
    }
  };

  /**
   * Handle clear all
   */
  const handleClearAll = () => {
    onFilterChange([]);
  };

  /**
   * Render individual chip
   */
  const renderChip = (filter: FilterItem) => {
    const isSelected = selectedFilters.includes(filter.id);

    return (
      <TouchableOpacity
        key={filter.id}
        onPress={() => handleChipPress(filter.id)}
        className={`
          px-4 py-2 rounded-full border mr-2 flex-row items-center
          ${
            isSelected
              ? "bg-primary-500 border-primary-500"
              : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
          }
        `}
        activeOpacity={0.7}
      >
        <Text
          className={`text-sm font-medium ${
            isSelected ? "text-white" : "text-gray-700 dark:text-gray-300"
          }`}
        >
          {filter.label}
        </Text>

        {/* Count Badge */}
        {filter.count !== undefined && filter.count > 0 && (
          <View
            className={`ml-2 px-2 py-0.5 rounded-full ${
              isSelected ? "bg-white/20" : "bg-gray-100 dark:bg-gray-700"
            }`}
          >
            <Text
              className={`text-xs font-semibold ${
                isSelected ? "text-white" : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {filter.count}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const containerContent = (
    <View className={`flex-row items-center ${className}`}>
      {/* Filter Chips */}
      {filters.map(renderChip)}

      {/* Clear All Button */}
      {showClearAll && selectedFilters.length > 0 && (
        <TouchableOpacity
          onPress={handleClearAll}
          className="px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-700 flex-row items-center ml-2"
          activeOpacity={0.7}
        >
          <X size={iconSizes.xs} color={colors.gray[500]} />
          <Text className="text-sm text-gray-600 dark:text-gray-400 ml-1 font-medium">
            Xóa bộ lọc
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );

  // Wrap in ScrollView if scrollable
  if (scrollable) {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        className="flex-grow-0"
      >
        {containerContent}
      </ScrollView>
    );
  }

  // Otherwise, render as flex-wrap container
  return (
    <View className={`flex-row flex-wrap px-4 ${className}`}>
      {filters.map(renderChip)}
      {showClearAll && selectedFilters.length > 0 && (
        <TouchableOpacity
          onPress={handleClearAll}
          className="px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-700 flex-row items-center mr-2 mb-2"
          activeOpacity={0.7}
        >
          <X size={iconSizes.xs} color={colors.gray[500]} />
          <Text className="text-sm text-gray-600 dark:text-gray-400 ml-1 font-medium">
            Xóa bộ lọc
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
