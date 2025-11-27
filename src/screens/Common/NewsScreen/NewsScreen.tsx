import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowLeft, Newspaper } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { colors as themeColors } from "../../../theme/colors";
import { globalStyles } from "../../../styles/global.styles";
import { FilterChips } from "../../../components/inputs/FilterChips";
import NewsCard, { News } from "../../../components/cards/NewsCard";
import { EmptyState } from "../../../components/states/EmptyState";
import { newsScreenStyles } from "./NewsScreenStyle";

const NewsScreen: React.FC = () => {
  const navigation = useNavigation();

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [refreshing, setRefreshing] = useState(false);

  // Mock data - Replace with actual API call
  const [newsData, setNewsData] = useState<News[]>([
    {
      id: "news1",
      title: "Giải vô địch quốc gia 2024 chính thức khởi tranh",
      excerpt:
        "Giải đấu cầu lông lớn nhất năm với sự tham gia của hơn 200 vận động viên xuất sắc từ khắp cả nước đã chính thức khai mạc.",
      imageUrl: "https://picsum.photos/seed/news1/400/300",
      publishedAt: "2024-03-20T08:00:00Z",
      category: "Giải đấu",
      author: "Ban biên tập",
    },
    {
      id: "news2",
      title: "Top 5 kỹ thuật cơ bản mọi vận động viên cần biết",
      excerpt:
        "Hướng dẫn chi tiết về những kỹ thuật cơ bản giúp nâng cao kỹ năng thi đấu của bạn.",
      imageUrl: "https://picsum.photos/seed/news2/400/300",
      publishedAt: "2024-03-19T14:30:00Z",
      category: "Kỹ thuật",
      author: "HLV Nguyễn Văn A",
    },
    {
      id: "news3",
      title: "Lịch thi đấu vòng bán kết đã được cập nhật",
      excerpt:
        "Ban tổ chức vừa công bố lịch thi đấu chi tiết cho vòng bán kết các nội dung thi đấu.",
      imageUrl: "https://picsum.photos/seed/news3/400/300",
      publishedAt: "2024-03-18T16:45:00Z",
      category: "Thông báo",
    },
    {
      id: "news4",
      title: "Nguyễn Văn A giành HCV nội dung nam đơn",
      excerpt:
        "Tay vợt trẻ Nguyễn Văn A đã có màn thể hiện xuất sắc để giành chức vô địch nội dung nam đơn.",
      imageUrl: "https://picsum.photos/seed/news4/400/300",
      publishedAt: "2024-03-17T11:20:00Z",
      category: "Kết quả",
      author: "Ban biên tập",
    },
    {
      id: "news5",
      title: "Bí quyết giữ phong độ ổn định trong thi đấu",
      excerpt:
        "Chia sẻ từ các chuyên gia về cách duy trì phong độ tốt nhất trong suốt giải đấu.",
      imageUrl: "https://picsum.photos/seed/news5/400/300",
      publishedAt: "2024-03-16T09:15:00Z",
      category: "Kỹ thuật",
      author: "HLV Trần Thị B",
    },
    {
      id: "news6",
      title: "Đăng ký giải mùa xuân 2024 sẽ đóng vào 22/03",
      excerpt:
        "Thông báo quan trọng về thời hạn đăng ký tham gia giải đấu mùa xuân sắp tới.",
      publishedAt: "2024-03-15T13:00:00Z",
      category: "Thông báo",
    },
  ]);

  const categories = [
    { id: "all", label: "Tất cả" },
    { id: "Giải đấu", label: "Giải đấu" },
    { id: "Kết quả", label: "Kết quả" },
    { id: "Kỹ thuật", label: "Kỹ thuật" },
    { id: "Thông báo", label: "Thông báo" },
  ];

  const filteredNews =
    selectedCategory === "all"
      ? newsData
      : newsData.filter((news) => news.category === selectedCategory);

  const handleRefresh = async () => {
    setRefreshing(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setRefreshing(false);
  };

  const handleNewsPress = (news: News) => {
    // Navigate to news detail or open modal
    console.log("News pressed:", news.id);
    // TODO: Implement news detail navigation
  };

  return (
    <SafeAreaView style={globalStyles.flex1} edges={["top"]}>
      <LinearGradient
        colors={[
          themeColors.primary[400],
          themeColors.primary[500],
          themeColors.primary[600],
        ]}
        style={newsScreenStyles.header}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={newsScreenStyles.backButton}
        >
          <ArrowLeft size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={newsScreenStyles.headerTitle}>Tin tức</Text>
        <View style={{ width: 24 }} />
      </LinearGradient>

      {/* Category Filter */}
      <View style={newsScreenStyles.filterContainer}>
        <FilterChips
          filters={categories}
          selectedFilters={[selectedCategory]}
          onFilterChange={(selected) =>
            setSelectedCategory(selected[0] || "all")
          }
          multiSelect={false}
        />
      </View>

      {/* News List */}
      <ScrollView
        style={globalStyles.flex1}
        contentContainerStyle={newsScreenStyles.listContainer}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            tintColor={themeColors.primary[500]}
            colors={[themeColors.primary[500]]}
          />
        }
      >
        {filteredNews.length > 0 ? (
          filteredNews.map((news) => (
            <NewsCard
              key={news.id}
              news={news}
              variant="full"
              onPress={() => handleNewsPress(news)}
            />
          ))
        ) : (
          <EmptyState
            icon={Newspaper}
            title="Không có tin tức"
            description="Chưa có tin tức nào trong danh mục này"
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsScreen;
