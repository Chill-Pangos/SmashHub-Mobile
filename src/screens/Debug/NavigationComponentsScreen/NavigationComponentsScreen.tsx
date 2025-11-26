import React, { useState } from "react";
import { navigationComponentsScreenStyles } from './NavigationComponentsScreenStyle';
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
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
    <View style={navigationComponentsScreenStyles.container}>
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

        <LinearGradient
          colors={['#e89b3c', '#d88320']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ marginTop: 16, paddingTop: 16 }}
        >
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
        </LinearGradient>
      </View>

      <ScrollView>
        <View style={navigationComponentsScreenStyles.content}>
          {/* ScreenHeader Info */}
          <View style={navigationComponentsScreenStyles.section}>
            <Text className="text-xl font-bold text-gray-900 mb-2">
              ScreenHeader
            </Text>
            <Text className="text-sm text-gray-600">
              4 variants: default, gradient, sticky, transparent
            </Text>
          </View>

          {/* TabBar */}
          <View style={navigationComponentsScreenStyles.section}>
            <Text style={navigationComponentsScreenStyles.sectionTitle}>TabBar</Text>

            <View style={navigationComponentsScreenStyles.spacer}>
              <View>
                <Text style={navigationComponentsScreenStyles.subsectionTitle}>
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
                <Text style={navigationComponentsScreenStyles.subsectionTitle}>
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
                <Text style={navigationComponentsScreenStyles.subsectionTitle}>
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

          <View style={navigationComponentsScreenStyles.largeSpacer} />
        </View>
      </ScrollView>
    </View>
  );
};

export default NavigationComponentsScreen;

