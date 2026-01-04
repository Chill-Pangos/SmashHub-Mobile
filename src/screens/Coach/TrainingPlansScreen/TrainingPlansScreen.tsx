/**
 * TrainingPlansScreen (UC-19)
 * Display and manage training plans for athletes
 */

import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import type { RootStackNavigationProp } from "../../../navigation/types";
import {
  Calendar,
  Clock,
  User,
  Plus,
  CheckCircle,
  AlertCircle,
} from "lucide-react-native";
import { trainingPlansScreenStyles as styles } from "./TrainingPlansScreenStyle";
import {
  SafeAreaView,
  EmptyState,
  FloatingActionButton,
} from "../../../components";
import {
  mockTrainingPlans,
  getTrainingPlansByCoach,
  getUserById,
} from "../../../mockdata";
import { TrainingPlan } from "../../../types";
import { colors } from "../../../theme";
import { format, parseISO, isToday, isFuture, isPast } from "date-fns";
import { vi } from "date-fns/locale";

const TrainingPlansScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [selectedFilter, setSelectedFilter] = useState<
    "all" | "upcoming" | "completed"
  >("upcoming");

  // Mock coach ID - in real app, get from auth context
  const coachId = "101";

  // Get training plans for this coach
  const allPlans = getTrainingPlansByCoach(coachId);

  // Filter plans based on status
  const filteredPlans = allPlans.filter((plan) => {
    const planDate = parseISO(plan.scheduledDate);

    switch (selectedFilter) {
      case "upcoming":
        return (
          plan.status === "planned" && (isFuture(planDate) || isToday(planDate))
        );
      case "completed":
        return (
          plan.status === "completed" ||
          (plan.status === "planned" && isPast(planDate) && !isToday(planDate))
        );
      default:
        return true;
    }
  });

  // Sort by date
  const sortedPlans = [...filteredPlans].sort(
    (a, b) =>
      new Date(b.scheduledDate).getTime() - new Date(a.scheduledDate).getTime()
  );

  const handlePlanPress = (planId: string) => {
    // Navigate to plan detail
    console.log("View plan:", planId);
  };

  const handleCreatePlan = () => {
    navigation.navigate("CreateTrainingPlan", {});
  };

  const getStatusBadge = (plan: TrainingPlan) => {
    const planDate = parseISO(plan.scheduledDate);

    if (plan.status === "completed") {
      return {
        label: "Hoàn thành",
        color: colors.status.success,
        icon: <CheckCircle size={14} color={colors.status.success} />,
      };
    }

    if (plan.status === "cancelled") {
      return {
        label: "Đã hủy",
        color: colors.muted.foreground,
        icon: <AlertCircle size={14} color={colors.muted.foreground} />,
      };
    }

    if (isToday(planDate)) {
      return {
        label: "Hôm nay",
        color: colors.status.warning,
        icon: <Clock size={14} color={colors.status.warning} />,
      };
    }

    if (isFuture(planDate)) {
      return {
        label: "Sắp tới",
        color: colors.status.info,
        icon: <Calendar size={14} color={colors.status.info} />,
      };
    }

    return {
      label: "Quá hạn",
      color: colors.status.error,
      icon: <AlertCircle size={14} color={colors.status.error} />,
    };
  };

  const renderPlanCard = (plan: TrainingPlan) => {
    const athlete = getUserById(plan.athleteId);
    const planDate = parseISO(plan.scheduledDate);
    const statusBadge = getStatusBadge(plan);

    return (
      <TouchableOpacity
        key={plan.id}
        style={styles.planCard}
        onPress={() => handlePlanPress(plan.id)}
      >
        <View style={styles.planHeader}>
          <View style={styles.planTitleContainer}>
            <Text style={styles.planTitle} numberOfLines={2}>
              {plan.title}
            </Text>
            <View
              style={[
                styles.statusBadge,
                { backgroundColor: `${statusBadge.color}15` },
              ]}
            >
              {statusBadge.icon}
              <Text style={[styles.statusText, { color: statusBadge.color }]}>
                {statusBadge.label}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.planMeta}>
          <View style={styles.metaItem}>
            <User size={16} color={colors.muted.foreground} />
            <Text style={styles.metaText}>{athlete?.name || "Unknown"}</Text>
          </View>
          <View style={styles.metaItem}>
            <Calendar size={16} color={colors.muted.foreground} />
            <Text style={styles.metaText}>
              {format(planDate, "dd MMM yyyy", { locale: vi })}
            </Text>
          </View>
          <View style={styles.metaItem}>
            <Clock size={16} color={colors.muted.foreground} />
            <Text style={styles.metaText}>
              {format(planDate, "HH:mm")} ({plan.duration}p)
            </Text>
          </View>
        </View>

        {plan.description && (
          <Text style={styles.planDescription} numberOfLines={2}>
            {plan.description}
          </Text>
        )}

        <View style={styles.planFooter}>
          <View style={styles.objectivesList}>
            <Text style={styles.footerLabel}>Mục tiêu:</Text>
            <Text style={styles.footerValue}>
              {plan.objectives.length} mục tiêu
            </Text>
          </View>
          <View style={styles.exercisesList}>
            <Text style={styles.footerLabel}>Bài tập:</Text>
            <Text style={styles.footerValue}>
              {plan.exercises.length} bài tập
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const upcomingCount = allPlans.filter((p) => {
    const planDate = parseISO(p.scheduledDate);
    return p.status === "planned" && (isFuture(planDate) || isToday(planDate));
  }).length;

  const completedCount = allPlans.filter((p) => {
    const planDate = parseISO(p.scheduledDate);
    return (
      p.status === "completed" ||
      (p.status === "planned" && isPast(planDate) && !isToday(planDate))
    );
  }).length;

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Header */}
      <LinearGradient
        colors={[colors.primary[400], colors.primary[500], colors.primary[600]]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Kế hoạch luyện tập</Text>
        <Text style={styles.headerSubtitle}>Quản lý và theo dõi tiến độ</Text>
      </LinearGradient>

      {/* Summary */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryValue}>{allPlans.length}</Text>
          <Text style={styles.summaryLabel}>Tổng kế hoạch</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={[styles.summaryValue, { color: colors.status.info }]}>
            {upcomingCount}
          </Text>
          <Text style={styles.summaryLabel}>Sắp tới</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={[styles.summaryValue, { color: colors.status.success }]}>
            {completedCount}
          </Text>
          <Text style={styles.summaryLabel}>Hoàn thành</Text>
        </View>
      </View>

      {/* Filter Tabs */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterTab,
            selectedFilter === "upcoming" && styles.filterTabActive,
          ]}
          onPress={() => setSelectedFilter("upcoming")}
        >
          <Text
            style={[
              styles.filterTabText,
              selectedFilter === "upcoming" && styles.filterTabTextActive,
            ]}
          >
            Sắp tới ({upcomingCount})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterTab,
            selectedFilter === "completed" && styles.filterTabActive,
          ]}
          onPress={() => setSelectedFilter("completed")}
        >
          <Text
            style={[
              styles.filterTabText,
              selectedFilter === "completed" && styles.filterTabTextActive,
            ]}
          >
            Đã hoàn thành ({completedCount})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterTab,
            selectedFilter === "all" && styles.filterTabActive,
          ]}
          onPress={() => setSelectedFilter("all")}
        >
          <Text
            style={[
              styles.filterTabText,
              selectedFilter === "all" && styles.filterTabTextActive,
            ]}
          >
            Tất cả ({allPlans.length})
          </Text>
        </TouchableOpacity>
      </View>

      {/* Plans List */}
      <ScrollView
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
      >
        {sortedPlans.length === 0 ? (
          <EmptyState
            title="Chưa có kế hoạch"
            description="Tạo kế hoạch luyện tập mới cho vận động viên"
          />
        ) : (
          sortedPlans.map(renderPlanCard)
        )}
        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* FAB */}
      <FloatingActionButton
        icon={<Plus size={24} color={colors.primary.foreground} />}
        onPress={handleCreatePlan}
      />
    </SafeAreaView>
  );
};

export default TrainingPlansScreen;
