import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Clock } from "lucide-react-native";
import { colors as themeColors } from "../../theme/colors";
import { globalStyles } from "../../styles/global.styles";

export interface News {
  id: string;
  title: string;
  excerpt: string;
  imageUrl?: string;
  publishedAt: string; // ISO date string
  category: string;
  author?: string;
}

interface NewsCardProps {
  news: News;
  variant?: "compact" | "full";
  onPress?: () => void;
}

const NewsCard: React.FC<NewsCardProps> = ({
  news,
  variant = "compact",
  onPress,
}) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffHours < 1) {
      return "Vừa xong";
    } else if (diffHours < 24) {
      return `${diffHours} giờ trước`;
    } else if (diffDays < 7) {
      return `${diffDays} ngày trước`;
    } else {
      return date.toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    }
  };

  if (variant === "compact") {
    return (
      <TouchableOpacity
        style={[globalStyles.card, styles.compactCard]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <View style={styles.compactContent}>
          {news.imageUrl && (
            <Image
              source={{ uri: news.imageUrl }}
              style={styles.compactImage}
              resizeMode="cover"
            />
          )}
          <View style={styles.compactInfo}>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{news.category}</Text>
            </View>
            <Text style={styles.compactTitle} numberOfLines={2}>
              {news.title}
            </Text>
            <View style={styles.metaRow}>
              <Clock size={14} color={themeColors.muted.foreground} />
              <Text style={styles.dateText}>
                {formatDate(news.publishedAt)}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  // Full variant
  return (
    <TouchableOpacity
      style={[globalStyles.card, styles.fullCard]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {news.imageUrl && (
        <Image
          source={{ uri: news.imageUrl }}
          style={styles.fullImage}
          resizeMode="cover"
        />
      )}
      <View style={styles.fullContent}>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{news.category}</Text>
        </View>
        <Text style={styles.fullTitle}>{news.title}</Text>
        <Text style={styles.excerpt} numberOfLines={3}>
          {news.excerpt}
        </Text>
        <View style={styles.fullMetaRow}>
          <View style={styles.metaRow}>
            <Clock size={14} color={themeColors.muted.foreground} />
            <Text style={styles.dateText}>{formatDate(news.publishedAt)}</Text>
          </View>
          {news.author && (
            <Text style={styles.authorText}>Bởi {news.author}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // Compact variant
  compactCard: {
    marginBottom: 16,
    padding: 12,
  },
  compactContent: {
    flexDirection: "row",
    gap: 12,
  },
  compactImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: themeColors["gray-100"],
  },
  compactInfo: {
    flex: 1,
    justifyContent: "space-between",
  },
  compactTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: themeColors.foreground,
    marginTop: 8,
  },

  // Full variant
  fullCard: {
    marginBottom: 24,
    overflow: "hidden",
  },
  fullImage: {
    width: "100%",
    height: 200,
    backgroundColor: themeColors["gray-100"],
  },
  fullContent: {
    padding: 16,
  },
  fullTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: themeColors.foreground,
    marginTop: 12,
    marginBottom: 8,
  },
  excerpt: {
    fontSize: 14,
    color: themeColors.muted.foreground,
    marginBottom: 12,
    lineHeight: 22,
  },

  // Common styles
  categoryBadge: {
    alignSelf: "flex-start",
    backgroundColor: themeColors.primary[100],
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 11,
    color: themeColors.primary[600],
    fontWeight: "600",
    textTransform: "uppercase",
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  dateText: {
    fontSize: 11,
    color: themeColors.muted.foreground,
  },
  fullMetaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  authorText: {
    fontSize: 11,
    color: themeColors["gray-400"],
    fontStyle: "italic",
  },
});

export default NewsCard;
