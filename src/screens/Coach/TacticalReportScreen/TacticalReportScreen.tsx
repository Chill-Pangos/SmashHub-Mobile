/**
 * TacticalReportScreen (UC-23)
 * View and manage tactical reports for athletes
 */

import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  FileText,
  TrendingUp,
  Users,
  Calendar,
  ChevronRight,
} from "lucide-react-native";
import { tacticalReportScreenStyles as styles } from "./TacticalReportScreenStyle";
import { SafeAreaView, EmptyState } from "../../../components";
import {
  mockTacticalReports,
  getTacticalReportsByCoach,
} from "../../../mockdata";
import { TacticalReport } from "../../../types";
import { colors } from "../../../theme";
import { format, parseISO } from "date-fns";
import { vi } from "date-fns/locale";

type ReportFilter = "all" | "match" | "training" | "general";

const TacticalReportScreen: React.FC = () => {
  const navigation = useNavigation();
  const [selectedFilter, setSelectedFilter] = useState<ReportFilter>("all");
  const [selectedReport, setSelectedReport] = useState<TacticalReport | null>(
    null
  );

  const coachId = "101";
  const allReports = getTacticalReportsByCoach(coachId);

  const filteredReports =
    selectedFilter === "all"
      ? allReports
      : allReports.filter((report) => report.reportType === selectedFilter);

  const getReportTypeLabel = (type: string) => {
    const labels = {
      match: "Trận đấu",
      training: "Luyện tập",
      general: "Tổng quan",
    };
    return labels[type as keyof typeof labels] || type;
  };

  const getReportTypeColor = (type: string) => {
    const colorMap = {
      match: colors.status.info,
      training: colors.status.warning,
      general: colors.primary.DEFAULT,
    };
    return colorMap[type as keyof typeof colorMap] || colors.muted.foreground;
  };

  const renderFilterChip = (
    filter: ReportFilter,
    label: string,
    count: number
  ) => (
    <TouchableOpacity
      key={filter}
      style={[
        styles.filterChip,
        selectedFilter === filter && styles.filterChipActive,
      ]}
      onPress={() => setSelectedFilter(filter)}
    >
      <Text
        style={[
          styles.filterChipText,
          selectedFilter === filter && styles.filterChipTextActive,
        ]}
      >
        {label} ({count})
      </Text>
    </TouchableOpacity>
  );

  const renderReportCard = (report: TacticalReport) => (
    <TouchableOpacity
      key={report.id}
      style={styles.reportCard}
      onPress={() => setSelectedReport(report)}
    >
      <View style={styles.reportHeader}>
        <View
          style={[
            styles.reportTypeBadge,
            { backgroundColor: getReportTypeColor(report.reportType) + "20" },
          ]}
        >
          <Text
            style={[
              styles.reportTypeText,
              { color: getReportTypeColor(report.reportType) },
            ]}
          >
            {getReportTypeLabel(report.reportType)}
          </Text>
        </View>
        <View style={styles.reportDate}>
          <Calendar size={14} color={colors.muted.foreground} />
          <Text style={styles.reportDateText}>
            {format(parseISO(report.reportDate), "dd MMM yyyy", { locale: vi })}
          </Text>
        </View>
      </View>
      <Text style={styles.reportTitle}>{report.title}</Text>
      <View style={styles.reportMeta}>
        <Users size={14} color={colors.muted.foreground} />
        <Text style={styles.reportMetaText}>{report.athleteName}</Text>
      </View>
      {report.matchInfo && (
        <Text style={styles.reportMatchInfo} numberOfLines={1}>
          {report.matchInfo}
        </Text>
      )}
      <View style={styles.reportFooter}>
        <Text style={styles.reportFooterText}>Xem chi tiết</Text>
        <ChevronRight size={16} color={colors.primary.DEFAULT} />
      </View>
    </TouchableOpacity>
  );

  const renderReportDetail = () => {
    if (!selectedReport) return null;

    return (
      <View style={styles.detailContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.detailHeader}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setSelectedReport(null)}
            >
              <Text style={styles.backButtonText}>← Quay lại</Text>
            </TouchableOpacity>
            <View
              style={[
                styles.detailTypeBadge,
                {
                  backgroundColor:
                    getReportTypeColor(selectedReport.reportType) + "20",
                },
              ]}
            >
              <Text
                style={[
                  styles.detailTypeText,
                  { color: getReportTypeColor(selectedReport.reportType) },
                ]}
              >
                {getReportTypeLabel(selectedReport.reportType)}
              </Text>
            </View>
          </View>

          <Text style={styles.detailTitle}>{selectedReport.title}</Text>

          <View style={styles.detailMeta}>
            <View style={styles.detailMetaItem}>
              <Users size={16} color={colors.muted.foreground} />
              <Text style={styles.detailMetaText}>
                {selectedReport.athleteName}
              </Text>
            </View>
            <View style={styles.detailMetaItem}>
              <Calendar size={16} color={colors.muted.foreground} />
              <Text style={styles.detailMetaText}>
                {format(parseISO(selectedReport.reportDate), "dd MMMM yyyy", {
                  locale: vi,
                })}
              </Text>
            </View>
          </View>

          {selectedReport.matchInfo && (
            <View style={styles.detailSection}>
              <Text style={styles.detailSectionTitle}>Thông tin trận đấu</Text>
              <Text style={styles.detailText}>{selectedReport.matchInfo}</Text>
            </View>
          )}

          <View style={styles.detailSection}>
            <Text style={styles.detailSectionTitle}>Điểm mạnh</Text>
            {selectedReport.strengths.map((strength: string, index: number) => (
              <View key={index} style={styles.detailListItem}>
                <View
                  style={[
                    styles.detailListDot,
                    { backgroundColor: colors.status.success },
                  ]}
                />
                <Text style={styles.detailListText}>{strength}</Text>
              </View>
            ))}
          </View>

          <View style={styles.detailSection}>
            <Text style={styles.detailSectionTitle}>Điểm yếu</Text>
            {selectedReport.weaknesses.map(
              (weakness: string, index: number) => (
                <View key={index} style={styles.detailListItem}>
                  <View
                    style={[
                      styles.detailListDot,
                      { backgroundColor: colors.status.error },
                    ]}
                  />
                  <Text style={styles.detailListText}>{weakness}</Text>
                </View>
              )
            )}
          </View>

          {selectedReport.opponents && selectedReport.opponents.length > 0 && (
            <View style={styles.detailSection}>
              <Text style={styles.detailSectionTitle}>Phân tích đối thủ</Text>
              {selectedReport.opponents.map((opponent, index) => (
                <View key={index} style={styles.opponentCard}>
                  <Text style={styles.opponentName}>{opponent.name}</Text>
                  <Text style={styles.opponentAnalysis}>
                    {opponent.analysis}
                  </Text>
                </View>
              ))}
            </View>
          )}

          <View style={styles.detailSection}>
            <Text style={styles.detailSectionTitle}>Đề xuất</Text>
            {selectedReport.recommendations.map((rec, index) => (
              <View key={index} style={styles.detailListItem}>
                <View
                  style={[
                    styles.detailListDot,
                    { backgroundColor: colors.status.info },
                  ]}
                />
                <Text style={styles.detailListText}>{rec}</Text>
              </View>
            ))}
          </View>

          <View style={styles.detailSection}>
            <Text style={styles.detailSectionTitle}>Ghi chú chiến thuật</Text>
            <Text style={styles.detailText}>
              {selectedReport.tacticalNotes}
            </Text>
          </View>

          <View style={styles.detailSection}>
            <Text style={styles.detailSectionTitle}>Bước tiếp theo</Text>
            {selectedReport.nextSteps.map((step: string, index: number) => (
              <View key={index} style={styles.detailListItem}>
                <Text style={styles.detailStepNumber}>{index + 1}</Text>
                <Text style={styles.detailListText}>{step}</Text>
              </View>
            ))}
          </View>

          <View style={styles.bottomSpacer} />
        </ScrollView>
      </View>
    );
  };

  if (selectedReport) {
    return (
      <SafeAreaView style={styles.container}>
        {renderReportDetail()}
      </SafeAreaView>
    );
  }

  const matchCount = allReports.filter((r) => r.reportType === "match").length;
  const trainingCount = allReports.filter(
    (r) => r.reportType === "training"
  ).length;
  const generalCount = allReports.filter(
    (r) => r.reportType === "general"
  ).length;

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[colors.primary[400], colors.primary[500], colors.primary[600]]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Báo cáo chiến thuật</Text>
        <Text style={styles.headerSubtitle}>Phân tích và theo dõi VĐV</Text>
      </LinearGradient>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
      >
        {renderFilterChip("all", "Tất cả", allReports.length)}
        {renderFilterChip("match", "Trận đấu", matchCount)}
        {renderFilterChip("training", "Luyện tập", trainingCount)}
        {renderFilterChip("general", "Tổng quan", generalCount)}
      </ScrollView>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {filteredReports.length === 0 ? (
          <EmptyState
            title="Chưa có báo cáo"
            description="Chưa có báo cáo chiến thuật nào cho bộ lọc này"
          />
        ) : (
          filteredReports.map(renderReportCard)
        )}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TacticalReportScreen;
