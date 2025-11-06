export const getMatchStatusColor = (status: string): string => {
  switch (status) {
    case "scheduled":
      return "text-blue-600";
    case "live":
      return "text-green-600";
    case "completed":
      return "text-gray-600";
    case "cancelled":
      return "text-red-600";
    default:
      return "text-gray-600";
  }
};

export const getMatchStatusLabel = (status: string): string => {
  switch (status) {
    case "scheduled":
      return "Sắp diễn ra";
    case "live":
      return "Đang diễn ra";
    case "completed":
      return "Đã kết thúc";
    case "cancelled":
      return "Đã hủy";
    default:
      return status;
  }
};

export const getComplaintStatusColor = (status: string): string => {
  switch (status) {
    case "submitted":
      return "text-yellow-600";
    case "under_review":
      return "text-blue-600";
    case "resolved":
      return "text-green-600";
    case "rejected":
      return "text-red-600";
    default:
      return "text-gray-600";
  }
};

export const getComplaintStatusLabel = (status: string): string => {
  switch (status) {
    case "submitted":
      return "Đã gửi";
    case "under_review":
      return "Đang xem xét";
    case "resolved":
      return "Đã giải quyết";
    case "rejected":
      return "Bị từ chối";
    default:
      return status;
  }
};
