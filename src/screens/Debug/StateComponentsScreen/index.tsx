import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import {
  LoadingSpinner,
  EmptyState,
  SkeletonLoader,
} from "../../../components";
import { AlertCircle, Trophy, Users } from "lucide-react-native";

/**
 * State Components Demo Screen
 *
 * Loading, Empty, and Skeleton states
 */
const StateComponentsScreen: React.FC = () => {
  const [showSkeleton, setShowSkeleton] = useState(false);

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="bg-primary-500 px-6 pt-12 pb-8">
        <Text className="text-white text-3xl font-bold mb-2">
          State Components
        </Text>
        <Text className="text-primary-100 text-sm">
          Loading, Empty & Skeleton States (3 components)
        </Text>
      </View>

      <View className="p-6 space-y-6">
        {/* LoadingSpinner */}
        <View className="bg-white rounded-xl p-6 shadow-sm">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            LoadingSpinner
          </Text>

          <View className="space-y-4">
            <View>
              <Text className="text-sm font-semibold text-gray-700 mb-2">
                Sizes:
              </Text>
              <View className="flex-row justify-around items-center py-4 bg-gray-50 rounded-lg">
                <View className="items-center">
                  <LoadingSpinner size="small" />
                  <Text className="text-xs text-gray-500 mt-2">Small</Text>
                </View>
                <View className="items-center">
                  <LoadingSpinner size="medium" />
                  <Text className="text-xs text-gray-500 mt-2">Medium</Text>
                </View>
                <View className="items-center">
                  <LoadingSpinner size="large" />
                  <Text className="text-xs text-gray-500 mt-2">Large</Text>
                </View>
              </View>
            </View>

            <View>
              <Text className="text-sm font-semibold text-gray-700 mb-2">
                Overlay:
              </Text>
              <View className="h-32 bg-gray-100 rounded-lg relative">
                <LoadingSpinner overlay message="Đang tải..." />
              </View>
            </View>
          </View>
        </View>

        {/* EmptyState */}
        <View className="bg-white rounded-xl p-6 shadow-sm">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            EmptyState
          </Text>

          <View className="space-y-4">
            <View className="border border-gray-200 rounded-lg p-4">
              <EmptyState
                variant="no-data"
                icon={Trophy}
                title="Không có giải đấu"
                description="Chưa có giải đấu nào được tổ chức"
                actionText="Tạo giải đấu"
                onAction={() => console.log("Create")}
              />
            </View>

            <View className="border border-gray-200 rounded-lg p-4">
              <EmptyState
                variant="no-results"
                icon={Users}
                title="Không tìm thấy kết quả"
                description="Thử tìm kiếm với từ khóa khác"
              />
            </View>

            <View className="border border-gray-200 rounded-lg p-4">
              <EmptyState
                variant="error"
                icon={AlertCircle}
                title="Đã có lỗi xảy ra"
                description="Vui lòng thử lại sau"
                actionText="Thử lại"
                onAction={() => console.log("Retry")}
              />
            </View>
          </View>
        </View>

        {/* SkeletonLoader */}
        <View className="bg-white rounded-xl p-6 shadow-sm">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            SkeletonLoader
          </Text>

          <View className="space-y-4">
            <View>
              <Text className="text-sm font-semibold text-gray-700 mb-2">
                Card Variant:
              </Text>
              <SkeletonLoader variant="card" count={2} />
            </View>

            <View>
              <Text className="text-sm font-semibold text-gray-700 mb-2">
                List Variant:
              </Text>
              <SkeletonLoader variant="list" count={3} />
            </View>

            <View>
              <Text className="text-sm font-semibold text-gray-700 mb-2">
                Profile Variant:
              </Text>
              <SkeletonLoader variant="profile" />
            </View>
          </View>
        </View>

        <View className="h-8" />
      </View>
    </ScrollView>
  );
};

export default StateComponentsScreen;
