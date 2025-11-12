import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { ScreenHeader, TabBar } from "../../../components";
import { Bell, Settings } from "lucide-react-native";

/**
 * Navigation Components Demo Screen
 */
const NavigationComponentsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "Tất cả", count: 24 },
    { id: "upcoming", label: "Sắp diễn ra", count: 8 },
    { id: "live", label: "Đang diễn ra", count: 3 },
    { id: "completed", label: "Đã kết thúc", count: 13 },
  ];

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header Examples */}
      <View className="mb-6">
        <ScreenHeader
          title="Default Header"
          showBackButton
          onBackPress={() => console.log("Back")}
          actions={[
            {
              id: "notifications",
              icon: <Bell size={20} color="#fff" />,
              label: "Notifications",
              onPress: () => console.log("Notifications"),
            },
            {
              id: "settings",
              icon: <Settings size={20} color="#fff" />,
              label: "Settings",
              onPress: () => console.log("Settings"),
            },
          ]}
        />

        <View className="mt-4">
          <ScreenHeader
            variant="gradient"
            title="Gradient Header"
            subtitle="With beautiful gradient background"
            showBackButton
            onBackPress={() => console.log("Back")}
          />
        </View>

        <View className="mt-4 bg-gradient-to-br from-primary-500 to-primary-600 pt-4">
          <ScreenHeader
            variant="transparent"
            title="Transparent Header"
            showBackButton
            onBackPress={() => console.log("Back")}
            actions={[
              {
                id: "notifications",
                icon: <Bell size={20} color="#fff" />,
                label: "Notifications",
                onPress: () => console.log("Notifications"),
              },
            ]}
          />
        </View>
      </View>

      <ScrollView>
        <View className="p-6 space-y-6">
          {/* ScreenHeader Info */}
          <View className="bg-white rounded-xl p-6 shadow-sm">
            <Text className="text-xl font-bold text-gray-900 mb-2">
              ScreenHeader
            </Text>
            <Text className="text-sm text-gray-600">
              4 variants: default, gradient, sticky, transparent
            </Text>
          </View>

          {/* TabBar */}
          <View className="bg-white rounded-xl p-6 shadow-sm">
            <Text className="text-xl font-bold text-gray-900 mb-4">TabBar</Text>

            <View className="space-y-4">
              <View>
                <Text className="text-sm font-semibold text-gray-700 mb-2">
                  Segmented:
                </Text>
                <TabBar
                  tabs={tabs}
                  activeTab={activeTab}
                  onTabChange={setActiveTab}
                  variant="segmented"
                />
              </View>

              <View>
                <Text className="text-sm font-semibold text-gray-700 mb-2">
                  Pills:
                </Text>
                <TabBar
                  tabs={tabs}
                  activeTab={activeTab}
                  onTabChange={setActiveTab}
                  variant="pills"
                />
              </View>

              <View>
                <Text className="text-sm font-semibold text-gray-700 mb-2">
                  Underline:
                </Text>
                <TabBar
                  tabs={tabs}
                  activeTab={activeTab}
                  onTabChange={setActiveTab}
                  variant="underline"
                />
              </View>
            </View>
          </View>

          <View className="h-8" />
        </View>
      </ScrollView>
    </View>
  );
};

export default NavigationComponentsScreen;
