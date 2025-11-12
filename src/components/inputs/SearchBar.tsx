import React, { useState, useEffect, useRef } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Search, X } from "lucide-react-native";

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
   * Additional container classes
   */
  containerClassName?: string;

  /**
   * Additional input classes
   */
  inputClassName?: string;
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
  containerClassName,
  inputClassName,
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

  // Determine border color
  const getBorderColor = () => {
    if (isFocused) return "border-primary-500";
    return "border-gray-300 dark:border-gray-700";
  };

  return (
    <View
      className={`
        flex-row items-center
        border-2 ${getBorderColor()}
        rounded-xl
        bg-white dark:bg-gray-800
        ${disabled ? "opacity-50" : ""}
        ${containerClassName || ""}
      `.trim()}
    >
      {/* Search Icon */}
      <View className="pl-4">
        <Search size={20} color={isFocused ? "#0ea5e9" : "#9ca3af"} />
      </View>

      {/* Text Input */}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        autoFocus={autoFocus}
        editable={!disabled}
        returnKeyType="search"
        onSubmitEditing={() => onSearch?.(value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          flex-1
          px-3 py-3
          text-base
          text-gray-900 dark:text-white
          ${inputClassName || ""}
        `.trim()}
      />

      {/* Loading Indicator or Clear Button */}
      {loading ? (
        <View className="pr-4">
          <ActivityIndicator size="small" color="#0ea5e9" />
        </View>
      ) : value.length > 0 ? (
        <TouchableOpacity
          onPress={handleClear}
          className="pr-4 active:opacity-50"
          activeOpacity={0.5}
          disabled={disabled}
        >
          <X size={20} color="#9ca3af" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default SearchBar;
