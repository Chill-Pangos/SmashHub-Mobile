/**
 * ComplaintManagementScreen (UC-24)
 * View and respond to complaints related to coach's athletes
 */

import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  XCircle,
  MessageCircle,
  Send,
} from "lucide-react-native";
import { complaintManagementScreenStyles as styles } from "./ComplaintManagementScreenStyle";
import { SafeAreaView, EmptyState, Button } from "../../../components";
import {
  mockComplaints,
  mockUsers,
  getAthletesByCoach,
} from "../../../mockdata";
import { Complaint } from "../../../types";
import { colors } from "../../../theme";
import { format, parseISO } from "date-fns";
import { vi } from "date-fns/locale";

type ComplaintStatus =
  | "all"
  | "pending_review"
  | "under_review"
  | "resolved"
  | "rejected";

const ComplaintManagementScreen: React.FC = () => {
  const navigation = useNavigation();
  const [selectedStatus, setSelectedStatus] = useState<ComplaintStatus>("all");
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(
    null
  );
  const [responseText, setResponseText] = useState("");
  const [showResponseModal, setShowResponseModal] = useState(false);

  const coachId = "101";
  const coachAthletes = getAthletesByCoach(coachId);
  const athleteIds = coachAthletes.map((a) => a.id);

  // Get complaints related to coach's athletes or submitted by coach
  const relatedComplaints = mockComplaints.filter(
    (complaint) =>
      complaint.submitterId === coachId ||
      (complaint.submitterRole === "athlete" &&
        athleteIds.includes(complaint.submitterId))
  );

  const filteredComplaints =
    selectedStatus === "all"
      ? relatedComplaints
      : relatedComplaints.filter((c) => c.status === selectedStatus);

  const getStatusLabel = (status: string) => {
    const labels = {
      pending_review: "Chờ duyệt",
      under_review: "Đang xem xét",
      resolved: "Đã giải quyết",
      rejected: "Từ chối",
    };
    return labels[status as keyof typeof labels] || status;
  };

  const getStatusColor = (status: string) => {
    const colorMap = {
      pending_review: colors.status.warning,
      under_review: colors.status.info,
      resolved: colors.status.success,
      rejected: colors.status.error,
    };
    return colorMap[status as keyof typeof colorMap] || colors.muted.foreground;
  };

  const getStatusIcon = (status: string) => {
    const iconMap = {
      pending_review: Clock,
      under_review: AlertCircle,
      resolved: CheckCircle,
      rejected: XCircle,
    };
    return iconMap[status as keyof typeof iconMap] || Clock;
  };

  const getPriorityLabel = (priority: string) => {
    const labels = {
      low: "Thấp",
      medium: "Trung bình",
      high: "Cao",
    };
    return labels[priority as keyof typeof labels] || priority;
  };

  const getPriorityColor = (priority: string) => {
    const colorMap = {
      low: colors.muted.foreground,
      medium: colors.status.warning,
      high: colors.status.error,
    };
    return (
      colorMap[priority as keyof typeof colorMap] || colors.muted.foreground
    );
  };

  const renderFilterChip = (status: ComplaintStatus, label: string) => {
    const count =
      status === "all"
        ? relatedComplaints.length
        : relatedComplaints.filter((c) => c.status === status).length;
    return (
      <TouchableOpacity
        key={status}
        style={[
          styles.filterChip,
          selectedStatus === status && styles.filterChipActive,
        ]}
        onPress={() => setSelectedStatus(status)}
      >
        <Text
          style={[
            styles.filterChipText,
            selectedStatus === status && styles.filterChipTextActive,
          ]}
        >
          {label} ({count})
        </Text>
      </TouchableOpacity>
    );
  };

  const renderComplaintCard = (complaint: Complaint) => {
    const StatusIcon = getStatusIcon(complaint.status);
    const priority = complaint.priority || "medium";
    return (
      <TouchableOpacity
        key={complaint.id}
        style={styles.complaintCard}
        onPress={() => {
          setSelectedComplaint(complaint);
          setShowResponseModal(true);
        }}
      >
        <View style={styles.complaintHeader}>
          <View
            style={[
              styles.priorityBadge,
              { backgroundColor: getPriorityColor(priority) + "20" },
            ]}
          >
            <Text
              style={[
                styles.priorityText,
                { color: getPriorityColor(priority) },
              ]}
            >
              {getPriorityLabel(priority)}
            </Text>
          </View>
          <View
            style={[
              styles.statusBadge,
              { backgroundColor: getStatusColor(complaint.status) + "20" },
            ]}
          >
            <StatusIcon size={12} color={getStatusColor(complaint.status)} />
            <Text
              style={[
                styles.statusText,
                { color: getStatusColor(complaint.status) },
              ]}
            >
              {getStatusLabel(complaint.status)}
            </Text>
          </View>
        </View>

        <Text style={styles.complaintTopic}>{complaint.topic}</Text>
        <Text style={styles.complaintDescription} numberOfLines={2}>
          {complaint.description}
        </Text>

        <View style={styles.complaintMeta}>
          <Text style={styles.complaintMetaText}>
            <Text style={styles.complaintMetaLabel}>Người gửi: </Text>
            {complaint.submittedBy}
          </Text>
          <Text style={styles.complaintMetaText}>
            <Text style={styles.complaintMetaLabel}>Trận: </Text>
            {complaint.matchName}
          </Text>
        </View>

        <Text style={styles.complaintDate}>
          {format(parseISO(complaint.createdAt), "dd MMM yyyy, HH:mm", {
            locale: vi,
          })}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderResponseModal = () => {
    if (!selectedComplaint) return null;

    const StatusIcon = getStatusIcon(selectedComplaint.status);
    const priority = selectedComplaint.priority || "medium";

    return (
      <Modal
        visible={showResponseModal}
        animationType="slide"
        transparent={false}
        onRequestClose={() => {
          setShowResponseModal(false);
          setResponseText("");
        }}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => {
                setShowResponseModal(false);
                setResponseText("");
              }}
            >
              <Text style={styles.modalCloseText}>✕ Đóng</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Chi tiết khiếu nại</Text>
            <View style={{ width: 60 }} />
          </View>

          <ScrollView
            style={styles.modalContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.modalSection}>
              <View style={styles.modalBadgeRow}>
                <View
                  style={[
                    styles.priorityBadge,
                    { backgroundColor: getPriorityColor(priority) + "20" },
                  ]}
                >
                  <Text
                    style={[
                      styles.priorityText,
                      { color: getPriorityColor(priority) },
                    ]}
                  >
                    {getPriorityLabel(priority)}
                  </Text>
                </View>
                <View
                  style={[
                    styles.statusBadge,
                    {
                      backgroundColor:
                        getStatusColor(selectedComplaint.status) + "20",
                    },
                  ]}
                >
                  <StatusIcon
                    size={14}
                    color={getStatusColor(selectedComplaint.status)}
                  />
                  <Text
                    style={[
                      styles.statusText,
                      { color: getStatusColor(selectedComplaint.status) },
                    ]}
                  >
                    {getStatusLabel(selectedComplaint.status)}
                  </Text>
                </View>
              </View>

              <Text style={styles.modalTopic}>{selectedComplaint.topic}</Text>

              <View style={styles.modalInfoRow}>
                <Text style={styles.modalInfoLabel}>Người gửi:</Text>
                <Text style={styles.modalInfoValue}>
                  {selectedComplaint.submittedBy} (
                  {selectedComplaint.submitterRole === "coach" ? "HLV" : "VĐV"})
                </Text>
              </View>

              <View style={styles.modalInfoRow}>
                <Text style={styles.modalInfoLabel}>Trận đấu:</Text>
                <Text style={styles.modalInfoValue}>
                  {selectedComplaint.matchName}
                </Text>
              </View>

              <View style={styles.modalInfoRow}>
                <Text style={styles.modalInfoLabel}>Giải đấu:</Text>
                <Text style={styles.modalInfoValue}>
                  {selectedComplaint.tournamentName}
                </Text>
              </View>

              <View style={styles.modalInfoRow}>
                <Text style={styles.modalInfoLabel}>Danh mục:</Text>
                <Text style={styles.modalInfoValue}>
                  {selectedComplaint.category}
                </Text>
              </View>

              <View style={styles.modalInfoRow}>
                <Text style={styles.modalInfoLabel}>Ngày gửi:</Text>
                <Text style={styles.modalInfoValue}>
                  {format(
                    parseISO(selectedComplaint.createdAt),
                    "dd/MM/yyyy HH:mm",
                    { locale: vi }
                  )}
                </Text>
              </View>
            </View>

            <View style={styles.modalSection}>
              <Text style={styles.modalSectionTitle}>Nội dung khiếu nại</Text>
              <Text style={styles.modalDescription}>
                {selectedComplaint.description}
              </Text>
            </View>

            {selectedComplaint.status !== "resolved" &&
              selectedComplaint.status !== "rejected" && (
                <View style={styles.modalSection}>
                  <Text style={styles.modalSectionTitle}>Phản hồi của bạn</Text>
                  <TextInput
                    style={styles.responseInput}
                    placeholder="Nhập phản hồi hoặc thông tin bổ sung..."
                    placeholderTextColor={colors.muted.foreground}
                    multiline
                    numberOfLines={6}
                    value={responseText}
                    onChangeText={setResponseText}
                    textAlignVertical="top"
                  />
                  <Button
                    title="Gửi phản hồi"
                    onPress={() => {
                      // Mock sending response
                      console.log("Response sent:", responseText);
                      setShowResponseModal(false);
                      setResponseText("");
                    }}
                    style={styles.sendButton}
                    disabled={!responseText.trim()}
                  />
                </View>
              )}

            <View style={styles.bottomSpacer} />
          </ScrollView>
        </SafeAreaView>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[colors.primary[400], colors.primary[500], colors.primary[600]]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Quản lý khiếu nại</Text>
        <Text style={styles.headerSubtitle}>
          Theo dõi và phản hồi khiếu nại
        </Text>
      </LinearGradient>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
      >
        {renderFilterChip("all", "Tất cả")}
        {renderFilterChip("pending_review", "Chờ duyệt")}
        {renderFilterChip("under_review", "Đang xem xét")}
        {renderFilterChip("resolved", "Đã giải quyết")}
        {renderFilterChip("rejected", "Từ chối")}
      </ScrollView>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {filteredComplaints.length === 0 ? (
          <EmptyState
            title="Không có khiếu nại"
            description="Không có khiếu nại nào cho bộ lọc này"
          />
        ) : (
          filteredComplaints.map(renderComplaintCard)
        )}
        <View style={styles.bottomSpacer} />
      </ScrollView>

      {renderResponseModal()}
    </SafeAreaView>
  );
};

export default ComplaintManagementScreen;
