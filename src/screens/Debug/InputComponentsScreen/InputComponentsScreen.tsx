import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import {
  FormField,
  TextArea,
  SearchBar,
  FilterChips,
  DateRangePicker,
} from "../../../components";
import { inputComponentsScreenStyles } from "./InputComponentsScreenStyle";

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
    <ScrollView style={inputComponentsScreenStyles.container}>
      <View style={inputComponentsScreenStyles.header}>
        <Text style={inputComponentsScreenStyles.headerTitle}>
          Input Components
        </Text>
        <Text style={inputComponentsScreenStyles.headerSubtitle}>
          Form Inputs & Filters (5 components)
        </Text>
      </View>

      <View style={inputComponentsScreenStyles.content}>
        {/* FormField */}
        <View style={inputComponentsScreenStyles.section}>
          <Text style={inputComponentsScreenStyles.sectionTitle}>
            FormField
          </Text>

          <View style={inputComponentsScreenStyles.spacer} />
          <FormField
            label="Email"
            placeholder="Nhập email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <View style={inputComponentsScreenStyles.spacer} />
          <FormField
            label="Mật khẩu"
            placeholder="Nhập mật khẩu"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            required
          />

          <View style={inputComponentsScreenStyles.spacer} />
          <FormField
            label="Email (with error)"
            placeholder="Nhập email"
            value="invalid-email"
            onChangeText={() => {}}
            error="Email không hợp lệ"
          />

          <View style={inputComponentsScreenStyles.spacer} />
          <FormField
            label="Disabled field"
            placeholder="Disabled"
            value="Cannot edit"
            onChangeText={() => {}}
            disabled
          />
        </View>

        {/* TextArea */}
        <View style={inputComponentsScreenStyles.section}>
          <Text style={inputComponentsScreenStyles.sectionTitle}>TextArea</Text>

          <View style={inputComponentsScreenStyles.spacer} />
          <TextArea
            label="Mô tả"
            placeholder="Nhập mô tả..."
            value={description}
            onChangeText={setDescription}
            rows={4}
          />

          <View style={inputComponentsScreenStyles.spacer} />
          <TextArea
            label="Ghi chú (tối đa 100 ký tự)"
            placeholder="Nhập ghi chú..."
            value={description}
            onChangeText={setDescription}
            maxLength={100}
            rows={3}
          />

          <View style={inputComponentsScreenStyles.spacer} />
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

        {/* SearchBar */}
        <View style={inputComponentsScreenStyles.section}>
          <Text style={inputComponentsScreenStyles.sectionTitle}>
            SearchBar
          </Text>

          <View style={inputComponentsScreenStyles.spacer} />
          <View>
            <Text style={inputComponentsScreenStyles.subsectionTitle}>
              Basic:
            </Text>
            <SearchBar
              placeholder="Tìm kiếm giải đấu..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          <View style={inputComponentsScreenStyles.spacer} />
          <View>
            <Text style={inputComponentsScreenStyles.subsectionTitle}>
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

        {/* FilterChips */}
        <View style={inputComponentsScreenStyles.section}>
          <Text style={inputComponentsScreenStyles.sectionTitle}>
            FilterChips
          </Text>

          <View style={inputComponentsScreenStyles.spacer} />
          <View>
            <Text style={inputComponentsScreenStyles.subsectionTitle}>
              Multi-select:
            </Text>
            <FilterChips
              filters={filterChips}
              selectedFilters={selectedChips}
              onFilterChange={setSelectedChips}
              multiSelect
            />
          </View>

          <View style={inputComponentsScreenStyles.spacer} />
          <View>
            <Text style={inputComponentsScreenStyles.subsectionTitle}>
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

        {/* DateRangePicker */}
        <View style={inputComponentsScreenStyles.section}>
          <Text style={inputComponentsScreenStyles.sectionTitle}>
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

        <View style={inputComponentsScreenStyles.largeSpacer} />
      </View>
    </ScrollView>
  );
};

export default InputComponentsScreen;
