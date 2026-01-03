/**
 * SubmitComplaintScreen - Submit Match Complaint
 * UC-15: Multi-step complaint submission with evidence
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
import { LinearGradient } from "expo-linear-gradient";
import {
  ArrowLeft,
  Check,
  FileText,
  Camera,
  AlertCircle,
  Send,
  ChevronRight,
} from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "../../../components";
import { FormField } from "../../../components/inputs/FormField";
import { TextArea } from "../../../components/inputs/TextArea";
import { colors } from "../../../theme/colors";
import { globalStyles } from "../../../styles/global.styles";
import { submitComplaintScreenStyles as styles } from "./SubmitComplaintScreenStyle";

type StepType = "match" | "topic" | "details" | "preview";

interface ComplaintTopic {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface MatchOption {
  id: string;
  tournamentName: string;
  opponent: string;
  date: string;
  courtNumber: string;
}

const SubmitComplaintScreen: React.FC = () => {
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState<StepType>("match");
  const [selectedMatch, setSelectedMatch] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [complaintTitle, setComplaintTitle] = useState("");
  const [complaintDescription, setComplaintDescription] = useState("");
  const [evidence, setEvidence] = useState<string[]>([]);

  // Mock recent matches
  const recentMatches: MatchOption[] = [
    {
      id: "m1",
      tournamentName: "Giải Cầu Lông Mở Rộng TP.HCM 2024",
      opponent: "Nguyễn Văn A",
      date: "2024-01-03 09:00",
      courtNumber: "Sân 1",
    },
    {
      id: "m2",
      tournamentName: "Giải Vô Địch Quốc Gia 2024",
      opponent: "Trần Văn B",
      date: "2024-01-02 14:30",
      courtNumber: "Sân 3",
    },
  ];

  // Complaint topics
  const complaintTopics: ComplaintTopic[] = [
    {
      id: "referee",
      title: "Trọng tài",
      description: "Khiếu nại về quyết định của trọng tài",
      icon: "⚖️",
    },
    {
      id: "opponent",
      title: "Đối thủ",
      description: "Vi phạm của đối thủ trong thi đấu",
      icon: "👤",
    },
    {
      id: "equipment",
      title: "Trang thiết bị",
      description: "Vấn đề về sân thi đấu, thiết bị",
      icon: "🏸",
    },
    {
      id: "schedule",
      title: "Lịch thi đấu",
      description: "Thay đổi lịch không thông báo",
      icon: "📅",
    },
    {
      id: "other",
      title: "Khác",
      description: "Vấn đề khác liên quan đến trận đấu",
      icon: "📝",
    },
  ];

  const getStepNumber = (step: StepType): number => {
    const steps: StepType[] = ["match", "topic", "details", "preview"];
    return steps.indexOf(step) + 1;
  };

  const canProceed = (): boolean => {
    switch (currentStep) {
      case "match":
        return selectedMatch !== null;
      case "topic":
        return selectedTopic !== null;
      case "details":
        return (
          complaintTitle.trim() !== "" && complaintDescription.trim() !== ""
        );
      case "preview":
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (!canProceed()) return;

    const steps: StepType[] = ["match", "topic", "details", "preview"];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const steps: StepType[] = ["match", "topic", "details", "preview"];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    } else {
      navigation.goBack();
    }
  };

  const handleSubmit = () => {
    Alert.alert(
      "Xác nhận gửi khiếu nại",
      "Bạn có chắc chắn muốn gửi khiếu nại này?",
      [
        { text: "Hủy", style: "cancel" },
        {
          text: "Gửi",
          onPress: () => {
            // Simulate API call
            Alert.alert("Thành công", "Khiếu nại đã được gửi thành công", [
              { text: "OK", onPress: () => navigation.goBack() },
            ]);
          },
        },
      ]
    );
  };

  const handleAddEvidence = () => {
    Alert.alert("Thêm bằng chứng", "Chọn loại bằng chứng", [
      {
        text: "Chụp ảnh",
        onPress: () => {
          setEvidence([...evidence, "photo_" + Date.now()]);
          Alert.alert("Thành công", "Đã thêm ảnh");
        },
      },
      {
        text: "Chọn từ thư viện",
        onPress: () => {
          setEvidence([...evidence, "gallery_" + Date.now()]);
          Alert.alert("Thành công", "Đã thêm ảnh từ thư viện");
        },
      },
      { text: "Hủy", style: "cancel" },
    ]);
  };

  const selectedMatchData = recentMatches.find((m) => m.id === selectedMatch);
  const selectedTopicData = complaintTopics.find((t) => t.id === selectedTopic);

  return (
    <SafeAreaView style={globalStyles.flex1}>
      {/* Header */}
      <LinearGradient
        colors={[colors.primary[400], colors.primary[500], colors.primary[600]]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <ArrowLeft size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Gửi Khiếu Nại</Text>
        <Text style={styles.headerSubtitle}>
          Bước {getStepNumber(currentStep)}/4
        </Text>

        {/* Progress Steps */}
        <View style={styles.stepsContainer}>
          {["match", "topic", "details", "preview"].map((step, index) => (
            <View
              key={step}
              style={[
                styles.stepDot,
                getStepNumber(currentStep) > index + 1 &&
                  styles.stepDotCompleted,
                getStepNumber(currentStep) === index + 1 &&
                  styles.stepDotActive,
              ]}
            />
          ))}
        </View>
      </LinearGradient>

      <ScrollView style={globalStyles.flex1}>
        <View style={styles.contentContainer}>
          {/* Step 1: Select Match */}
          {currentStep === "match" && (
            <View>
              <Text style={styles.stepTitle}>Chọn trận đấu</Text>
              <Text style={styles.stepDescription}>
                Chọn trận đấu mà bạn muốn khiếu nại
              </Text>

              {recentMatches.map((match) => (
                <TouchableOpacity
                  key={match.id}
                  style={[
                    styles.matchCard,
                    selectedMatch === match.id && styles.matchCardSelected,
                  ]}
                  onPress={() => setSelectedMatch(match.id)}
                >
                  {selectedMatch === match.id && (
                    <View style={styles.checkmark}>
                      <Check size={16} color="#fff" />
                    </View>
                  )}
                  <Text style={styles.matchTournament}>
                    {match.tournamentName}
                  </Text>
                  <Text style={styles.matchDetails}>
                    vs {match.opponent} • {match.date}
                  </Text>
                  <Text style={styles.matchCourt}>{match.courtNumber}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Step 2: Select Topic */}
          {currentStep === "topic" && (
            <View>
              <Text style={styles.stepTitle}>Chọn chủ đề khiếu nại</Text>
              <Text style={styles.stepDescription}>
                Chọn vấn đề chính mà bạn muốn khiếu nại
              </Text>

              {complaintTopics.map((topic) => (
                <TouchableOpacity
                  key={topic.id}
                  style={[
                    styles.topicCard,
                    selectedTopic === topic.id && styles.topicCardSelected,
                  ]}
                  onPress={() => setSelectedTopic(topic.id)}
                >
                  {selectedTopic === topic.id && (
                    <View style={styles.checkmark}>
                      <Check size={16} color="#fff" />
                    </View>
                  )}
                  <Text style={styles.topicIcon}>{topic.icon}</Text>
                  <View style={styles.topicContent}>
                    <Text
                      style={[
                        styles.topicTitle,
                        selectedTopic === topic.id && styles.topicTitleSelected,
                      ]}
                    >
                      {topic.title}
                    </Text>
                    <Text style={styles.topicDescription}>
                      {topic.description}
                    </Text>
                  </View>
                  <ChevronRight
                    size={20}
                    color={
                      selectedTopic === topic.id
                        ? colors.primary.DEFAULT
                        : colors.muted.foreground
                    }
                  />
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Step 3: Details */}
          {currentStep === "details" && (
            <View>
              <Text style={styles.stepTitle}>Chi tiết khiếu nại</Text>
              <Text style={styles.stepDescription}>
                Mô tả chi tiết vấn đề và thêm bằng chứng
              </Text>

              <FormField
                label="Tiêu đề"
                placeholder="Tóm tắt vấn đề trong 1 câu"
                value={complaintTitle}
                onChangeText={setComplaintTitle}
                required
              />

              <View style={styles.fieldContainer}>
                <Text style={styles.fieldLabel}>
                  Mô tả chi tiết <Text style={styles.required}>*</Text>
                </Text>
                <TextArea
                  placeholder="Mô tả chi tiết vấn đề, thời gian xảy ra, người liên quan..."
                  value={complaintDescription}
                  onChangeText={setComplaintDescription}
                  rows={6}
                  maxLength={1000}
                  showCounter
                />
              </View>

              {/* Evidence Section */}
              <View style={styles.evidenceSection}>
                <Text style={styles.evidenceTitle}>Bằng chứng (Tùy chọn)</Text>
                <Text style={styles.evidenceDescription}>
                  Ảnh hoặc video minh chứng
                </Text>

                <TouchableOpacity
                  style={styles.addEvidenceButton}
                  onPress={handleAddEvidence}
                >
                  <Camera size={20} color={colors.primary.DEFAULT} />
                  <Text style={styles.addEvidenceText}>Thêm ảnh/video</Text>
                </TouchableOpacity>

                {evidence.length > 0 && (
                  <View style={styles.evidenceList}>
                    {evidence.map((item, index) => (
                      <View key={index} style={styles.evidenceItem}>
                        <FileText size={20} color={colors.primary.DEFAULT} />
                        <Text style={styles.evidenceItemText}>
                          Bằng chứng {index + 1}
                        </Text>
                        <TouchableOpacity
                          onPress={() =>
                            setEvidence(evidence.filter((_, i) => i !== index))
                          }
                        >
                          <Text style={styles.evidenceRemove}>Xóa</Text>
                        </TouchableOpacity>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            </View>
          )}

          {/* Step 4: Preview */}
          {currentStep === "preview" && (
            <View>
              <Text style={styles.stepTitle}>Xác nhận thông tin</Text>
              <Text style={styles.stepDescription}>
                Kiểm tra lại thông tin trước khi gửi
              </Text>

              <View style={styles.previewCard}>
                <View style={styles.previewSection}>
                  <Text style={styles.previewLabel}>Trận đấu</Text>
                  <Text style={styles.previewValue}>
                    {selectedMatchData?.tournamentName}
                  </Text>
                  <Text style={styles.previewSubValue}>
                    vs {selectedMatchData?.opponent} • {selectedMatchData?.date}
                  </Text>
                </View>

                <View style={styles.previewSection}>
                  <Text style={styles.previewLabel}>Chủ đề</Text>
                  <Text style={styles.previewValue}>
                    {selectedTopicData?.icon} {selectedTopicData?.title}
                  </Text>
                </View>

                <View style={styles.previewSection}>
                  <Text style={styles.previewLabel}>Tiêu đề</Text>
                  <Text style={styles.previewValue}>{complaintTitle}</Text>
                </View>

                <View style={styles.previewSection}>
                  <Text style={styles.previewLabel}>Mô tả</Text>
                  <Text style={styles.previewValue}>
                    {complaintDescription}
                  </Text>
                </View>

                {evidence.length > 0 && (
                  <View style={styles.previewSection}>
                    <Text style={styles.previewLabel}>Bằng chứng</Text>
                    <Text style={styles.previewValue}>
                      {evidence.length} file đính kèm
                    </Text>
                  </View>
                )}
              </View>

              <View style={styles.warningBox}>
                <AlertCircle size={20} color={colors.status.warning} />
                <Text style={styles.warningText}>
                  Khiếu nại sai sự thật có thể bị xử phạt. Vui lòng đảm bảo
                  thông tin chính xác.
                </Text>
              </View>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        {currentStep !== "preview" ? (
          <TouchableOpacity
            style={[
              styles.nextButton,
              !canProceed() && styles.nextButtonDisabled,
            ]}
            onPress={handleNext}
            disabled={!canProceed()}
          >
            <LinearGradient
              colors={
                canProceed()
                  ? [
                      colors.primary[400],
                      colors.primary.DEFAULT,
                      colors.primary[600],
                    ]
                  : [colors["gray-300"], colors["gray-400"]]
              }
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.nextButtonGradient}
            >
              <Text style={styles.nextButtonText}>Tiếp tục</Text>
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <LinearGradient
              colors={[
                colors.primary[400],
                colors.primary.DEFAULT,
                colors.primary[600],
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.submitButtonGradient}
            >
              <Send size={20} color="#fff" />
              <Text style={styles.submitButtonText}>Gửi khiếu nại</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SubmitComplaintScreen;
