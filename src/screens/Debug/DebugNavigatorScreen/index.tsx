import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Search, ChevronRight } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

interface ScreenItem {
  name: string;
  route: string;
  uc?: string;
  description: string;
}

interface ScreenCategory {
  category: string;
  icon: string;
  color: string;
  screens: ScreenItem[];
}

const DebugNavigatorScreen: React.FC = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const screenCategories: ScreenCategory[] = [
    {
      category: "UI Components",
      icon: "🎨",
      color: "bg-purple-500",
      screens: [
        {
          name: "State Components",
          route: "StateComponents",
          description: "Loading, Empty & Skeleton States (3)",
        },
        {
          name: "Input Components",
          route: "InputComponents",
          description: "Form Inputs & Filters (5)",
        },
        {
          name: "Badge Components",
          route: "BadgeComponents",
          description: "Status, Score & Unread Badges (3)",
        },
        {
          name: "Card Components",
          route: "CardComponents",
          description: "Tournament, Match & Athlete Cards (3)",
        },
        {
          name: "List Components",
          route: "ListComponents",
          description: "Match List, Rankings & Notifications (3)",
        },
        {
          name: "Navigation Components",
          route: "NavigationComponents",
          description: "Headers & Tab Bars (2)",
        },
        {
          name: "Action Components",
          route: "ActionComponents",
          description: "FAB & Action Sheet (2)",
        },
      ],
    },
    {
      category: "Authentication",
      icon: "🔐",
      color: "bg-purple-500",
      screens: [
        {
          name: "Login",
          route: "Login",
          uc: "UC-32",
          description: "Đăng nhập hệ thống",
        },
        {
          name: "Register",
          route: "Register",
          uc: "UC-33",
          description: "Đăng ký tài khoản",
        },
      ],
    },
    {
      category: "Common Screens",
      icon: "🏠",
      color: "bg-blue-500",
      screens: [
        {
          name: "Profile",
          route: "Profile",
          uc: "UC-02",
          description: "Thông tin cá nhân",
        },
        {
          name: "Tournament List",
          route: "TournamentList",
          uc: "UC-03",
          description: "Danh sách giải đấu",
        },
        {
          name: "Tournament Detail",
          route: "TournamentDetail",
          uc: "UC-04",
          description: "Chi tiết giải đấu",
        },
        {
          name: "Schedule",
          route: "Schedule",
          uc: "UC-05",
          description: "Lịch thi đấu",
        },
        {
          name: "Match Detail",
          route: "MatchDetail",
          uc: "UC-06",
          description: "Chi tiết trận đấu",
        },
        {
          name: "Ranking",
          route: "Ranking",
          uc: "UC-07",
          description: "Bảng xếp hạng",
        },
        {
          name: "Notification Center",
          route: "NotificationCenter",
          uc: "UC-08",
          description: "Trung tâm thông báo",
        },
        { name: "News", route: "News", uc: "UC-09", description: "Tin tức" },
        {
          name: "Complaint Tracking",
          route: "ComplaintTracking",
          uc: "UC-10",
          description: "Theo dõi khiếu nại",
        },
        {
          name: "Athlete Directory",
          route: "AthleteDirectory",
          uc: "UC-38",
          description: "Danh sách VĐV/Đội",
        },
        {
          name: "Contact Support",
          route: "ContactSupport",
          uc: "UC-39",
          description: "Liên hệ hỗ trợ",
        },
      ],
    },
    {
      category: "Athlete Screens",
      icon: "🏃",
      color: "bg-green-500",
      screens: [
        {
          name: "My Schedule",
          route: "MySchedule",
          uc: "UC-12",
          description: "Lịch thi đấu của tôi",
        },
        {
          name: "My Matches",
          route: "MyMatches",
          uc: "UC-13",
          description: "Trận đấu của tôi",
        },
        {
          name: "My Ranking",
          route: "MyRanking",
          uc: "UC-14",
          description: "Xếp hạng của tôi",
        },
        {
          name: "Submit Complaint",
          route: "SubmitComplaint",
          uc: "UC-15",
          description: "Gửi khiếu nại",
        },
      ],
    },
    {
      category: "Spectator Screens",
      icon: "👀",
      color: "bg-orange-500",
      screens: [
        {
          name: "Search Match",
          route: "SearchMatch",
          uc: "UC-25",
          description: "Tìm kiếm trận đấu",
        },
        {
          name: "Favorite Matches",
          route: "FavoriteMatches",
          uc: "UC-26",
          description: "Trận yêu thích",
        },
      ],
    },
    {
      category: "Coach Screens",
      icon: "👨‍🏫",
      color: "bg-indigo-500",
      screens: [
        {
          name: "My Athletes",
          route: "MyAthletes",
          uc: "UC-18",
          description: "VĐV của tôi",
        },
        {
          name: "Training Plans",
          route: "TrainingPlans",
          uc: "UC-19",
          description: "Kế hoạch tập luyện",
        },
        {
          name: "Create Training Plan",
          route: "CreateTrainingPlan",
          uc: "UC-20",
          description: "Tạo kế hoạch tập",
        },
        {
          name: "Athlete Evaluation",
          route: "AthleteEvaluation",
          uc: "UC-21",
          description: "Đánh giá VĐV",
        },
        {
          name: "Performance Analytics",
          route: "PerformanceAnalytics",
          uc: "UC-22",
          description: "Phân tích hiệu suất",
        },
        {
          name: "Tactical Report",
          route: "TacticalReport",
          uc: "UC-23",
          description: "Báo cáo chiến thuật",
        },
        {
          name: "Complaint Management",
          route: "CoachComplaintManagement",
          uc: "UC-24",
          description: "Quản lý khiếu nại",
        },
      ],
    },
    {
      category: "Team Leader Screens",
      icon: "👔",
      color: "bg-pink-500",
      screens: [
        {
          name: "Delegation Management",
          route: "DelegationManagement",
          uc: "UC-27",
          description: "Quản lý đoàn",
        },
        {
          name: "Delegation Schedule",
          route: "DelegationSchedule",
          uc: "UC-28",
          description: "Lịch đoàn",
        },
        {
          name: "Add Athletes",
          route: "AddAthletes",
          uc: "UC-52",
          description: "Thêm VĐV/HLV",
        },
        {
          name: "Team Management",
          route: "TeamManagement",
          uc: "UC-48",
          description: "Quản lý đội",
        },
        {
          name: "Complaint Review",
          route: "ComplaintReview",
          uc: "UC-29",
          description: "Duyệt khiếu nại",
        },
      ],
    },
  ];

  const filteredCategories = screenCategories
    .map((category) => ({
      ...category,
      screens: category.screens.filter(
        (screen) =>
          screen.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          screen.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          screen.uc?.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.screens.length > 0);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory(
      expandedCategory === categoryName ? null : categoryName
    );
  };

  const navigateToScreen = (route: string) => {
    try {
      // Map of screens that are in nested tab navigators
      const tabScreens: { [key: string]: string } = {
        // Athlete Tab Screens
        MySchedule: "Main",
        MyMatches: "Main",
        MyRanking: "Main",

        // Spectator Tab Screens
        TournamentList: "Main",
        Schedule: "Main",
        SearchMatch: "Main",

        // Coach Tab Screens
        MyAthletes: "Main",
        TrainingPlans: "Main",
        PerformanceAnalytics: "Main",

        // Team Leader Tab Screens
        DelegationManagement: "Main",
        DelegationSchedule: "Main",
        TeamManagement: "Main",

        // Profile is in all tab navigators
        Profile: "Main",
      };

      // Check if screen is in a nested tab navigator
      if (tabScreens[route]) {
        // Navigate to Main first, then to the nested screen
        (navigation as any).navigate(tabScreens[route], {
          screen: route,
        });
      } else {
        // Direct navigation for stack screens
        (navigation as any).navigate(route);
      }
    } catch (error) {
      console.log("Navigation error:", error);
    }
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className=" px-6 pt-12 pb-6">
        <Text className="text-black text-3xl font-bold mb-2">
          🛠️ Debug Navigator
        </Text>
        <Text className="text-blue-100 text-sm">
          Access all screens for UI development
        </Text>
      </View>

      {/* Search Bar */}
      <View className="px-6 -mt-6 mb-4">
        <View className="bg-white rounded-2xl shadow-lg p-4 flex-row items-center">
          <Search color="#9ca3af" size={20} />
          <TextInput
            className="flex-1 ml-3 text-base text-gray-800"
            placeholder="Search screens, UC, or description..."
            placeholderTextColor="#9ca3af"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Screen Categories */}
      <ScrollView className="flex-1 px-6">
        {filteredCategories.length === 0 ? (
          <View className="items-center justify-center py-20">
            <Text className="text-gray-400 text-lg">No screens found</Text>
          </View>
        ) : (
          filteredCategories.map((category, index) => (
            <View key={index} className="mb-4">
              {/* Category Header */}
              <TouchableOpacity
                className="bg-white rounded-xl p-4 shadow-sm mb-2"
                onPress={() => toggleCategory(category.category)}
              >
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center flex-1">
                    <View className={`${category.color} rounded-lg p-2 mr-3`}>
                      <Text className="text-xl">{category.icon}</Text>
                    </View>
                    <View className="flex-1">
                      <Text className="text-lg font-bold text-gray-800">
                        {category.category}
                      </Text>
                      <Text className="text-sm text-gray-500">
                        {category.screens.length} screen(s)
                      </Text>
                    </View>
                  </View>
                  <ChevronRight
                    color="#9ca3af"
                    size={20}
                    style={{
                      transform: [
                        {
                          rotate:
                            expandedCategory === category.category
                              ? "90deg"
                              : "0deg",
                        },
                      ],
                    }}
                  />
                </View>
              </TouchableOpacity>

              {/* Screen List */}
              {expandedCategory === category.category && (
                <View className="bg-white rounded-xl shadow-sm overflow-hidden">
                  {category.screens.map((screen, screenIndex) => (
                    <TouchableOpacity
                      key={screenIndex}
                      className={`p-4 flex-row items-center justify-between ${
                        screenIndex !== category.screens.length - 1
                          ? "border-b border-gray-100"
                          : ""
                      }`}
                      onPress={() => navigateToScreen(screen.route)}
                    >
                      <View className="flex-1">
                        <View className="flex-row items-center mb-1">
                          <Text className="text-base font-semibold text-gray-800 mr-2">
                            {screen.name}
                          </Text>
                          {screen.uc && (
                            <View className="bg-blue-100 rounded px-2 py-0.5">
                              <Text className="text-xs text-blue-600 font-semibold">
                                {screen.uc}
                              </Text>
                            </View>
                          )}
                        </View>
                        <Text className="text-sm text-gray-500">
                          {screen.description}
                        </Text>
                      </View>
                      <ChevronRight color="#cbd5e1" size={20} />
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          ))
        )}

        {/* Bottom Padding */}
        <View className="h-8" />
      </ScrollView>
    </View>
  );
};

export default DebugNavigatorScreen;
