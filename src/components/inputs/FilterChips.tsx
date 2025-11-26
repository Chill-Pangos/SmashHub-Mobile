import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ViewStyle,
} from "react-native";
import { X } from "lucide-react-native";
import { iconSizes } from "../../constants/design-tokens";
import { iconColors } from "../../styles/iconColors";
import { filterChipsStyles } from "./FilterChipsStyle";

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
  /** Custom style for container */
  style?: ViewStyle;
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
  style,
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
        style={[
          filterChipsStyles.chip,
          isSelected
            ? filterChipsStyles.chip_selected
            : filterChipsStyles.chip_unselected,
        ]}
        activeOpacity={0.7}
      >
        <Text
          style={
            isSelected
              ? filterChipsStyles.chipText_selected
              : filterChipsStyles.chipText_unselected
          }
        >
          {filter.label}
        </Text>

        {/* Count Badge */}
        {filter.count !== undefined && filter.count > 0 && (
          <View
            style={[
              filterChipsStyles.countBadge,
              isSelected
                ? filterChipsStyles.countBadge_selected
                : filterChipsStyles.countBadge_unselected,
            ]}
          >
            <Text
              style={
                isSelected
                  ? filterChipsStyles.countBadgeText_selected
                  : filterChipsStyles.countBadgeText_unselected
              }
            >
              {filter.count}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const containerContent = (
    <View style={[filterChipsStyles.container, style]}>
      {/* Filter Chips */}
      {filters.map(renderChip)}

      {/* Clear All Button */}
      {showClearAll && selectedFilters.length > 0 && (
        <TouchableOpacity
          onPress={handleClearAll}
          style={filterChipsStyles.clearAllButton}
          activeOpacity={0.7}
        >
          <X size={iconSizes.xs} color={iconColors.muted} />
          <Text style={filterChipsStyles.clearAllText}>Xóa bộ lọc</Text>
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
        contentContainerStyle={filterChipsStyles.scrollContent}
        style={{ flexGrow: 0 }}
      >
        {containerContent}
      </ScrollView>
    );
  }

  // Otherwise, render as flex-wrap container
  return (
    <View style={[filterChipsStyles.wrapContainer, style]}>
      {filters.map(renderChip)}
      {showClearAll && selectedFilters.length > 0 && (
        <TouchableOpacity
          onPress={handleClearAll}
          style={filterChipsStyles.clearAllButtonWrap}
          activeOpacity={0.7}
        >
          <X size={iconSizes.xs} color={iconColors.muted} />
          <Text style={filterChipsStyles.clearAllText}>Xóa bộ lọc</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
