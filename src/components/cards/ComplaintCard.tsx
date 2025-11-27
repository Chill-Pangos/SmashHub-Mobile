import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Clock, User, FileText } from "lucide-react-native";
import { colors as themeColors } from "../../theme/colors";
import { globalStyles } from "../../styles/global.styles";
import StatusBadge from "../badges/StatusBadge";

export interface Complaint {
  id: string;
  matchId: string;
  matchName: string;
  topic: string;
  description: string;
  status: "submitted" | "under_review" | "resolved" | "rejected";
  submittedAt: string; // ISO date string
  submitterName: string;
  submitterId: string;
  evidence?: string[];
  resolution?: string;
  resolvedAt?: string;
}

interface ComplaintCardProps {
  complaint: Complaint;
  onPress?: () => void;
}

const ComplaintCard: React.FC<ComplaintCardProps> = ({
  complaint,
  onPress,
}) => {
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

  const getStatusColor = (): string => {
    switch (complaint.status) {
      case "submitted":
        return themeColors.status.info;
      case "under_review":
        return themeColors.status.warning;
      case "resolved":
        return themeColors.status.success;
      case "rejected":
        return themeColors.status.error;
      default:
        return themeColors.muted.foreground;
    }
  };

  const getStatusLabel = (): string => {
    switch (complaint.status) {
      case "submitted":
        return "Đã gửi";
      case "under_review":
        return "Đang xử lý";
      case "resolved":
        return "Đã giải quyết";
      case "rejected":
        return "Từ chối";
      default:
        return complaint.status;
    }
  };

  return (
    <TouchableOpacity
      style={[globalStyles.card, styles.card]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Header: Status */}
      <View style={styles.header}>
        <StatusBadge status={complaint.status} />
      </View>

      {/* Match Info */}
      <View style={styles.matchInfo}>
        <FileText size={16} color={themeColors.muted.foreground} />
        <Text style={styles.matchName}>{complaint.matchName}</Text>
      </View>

      {/* Topic */}
      <Text style={styles.topic}>{complaint.topic}</Text>

      {/* Description */}
      <Text style={styles.description} numberOfLines={2}>
        {complaint.description}
      </Text>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.metaRow}>
          <User size={14} color={themeColors["gray-400"]} />
          <Text style={styles.metaText}>{complaint.submitterName}</Text>
        </View>
        <View style={styles.metaRow}>
          <Clock size={14} color={themeColors["gray-400"]} />
          <Text style={styles.metaText}>
            {formatDate(complaint.submittedAt)}
          </Text>
        </View>
      </View>

      {/* Evidence Indicator */}
      {complaint.evidence && complaint.evidence.length > 0 && (
        <View style={styles.evidenceIndicator}>
          <Text style={styles.evidenceText}>
            📎 {complaint.evidence.length} tệp đính kèm
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 12,
  },
  matchInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
  matchName: {
    fontSize: 13,
    color: themeColors.muted.foreground,
    fontWeight: "500",
  },
  topic: {
    fontSize: 16,
    fontWeight: "600",
    color: themeColors.foreground,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: themeColors.muted.foreground,
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: themeColors.border,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  metaText: {
    fontSize: 11,
    color: themeColors["gray-400"],
  },
  evidenceIndicator: {
    marginTop: 8,
    backgroundColor: themeColors["gray-100"],
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  evidenceText: {
    fontSize: 11,
    color: themeColors.muted.foreground,
  },
});

export default ComplaintCard;
