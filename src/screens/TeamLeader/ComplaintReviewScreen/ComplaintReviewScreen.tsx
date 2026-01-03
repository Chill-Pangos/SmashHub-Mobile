import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  AlertTriangle,
  Clock,
  CheckCircle,
  XCircle,
  User,
  Calendar,
  Eye,
  Check,
  X,
} from "lucide-react-native";
import styles from "./ComplaintReviewScreenStyle";
import { colors } from "../../../theme";
import { mockComplaints } from "../../../mockdata";
import { Complaint } from "../../../types";
import SearchBar from "../../../components/inputs/SearchBar";
import { TabBar } from "../../../components/navigation/TabBar";
import { EmptyState } from "../../../components";

type TabType = "pending" | "under_review" | "approved" | "rejected";
type ActionType = "approve" | "reject" | null;

const ComplaintReviewScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("pending");
  const [searchQuery, setSearchQuery] = useState("");
  const [showActionModal, setShowActionModal] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(
    null
  );
  const [actionType, setActionType] = useState<ActionType>(null);

  // Filter complaints by status and search
  const filteredComplaints = mockComplaints.filter((complaint) => {
    const matchesTab =
      (activeTab === "pending" && complaint.status === "pending_review") ||
      (activeTab === "under_review" && complaint.status === "under_review") ||
      (activeTab === "approved" && complaint.status === "approved") ||
      (activeTab === "rejected" && complaint.status === "rejected");

    const matchesSearch =
      complaint.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      complaint.matchName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      complaint.submittedBy.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const tabs = [
    {
      key: "pending" as TabType,
      label: "Chờ xử lý",
      count: mockComplaints.filter((c) => c.status === "pending_review").length,
    },
    {
      key: "under_review" as TabType,
      label: "Đang xử lý",
      count: mockComplaints.filter((c) => c.status === "under_review").length,
    },
    {
      key: "approved" as TabType,
      label: "Đã duyệt",
      count: mockComplaints.filter((c) => c.status === "approved").length,
    },
    {
      key: "rejected" as TabType,
      label: "Từ chối",
      count: mockComplaints.filter((c) => c.status === "rejected").length,
    },
  ];

  const handleAction = (complaint: Complaint, action: "approve" | "reject") => {
    setSelectedComplaint(complaint);
    setActionType(action);
    setShowActionModal(true);
  };

  const confirmAction = () => {
    // Implement actual approve/reject logic
    console.log(`${actionType} complaint:`, selectedComplaint?.id);
    setShowActionModal(false);
    setSelectedComplaint(null);
    setActionType(null);
  };

  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case "pending_review":
        return [styles.statusBadge, styles.statusBadgePending];
      case "under_review":
        return [styles.statusBadge, styles.statusBadgeUnderReview];
      case "approved":
        return [styles.statusBadge, styles.statusBadgeApproved];
      case "rejected":
        return [styles.statusBadge, styles.statusBadgeRejected];
      default:
        return styles.statusBadge;
    }
  };

  const getStatusTextStyle = (status: string) => {
    switch (status) {
      case "pending_review":
        return [styles.statusText, styles.statusTextPending];
      case "under_review":
        return [styles.statusText, styles.statusTextUnderReview];
      case "approved":
        return [styles.statusText, styles.statusTextApproved];
      case "rejected":
        return [styles.statusText, styles.statusTextRejected];
      default:
        return styles.statusText;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "pending_review":
        return "Chờ xử lý";
      case "under_review":
        return "Đang xử lý";
      case "approved":
        return "Đã duyệt";
      case "rejected":
        return "Từ chối";
      default:
        return status;
    }
  };

  const getPriorityBadgeStyle = (priority: string | undefined) => {
    switch (priority) {
      case "high":
        return [styles.priorityBadge, styles.priorityBadgeHigh];
      case "medium":
        return [styles.priorityBadge, styles.priorityBadgeMedium];
      case "low":
        return [styles.priorityBadge, styles.priorityBadgeLow];
      default:
        return styles.priorityBadge;
    }
  };

  const getPriorityTextStyle = (priority: string | undefined) => {
    switch (priority) {
      case "high":
        return [styles.priorityText, styles.priorityTextHigh];
      case "medium":
        return [styles.priorityText, styles.priorityTextMedium];
      case "low":
        return [styles.priorityText, styles.priorityTextLow];
      default:
        return styles.priorityText;
    }
  };

  const getPriorityLabel = (priority: string | undefined) => {
    switch (priority) {
      case "high":
        return "Cao";
      case "medium":
        return "Trung bình";
      case "low":
        return "Thấp";
      default:
        return priority;
    }
  };

  const renderComplaintCard = (complaint: Complaint) => (
    <View key={complaint.id} style={styles.complaintCard}>
      <View style={styles.complaintHeader}>
        <View style={styles.complaintHeaderLeft}>
          <Text style={styles.complaintId}>#{complaint.id.toUpperCase()}</Text>
          <Text style={styles.complaintTopic}>{complaint.topic}</Text>
          <Text style={styles.complaintMatch}>{complaint.matchName}</Text>
        </View>
        <View style={getStatusBadgeStyle(complaint.status)}>
          <Text style={getStatusTextStyle(complaint.status)}>
            {getStatusLabel(complaint.status)}
          </Text>
        </View>
      </View>

      <View style={styles.complaintBody}>
        <View style={styles.complaintMeta}>
          <View style={styles.metaItem}>
            <User size={14} color={colors.muted.foreground} />
            <Text style={styles.metaText}>{complaint.submittedBy}</Text>
          </View>
          <View style={styles.metaItem}>
            <Calendar size={14} color={colors.muted.foreground} />
            <Text style={styles.metaText}>
              {new Date(complaint.createdAt).toLocaleDateString("vi-VN")}
            </Text>
          </View>
          <View style={getPriorityBadgeStyle(complaint.priority)}>
            <Text style={getPriorityTextStyle(complaint.priority)}>
              {getPriorityLabel(complaint.priority)}
            </Text>
          </View>
        </View>

        <Text style={styles.complaintDescription} numberOfLines={3}>
          {complaint.description}
        </Text>
      </View>

      <View style={styles.complaintActions}>
        {complaint.status === "pending_review" ||
        complaint.status === "under_review" ? (
          <>
            <TouchableOpacity
              style={[styles.actionButton, styles.approveButton]}
              onPress={() => handleAction(complaint, "approve")}
            >
              <Check size={18} color="#ffffff" />
              <Text style={styles.actionButtonText}>Duyệt</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, styles.rejectButton]}
              onPress={() => handleAction(complaint, "reject")}
            >
              <X size={18} color="#ffffff" />
              <Text style={styles.actionButtonText}>Từ chối</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity style={[styles.actionButton, styles.viewButton]}>
            <Eye size={18} color="#ffffff" />
            <Text style={styles.actionButtonText}>Xem chi tiết</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  const pendingCount = mockComplaints.filter(
    (c) => c.status === "pending_review"
  ).length;
  const underReviewCount = mockComplaints.filter(
    (c) => c.status === "under_review"
  ).length;

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[
          colors.primary[400],
          colors.primary.DEFAULT,
          colors.primary[600],
        ]}
        style={styles.headerGradient}
      >
        <View style={styles.headerContent}>
          <View style={styles.headerIcon}>
            <AlertTriangle size={32} color="#ffffff" />
          </View>
          <Text style={styles.headerTitle}>Xử lý khiếu nại</Text>
          <Text style={styles.headerSubtitle}>
            Xem xét và phê duyệt khiếu nại từ vận động viên
          </Text>

          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <View
                style={[
                  styles.statIcon,
                  { backgroundColor: colors.status.warning },
                ]}
              >
                <Clock size={20} color="#ffffff" />
              </View>
              <View style={styles.statContent}>
                <Text style={styles.statValue}>{pendingCount}</Text>
                <Text style={styles.statLabel}>Chờ xử lý</Text>
              </View>
            </View>
            <View style={styles.statCard}>
              <View
                style={[
                  styles.statIcon,
                  { backgroundColor: colors.status.info },
                ]}
              >
                <AlertTriangle size={20} color="#ffffff" />
              </View>
              <View style={styles.statContent}>
                <Text style={styles.statValue}>{underReviewCount}</Text>
                <Text style={styles.statLabel}>Đang xử lý</Text>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.tabContainer}>
        <TabBar
          tabs={tabs.map((tab) => ({
            id: tab.key,
            key: tab.key,
            label: `${tab.label} (${tab.count})`,
          }))}
          activeTab={activeTab}
          onTabChange={(key: string) => setActiveTab(key as TabType)}
        />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.searchFilterRow}>
          <View style={styles.searchContainer}>
            <SearchBar
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Tìm kiếm khiếu nại..."
            />
          </View>
        </View>

        <ScrollView
          style={styles.complaintList}
          showsVerticalScrollIndicator={false}
        >
          {filteredComplaints.length === 0 ? (
            <View style={styles.emptyContainer}>
              <View style={styles.emptyIcon}>
                <AlertTriangle size={48} color={colors.muted.foreground} />
              </View>
              <Text style={styles.emptyText}>Không có khiếu nại</Text>
              <Text style={styles.emptySubtext}>
                Không tìm thấy khiếu nại nào trong danh mục này
              </Text>
            </View>
          ) : (
            filteredComplaints.map(renderComplaintCard)
          )}
        </ScrollView>
      </View>

      <Modal
        visible={showActionModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowActionModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              {actionType === "approve" ? (
                <CheckCircle size={48} color={colors.status.success} />
              ) : (
                <XCircle size={48} color={colors.destructive.DEFAULT} />
              )}
              <Text style={styles.modalTitle}>
                {actionType === "approve"
                  ? "Duyệt khiếu nại?"
                  : "Từ chối khiếu nại?"}
              </Text>
            </View>
            <Text style={styles.modalMessage}>
              {actionType === "approve"
                ? "Bạn có chắc chắn muốn phê duyệt khiếu nại này? Hành động này không thể hoàn tác."
                : "Bạn có chắc chắn muốn từ chối khiếu nại này? Hành động này không thể hoàn tác."}
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonCancel]}
                onPress={() => setShowActionModal(false)}
              >
                <Text
                  style={[styles.modalButtonText, styles.modalButtonTextCancel]}
                >
                  Hủy
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonConfirm]}
                onPress={confirmAction}
              >
                <Text
                  style={[
                    styles.modalButtonText,
                    styles.modalButtonTextConfirm,
                  ]}
                >
                  Xác nhận
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ComplaintReviewScreen;
