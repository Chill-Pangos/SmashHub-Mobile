/**
 * Format Utilities
 *
 * Provides formatting functions for dates, numbers, and other data types
 */

import { formatDistanceToNow, format, parseISO } from "date-fns";
import { vi } from "date-fns/locale";

/**
 * Format date to relative time (e.g., "2 giờ trước", "3 ngày trước")
 */
export const formatRelativeTime = (dateString: string): string => {
  try {
    const date = parseISO(dateString);
    return formatDistanceToNow(date, { addSuffix: true, locale: vi });
  } catch (error) {
    return dateString;
  }
};

/**
 * Format date to readable string
 */
export const formatDate = (
  dateString: string,
  formatString: string = "dd/MM/yyyy"
): string => {
  try {
    const date = parseISO(dateString);
    return format(date, formatString, { locale: vi });
  } catch (error) {
    return dateString;
  }
};

/**
 * Format date and time
 */
export const formatDateTime = (dateString: string): string => {
  return formatDate(dateString, "dd/MM/yyyy HH:mm");
};

/**
 * Format time only
 */
export const formatTime = (dateString: string): string => {
  return formatDate(dateString, "HH:mm");
};

/**
 * Format day of week
 */
export const formatDayOfWeek = (dateString: string): string => {
  return formatDate(dateString, "EEEE, dd/MM/yyyy");
};

/**
 * Format phone number
 */
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, "");

  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3");
  }

  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{4})(\d{3})(\d{4})/, "$1 $2 $3");
  }

  return phone;
};

/**
 * Format number with thousands separator
 */
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

/**
 * Format currency (VND)
 */
export const formatCurrency = (amount: number): string => {
  return `${formatNumber(amount)} đ`;
};

/**
 * Format win rate percentage
 */
export const formatPercentage = (
  value: number,
  decimals: number = 1
): string => {
  return `${value.toFixed(decimals)}%`;
};

/**
 * Format score display
 */
export const formatScore = (homeScore: number, awayScore: number): string => {
  return `${homeScore} - ${awayScore}`;
};

/**
 * Truncate text
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

/**
 * Capitalize first letter
 */
export const capitalizeFirst = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Get initials from name
 */
export const getInitials = (name: string): string => {
  const parts = name.trim().split(" ");
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};
