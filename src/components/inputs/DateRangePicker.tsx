import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { Calendar, X, ChevronLeft, ChevronRight } from "lucide-react-native";
import { formatDate } from "../../utils/format";
import { colors, iconSizes } from "../../constants/design-tokens";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  isSameDay,
  isSameMonth,
  isToday,
  isBefore,
  isAfter,
  isWithinInterval,
  format,
  startOfDay,
  endOfDay,
} from "date-fns";
import { vi } from "date-fns/locale";

/**
 * Quick Preset Options
 */
export type DatePreset =
  | "today"
  | "yesterday"
  | "thisWeek"
  | "lastWeek"
  | "thisMonth"
  | "lastMonth"
  | "custom";

/**
 * DateRangePicker Props
 */
export interface DateRangePickerProps {
  /** Start date of range */
  startDate?: Date;
  /** End date of range */
  endDate?: Date;
  /** Callback when date range changes */
  onChange: (startDate: Date | undefined, endDate: Date | undefined) => void;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Show quick preset buttons */
  showPresets?: boolean;
  /** Enable single date selection (not range) */
  singleDate?: boolean;
  /** Placeholder text */
  placeholder?: string;
  /** Custom className */
  className?: string;
}

/**
 * DateRangePicker Component
 *
 * Calendar-based date range picker with quick presets.
 * Used in 3+ screens for filtering by date range.
 *
 * @example
 * ```tsx
 * <DateRangePicker
 *   startDate={startDate}
 *   endDate={endDate}
 *   onChange={(start, end) => {
 *     setStartDate(start);
 *     setEndDate(end);
 *   }}
 *   showPresets
 * />
 * ```
 */
