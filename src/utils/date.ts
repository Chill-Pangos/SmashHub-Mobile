export const formatDate = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatTime = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatDateTime = (date: string | Date): string => {
  return `${formatDate(date)} ${formatTime(date)}`;
};

export const getTimeFromNow = (date: string | Date): string => {
  const now = new Date();
  const d = new Date(date);
  const diff = d.getTime() - now.getTime();

  const minutes = Math.floor(diff / 1000 / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days} ngày nữa`;
  if (hours > 0) return `${hours} giờ nữa`;
  if (minutes > 0) return `${minutes} phút nữa`;
  if (minutes === 0) return "Ngay bây giờ";
  return "Đã qua";
};
