import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowLeft, FileText, X } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { colors as themeColors } from "../../../theme/colors";
import { globalStyles } from "../../../styles/global.styles";
import { FilterChips } from "../../../components/inputs/FilterChips";
import ComplaintCard, {
  Complaint,
} from "../../../components/cards/ComplaintCard";
import { EmptyState } from "../../../components/states/EmptyState";
import StatusBadge from "../../../components/badges/StatusBadge";
import { complaintTrackingScreenStyles } from "./ComplaintTrackingScreenStyle";

const ComplaintTrackingScreen: React.FC = () => {
  const navigation = useNavigation();

  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(
    null
  );
  const [modalVisible, setModalVisible] = useState(false);

  // Mock data - Replace with actual API call
  const complaints: Complaint[] = [
    {
      id: "c1",
      matchId: "m1",
      matchName: "Nguyễn Văn A vs Trần Văn B - Tứ kết Nam đơn",
      topic: "Tranh cãi về điểm số",
      description:
        "Tôi cho rằng trọng tài đã tính sai điểm ở set 2, điểm số thực tế phải là 21-19 chứ không phải 21-20.",
      status: "resolved",
      submittedAt: "2024-03-19T14:30:00Z",
      submitterName: "Nguyễn Văn A",
      submitterId: "p1",
      evidence: ["evidence1.jpg", "evidence2.jpg"],
      resolution:
        "Sau khi xem lại video, ban tổ chức xác nhận điểm số là chính xác. Trận đấu được tiến hành đúng quy định.",
      resolvedAt: "2024-03-19T16:45:00Z",
    },
    {
      id: "c2",
      matchId: "m2",
      matchName: "Lê Thị C vs Phạm Thị D - Vòng bán kết Nữ đơn",
      topic: "Thời gian thi đấu không chính xác",
      description:
        "Trận đấu bắt đầu muộn hơn 20 phút so với lịch công bố mà không có thông báo trước.",
      status: "under_review",
      submittedAt: "2024-03-20T08:15:00Z",
      submitterName: "Lê Thị C",
      submitterId: "p3",
      evidence: ["evidence3.jpg"],
    },
    {
      id: "c3",
      matchId: "m3",
      matchName: "Đội A vs Đội B - Chung kết Nam đôi",
      topic: "Tranh cãi về cầu",
      description:
        "Đối thủ sử dụng cầu không đúng quy định của giải đấu trong suốt trận đấu.",
      status: "submitted",
      submittedAt: "2024-03-20T11:00:00Z",
      submitterName: "Huấn luyện viên Đội A",
      submitterId: "coach1",
    },
    {
      id: "c4",
      matchId: "m4",
      matchName: "Nguyễn Văn E vs Trần Văn F - Vòng 2 Nam đơn",
      topic: "Hành vi phi thể thao",
      description:
        "Đối thủ có hành vi thiếu tôn trọng và lăng mạ trong quá trình thi đấu.",
      status: "rejected",
      submittedAt: "2024-03-18T15:20:00Z",
      submitterName: "Nguyễn Văn E",
      submitterId: "p5",
      resolution:
        "Không có bằng chứng đủ để xác nhận khiếu nại. Ban tổ chức khuyến nghị các bên giữ tinh thần thể thao.",
      resolvedAt: "2024-03-19T09:30:00Z",
    },
  ];

  const statusFilters = [
    { id: "all", label: "Tất cả" },
    { id: "submitted", label: "Đã gửi" },
    { id: "under_review", label: "Đang xử lý" },
    { id: "resolved", label: "Đã giải quyết" },
    { id: "rejected", label: "Từ chối" },
  ];

  const filteredComplaints =
    selectedStatus === "all"
      ? complaints
      : complaints.filter((c) => c.status === selectedStatus);

  const handleComplaintPress = (complaint: Complaint) => {
    setSelectedComplaint(complaint);
    setModalVisible(true);
  };

  const getStatusLabel = (status: string): string => {
    switch (status) {
      case "submitted":
        return "Đã gửi";
      case "under_review":
        return "Đang xử lý";
      case "resolved":
        return "Đã giải quyết";
      case "rejected":
        return "Từ chối";
      default:
        return status;
    }
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <SafeAreaView style={globalStyles.flex1} edges={["top"]}>
      <LinearGradient
        colors={[
          themeColors.primary[400],
          themeColors.primary[500],
          themeColors.primary[600],
        ]}
        style={complaintTrackingScreenStyles.header}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={complaintTrackingScreenStyles.backButton}
        >
          <ArrowLeft size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={complaintTrackingScreenStyles.headerTitle}>
          Theo dõi khiếu nại
        </Text>
        <View style={{ width: 24 }} />
      </LinearGradient>

      {/* Status Filter */}
      <View style={complaintTrackingScreenStyles.filterContainer}>
        <FilterChips
          filters={statusFilters}
          selectedFilters={[selectedStatus]}
          onFilterChange={(selected) => setSelectedStatus(selected[0] || "all")}
          multiSelect={false}
        />
      </View>

      {/* Complaint List */}
      <ScrollView
        style={globalStyles.flex1}
        contentContainerStyle={complaintTrackingScreenStyles.listContainer}
        showsVerticalScrollIndicator={false}
      >
        {filteredComplaints.length > 0 ? (
          filteredComplaints.map((complaint) => (
            <ComplaintCard
              key={complaint.id}
              complaint={complaint}
              onPress={() => handleComplaintPress(complaint)}
            />
          ))
        ) : (
          <EmptyState
            icon={FileText}
            title="Không có khiếu nại"
            description="Bạn chưa có khiếu nại nào trong trạng thái này"
          />
        )}
      </ScrollView>

      {/* Detail Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={complaintTrackingScreenStyles.modalOverlay}>
          <View style={complaintTrackingScreenStyles.modalContent}>
            {selectedComplaint && (
              <>
                {/* Modal Header */}
                <View style={complaintTrackingScreenStyles.modalHeader}>
                  <Text style={complaintTrackingScreenStyles.modalTitle}>
                    Chi tiết khiếu nại
                  </Text>
                  <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    style={complaintTrackingScreenStyles.closeButton}
                  >
                    <X size={24} color={themeColors.foreground} />
                  </TouchableOpacity>
                </View>

                <ScrollView
                  style={complaintTrackingScreenStyles.modalBody}
                  showsVerticalScrollIndicator={false}
                >
                  {/* Status */}
                  <View style={complaintTrackingScreenStyles.detailSection}>
                    <StatusBadge status={selectedComplaint.status} />
                  </View>

                  {/* Match Info */}
                  <View style={complaintTrackingScreenStyles.detailSection}>
                    <Text style={complaintTrackingScreenStyles.detailLabel}>
                      Trận đấu:
                    </Text>
                    <Text style={complaintTrackingScreenStyles.detailValue}>
                      {selectedComplaint.matchName}
                    </Text>
                  </View>

                  {/* Topic */}
                  <View style={complaintTrackingScreenStyles.detailSection}>
                    <Text style={complaintTrackingScreenStyles.detailLabel}>
                      Chủ đề:
                    </Text>
                    <Text style={complaintTrackingScreenStyles.detailValue}>
                      {selectedComplaint.topic}
                    </Text>
                  </View>

                  {/* Description */}
                  <View style={complaintTrackingScreenStyles.detailSection}>
                    <Text style={complaintTrackingScreenStyles.detailLabel}>
                      Mô tả:
                    </Text>
                    <Text
                      style={complaintTrackingScreenStyles.detailDescription}
                    >
                      {selectedComplaint.description}
                    </Text>
                  </View>

                  {/* Evidence */}
                  {selectedComplaint.evidence &&
                    selectedComplaint.evidence.length > 0 && (
                      <View style={complaintTrackingScreenStyles.detailSection}>
                        <Text style={complaintTrackingScreenStyles.detailLabel}>
                          Bằng chứng:
                        </Text>
                        <View
                          style={
                            complaintTrackingScreenStyles.evidenceContainer
                          }
                        >
                          {selectedComplaint.evidence.map((evidence, index) => (
                            <View
                              key={index}
                              style={complaintTrackingScreenStyles.evidenceItem}
                            >
                              <FileText
                                size={16}
                                color={themeColors.muted.foreground}
                              />
                              <Text
                                style={
                                  complaintTrackingScreenStyles.evidenceText
                                }
                              >
                                {evidence}
                              </Text>
                            </View>
                          ))}
                        </View>
                      </View>
                    )}

                  {/* Submitter */}
                  <View style={complaintTrackingScreenStyles.detailSection}>
                    <Text style={complaintTrackingScreenStyles.detailLabel}>
                      Người gửi:
                    </Text>
                    <Text style={complaintTrackingScreenStyles.detailValue}>
                      {selectedComplaint.submitterName}
                    </Text>
                  </View>

                  {/* Submitted Date */}
                  <View style={complaintTrackingScreenStyles.detailSection}>
                    <Text style={complaintTrackingScreenStyles.detailLabel}>
                      Ngày gửi:
                    </Text>
                    <Text style={complaintTrackingScreenStyles.detailValue}>
                      {formatDate(selectedComplaint.submittedAt)}
                    </Text>
                  </View>

                  {/* Resolution */}
                  {selectedComplaint.resolution && (
                    <View
                      style={[
                        complaintTrackingScreenStyles.detailSection,
                        complaintTrackingScreenStyles.resolutionSection,
                      ]}
                    >
                      <Text style={complaintTrackingScreenStyles.detailLabel}>
                        Kết quả xử lý:
                      </Text>
                      <Text
                        style={complaintTrackingScreenStyles.resolutionText}
                      >
                        {selectedComplaint.resolution}
                      </Text>
                      {selectedComplaint.resolvedAt && (
                        <Text
                          style={complaintTrackingScreenStyles.resolvedDate}
                        >
                          Ngày giải quyết:{" "}
                          {formatDate(selectedComplaint.resolvedAt)}
                        </Text>
                      )}
                    </View>
                  )}
                </ScrollView>
              </>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ComplaintTrackingScreen;
