/**
 * CreateTrainingPlanScreen (UC-20)
 * Multi-step form for creating training plans
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
import { useNavigation } from "@react-navigation/native";
import {
  ChevronLeft,
  Calendar,
  Target,
  Dumbbell,
  Save,
} from "lucide-react-native";
import { createTrainingPlanScreenStyles as styles } from "./CreateTrainingPlanScreenStyle";
import { SafeAreaView, Button } from "../../../components";
import { mockAthletes } from "../../../mockdata";
import { colors } from "../../../theme";

type Step = "basic" | "athlete" | "objectives" | "exercises" | "review";

const CreateTrainingPlanScreen: React.FC = () => {
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState<Step>("basic");

  // Form data
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [scheduledDate, setScheduledDate] = useState("");
  const [duration, setDuration] = useState("");
  const [selectedAthleteId, setSelectedAthleteId] = useState("");
  const [objectives, setObjectives] = useState<string[]>([]);
  const [newObjective, setNewObjective] = useState("");
  const [exercises, setExercises] = useState<string[]>([]);
  const [newExercise, setNewExercise] = useState("");

  // Get coach's athletes
  const coachAthletes = mockAthletes.filter((athlete) =>
    ["1", "3", "5", "6"].includes(athlete.id)
  );

  const steps: { key: Step; label: string; icon: any }[] = [
    { key: "basic", label: "Cơ bản", icon: Calendar },
    { key: "athlete", label: "VĐV", icon: Target },
    { key: "objectives", label: "Mục tiêu", icon: Target },
    { key: "exercises", label: "Bài tập", icon: Dumbbell },
    { key: "review", label: "Xem lại", icon: Save },
  ];

  const currentStepIndex = steps.findIndex((s) => s.key === currentStep);

  const handleNext = () => {
    if (currentStep === "basic") {
      if (!title.trim() || !scheduledDate || !duration) {
        Alert.alert("Lỗi", "Vui lòng điền đầy đủ thông tin");
        return;
      }
      setCurrentStep("athlete");
    } else if (currentStep === "athlete") {
      if (!selectedAthleteId) {
        Alert.alert("Lỗi", "Vui lòng chọn vận động viên");
        return;
      }
      setCurrentStep("objectives");
    } else if (currentStep === "objectives") {
      if (objectives.length === 0) {
        Alert.alert("Lỗi", "Vui lòng thêm ít nhất 1 mục tiêu");
        return;
      }
      setCurrentStep("exercises");
    } else if (currentStep === "exercises") {
      if (exercises.length === 0) {
        Alert.alert("Lỗi", "Vui lòng thêm ít nhất 1 bài tập");
        return;
      }
      setCurrentStep("review");
    }
  };

  const handleBack = () => {
    if (currentStep === "basic") {
      navigation.goBack();
    } else if (currentStep === "athlete") setCurrentStep("basic");
    else if (currentStep === "objectives") setCurrentStep("athlete");
    else if (currentStep === "exercises") setCurrentStep("objectives");
    else if (currentStep === "review") setCurrentStep("exercises");
  };

  const handleSave = () => {
    Alert.alert("Thành công", "Kế hoạch luyện tập đã được tạo", [
      { text: "OK", onPress: () => navigation.goBack() },
    ]);
  };

  const addObjective = () => {
    if (newObjective.trim()) {
      setObjectives([...objectives, newObjective.trim()]);
      setNewObjective("");
    }
  };

  const removeObjective = (index: number) => {
    setObjectives(objectives.filter((_, i) => i !== index));
  };

  const addExercise = () => {
    if (newExercise.trim()) {
      setExercises([...exercises, newExercise.trim()]);
      setNewExercise("");
    }
  };

  const removeExercise = (index: number) => {
    setExercises(exercises.filter((_, i) => i !== index));
  };

  const selectedAthlete = coachAthletes.find((a) => a.id === selectedAthleteId);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <ChevronLeft size={24} color={colors.foreground} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tạo kế hoạch</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.stepsContainer}>
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === currentStepIndex;
          const isCompleted = index < currentStepIndex;
          return (
            <View key={step.key} style={styles.stepItem}>
              <View
                style={[
                  styles.stepCircle,
                  isActive && styles.stepCircleActive,
                  isCompleted && styles.stepCircleCompleted,
                ]}
              >
                <Icon
                  size={14}
                  color={
                    isActive || isCompleted
                      ? colors.primary.foreground
                      : colors.muted.foreground
                  }
                />
              </View>
              <Text
                style={[styles.stepLabel, isActive && styles.stepLabelActive]}
              >
                {step.label}
              </Text>
            </View>
          );
        })}
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {currentStep === "basic" && (
          <View style={styles.stepContent}>
            <Text style={styles.sectionTitle}>Thông tin cơ bản</Text>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Tên kế hoạch *</Text>
              <TextInput
                style={styles.input}
                placeholder="VD: Luyện tập tuần 1"
                value={title}
                onChangeText={setTitle}
              />
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Mô tả</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Mô tả..."
                value={description}
                onChangeText={setDescription}
                multiline
              />
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Ngày *</Text>
              <TextInput
                style={styles.input}
                placeholder="2025-01-10"
                value={scheduledDate}
                onChangeText={setScheduledDate}
              />
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Thời lượng (phút) *</Text>
              <TextInput
                style={styles.input}
                placeholder="90"
                value={duration}
                onChangeText={setDuration}
                keyboardType="numeric"
              />
            </View>
          </View>
        )}

        {currentStep === "athlete" && (
          <View style={styles.stepContent}>
            <Text style={styles.sectionTitle}>Chọn VĐV</Text>
            {coachAthletes.map((athlete) => (
              <TouchableOpacity
                key={athlete.id}
                style={[
                  styles.athleteItem,
                  selectedAthleteId === athlete.id &&
                    styles.athleteItemSelected,
                ]}
                onPress={() => setSelectedAthleteId(athlete.id)}
              >
                <View style={styles.athleteInfo}>
                  <View style={styles.athleteAvatar}>
                    <Text style={styles.athleteAvatarText}>
                      {athlete.name.charAt(0)}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.athleteName}>{athlete.name}</Text>
                    <Text style={styles.athleteOrg}>
                      {athlete.organization}
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.radioCircle,
                    selectedAthleteId === athlete.id &&
                      styles.radioCircleSelected,
                  ]}
                />
              </TouchableOpacity>
            ))}
          </View>
        )}

        {currentStep === "objectives" && (
          <View style={styles.stepContent}>
            <Text style={styles.sectionTitle}>Mục tiêu</Text>
            <View style={styles.addContainer}>
              <TextInput
                style={[styles.input, { flex: 1 }]}
                placeholder="Nhập mục tiêu..."
                value={newObjective}
                onChangeText={setNewObjective}
              />
              <TouchableOpacity style={styles.addButton} onPress={addObjective}>
                <Text style={styles.addButtonText}>Thêm</Text>
              </TouchableOpacity>
            </View>
            {objectives.map((obj, i) => (
              <View key={i} style={styles.listItem}>
                <Text style={styles.listItemText}>
                  {i + 1}. {obj}
                </Text>
                <TouchableOpacity onPress={() => removeObjective(i)}>
                  <Text style={styles.removeButton}>Xóa</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}

        {currentStep === "exercises" && (
          <View style={styles.stepContent}>
            <Text style={styles.sectionTitle}>Bài tập</Text>
            <View style={styles.addContainer}>
              <TextInput
                style={[styles.input, { flex: 1 }]}
                placeholder="Nhập bài tập..."
                value={newExercise}
                onChangeText={setNewExercise}
              />
              <TouchableOpacity style={styles.addButton} onPress={addExercise}>
                <Text style={styles.addButtonText}>Thêm</Text>
              </TouchableOpacity>
            </View>
            {exercises.map((ex, i) => (
              <View key={i} style={styles.listItem}>
                <Text style={styles.listItemText}>
                  {i + 1}. {ex}
                </Text>
                <TouchableOpacity onPress={() => removeExercise(i)}>
                  <Text style={styles.removeButton}>Xóa</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}

        {currentStep === "review" && (
          <View style={styles.stepContent}>
            <Text style={styles.sectionTitle}>Xem lại</Text>
            <View style={styles.reviewSection}>
              <Text style={styles.reviewLabel}>Tên:</Text>
              <Text style={styles.reviewValue}>{title}</Text>
            </View>
            {description && (
              <View style={styles.reviewSection}>
                <Text style={styles.reviewLabel}>Mô tả:</Text>
                <Text style={styles.reviewValue}>{description}</Text>
              </View>
            )}
            <View style={styles.reviewSection}>
              <Text style={styles.reviewLabel}>VĐV:</Text>
              <Text style={styles.reviewValue}>{selectedAthlete?.name}</Text>
            </View>
            <View style={styles.reviewSection}>
              <Text style={styles.reviewLabel}>Ngày:</Text>
              <Text style={styles.reviewValue}>{scheduledDate}</Text>
            </View>
            <View style={styles.reviewSection}>
              <Text style={styles.reviewLabel}>Thời lượng:</Text>
              <Text style={styles.reviewValue}>{duration}p</Text>
            </View>
            <View style={styles.reviewSection}>
              <Text style={styles.reviewLabel}>Mục tiêu:</Text>
              {objectives.map((o, i) => (
                <Text key={i} style={styles.reviewListItem}>
                  • {o}
                </Text>
              ))}
            </View>
            <View style={styles.reviewSection}>
              <Text style={styles.reviewLabel}>Bài tập:</Text>
              {exercises.map((e, i) => (
                <Text key={i} style={styles.reviewListItem}>
                  • {e}
                </Text>
              ))}
            </View>
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title={currentStep !== "review" ? "Tiếp theo" : "Lưu kế hoạch"}
          onPress={currentStep !== "review" ? handleNext : handleSave}
          style={styles.nextButton}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateTrainingPlanScreen;
