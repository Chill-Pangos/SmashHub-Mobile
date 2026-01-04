/**
 * AthleteEvaluationScreen (UC-21)
 * Evaluate athlete performance with detailed ratings
 */

import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ChevronLeft,
  Star,
  TrendingUp,
  Calendar,
  User,
} from "lucide-react-native";
import { athleteEvaluationScreenStyles as styles } from "./AthleteEvaluationScreenStyle";
import { SafeAreaView, Button } from "../../../components";
import {
  mockAthletes,
  mockAthleteEvaluations,
  getEvaluationsByAthlete,
} from "../../../mockdata";
import { colors } from "../../../theme";
import { format, parseISO } from "date-fns";
import { vi } from "date-fns/locale";

type RatingCategory = "technical" | "physical" | "mental" | "tactical";

const AthleteEvaluationScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const athleteId = (route.params as any)?.athleteId || "1";

  const athlete = mockAthletes.find((a) => a.id === athleteId);
  const evaluationHistory = getEvaluationsByAthlete(athleteId);

  const [activeTab, setActiveTab] = useState<"new" | "history">("new");
  const [ratings, setRatings] = useState({
    technical: { forehand: 0, backhand: 0, serve: 0, return: 0, volley: 0 },
    physical: {
      speed: 0,
      strength: 0,
      endurance: 0,
      agility: 0,
      flexibility: 0,
    },
    mental: { focus: 0, confidence: 0, composure: 0, determination: 0 },
    tactical: {
      gameReading: 0,
      decisionMaking: 0,
      adaptability: 0,
      strategyExecution: 0,
    },
  });
  const [strengths, setStrengths] = useState("");
  const [weaknesses, setWeaknesses] = useState("");
  const [recommendations, setRecommendations] = useState("");
  const [notes, setNotes] = useState("");

  const ratingCategories = [
    {
      key: "technical" as RatingCategory,
      label: "Kỹ thuật",
      items: [
        { key: "forehand", label: "Forehand" },
        { key: "backhand", label: "Backhand" },
        { key: "serve", label: "Giao bóng" },
        { key: "return", label: "Trả bóng" },
        { key: "volley", label: "Volley" },
      ],
    },
    {
      key: "physical" as RatingCategory,
      label: "Thể lực",
      items: [
        { key: "speed", label: "Tốc độ" },
        { key: "strength", label: "Sức mạnh" },
        { key: "endurance", label: "Sức bền" },
        { key: "agility", label: "Nhanh nhẹn" },
        { key: "flexibility", label: "Linh hoạt" },
      ],
    },
    {
      key: "mental" as RatingCategory,
      label: "Tinh thần",
      items: [
        { key: "focus", label: "Tập trung" },
        { key: "confidence", label: "Tự tin" },
        { key: "composure", label: "Bình tĩnh" },
        { key: "determination", label: "Quyết tâm" },
      ],
    },
    {
      key: "tactical" as RatingCategory,
      label: "Chiến thuật",
      items: [
        { key: "gameReading", label: "Đọc trận" },
        { key: "decisionMaking", label: "Ra quyết định" },
        { key: "adaptability", label: "Thích nghi" },
        { key: "strategyExecution", label: "Thực thi" },
      ],
    },
  ];

  const handleRatingChange = (
    category: RatingCategory,
    item: string,
    value: number
  ) => {
    setRatings((prev) => ({
      ...prev,
      [category]: { ...prev[category], [item]: value },
    }));
  };

  const calculateCategoryAverage = (category: RatingCategory) => {
    const values = Object.values(ratings[category]);
    const sum = values.reduce((acc, val) => acc + val, 0);
    return values.length > 0 ? (sum / values.length).toFixed(1) : "0.0";
  };

  const calculateOverallRating = () => {
    const allValues = Object.values(ratings).flatMap((cat) =>
      Object.values(cat)
    );
    const sum = allValues.reduce((acc, val) => acc + val, 0);
    return allValues.length > 0 ? (sum / allValues.length).toFixed(1) : "0.0";
  };

  const handleSubmit = () => {
    const overallRating = parseFloat(calculateOverallRating());
    if (overallRating === 0) {
      Alert.alert("Lỗi", "Vui lòng đánh giá ít nhất một tiêu chí");
      return;
    }
    Alert.alert("Thành công", "Đánh giá đã được lưu", [
      { text: "OK", onPress: () => navigation.goBack() },
    ]);
  };

  const renderRatingSlider = (category: RatingCategory, item: any) => {
    const value =
      ratings[category][item.key as keyof (typeof ratings)[typeof category]];
    return (
      <View key={item.key} style={styles.ratingItem}>
        <Text style={styles.ratingLabel}>{item.label}</Text>
        <View style={styles.ratingSlider}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
            <TouchableOpacity
              key={rating}
              style={[
                styles.ratingDot,
                value >= rating && styles.ratingDotActive,
              ]}
              onPress={() => handleRatingChange(category, item.key, rating)}
            />
          ))}
        </View>
        <Text style={styles.ratingValue}>{value}/10</Text>
      </View>
    );
  };

  const renderEvaluationHistory = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      {evaluationHistory.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>Chưa có đánh giá nào</Text>
        </View>
      ) : (
        evaluationHistory.map((evaluation) => (
          <View key={evaluation.id} style={styles.historyCard}>
            <View style={styles.historyHeader}>
              <View>
                <Text style={styles.historyDate}>
                  {format(parseISO(evaluation.evaluationDate), "dd MMM yyyy", {
                    locale: vi,
                  })}
                </Text>
                <Text style={styles.historyCoach}>
                  Bởi: {evaluation.coachName}
                </Text>
              </View>
              <View style={styles.historyRating}>
                <Star
                  size={16}
                  color={colors.status.warning}
                  fill={colors.status.warning}
                />
                <Text style={styles.historyRatingText}>
                  {evaluation.overallRating.toFixed(1)}
                </Text>
              </View>
            </View>
            <View style={styles.historyRatings}>
              <View style={styles.historyRatingItem}>
                <Text style={styles.historyRatingLabel}>Kỹ thuật</Text>
                <Text style={styles.historyRatingValue}>
                  {Object.values(evaluation.technicalSkills).reduce(
                    (a, b) => a + b,
                    0
                  ) / Object.values(evaluation.technicalSkills).length}
                </Text>
              </View>
              <View style={styles.historyRatingItem}>
                <Text style={styles.historyRatingLabel}>Thể lực</Text>
                <Text style={styles.historyRatingValue}>
                  {Object.values(evaluation.physicalAttributes).reduce(
                    (a, b) => a + b,
                    0
                  ) / Object.values(evaluation.physicalAttributes).length}
                </Text>
              </View>
              <View style={styles.historyRatingItem}>
                <Text style={styles.historyRatingLabel}>Tinh thần</Text>
                <Text style={styles.historyRatingValue}>
                  {Object.values(evaluation.mentalStrength).reduce(
                    (a, b) => a + b,
                    0
                  ) / Object.values(evaluation.mentalStrength).length}
                </Text>
              </View>
              <View style={styles.historyRatingItem}>
                <Text style={styles.historyRatingLabel}>Chiến thuật</Text>
                <Text style={styles.historyRatingValue}>
                  {Object.values(evaluation.tacticalAwareness).reduce(
                    (a, b) => a + b,
                    0
                  ) / Object.values(evaluation.tacticalAwareness).length}
                </Text>
              </View>
            </View>
            {evaluation.notes && (
              <Text style={styles.historyNotes}>{evaluation.notes}</Text>
            )}
          </View>
        ))
      )}
      <View style={styles.bottomSpacer} />
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ChevronLeft size={24} color={colors.foreground} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Đánh giá VĐV</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.athleteInfo}>
        <View style={styles.athleteAvatar}>
          <User size={24} color={colors.primary.DEFAULT} />
        </View>
        <View>
          <Text style={styles.athleteName}>{athlete?.name || "Unknown"}</Text>
          <Text style={styles.athleteOrg}>{athlete?.organization}</Text>
        </View>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "new" && styles.tabActive]}
          onPress={() => setActiveTab("new")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "new" && styles.tabTextActive,
            ]}
          >
            Đánh giá mới
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "history" && styles.tabActive]}
          onPress={() => setActiveTab("history")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "history" && styles.tabTextActive,
            ]}
          >
            Lịch sử ({evaluationHistory.length})
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === "new" ? (
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.overallCard}>
            <Text style={styles.overallLabel}>Đánh giá tổng thể</Text>
            <View style={styles.overallRating}>
              <Star
                size={32}
                color={colors.status.warning}
                fill={colors.status.warning}
              />
              <Text style={styles.overallValue}>
                {calculateOverallRating()}/10
              </Text>
            </View>
          </View>

          {ratingCategories.map((category) => (
            <View key={category.key} style={styles.categorySection}>
              <View style={styles.categoryHeader}>
                <Text style={styles.categoryTitle}>{category.label}</Text>
                <Text style={styles.categoryAverage}>
                  {calculateCategoryAverage(category.key)}/10
                </Text>
              </View>
              {category.items.map((item) =>
                renderRatingSlider(category.key, item)
              )}
            </View>
          ))}

          <View style={styles.textSection}>
            <Text style={styles.textLabel}>Điểm mạnh</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Nhập điểm mạnh..."
              value={strengths}
              onChangeText={setStrengths}
              multiline
            />
          </View>

          <View style={styles.textSection}>
            <Text style={styles.textLabel}>Điểm cần cải thiện</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Nhập điểm cần cải thiện..."
              value={weaknesses}
              onChangeText={setWeaknesses}
              multiline
            />
          </View>

          <View style={styles.textSection}>
            <Text style={styles.textLabel}>Khuyến nghị</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Nhập khuyến nghị..."
              value={recommendations}
              onChangeText={setRecommendations}
              multiline
            />
          </View>

          <View style={styles.textSection}>
            <Text style={styles.textLabel}>Ghi chú</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Nhập ghi chú..."
              value={notes}
              onChangeText={setNotes}
              multiline
            />
          </View>

          <Button
            title="Lưu đánh giá"
            onPress={handleSubmit}
            style={styles.submitButton}
          />
          <View style={styles.bottomSpacer} />
        </ScrollView>
      ) : (
        renderEvaluationHistory()
      )}
    </SafeAreaView>
  );
};

export default AthleteEvaluationScreen;
