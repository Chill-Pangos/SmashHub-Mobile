import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import {
  FormField,
  TextArea,
  SearchBar,
  FilterChips,
  DateRangePicker,
} from "../../../components";

/**
 * Input Components Demo Screen
 */
const InputComponentsScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChips, setSelectedChips] = useState<string[]>(["all"]);
  const [dateRange, setDateRange] = useState<{
    startDate: Date | null;
    endDate: Date | null;
  }>({
    startDate: null,
    endDate: null,
  });

  const filterChips = [
    { id: "all", label: "Tất cả" },
    { id: "upcoming", label: "Sắp diễn ra" },
    { id: "live", label: "Đang diễn ra" },
    { id: "completed", label: "Đã kết thúc" },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="bg-primary-500 px-6 pt-12 pb-8">
        <Text className="text-white text-3xl font-bold mb-2">
          Input Components
        </Text>
        <Text className="text-primary-100 text-sm">
          Form Inputs & Filters (5 components)
        </Text>
      </View>

      <View className="p-6 space-y-6">
        {/* FormField */}
        <View className="bg-white rounded-xl p-6 shadow-sm">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            FormField
          </Text>

          <View className="space-y-4">
            <FormField
              label="Email"
              placeholder="Nhập email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <FormField
              label="Mật khẩu"
              placeholder="Nhập mật khẩu"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              required
            />

            <FormField
              label="Email (with error)"
              placeholder="Nhập email"
              value="invalid-email"
              onChangeText={() => {}}
              error="Email không hợp lệ"
            />

            <FormField
              label="Disabled field"
              placeholder="Disabled"
              value="Cannot edit"
              onChangeText={() => {}}
              disabled
            />
          </View>
        </View>

        {/* TextArea */}
        <View className="bg-white rounded-xl p-6 shadow-sm">
          <Text className="text-xl font-bold text-gray-900 mb-4">TextArea</Text>

          <View className="space-y-4">
            <TextArea
              label="Mô tả"
              placeholder="Nhập mô tả..."
              value={description}
              onChangeText={setDescription}
              rows={4}
            />

            <TextArea
              label="Ghi chú (tối đa 100 ký tự)"
              placeholder="Nhập ghi chú..."
              value={description}
              onChangeText={setDescription}
              maxLength={100}
              rows={3}
            />

            <TextArea
              label="Nội dung khiếu nại"
              placeholder="Nhập nội dung..."
              value=""
              onChangeText={() => {}}
              required
              error="Vui lòng nhập nội dung khiếu nại"
              rows={4}
            />
          </View>
        </View>

        {/* SearchBar */}
        <View className="bg-white rounded-xl p-6 shadow-sm">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            SearchBar
          </Text>

          <View className="space-y-4">
            <View>
              <Text className="text-sm font-semibold text-gray-700 mb-2">
                Basic:
              </Text>
              <SearchBar
                placeholder="Tìm kiếm giải đấu..."
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>

            <View>
              <Text className="text-sm font-semibold text-gray-700 mb-2">
                Loading:
              </Text>
              <SearchBar
                placeholder="Đang tìm kiếm..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                loading
              />
            </View>
          </View>
        </View>

        {/* FilterChips */}
        <View className="bg-white rounded-xl p-6 shadow-sm">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            FilterChips
          </Text>

          <View className="space-y-4">
            <View>
              <Text className="text-sm font-semibold text-gray-700 mb-2">
                Multi-select:
              </Text>
              <FilterChips
                filters={filterChips}
                selectedFilters={selectedChips}
                onFilterChange={setSelectedChips}
                multiSelect
              />
            </View>

            <View>
              <Text className="text-sm font-semibold text-gray-700 mb-2">
                With counts:
              </Text>
              <FilterChips
                filters={[
                  { id: "all", label: "Tất cả", count: 24 },
                  { id: "upcoming", label: "Sắp diễn ra", count: 8 },
                  { id: "live", label: "Đang diễn ra", count: 3 },
                  { id: "completed", label: "Đã kết thúc", count: 13 },
                ]}
                selectedFilters={selectedChips}
                onFilterChange={setSelectedChips}
              />
            </View>
          </View>
        </View>

        {/* DateRangePicker */}
        <View className="bg-white rounded-xl p-6 shadow-sm">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            DateRangePicker
          </Text>

          <DateRangePicker
            startDate={dateRange.startDate || undefined}
            endDate={dateRange.endDate || undefined}
            onChange={(start: Date | undefined, end: Date | undefined) =>
              setDateRange({ startDate: start || null, endDate: end || null })
            }
            placeholder="Chọn khoảng thời gian"
            showPresets
          />
        </View>

        <View className="h-8" />
      </View>
    </ScrollView>
  );
};

export default InputComponentsScreen;
