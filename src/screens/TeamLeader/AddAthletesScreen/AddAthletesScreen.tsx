import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  UserPlus,
  Users,
  Mail,
  Check,
  X,
  ChevronRight,
  ChevronLeft,
} from "lucide-react-native";
import styles from "./AddAthletesScreenStyle";
import { SafeAreaView } from "../../../components";
import { colors } from "../../../theme";
import { mockUsers } from "../../../mockdata";
import { User } from "../../../types";
import SearchBar from "../../../components/inputs/SearchBar";
import EmptyState from "../../../components/common/EmptyState";

type Step = "search" | "confirm";
type UserType = "all" | "athlete" | "coach";

const AddAthletesScreen: React.FC = () => {
  const [step, setStep] = useState<Step>("search");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<UserType>("all");
  const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set());
  const [inviteEmail, setInviteEmail] = useState("");

  // Filter users based on search and type
  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || user.role === selectedType;
    return matchesSearch && matchesType;
  });

  const toggleUserSelection = (userId: string) => {
    const newSelection = new Set(selectedUsers);
    if (newSelection.has(userId)) {
      newSelection.delete(userId);
    } else {
      newSelection.add(userId);
    }
    setSelectedUsers(newSelection);
  };

  const removeUser = (userId: string) => {
    const newSelection = new Set(selectedUsers);
    newSelection.delete(userId);
    setSelectedUsers(newSelection);
  };

  const handleNext = () => {
    if (selectedUsers.size > 0) {
      setStep("confirm");
    }
  };

  const handleBack = () => {
    setStep("search");
  };

  const handleConfirm = () => {
    // Implement actual add logic
    console.log("Adding users:", Array.from(selectedUsers));
    // Navigate back or show success
  };

  const renderStepIndicator = () => (
    <View style={styles.stepIndicator}>
      <View style={styles.stepItem}>
        <View
          style={[
            styles.stepNumber,
            step === "search" && styles.stepNumberActive,
          ]}
        >
          <Text
            style={[
              styles.stepNumberText,
              step === "search" && styles.stepNumberTextActive,
            ]}
          >
            1
          </Text>
        </View>
        <Text
          style={[
            styles.stepLabel,
            step === "search" && styles.stepLabelActive,
          ]}
        >
          Tìm kiếm
        </Text>
      </View>
      <ChevronRight size={20} color={colors.muted.foreground} />
      <View style={styles.stepItem}>
        <View
          style={[
            styles.stepNumber,
            step === "confirm" && styles.stepNumberActive,
          ]}
        >
          <Text
            style={[
              styles.stepNumberText,
              step === "confirm" && styles.stepNumberTextActive,
            ]}
          >
            2
          </Text>
        </View>
        <Text
          style={[
            styles.stepLabel,
            step === "confirm" && styles.stepLabelActive,
          ]}
        >
          Xác nhận
        </Text>
      </View>
    </View>
  );

  const renderSearchStep = () => (
    <>
      <View style={styles.searchContainer}>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Tìm kiếm VĐV/HLV..."
        />
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedType === "all" && styles.filterButtonActive,
          ]}
          onPress={() => setSelectedType("all")}
        >
          <Text
            style={[
              styles.filterButtonText,
              selectedType === "all" && styles.filterButtonTextActive,
            ]}
          >
            Tất cả
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedType === "athlete" && styles.filterButtonActive,
          ]}
          onPress={() => setSelectedType("athlete")}
        >
          <Text
            style={[
              styles.filterButtonText,
              selectedType === "athlete" && styles.filterButtonTextActive,
            ]}
          >
            Vận động viên
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedType === "coach" && styles.filterButtonActive,
          ]}
          onPress={() => setSelectedType("coach")}
        >
          <Text
            style={[
              styles.filterButtonText,
              selectedType === "coach" && styles.filterButtonTextActive,
            ]}
          >
            Huấn luyện viên
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.userList} showsVerticalScrollIndicator={false}>
        {filteredUsers.length === 0 ? (
          <View style={styles.emptyContainer}>
            <View style={styles.emptyIcon}>
              <Users size={48} color={colors.muted.foreground} />
            </View>
            <Text style={styles.emptyText}>Không tìm thấy</Text>
            <Text style={styles.emptySubtext}>
              Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm
            </Text>
          </View>
        ) : (
          filteredUsers.map((user) => (
            <TouchableOpacity
              key={user.id}
              style={[
                styles.userCard,
                selectedUsers.has(user.id) && styles.userCardSelected,
              ]}
              onPress={() => toggleUserSelection(user.id)}
            >
              <View
                style={[
                  styles.checkbox,
                  selectedUsers.has(user.id) && styles.checkboxSelected,
                ]}
              >
                {selectedUsers.has(user.id) && (
                  <Check size={16} color="#ffffff" />
                )}
              </View>
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{user.name}</Text>
                <View style={styles.userMeta}>
                  <View style={styles.userMetaItem}>
                    <Mail size={14} color={colors.muted.foreground} />
                    <Text style={styles.userMetaText}>{user.email}</Text>
                  </View>
                  <View style={styles.roleBadge}>
                    <Text style={styles.roleBadgeText}>
                      {user.role === "athlete" ? "VĐV" : "HLV"}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </>
  );

  const renderConfirmStep = () => {
    const selectedUsersList = mockUsers.filter((u) => selectedUsers.has(u.id));

    return (
      <ScrollView
        style={styles.summaryContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.summaryCard}>
          <View style={styles.summaryHeader}>
            <Text style={styles.summaryTitle}>Danh sách đã chọn</Text>
            <Text style={styles.summaryCount}>{selectedUsers.size} người</Text>
          </View>
          <View style={styles.selectedList}>
            {selectedUsersList.map((user) => (
              <View key={user.id} style={styles.selectedItem}>
                <View style={styles.selectedItemInfo}>
                  <Text style={styles.selectedItemName}>{user.name}</Text>
                  <Text style={styles.selectedItemRole}>
                    {user.role === "athlete"
                      ? "Vận động viên"
                      : "Huấn luyện viên"}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => removeUser(user.id)}
                >
                  <X size={20} color={colors.destructive.DEFAULT} />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Thống kê</Text>
          <View style={styles.userMeta}>
            <View style={styles.userMetaItem}>
              <Users size={16} color={colors.primary.DEFAULT} />
              <Text style={styles.userMetaText}>
                {selectedUsersList.filter((u) => u.role === "athlete").length}{" "}
                VĐV
              </Text>
            </View>
            <View style={styles.userMetaItem}>
              <Users size={16} color={colors.status.info} />
              <Text style={styles.userMetaText}>
                {selectedUsersList.filter((u) => u.role === "coach").length} HLV
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[
          colors.primary[400],
          colors.primary.DEFAULT,
          colors.primary[600],
        ]}
        style={styles.headerGradient}
      >
        <View style={styles.headerContent}>
          <View style={styles.headerIcon}>
            <UserPlus size={32} color="#ffffff" />
          </View>
          <Text style={styles.headerTitle}>Thêm thành viên</Text>
          <Text style={styles.headerSubtitle}>
            Thêm vận động viên hoặc huấn luyện viên vào đoàn
          </Text>
        </View>
      </LinearGradient>

      {renderStepIndicator()}

      <View style={styles.contentContainer}>
        {step === "search" ? renderSearchStep() : renderConfirmStep()}
      </View>

      <View style={styles.buttonContainer}>
        {step === "confirm" ? (
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, styles.buttonSecondary]}
              onPress={handleBack}
            >
              <ChevronLeft size={20} color={colors.foreground} />
              <Text style={[styles.buttonText, styles.buttonTextSecondary]}>
                Quay lại
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonPrimary]}
              onPress={handleConfirm}
            >
              <Text style={[styles.buttonText, styles.buttonTextPrimary]}>
                Xác nhận
              </Text>
              <Check size={20} color="#ffffff" />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={[
              styles.button,
              styles.buttonPrimary,
              selectedUsers.size === 0 && { opacity: 0.5 },
            ]}
            onPress={handleNext}
            disabled={selectedUsers.size === 0}
          >
            <Text style={[styles.buttonText, styles.buttonTextPrimary]}>
              Tiếp tục ({selectedUsers.size})
            </Text>
            <ChevronRight size={20} color="#ffffff" />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default AddAthletesScreen;
