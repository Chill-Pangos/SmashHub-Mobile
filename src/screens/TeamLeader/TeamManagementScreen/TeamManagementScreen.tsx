/**
 * TeamManagementScreen - Team Leader
 * Manage teams within delegation: create, edit, roster management
 * UC-48: Team Management
 */

import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Users,
  Plus,
  Trophy,
  Edit3,
  Trash2,
  ChevronRight,
  Target,
  X,
  Check,
} from "lucide-react-native";
import {
  SafeAreaView,
  TabBar,
  SearchBar,
  FloatingActionButton,
  AthleteCard,
} from "../../../components";
import { Team } from "../../../types";
import {
  mockDelegations,
  mockTeams,
  mockAthletes,
  mockCoaches,
  getUserById,
} from "../../../mockdata/mockData";
import { colors } from "../../../theme";
import { globalStyles } from "../../../styles/global.styles";
import styles from "./TeamManagementScreenStyle";

type TabItem = {
  id: string;
  label: string;
  badge?: number;
};

const TeamManagementScreen: React.FC = () => {
  const currentLeaderId = "201";
  const delegation = mockDelegations.find(
    (d) => d.leaderId === currentLeaderId
  );

  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  // Modal states
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddMembersModal, setShowAddMembersModal] = useState(false);
  const [teamToEdit, setTeamToEdit] = useState<Team | null>(null);
  const [teamToDelete, setTeamToDelete] = useState<Team | null>(null);
  const [teamToAddMembers, setTeamToAddMembers] = useState<Team | null>(null);

  // Form states
  const [teamName, setTeamName] = useState("");
  const [teamType, setTeamType] = useState<"singles" | "doubles" | "team">(
    "singles"
  );
  const [selectedAthletes, setSelectedAthletes] = useState<string[]>([]);
  const [selectedCoach, setSelectedCoach] = useState<string | undefined>(
    undefined
  );
  const [localTeams, setLocalTeams] = useState<Team[]>(
    mockTeams.filter((t) => t.delegationId === delegation?.id)
  );

  // Get delegation teams from local state
  const delegationTeams = useMemo(() => {
    if (!delegation) return [];
    return localTeams;
  }, [localTeams, delegation]);

  // Filter by tab
  const filteredByTab = useMemo(() => {
    if (activeTab === "all") return delegationTeams;
    return delegationTeams.filter((t) => t.type === activeTab);
  }, [activeTab, delegationTeams]);

  // Filter by search
  const filteredTeams = useMemo(() => {
    if (!searchQuery) return filteredByTab;
    return filteredByTab.filter((t) =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [filteredByTab, searchQuery]);

  // Calculate stats
  const stats = useMemo(() => {
    return {
      totalTeams: delegationTeams.length,
      singles: delegationTeams.filter((t) => t.type === "singles").length,
      doubles: delegationTeams.filter((t) => t.type === "doubles").length,
      team: delegationTeams.filter((t) => t.type === "team").length,
    };
  }, [delegationTeams]);

  const tabs: TabItem[] = [
    { id: "all", label: "Tất cả", badge: stats.totalTeams },
    { id: "singles", label: "Đơn", badge: stats.singles },
    { id: "doubles", label: "Đôi", badge: stats.doubles },
    { id: "team", label: "Đồng đội", badge: stats.team },
  ];

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const handleTeamPress = (team: Team) => {
    setSelectedTeam(team);
  };

  const handleBackToList = () => {
    setSelectedTeam(null);
  };

  const handleCreateTeam = () => {
    setTeamName("");
    setTeamType("singles");
    setShowCreateModal(true);
  };

  const handleConfirmCreate = () => {
    if (!teamName.trim()) {
      Alert.alert("Lỗi", "Vui lòng nhập tên đội");
      return;
    }

    const newTeam: Team = {
      id: `team${Date.now()}`,
      name: teamName.trim(),
      delegationId: delegation!.id,
      type: teamType,
      athletes: [],
      coachId: undefined,
    };

    setLocalTeams([...localTeams, newTeam]);
    setShowCreateModal(false);
    Alert.alert("Thành công", `Đã tạo đội "${newTeam.name}"`);
  };

  const handleEditTeam = (team: Team) => {
    setTeamToEdit(team);
    setTeamName(team.name);
    setTeamType(team.type);
    setShowEditModal(true);
  };

  const handleConfirmEdit = () => {
    if (!teamName.trim()) {
      Alert.alert("Lỗi", "Vui lòng nhập tên đội");
      return;
    }

    if (!teamToEdit) return;

    const updatedTeams = localTeams.map((t) =>
      t.id === teamToEdit.id
        ? { ...t, name: teamName.trim(), type: teamType }
        : t
    );

    setLocalTeams(updatedTeams);
    setShowEditModal(false);
    setTeamToEdit(null);

    // Update selectedTeam if it's the one being edited
    if (selectedTeam?.id === teamToEdit.id) {
      setSelectedTeam({ ...teamToEdit, name: teamName.trim(), type: teamType });
    }

    Alert.alert("Thành công", "Đã cập nhật thông tin đội");
  };

  const handleDeleteTeam = (team: Team) => {
    setTeamToDelete(team);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (!teamToDelete) return;

    const updatedTeams = localTeams.filter((t) => t.id !== teamToDelete.id);
    setLocalTeams(updatedTeams);
    setShowDeleteModal(false);

    // Go back to list if deleting the currently viewed team
    if (selectedTeam?.id === teamToDelete.id) {
      setSelectedTeam(null);
    }

    Alert.alert("Thành công", `Đã xóa đội "${teamToDelete.name}"`);
    setTeamToDelete(null);
  };

  const handleAddMember = (team: Team) => {
    setTeamToAddMembers(team);
    setSelectedAthletes([]);
    setSelectedCoach(team.coachId);
    setShowAddMembersModal(true);
  };

  const toggleAthleteSelection = (athleteId: string) => {
    setSelectedAthletes((prev) =>
      prev.includes(athleteId)
        ? prev.filter((id) => id !== athleteId)
        : [...prev, athleteId]
    );
  };

  const handleConfirmAddMembers = () => {
    if (!teamToAddMembers) return;

    const updatedTeams = localTeams.map((t) =>
      t.id === teamToAddMembers.id
        ? {
            ...t,
            athletes: Array.from(new Set([...t.athletes, ...selectedAthletes])),
            coachId: selectedCoach || t.coachId,
          }
        : t
    );

    setLocalTeams(updatedTeams);

    // Update selectedTeam if it's the one being edited
    if (selectedTeam?.id === teamToAddMembers.id) {
      setSelectedTeam({
        ...teamToAddMembers,
        athletes: Array.from(
          new Set([...teamToAddMembers.athletes, ...selectedAthletes])
        ),
        coachId: selectedCoach || teamToAddMembers.coachId,
      });
    }

    setShowAddMembersModal(false);
    setTeamToAddMembers(null);
    Alert.alert(
      "Thành công",
      `Đã thêm ${selectedAthletes.length} VĐV${
        selectedCoach ? " và HLV" : ""
      } vào đội`
    );
  };

  if (!delegation) {
    return (
      <SafeAreaView style={globalStyles.flex1}>
        <View style={[globalStyles.flex1, globalStyles.flexCenter]}>
          <Text style={globalStyles.textCenter}>
            Không tìm thấy đoàn thể thao
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  // Team Detail View
  if (selectedTeam) {
    const coach = selectedTeam.coachId
      ? getUserById(selectedTeam.coachId)
      : null;
    const athletes = selectedTeam.athletes
      .map((id) => getUserById(id))
      .filter(Boolean);

    return (
      <SafeAreaView style={globalStyles.flex1}>
        <ScrollView style={globalStyles.flex1}>
          <LinearGradient
            colors={[
              colors.primary[400],
              colors.primary.DEFAULT,
              colors.primary[600],
            ]}
            style={styles.teamDetailHeader}
          >
            <View style={styles.detailHeaderTop}>
              <TouchableOpacity
                onPress={handleBackToList}
                style={styles.backButton}
              >
                <Text style={styles.backText}>← Quay lại</Text>
              </TouchableOpacity>
              <View style={styles.detailActions}>
                <TouchableOpacity
                  onPress={() => handleEditTeam(selectedTeam)}
                  style={styles.iconButton}
                >
                  <Edit3 size={20} color="#ffffff" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleDeleteTeam(selectedTeam)}
                  style={styles.iconButton}
                >
                  <Trash2 size={20} color="#ffffff" />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.teamDetailTitle}>{selectedTeam.name}</Text>
            <Text style={styles.teamDetailSubtitle}>
              {selectedTeam.type === "singles"
                ? "Đơn"
                : selectedTeam.type === "doubles"
                ? "Đôi"
                : "Đồng đội"}
            </Text>
          </LinearGradient>

          <View style={styles.teamInfoCard}>
            <Text style={styles.sectionTitle}>Thông tin đội</Text>
            {coach && (
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Huấn luyện viên:</Text>
                <Text style={styles.infoValue}>{coach.name}</Text>
              </View>
            )}
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Số thành viên:</Text>
              <Text style={styles.infoValue}>{athletes.length} VĐV</Text>
            </View>
          </View>

          <View style={styles.rosterSection}>
            <View style={styles.rosterHeader}>
              <Text style={styles.sectionTitle}>Danh sách VĐV</Text>
              <TouchableOpacity onPress={() => handleAddMember(selectedTeam)}>
                <Plus size={20} color={colors.primary.DEFAULT} />
              </TouchableOpacity>
            </View>
            {athletes.map((athlete) => (
              <AthleteCard
                key={athlete!.id}
                athlete={athlete!}
                stats={{
                  ranking: Math.floor(Math.random() * 50) + 1,
                  wins: Math.floor(Math.random() * 15) + 5,
                  losses: Math.floor(Math.random() * 10) + 2,
                  winRate: Math.floor(Math.random() * 30) + 60,
                  organization: athlete!.organization,
                }}
                variant="compact"
                style={styles.athleteCard}
              />
            ))}
          </View>
        </ScrollView>

        {/* Edit Team Modal */}
        <Modal
          visible={showEditModal}
          transparent
          animationType="slide"
          onRequestClose={() => setShowEditModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Chỉnh sửa đội</Text>
                <TouchableOpacity onPress={() => setShowEditModal(false)}>
                  <X size={24} color={colors.muted.foreground} />
                </TouchableOpacity>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Tên đội *</Text>
                <TextInput
                  style={styles.formInput}
                  value={teamName}
                  onChangeText={setTeamName}
                  placeholder="Nhập tên đội..."
                  placeholderTextColor={colors.muted.foreground}
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Loại đội *</Text>
                <View style={styles.typeButtons}>
                  <TouchableOpacity
                    style={[
                      styles.typeButton,
                      teamType === "singles" && styles.typeButtonActive,
                    ]}
                    onPress={() => setTeamType("singles")}
                  >
                    <Text
                      style={[
                        styles.typeButtonText,
                        teamType === "singles" && styles.typeButtonTextActive,
                      ]}
                    >
                      Đơn
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.typeButton,
                      teamType === "doubles" && styles.typeButtonActive,
                    ]}
                    onPress={() => setTeamType("doubles")}
                  >
                    <Text
                      style={[
                        styles.typeButtonText,
                        teamType === "doubles" && styles.typeButtonTextActive,
                      ]}
                    >
                      Đôi
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.typeButton,
                      teamType === "team" && styles.typeButtonActive,
                    ]}
                    onPress={() => setTeamType("team")}
                  >
                    <Text
                      style={[
                        styles.typeButtonText,
                        teamType === "team" && styles.typeButtonTextActive,
                      ]}
                    >
                      Đồng đội
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.modalActions}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.modalButtonSecondary]}
                  onPress={() => setShowEditModal(false)}
                >
                  <Text style={styles.modalButtonTextSecondary}>Hủy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.modalButtonPrimary]}
                  onPress={handleConfirmEdit}
                >
                  <Check size={18} color="#ffffff" />
                  <Text style={styles.modalButtonTextPrimary}>Lưu</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* Delete Confirmation Modal */}
        <Modal
          visible={showDeleteModal}
          transparent
          animationType="fade"
          onRequestClose={() => setShowDeleteModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Xác nhận xóa</Text>
              </View>

              <Text style={styles.deleteMessage}>
                Bạn có chắc chắn muốn xóa đội{" "}
                <Text style={styles.deleteTeamName}>
                  "{teamToDelete?.name}"
                </Text>
                ?
              </Text>
              <Text style={styles.deleteWarning}>
                Hành động này không thể hoàn tác.
              </Text>

              <View style={styles.modalActions}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.modalButtonSecondary]}
                  onPress={() => setShowDeleteModal(false)}
                >
                  <Text style={styles.modalButtonTextSecondary}>Hủy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.modalButtonDanger]}
                  onPress={handleConfirmDelete}
                >
                  <Trash2 size={18} color="#ffffff" />
                  <Text style={styles.modalButtonTextPrimary}>Xóa</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* Add Members Modal */}
        <Modal
          visible={showAddMembersModal}
          transparent
          animationType="slide"
          onRequestClose={() => setShowAddMembersModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={[styles.modalContent, styles.modalContentLarge]}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Thêm thành viên</Text>
                <TouchableOpacity onPress={() => setShowAddMembersModal(false)}>
                  <X size={24} color={colors.muted.foreground} />
                </TouchableOpacity>
              </View>

              <ScrollView style={styles.modalScroll}>
                {/* Coach Selection */}
                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>Huấn luyện viên</Text>
                  <View style={styles.coachList}>
                    {mockCoaches
                      .filter((coach) => delegation?.coaches.includes(coach.id))
                      .map((coach) => {
                        const isAssigned = localTeams.some(
                          (t) =>
                            t.id !== teamToAddMembers?.id &&
                            t.coachId === coach.id
                        );
                        return (
                          <TouchableOpacity
                            key={coach.id}
                            style={[
                              styles.memberItem,
                              selectedCoach === coach.id &&
                                styles.memberItemSelected,
                              isAssigned && styles.memberItemDisabled,
                            ]}
                            onPress={() =>
                              !isAssigned &&
                              setSelectedCoach(
                                selectedCoach === coach.id
                                  ? undefined
                                  : coach.id
                              )
                            }
                            disabled={isAssigned}
                          >
                            <View style={styles.memberInfo}>
                              <Text
                                style={[
                                  styles.memberName,
                                  isAssigned && styles.memberNameDisabled,
                                ]}
                              >
                                {coach.name}
                              </Text>
                              {isAssigned && (
                                <Text style={styles.memberStatus}>
                                  Đã phân công
                                </Text>
                              )}
                            </View>
                            <View
                              style={[
                                styles.checkbox,
                                selectedCoach === coach.id &&
                                  styles.checkboxSelected,
                              ]}
                            >
                              {selectedCoach === coach.id && (
                                <Check size={16} color="#ffffff" />
                              )}
                            </View>
                          </TouchableOpacity>
                        );
                      })}
                  </View>
                </View>

                {/* Athletes Selection */}
                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>
                    Vận động viên ({selectedAthletes.length} đã chọn)
                  </Text>
                  <View style={styles.athleteList}>
                    {mockAthletes
                      .filter((athlete) =>
                        delegation?.athletes.includes(athlete.id)
                      )
                      .map((athlete) => {
                        const isAlreadyInTeam =
                          teamToAddMembers?.athletes.includes(athlete.id);
                        const isSelected = selectedAthletes.includes(
                          athlete.id
                        );
                        return (
                          <TouchableOpacity
                            key={athlete.id}
                            style={[
                              styles.memberItem,
                              isSelected && styles.memberItemSelected,
                              isAlreadyInTeam && styles.memberItemDisabled,
                            ]}
                            onPress={() =>
                              !isAlreadyInTeam &&
                              toggleAthleteSelection(athlete.id)
                            }
                            disabled={isAlreadyInTeam}
                          >
                            <View style={styles.memberInfo}>
                              <Text
                                style={[
                                  styles.memberName,
                                  isAlreadyInTeam && styles.memberNameDisabled,
                                ]}
                              >
                                {athlete.name}
                              </Text>
                              <Text style={styles.memberOrg}>
                                {athlete.organization}
                              </Text>
                              {isAlreadyInTeam && (
                                <Text style={styles.memberStatus}>
                                  Đã trong đội
                                </Text>
                              )}
                            </View>
                            <View
                              style={[
                                styles.checkbox,
                                isSelected && styles.checkboxSelected,
                              ]}
                            >
                              {isSelected && (
                                <Check size={16} color="#ffffff" />
                              )}
                            </View>
                          </TouchableOpacity>
                        );
                      })}
                  </View>
                </View>
              </ScrollView>

              <View style={styles.modalActions}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.modalButtonSecondary]}
                  onPress={() => setShowAddMembersModal(false)}
                >
                  <Text style={styles.modalButtonTextSecondary}>Hủy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.modalButtonPrimary]}
                  onPress={handleConfirmAddMembers}
                  disabled={selectedAthletes.length === 0 && !selectedCoach}
                >
                  <Check size={18} color="#ffffff" />
                  <Text style={styles.modalButtonTextPrimary}>Thêm</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }

  // Teams List View
  return (
    <SafeAreaView style={globalStyles.flex1}>
      <ScrollView
        style={globalStyles.flex1}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        <LinearGradient
          colors={[
            colors.primary[400],
            colors.primary.DEFAULT,
            colors.primary[600],
          ]}
          style={styles.headerGradient}
        >
          <View style={styles.headerContent}>
            <View style={globalStyles.flexRow}>
              <View style={styles.headerIcon}>
                <Users size={24} color="#ffffff" />
              </View>
              <View style={globalStyles.flex1}>
                <Text style={styles.headerTitle}>Quản lý Đội</Text>
                <Text style={styles.headerSubtitle}>{delegation.name}</Text>
              </View>
            </View>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{stats.totalTeams}</Text>
              <Text style={styles.statLabel}>Tổng số đội</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{stats.singles}</Text>
              <Text style={styles.statLabel}>Đơn</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{stats.doubles}</Text>
              <Text style={styles.statLabel}>Đôi</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.tabBar}>
          <TabBar
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </View>

        <View style={styles.searchContainer}>
          <SearchBar
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Tìm kiếm đội..."
          />
        </View>

        <View style={styles.teamsContainer}>
          {filteredTeams.map((team) => {
            const coach = team.coachId ? getUserById(team.coachId) : null;
            const athletesCount = team.athletes.length;

            return (
              <TouchableOpacity
                key={team.id}
                style={styles.teamCard}
                onPress={() => handleTeamPress(team)}
              >
                <View style={styles.teamCardHeader}>
                  <View style={globalStyles.flex1}>
                    <Text style={styles.teamName}>{team.name}</Text>
                    <Text style={styles.teamType}>
                      {team.type === "singles"
                        ? "Đơn"
                        : team.type === "doubles"
                        ? "Đôi"
                        : "Đồng đội"}
                    </Text>
                  </View>
                  <ChevronRight size={20} color={colors.muted.foreground} />
                </View>

                <View style={styles.teamCardBody}>
                  <View style={styles.teamInfo}>
                    <Users size={16} color={colors.muted.foreground} />
                    <Text style={styles.teamInfoText}>{athletesCount} VĐV</Text>
                  </View>
                  {coach && (
                    <View style={styles.teamInfo}>
                      <Text style={styles.teamInfoText}>HLV: {coach.name}</Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}

          {filteredTeams.length === 0 && (
            <View style={styles.emptyState}>
              <Users size={48} color={colors.muted.foreground} />
              <Text style={styles.emptyTitle}>Chưa có đội</Text>
              <Text style={styles.emptyText}>
                {searchQuery
                  ? "Không tìm thấy đội phù hợp"
                  : "Tạo đội mới để bắt đầu"}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      <FloatingActionButton
        icon={<Plus size={24} color="#ffffff" />}
        onPress={handleCreateTeam}
        label="Tạo đội mới"
        style={styles.fabContainer}
      />

      {/* Create Team Modal */}
      <Modal
        visible={showCreateModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowCreateModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Tạo đội mới</Text>
              <TouchableOpacity onPress={() => setShowCreateModal(false)}>
                <X size={24} color={colors.muted.foreground} />
              </TouchableOpacity>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>Tên đội *</Text>
              <TextInput
                style={styles.formInput}
                value={teamName}
                onChangeText={setTeamName}
                placeholder="Nhập tên đội..."
                placeholderTextColor={colors.muted.foreground}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>Loại đội *</Text>
              <View style={styles.typeButtons}>
                <TouchableOpacity
                  style={[
                    styles.typeButton,
                    teamType === "singles" && styles.typeButtonActive,
                  ]}
                  onPress={() => setTeamType("singles")}
                >
                  <Text
                    style={[
                      styles.typeButtonText,
                      teamType === "singles" && styles.typeButtonTextActive,
                    ]}
                  >
                    Đơn
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.typeButton,
                    teamType === "doubles" && styles.typeButtonActive,
                  ]}
                  onPress={() => setTeamType("doubles")}
                >
                  <Text
                    style={[
                      styles.typeButtonText,
                      teamType === "doubles" && styles.typeButtonTextActive,
                    ]}
                  >
                    Đôi
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.typeButton,
                    teamType === "team" && styles.typeButtonActive,
                  ]}
                  onPress={() => setTeamType("team")}
                >
                  <Text
                    style={[
                      styles.typeButtonText,
                      teamType === "team" && styles.typeButtonTextActive,
                    ]}
                  >
                    Đồng đội
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.modalActions}>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonSecondary]}
                onPress={() => setShowCreateModal(false)}
              >
                <Text style={styles.modalButtonTextSecondary}>Hủy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonPrimary]}
                onPress={handleConfirmCreate}
              >
                <Check size={18} color="#ffffff" />
                <Text style={styles.modalButtonTextPrimary}>Tạo đội</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default TeamManagementScreen;
