import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, ViewStyle } from "react-native";
import { Calendar, X, ChevronLeft, ChevronRight } from "lucide-react-native";
import { formatDate } from "../../utils/format";
import { iconSizes } from "../../constants/design-tokens";
import { iconColors } from "../../styles/iconColors";
import { dateRangePickerStyles } from "./DateRangePickerStyle";
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
  /** Custom style */
  style?: ViewStyle;
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
  style,
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
    <View style={style}>
      {/* Trigger Button */}
      <TouchableOpacity
        onPress={() => setIsModalVisible(true)}
        style={dateRangePickerStyles.triggerButton}
        activeOpacity={0.7}
      >
        <View style={dateRangePickerStyles.triggerContent}>
          <Calendar size={iconSizes.sm} color={iconColors.muted} />
          <Text
            style={
              startDate
                ? dateRangePickerStyles.triggerText
                : dateRangePickerStyles.triggerPlaceholder
            }
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
            style={dateRangePickerStyles.clearButton}
            activeOpacity={0.7}
          >
            <X size={iconSizes.sm} color={iconColors.muted} />
          </TouchableOpacity>
        )}
      </TouchableOpacity>

      {/* Calendar Modal */}
      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={dateRangePickerStyles.modalOverlay}>
          <View style={dateRangePickerStyles.modalContainer}>
            {/* Header */}
            <View style={dateRangePickerStyles.modalHeader}>
              <Text style={dateRangePickerStyles.modalTitle}>
                {singleDate ? "Chọn ngày" : "Chọn khoảng thời gian"}
              </Text>
              <TouchableOpacity
                onPress={() => setIsModalVisible(false)}
                activeOpacity={0.7}
              >
                <X size={iconSizes.md} color={iconColors.muted} />
              </TouchableOpacity>
            </View>

            {/* Quick Presets */}
            {showPresets && !singleDate && (
              <View style={dateRangePickerStyles.presetsContainer}>
                <View style={dateRangePickerStyles.presetsGrid}>
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
                      style={dateRangePickerStyles.presetButton}
                      activeOpacity={0.7}
                    >
                      <Text style={dateRangePickerStyles.presetButtonText}>
                        {preset.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}

            {/* Calendar */}
            <View style={dateRangePickerStyles.calendarContainer}>
              {/* Month Navigation */}
              <View style={dateRangePickerStyles.monthNavigation}>
                <TouchableOpacity
                  onPress={() => setCurrentMonth(addMonths(currentMonth, -1))}
                  style={dateRangePickerStyles.monthNavigationButton}
                  activeOpacity={0.7}
                >
                  <ChevronLeft size={iconSizes.md} color={iconColors.default} />
                </TouchableOpacity>
                <Text style={dateRangePickerStyles.monthText}>
                  {format(currentMonth, "MMMM yyyy", { locale: vi })}
                </Text>
                <TouchableOpacity
                  onPress={() => setCurrentMonth(addMonths(currentMonth, 1))}
                  style={dateRangePickerStyles.monthNavigationButton}
                  activeOpacity={0.7}
                >
                  <ChevronRight
                    size={iconSizes.md}
                    color={iconColors.default}
                  />
                </TouchableOpacity>
              </View>

              {/* Week Days */}
              <View style={dateRangePickerStyles.weekDaysRow}>
                {weekDays.map((day) => (
                  <View key={day} style={dateRangePickerStyles.weekDay}>
                    <Text style={dateRangePickerStyles.weekDayText}>{day}</Text>
                  </View>
                ))}
              </View>

              {/* Calendar Grid */}
              <View style={dateRangePickerStyles.calendarGrid}>
                {calendarDays.map((day, index) => {
                  const isSelected =
                    (tempStartDate && isSameDay(day, tempStartDate)) ||
                    (tempEndDate && isSameDay(day, tempEndDate));
                  const isInDateRange = isInRange(day);
                  const isCurrentMonth = isSameMonth(day, currentMonth);
                  const isTodayDate = isToday(day);
                  const disabled = isDisabled(day);

                  // Determine day text style
                  let dayTextStyle = dateRangePickerStyles.dayText_default;
                  if (disabled) {
                    dayTextStyle = dateRangePickerStyles.dayText_disabled;
                  } else if (isSelected) {
                    dayTextStyle = dateRangePickerStyles.dayText_selected;
                  } else if (!isCurrentMonth) {
                    dayTextStyle =
                      dateRangePickerStyles.dayText_notCurrentMonth;
                  }

                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => !disabled && handleDatePress(day)}
                      disabled={disabled}
                      style={[
                        dateRangePickerStyles.dayButton,
                        isInDateRange &&
                          !isSelected &&
                          dateRangePickerStyles.dayButton_inRange,
                      ]}
                      activeOpacity={0.7}
                    >
                      <View
                        style={[
                          dateRangePickerStyles.dayCircle,
                          isSelected &&
                            dateRangePickerStyles.dayCircle_selected,
                          isTodayDate &&
                            !isSelected &&
                            dateRangePickerStyles.dayCircle_today,
                        ]}
                      >
                        <Text
                          style={[dateRangePickerStyles.dayText, dayTextStyle]}
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
            <View style={dateRangePickerStyles.footer}>
              <TouchableOpacity
                onPress={handleClear}
                style={dateRangePickerStyles.clearFooterButton}
                activeOpacity={0.7}
              >
                <Text style={dateRangePickerStyles.clearFooterText}>Xóa</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleApply}
                style={dateRangePickerStyles.applyButton}
                activeOpacity={0.7}
              >
                <Text style={dateRangePickerStyles.applyButtonText}>
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
