import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import {
  User,
  Mail,
  Phone,
  Building2,
  Calendar,
  Award,
  Settings,
  Bell,
  Shield,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react-native";
import { useAuth } from "@/hooks";
import { useRole } from "@/hooks";
import { colors as themeColors } from "../../../theme/colors";
import { globalStyles } from "../../../styles/global.styles";
import { profileScreenStyles } from "./ProfileScreenStyle";

const ProfileScreen: React.FC = () => {
  const { user, logout } = useAuth();
  const { getRoleNames, getHighestPriorityRole, getRoleById } = useRole();

  const handleLogout = () => {
    Alert.alert("Đăng xuất", "Bạn có chắc chắn muốn đăng xuất?", [
      { text: "Hủy", style: "cancel" },
      {
        text: "Đăng xuất",
        style: "destructive",
        onPress: async () => {
          await logout();
        },
      },
    ]);
  };

  // Get display role from roles array
  const getDisplayRole = () => {
    if (!user || !user.roles || user.roles.length === 0) return "Chưa xác định";
    const roleNames = getRoleNames(user.roles);
    return roleNames.join(", ");
  };

  const menuItems = [
    {
      id: 1,
      icon: Settings,
      label: "Cài đặt tài khoản",
      action: () => Alert.alert("Thông báo", "Tính năng đang phát triển"),
    },
    {
      id: 2,
      icon: Bell,
      label: "Thông báo",
      action: () => Alert.alert("Thông báo", "Tính năng đang phát triển"),
    },
    {
      id: 3,
      icon: Shield,
      label: "Bảo mật & Quyền riêng tư",
      action: () => Alert.alert("Thông báo", "Tính năng đang phát triển"),
    },
    {
      id: 4,
      icon: HelpCircle,
      label: "Trợ giúp & Hỗ trợ",
      action: () => Alert.alert("Thông báo", "Tính năng đang phát triển"),
    },
  ];

  return (
    <SafeAreaView style={globalStyles.flex1} edges={["top"]}>
      <ScrollView style={profileScreenStyles.container} bounces={false}>
        {/* Header */}
        <LinearGradient
          colors={[
            themeColors.primary[400],
            themeColors.primary[500],
            themeColors.primary[600],
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={profileScreenStyles.header}
        >
          <Image
            source={{ uri: "https://i.pravatar.cc/150" }}
            style={profileScreenStyles.avatar}
          />
          <Text style={profileScreenStyles.name}>
            {user?.username || user?.email}
          </Text>
          <View style={profileScreenStyles.roleBadge}>
            <Text style={profileScreenStyles.roleBadgeText}>
              {getDisplayRole()}
            </Text>
          </View>
        </LinearGradient>

        {/* Info Cards */}
        <View style={profileScreenStyles.content}>
          {/* Personal Info */}
          <View style={profileScreenStyles.section}>
            <Text style={profileScreenStyles.sectionTitle}>
              Thông tin cá nhân
            </Text>

            <View style={profileScreenStyles.infoCard}>
              <View style={profileScreenStyles.infoItem}>
                <View style={profileScreenStyles.infoIcon}>
                  <Mail color="#0ea5e9" size={20} />
                </View>
                <View style={profileScreenStyles.infoContent}>
                  <Text style={profileScreenStyles.infoLabel}>Email</Text>
                  <Text style={profileScreenStyles.infoValue}>
                    {user?.email}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Stats (for athlete) */}
          {user?.roles &&
            user.roles.length > 0 &&
            (() => {
              const highestRoleId = getHighestPriorityRole(user.roles);
              if (!highestRoleId) return null;
              const role = getRoleById(highestRoleId);
              return role?.name === "athlete" ? (
                <View style={profileScreenStyles.section}>
                  <Text style={profileScreenStyles.sectionTitle}>
                    Thành tích
                  </Text>
                  <View style={profileScreenStyles.statsGrid}>
                    <View style={profileScreenStyles.statCard}>
                      <Award color="#f59e0b" size={28} />
                      <Text style={profileScreenStyles.statValue}>15</Text>
                      <Text style={profileScreenStyles.statLabel}>
                        Trận thắng
                      </Text>
                    </View>
                    <View style={profileScreenStyles.statCard}>
                      <Award color="#6b7280" size={28} />
                      <Text style={profileScreenStyles.statValue}>8</Text>
                      <Text style={profileScreenStyles.statLabel}>
                        Trận thua
                      </Text>
                    </View>
                    <View style={profileScreenStyles.statCard}>
                      <Award color="#0ea5e9" size={28} />
                      <Text style={profileScreenStyles.statValue}>65%</Text>
                      <Text style={profileScreenStyles.statLabel}>
                        Tỉ lệ thắng
                      </Text>
                    </View>
                  </View>
                </View>
              ) : null;
            })()}

          {/* Menu */}
          <View style={profileScreenStyles.section}>
            <Text style={profileScreenStyles.sectionTitle}>Cài đặt</Text>
            <View style={profileScreenStyles.menuCard}>
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <TouchableOpacity
                    key={item.id}
                    style={[
                      profileScreenStyles.menuItem,
                      index !== menuItems.length - 1 &&
                        profileScreenStyles.menuItemBorder,
                    ]}
                    onPress={item.action}
                  >
                    <View style={profileScreenStyles.menuItemLeft}>
                      <View style={profileScreenStyles.menuIcon}>
                        <Icon color="#6b7280" size={20} />
                      </View>
                      <Text style={profileScreenStyles.menuLabel}>
                        {item.label}
                      </Text>
                    </View>
                    <ChevronRight color="#9ca3af" size={20} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Logout Button */}
          <TouchableOpacity
            style={profileScreenStyles.logoutButton}
            onPress={handleLogout}
          >
            <LogOut color="#ef4444" size={20} />
            <Text style={profileScreenStyles.logoutText}>Đăng xuất</Text>
          </TouchableOpacity>

          <View style={profileScreenStyles.footer}>
            <Text style={profileScreenStyles.footerText}>SmashHub v1.0.0</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
