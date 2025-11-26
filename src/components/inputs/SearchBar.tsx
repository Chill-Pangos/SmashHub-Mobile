import React, { useState, useEffect, useRef } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Search, X } from "lucide-react-native";
import { colors } from "../../theme/colors";
import { iconColors } from "../../styles/iconColors";
import { searchBarStyles } from "./SearchBarStyle";

export interface SearchBarProps {
  /**
   * Current search value
   */
  value: string;

  /**
   * Callback when search value changes
   */
  onChangeText: (text: string) => void;

  /**
   * Callback when search is submitted
   */
  onSearch?: (text: string) => void;

  /**
   * Placeholder text
   * @default 'Tìm kiếm...'
   */
  placeholder?: string;

  /**
   * Show loading indicator
   * @default false
   */
  loading?: boolean;

  /**
   * Debounce delay in milliseconds
   * @default 300
   */
  debounceDelay?: number;

  /**
   * Auto-focus on mount
   * @default false
   */
  autoFocus?: boolean;

  /**
   * Callback when clear button is pressed
   */
  onClear?: () => void;

  /**
   * Disable the search bar
   * @default false
   */
  disabled?: boolean;

  /**
   * Additional container style
   */
  containerStyle?: ViewStyle;

  /**
   * Additional input style
   */
  inputStyle?: TextStyle;
}

/**
 * SearchBar Component
 *
 * A search input field with debouncing, clear button, and loading state.
 *
 * @example
 * ```tsx
 * // Basic search bar
 * <SearchBar
 *   value={searchQuery}
 *   onChangeText={setSearchQuery}
 * />
 *
 * // With loading and clear
 * <SearchBar
 *   value={searchQuery}
 *   onChangeText={setSearchQuery}
 *   onSearch={handleSearch}
 *   loading={isSearching}
 *   placeholder="Tìm kiếm trận đấu..."
 * />
 *
 * // With custom debounce delay
 * <SearchBar
 *   value={searchQuery}
 *   onChangeText={setSearchQuery}
 *   onSearch={handleSearch}
 *   debounceDelay={500}
 *   autoFocus
 * />
 * ```
 */
export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  onSearch,
  placeholder = "Tìm kiếm...",
  loading = false,
  debounceDelay = 300,
  autoFocus = false,
  onClear,
  disabled = false,
  containerStyle,
  inputStyle,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  // Handle debounced search
  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    if (value && onSearch) {
      debounceTimer.current = setTimeout(() => {
        onSearch(value);
      }, debounceDelay);
    }

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [value, onSearch, debounceDelay]);

  // Handle clear
  const handleClear = () => {
    onChangeText("");
    if (onClear) {
      onClear();
    }
  };

  // Get container style with border color
  const getContainerStyle = (): ViewStyle => {
    const borderColor = isFocused ? colors.primary.DEFAULT : colors.border;
    const opacity = disabled ? 0.5 : 1;
    return { ...searchBarStyles.container, borderColor, opacity };
  };

  const iconColor = isFocused ? iconColors.primary : iconColors.muted;

  return (
    <View style={[getContainerStyle(), containerStyle]}>
      {/* Search Icon */}
      <View style={searchBarStyles.leftIcon}>
        <Search size={20} color={iconColor} />
      </View>

      {/* Text Input */}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={iconColors.muted}
        autoFocus={autoFocus}
        editable={!disabled}
        returnKeyType="search"
        onSubmitEditing={() => onSearch?.(value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[searchBarStyles.input, inputStyle]}
      />

      {/* Loading Indicator or Clear Button */}
      {loading ? (
        <View style={searchBarStyles.rightIcon}>
          <ActivityIndicator size="small" color={iconColors.primary} />
        </View>
      ) : value.length > 0 ? (
        <TouchableOpacity
          onPress={handleClear}
          style={searchBarStyles.rightIcon}
          activeOpacity={0.7}
          disabled={disabled}
        >
          <X size={20} color={iconColors.muted} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default SearchBar;
