import React, { useState } from "react";
import { actionComponentsScreenStyles } from "./ActionComponentsScreenStyle";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FloatingActionButton, ActionSheet } from "../../../components";
import { Plus, Edit, Share, Flag, Trash } from "lucide-react-native";

/**
 * Action Components Demo Screen
 */
const ActionComponentsScreen: React.FC = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <View style={actionComponentsScreenStyles.container}>
        <ScrollView>
          <View style={actionComponentsScreenStyles.header}>
            <Text style={actionComponentsScreenStyles.headerTitle}>
              Action Components
            </Text>
            <Text style={actionComponentsScreenStyles.headerSubtitle}>
              FAB & Action Sheet (2 components)
            </Text>
          </View>

          <View style={actionComponentsScreenStyles.content}>
            {/* FloatingActionButton */}
            <View style={actionComponentsScreenStyles.section}>
              <Text style={actionComponentsScreenStyles.sectionTitle}>
                FloatingActionButton
              </Text>

              <View style={actionComponentsScreenStyles.spacer}>
                <View>
                  <Text style={actionComponentsScreenStyles.subsectionTitle}>
                    Sizes:
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 16,
                      backgroundColor: "#f3f4f6",
                      padding: 16,
                      borderRadius: 12,
                    }}
                  >
                    <FloatingActionButton
                      icon={<Plus size={16} color="#fff" />}
                      onPress={() => console.log("Small")}
                      size="small"
                      position="bottom-right"
                      style={{ position: "relative" }}
                    />
                    <FloatingActionButton
                      icon={<Plus size={20} color="#fff" />}
                      onPress={() => console.log("Medium")}
                      size="medium"
                      position="bottom-right"
                      style={{ position: "relative" }}
                    />
                    <FloatingActionButton
                      icon={<Plus size={24} color="#fff" />}
                      onPress={() => console.log("Large")}
                      size="large"
                      position="bottom-right"
                      style={{ position: "relative" }}
                    />
                  </View>
                </View>

                <View>
                  <Text style={actionComponentsScreenStyles.subsectionTitle}>
                    Extended FAB:
                  </Text>
                  <View
                    style={{
                      backgroundColor: "#f3f4f6",
                      padding: 16,
                      borderRadius: 12,
                      height: 80,
                      position: "relative",
                    }}
                  >
                    <FloatingActionButton
                      icon={<Plus size={20} color="#fff" />}
                      label="Tạo mới"
                      onPress={() => console.log("Extended")}
                      size="medium"
                      position="bottom-right"
                    />
                  </View>
                </View>
              </View>
            </View>

            {/* ActionSheet */}
            <View style={actionComponentsScreenStyles.section}>
              <Text style={actionComponentsScreenStyles.sectionTitle}>
                ActionSheet
              </Text>

              <TouchableOpacity
                onPress={() => setShowActionSheet(true)}
                style={{
                  backgroundColor: "#0ea5e9",
                  borderRadius: 12,
                  paddingVertical: 12,
                }}
              >
                <Text
                  style={{
                    color: "#ffffff",
                    textAlign: "center",
                    fontWeight: "600",
                  }}
                >
                  Show Action Sheet
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ height: 80 }} />
          </View>
        </ScrollView>

        {/* Demo FAB */}
        <FloatingActionButton
          icon={<Plus size={24} color="#fff" />}
          onPress={() => console.log("FAB")}
          position="bottom-right"
        />

        {/* ActionSheet */}
        <ActionSheet
          visible={showActionSheet}
          onClose={() => setShowActionSheet(false)}
          title="Tùy chọn"
          description="Chọn một hành động"
          actions={[
            {
              id: "edit",
              label: "Chỉnh sửa",
              icon: <Edit size={20} color="#666" />,
              onPress: () => console.log("Edit"),
            },
            {
              id: "share",
              label: "Chia sẻ",
              icon: <Share size={20} color="#666" />,
              onPress: () => console.log("Share"),
            },
            {
              id: "report",
              label: "Báo cáo",
              icon: <Flag size={20} color="#666" />,
              onPress: () => console.log("Report"),
            },
            {
              id: "delete",
              label: "Xóa",
              icon: <Trash size={20} color="#ef4444" />,
              destructive: true,
              onPress: () => console.log("Delete"),
            },
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

export default ActionComponentsScreen;