export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  onChange,
  minDate,
  maxDate,
  showPresets = true,
  singleDate = false,
  placeholder = "Chọn ngày",
  className = "",
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [tempStartDate, setTempStartDate] = useState<Date | undefined>(
    startDate
  );
  const [tempEndDate, setTempEndDate] = useState<Date | undefined>(endDate);

  /**
   * Get preset date range
   */
  const getPresetDates = (
    preset: DatePreset
  ): { start: Date; end: Date } | null => {
    const now = new Date();
    switch (preset) {
      case "today":
        return { start: startOfDay(now), end: endOfDay(now) };
      case "yesterday":
        const yesterday = addDays(now, -1);
        return { start: startOfDay(yesterday), end: endOfDay(yesterday) };
      case "thisWeek":
        return {
          start: startOfWeek(now, { locale: vi }),
          end: endOfWeek(now, { locale: vi }),
        };
      case "lastWeek":
        const lastWeekStart = startOfWeek(addDays(now, -7), { locale: vi });
        const lastWeekEnd = endOfWeek(addDays(now, -7), { locale: vi });
        return { start: lastWeekStart, end: lastWeekEnd };
      case "thisMonth":
        return { start: startOfMonth(now), end: endOfMonth(now) };
      case "lastMonth":
        const lastMonth = addMonths(now, -1);
        return { start: startOfMonth(lastMonth), end: endOfMonth(lastMonth) };
      default:
        return null;
    }
  };

  /**
   * Apply preset
   */
  const applyPreset = (preset: DatePreset) => {
    const dates = getPresetDates(preset);
    if (dates) {
      setTempStartDate(dates.start);
      setTempEndDate(dates.end);
    }
  };

  /**
   * Handle date selection
   */
  const handleDatePress = (date: Date) => {
    if (singleDate) {
      setTempStartDate(date);
      setTempEndDate(undefined);
    } else {
      if (!tempStartDate || (tempStartDate && tempEndDate)) {
        // Start new selection
        setTempStartDate(date);
        setTempEndDate(undefined);
      } else if (isBefore(date, tempStartDate)) {
        // Selected date is before start, make it new start
        setTempStartDate(date);
      } else {
        // Complete the range
        setTempEndDate(date);
      }
    }
  };

  /**
   * Apply selection
   */
  const handleApply = () => {
    onChange(tempStartDate, tempEndDate);
    setIsModalVisible(false);
  };

  /**
   * Clear selection
   */
  const handleClear = () => {
    setTempStartDate(undefined);
    setTempEndDate(undefined);
    onChange(undefined, undefined);
    setIsModalVisible(false);
  };

  /**
   * Generate calendar days for current month
   */
  const generateCalendarDays = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const calendarStart = startOfWeek(monthStart, { locale: vi });
    const calendarEnd = endOfWeek(monthEnd, { locale: vi });

    const days: Date[] = [];
    let day = calendarStart;

    while (isBefore(day, calendarEnd) || isSameDay(day, calendarEnd)) {
      days.push(day);
      day = addDays(day, 1);
    }

    return days;
  };

  /**
   * Check if date is in range
   */
  const isInRange = (date: Date): boolean => {
    if (!tempStartDate || !tempEndDate) return false;
    return isWithinInterval(date, { start: tempStartDate, end: tempEndDate });
  };

  /**
   * Check if date is disabled
   */
  const isDisabled = (date: Date): boolean => {
    if (minDate && isBefore(date, minDate)) return true;
    if (maxDate && isAfter(date, maxDate)) return true;
    return false;
  };

  /**
   * Format display text
   */
  const getDisplayText = () => {
    if (!startDate) return placeholder;
    const formattedStart = format(startDate, "dd/MM/yyyy", { locale: vi });
    if (singleDate || !endDate) return formattedStart;
    const formattedEnd = format(endDate, "dd/MM/yyyy", { locale: vi });
    return `${formattedStart} - ${formattedEnd}`;
  };

  const calendarDays = generateCalendarDays();
  const weekDays = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

  return (
    <View className={className}>
      {/* Trigger Button */}
      <TouchableOpacity
        onPress={() => setIsModalVisible(true)}
        className="flex-row items-center justify-between bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3"
        activeOpacity={0.7}
      >
        <View className="flex-row items-center flex-1">
          <Calendar size={iconSizes.sm} color={colors.gray[500]} />
          <Text
            className={`ml-2 flex-1 ${
              startDate
                ? "text-gray-900 dark:text-white"
                : "text-gray-400 dark:text-gray-500"
            }`}
            numberOfLines={1}
          >
            {getDisplayText()}
          </Text>
        </View>
        {(startDate || endDate) && (
          <TouchableOpacity
            onPress={(e) => {
              e.stopPropagation();
              handleClear();
            }}
            className="ml-2 p-1"
          >
            <X size={iconSizes.sm} color={colors.gray[400]} />
          </TouchableOpacity>
        )}
      </TouchableOpacity>

      {/* Calendar Modal */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View className="flex-1 justify-end bg-black/50">
          <View className="bg-white dark:bg-gray-800 rounded-t-3xl max-h-[90%]">
            {/* Header */}
            <View className="flex-row items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <Text className="text-lg font-bold text-gray-900 dark:text-white">
                {singleDate ? "Chọn ngày" : "Chọn khoảng thời gian"}
              </Text>
              <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <X size={iconSizes.md} color={colors.gray[400]} />
              </TouchableOpacity>
            </View>

            {/* Quick Presets */}
            {showPresets && !singleDate && (
              <View className="p-4 border-b border-gray-200 dark:border-gray-700">
                <View className="flex-row flex-wrap gap-2">
                  {[
                    { label: "Hôm nay", value: "today" as DatePreset },
                    { label: "Hôm qua", value: "yesterday" as DatePreset },
                    { label: "Tuần này", value: "thisWeek" as DatePreset },
                    { label: "Tuần trước", value: "lastWeek" as DatePreset },
                    { label: "Tháng này", value: "thisMonth" as DatePreset },
                    { label: "Tháng trước", value: "lastMonth" as DatePreset },
                  ].map((preset) => (
                    <TouchableOpacity
                      key={preset.value}
                      onPress={() => applyPreset(preset.value)}
                      className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
                      activeOpacity={0.7}
                    >
                      <Text className="text-sm text-gray-700 dark:text-gray-300">
                        {preset.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}

            {/* Calendar */}
            <View className="p-4">
              {/* Month Navigation */}
              <View className="flex-row items-center justify-between mb-4">
                <TouchableOpacity
                  onPress={() => setCurrentMonth(addMonths(currentMonth, -1))}
                  className="p-2"
                >
                  <ChevronLeft size={iconSizes.md} color={colors.gray[600]} />
                </TouchableOpacity>
                <Text className="text-lg font-semibold text-gray-900 dark:text-white">
                  {format(currentMonth, "MMMM yyyy", { locale: vi })}
                </Text>
                <TouchableOpacity
                  onPress={() => setCurrentMonth(addMonths(currentMonth, 1))}
                  className="p-2"
                >
                  <ChevronRight size={iconSizes.md} color={colors.gray[600]} />
                </TouchableOpacity>
              </View>

              {/* Week Days */}
              <View className="flex-row mb-2">
                {weekDays.map((day) => (
                  <View key={day} className="flex-1 items-center py-2">
                    <Text className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {day}
                    </Text>
                  </View>
                ))}
              </View>

              {/* Calendar Grid */}
              <View className="flex-row flex-wrap">
                {calendarDays.map((day, index) => {
                  const isSelected =
                    (tempStartDate && isSameDay(day, tempStartDate)) ||
                    (tempEndDate && isSameDay(day, tempEndDate));
                  const isInDateRange = isInRange(day);
                  const isCurrentMonth = isSameMonth(day, currentMonth);
                  const isTodayDate = isToday(day);
                  const disabled = isDisabled(day);

                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => !disabled && handleDatePress(day)}
                      disabled={disabled}
                      className={`w-[14.28%] aspect-square items-center justify-center ${
                        isInDateRange && !isSelected
                          ? "bg-primary-100 dark:bg-primary-900/20"
                          : ""
                      }`}
                      activeOpacity={0.7}
                    >
                      <View
                        className={`w-10 h-10 items-center justify-center rounded-full ${
                          isSelected
                            ? "bg-primary-500"
                            : isTodayDate
                            ? "border-2 border-primary-500"
                            : ""
                        }`}
                      >
                        <Text
                          className={`text-base ${
                            disabled
                              ? "text-gray-300 dark:text-gray-600"
                              : isSelected
                              ? "text-white font-bold"
                              : !isCurrentMonth
                              ? "text-gray-400 dark:text-gray-500"
                              : "text-gray-900 dark:text-white"
                          }`}
                        >
                          {format(day, "d")}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            {/* Footer Actions */}
            <View className="flex-row items-center justify-between p-4 border-t border-gray-200 dark:border-gray-700">
              <TouchableOpacity onPress={handleClear} className="px-4 py-2">
                <Text className="text-base text-gray-600 dark:text-gray-400 font-medium">
                  Xóa
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleApply}
                className="bg-primary-500 px-6 py-3 rounded-lg"
                activeOpacity={0.8}
              >
                <Text className="text-base text-white font-semibold">
                  Áp dụng
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
