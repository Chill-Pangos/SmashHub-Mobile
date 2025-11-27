import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowLeft, Users } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { colors as themeColors } from "../../../theme/colors";
import { globalStyles } from "../../../styles/global.styles";
import SearchBar from "../../../components/inputs/SearchBar";
import { AthleteCard } from "../../../components/cards/AthleteCard";
import { EmptyState } from "../../../components/states/EmptyState";
import { athleteDirectoryScreenStyles } from "./AthleteDirectoryScreenStyle";
import { User } from "../../../types";

type DirectoryTab = "athletes" | "teams" | "coaches";

interface Team {
  id: string;
  name: string;
  organization: string;
  members: string[];
  category: string;
}

interface Coach {
  id: string;
  name: string;
  organization: string;
  specialization: string;
  athletes: number;
}

const AthleteDirectoryScreen: React.FC = () => {
  const navigation = useNavigation();

  const [activeTab, setActiveTab] = useState<DirectoryTab>("athletes");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - Replace with actual API call
  const athletes: User[] = [
    {
      id: "a1",
      email: "nguyenvana@example.com",
      name: "Nguyễn Văn A",
      role: "athlete",
      organization: "CLB Hà Nội",
      avatar: "https://picsum.photos/seed/athlete1/100/100",
    },
    {
      id: "a2",
      email: "tranvanb@example.com",
      name: "Trần Văn B",
      role: "athlete",
      organization: "CLB TP.HCM",
      avatar: "https://picsum.photos/seed/athlete2/100/100",
    },
    {
      id: "a3",
      email: "lethic@example.com",
      name: "Lê Thị C",
      role: "athlete",
      organization: "CLB Đà Nẵng",
      avatar: "https://picsum.photos/seed/athlete3/100/100",
    },
    {
      id: "a4",
      email: "phamthid@example.com",
      name: "Phạm Thị D",
      role: "athlete",
      organization: "CLB Hải Phòng",
    },
  ];

  const teams: Team[] = [
    {
      id: "t1",
      name: "Đội A",
      organization: "CLB Hà Nội",
      members: ["Nguyễn Văn A", "Trần Văn B"],
      category: "Nam đôi",
    },
    {
      id: "t2",
      name: "Đội B",
      organization: "CLB TP.HCM",
      members: ["Lê Văn C", "Phạm Văn D"],
      category: "Nam đôi",
    },
    {
      id: "t3",
      name: "Đội C",
      organization: "CLB Đà Nẵng",
      members: ["Lê Thị C", "Phạm Thị D"],
      category: "Nữ đôi",
    },
  ];

  const coaches: Coach[] = [
    {
      id: "c1",
      name: "HLV Nguyễn Văn X",
      organization: "CLB Hà Nội",
      specialization: "Nam đơn, Nam đôi",
      athletes: 12,
    },
    {
      id: "c2",
      name: "HLV Trần Thị Y",
      organization: "CLB TP.HCM",
      specialization: "Nữ đơn, Đôi nam nữ",
      athletes: 8,
    },
    {
      id: "c3",
      name: "HLV Lê Văn Z",
      organization: "CLB Đà Nẵng",
      specialization: "Nữ đôi",
      athletes: 6,
    },
  ];

  const filteredAthletes = athletes.filter((athlete) =>
    athlete.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCoaches = coaches.filter((coach) =>
    coach.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderAthletes = () => (
    <>
      <SearchBar
        placeholder="Tìm vận động viên..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {filteredAthletes.length > 0 ? (
        filteredAthletes.map((athlete) => (
          <AthleteCard
            key={athlete.id}
            athlete={athlete}
            variant="compact"
            onPress={() => console.log("Athlete pressed:", athlete.id)}
          />
        ))
      ) : (
        <EmptyState
          icon={Users}
          title="Không tìm thấy vận động viên"
          description="Không có vận động viên nào khớp với tìm kiếm của bạn"
        />
      )}
    </>
  );

  const renderTeams = () => (
    <>
      <SearchBar
        placeholder="Tìm đội..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {filteredTeams.length > 0 ? (
        filteredTeams.map((team) => (
          <View
            key={team.id}
            style={[globalStyles.card, athleteDirectoryScreenStyles.teamCard]}
          >
            <View style={athleteDirectoryScreenStyles.teamHeader}>
              <Text style={athleteDirectoryScreenStyles.teamName}>
                {team.name}
              </Text>
              <View style={athleteDirectoryScreenStyles.categoryBadge}>
                <Text style={athleteDirectoryScreenStyles.categoryText}>
                  {team.category}
                </Text>
              </View>
            </View>
            <Text style={athleteDirectoryScreenStyles.teamOrganization}>
              {team.organization}
            </Text>
            <View style={athleteDirectoryScreenStyles.membersContainer}>
              <Text style={athleteDirectoryScreenStyles.membersLabel}>
                Thành viên:
              </Text>
              {team.members.map((member, index) => (
                <Text
                  key={index}
                  style={athleteDirectoryScreenStyles.memberName}
                >
                  • {member}
                </Text>
              ))}
            </View>
          </View>
        ))
      ) : (
        <EmptyState
          icon={Users}
          title="Không tìm thấy đội"
          description="Không có đội nào khớp với tìm kiếm của bạn"
        />
      )}
    </>
  );

  const renderCoaches = () => (
    <>
      <SearchBar
        placeholder="Tìm huấn luyện viên..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {filteredCoaches.length > 0 ? (
        filteredCoaches.map((coach) => (
          <View
            key={coach.id}
            style={[globalStyles.card, athleteDirectoryScreenStyles.coachCard]}
          >
            <Text style={athleteDirectoryScreenStyles.coachName}>
              {coach.name}
            </Text>
            <Text style={athleteDirectoryScreenStyles.coachOrganization}>
              {coach.organization}
            </Text>
            <View style={athleteDirectoryScreenStyles.coachInfo}>
              <Text style={athleteDirectoryScreenStyles.coachLabel}>
                Chuyên môn:
              </Text>
              <Text style={athleteDirectoryScreenStyles.coachValue}>
                {coach.specialization}
              </Text>
            </View>
            <View style={athleteDirectoryScreenStyles.coachInfo}>
              <Text style={athleteDirectoryScreenStyles.coachLabel}>
                Số VĐV:
              </Text>
              <Text style={athleteDirectoryScreenStyles.coachValue}>
                {coach.athletes}
              </Text>
            </View>
          </View>
        ))
      ) : (
        <EmptyState
          icon={Users}
          title="Không tìm thấy huấn luyện viên"
          description="Không có huấn luyện viên nào khớp với tìm kiếm của bạn"
        />
      )}
    </>
  );

  return (
    <SafeAreaView style={globalStyles.flex1} edges={["top"]}>
      <LinearGradient
        colors={[
          themeColors.primary[400],
          themeColors.primary[500],
          themeColors.primary[600],
        ]}
        style={athleteDirectoryScreenStyles.header}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={athleteDirectoryScreenStyles.backButton}
        >
          <ArrowLeft size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={athleteDirectoryScreenStyles.headerTitle}>Thư mục</Text>
        <View style={{ width: 24 }} />
      </LinearGradient>

      {/* Tabs */}
      <View style={athleteDirectoryScreenStyles.tabsContainer}>
        <TouchableOpacity
          style={[
            athleteDirectoryScreenStyles.tab,
            activeTab === "athletes" && athleteDirectoryScreenStyles.activeTab,
          ]}
          onPress={() => {
            setActiveTab("athletes");
            setSearchQuery("");
          }}
        >
          <Text
            style={[
              athleteDirectoryScreenStyles.tabText,
              activeTab === "athletes" &&
                athleteDirectoryScreenStyles.activeTabText,
            ]}
          >
            Vận động viên
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            athleteDirectoryScreenStyles.tab,
            activeTab === "teams" && athleteDirectoryScreenStyles.activeTab,
          ]}
          onPress={() => {
            setActiveTab("teams");
            setSearchQuery("");
          }}
        >
          <Text
            style={[
              athleteDirectoryScreenStyles.tabText,
              activeTab === "teams" &&
                athleteDirectoryScreenStyles.activeTabText,
            ]}
          >
            Đội
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            athleteDirectoryScreenStyles.tab,
            activeTab === "coaches" && athleteDirectoryScreenStyles.activeTab,
          ]}
          onPress={() => {
            setActiveTab("coaches");
            setSearchQuery("");
          }}
        >
          <Text
            style={[
              athleteDirectoryScreenStyles.tabText,
              activeTab === "coaches" &&
                athleteDirectoryScreenStyles.activeTabText,
            ]}
          >
            Huấn luyện viên
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView
        style={globalStyles.flex1}
        contentContainerStyle={athleteDirectoryScreenStyles.content}
        showsVerticalScrollIndicator={false}
      >
        {activeTab === "athletes" && renderAthletes()}
        {activeTab === "teams" && renderTeams()}
        {activeTab === "coaches" && renderCoaches()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AthleteDirectoryScreen;
