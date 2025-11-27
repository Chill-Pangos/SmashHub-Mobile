import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  LoadingSpinner,
  EmptyState,
  SkeletonLoader,
} from "../../../components";
import { AlertCircle, Trophy, Users } from "lucide-react-native";
import { stateComponentsScreenStyles } from "./StateComponentsScreenStyle";

/**
 * State Components Demo Screen
 */
const StateComponentsScreen: React.FC = () => {
  const [showSkeleton, setShowSkeleton] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <ScrollView style={stateComponentsScreenStyles.container}>
        <View style={stateComponentsScreenStyles.header}>
          <Text style={stateComponentsScreenStyles.headerTitle}>
            State Components
          </Text>
          <Text style={stateComponentsScreenStyles.headerSubtitle}>
            Loading, Empty & Skeleton States (3 components)
          </Text>
        </View>

        <View style={stateComponentsScreenStyles.content}>
          {/* LoadingSpinner */}
          <View style={stateComponentsScreenStyles.section}>
            <Text style={stateComponentsScreenStyles.sectionTitle}>
              LoadingSpinner
            </Text>

            <View style={stateComponentsScreenStyles.spacer} />
            <View>
              <Text style={stateComponentsScreenStyles.subsectionTitle}>
                Sizes:
              </Text>
              <View style={stateComponentsScreenStyles.demoRow}>
                <View style={stateComponentsScreenStyles.demoColumn}>
                  <LoadingSpinner size="small" />
                  <Text style={stateComponentsScreenStyles.demoLabel}>
                    Small
                  </Text>
                </View>
                <View style={stateComponentsScreenStyles.demoColumn}>
                  <LoadingSpinner size="medium" />
                  <Text style={stateComponentsScreenStyles.demoLabel}>
                    Medium
                  </Text>
                </View>
                <View style={stateComponentsScreenStyles.demoColumn}>
                  <LoadingSpinner size="large" />
                  <Text style={stateComponentsScreenStyles.demoLabel}>
                    Large
                  </Text>
                </View>
              </View>
            </View>

            <View style={stateComponentsScreenStyles.spacer} />
            <View>
              <Text style={stateComponentsScreenStyles.subsectionTitle}>
                Overlay:
              </Text>
              <View style={stateComponentsScreenStyles.demoContainer}>
                <LoadingSpinner overlay message="Đang tải..." />
              </View>
            </View>
          </View>

          {/* EmptyState */}
          <View style={stateComponentsScreenStyles.section}>
            <Text style={stateComponentsScreenStyles.sectionTitle}>
              EmptyState
            </Text>

            <View style={stateComponentsScreenStyles.spacer} />
            <View style={stateComponentsScreenStyles.border}>
              <EmptyState
                variant="no-data"
                icon={Trophy}
                title="Không có giải đấu"
                description="Chưa có giải đấu nào được tổ chức"
                actionText="Tạo giải đấu"
                onAction={() => console.log("Create")}
              />
            </View>

            <View style={stateComponentsScreenStyles.spacer} />
            <View style={stateComponentsScreenStyles.border}>
              <EmptyState
                variant="no-results"
                icon={Users}
                title="Không tìm thấy kết quả"
                description="Thử tìm kiếm với từ khóa khác"
              />
            </View>

            <View style={stateComponentsScreenStyles.spacer} />
            <View style={stateComponentsScreenStyles.border}>
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

          {/* SkeletonLoader */}
          <View style={stateComponentsScreenStyles.section}>
            <Text style={stateComponentsScreenStyles.sectionTitle}>
              SkeletonLoader
            </Text>

            <View style={stateComponentsScreenStyles.spacer} />
            <View>
              <Text style={stateComponentsScreenStyles.subsectionTitle}>
                Card Variant:
              </Text>
              <SkeletonLoader variant="card" count={2} />
            </View>

            <View style={stateComponentsScreenStyles.spacer} />
            <View>
              <Text style={stateComponentsScreenStyles.subsectionTitle}>
                List Variant:
              </Text>
              <SkeletonLoader variant="list" count={3} />
            </View>

            <View style={stateComponentsScreenStyles.spacer} />
            <View>
              <Text style={stateComponentsScreenStyles.subsectionTitle}>
                Profile Variant:
              </Text>
              <SkeletonLoader variant="profile" />
            </View>
          </View>

          <View style={stateComponentsScreenStyles.largeSpacer} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StateComponentsScreen;
