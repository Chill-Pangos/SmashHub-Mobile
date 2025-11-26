import React from "react";
import { badgeComponentsScreenStyles } from './BadgeComponentsScreenStyle';
import { View, Text, ScrollView } from "react-native";
import { StatusBadge, ScoreBadge, UnreadBadge } from "../../../components";
import { Bell } from "lucide-react-native";

/**
 * Badge Components Demo Screen
 */
const BadgeComponentsScreen: React.FC = () => {
  return (
    <ScrollView style={badgeComponentsScreenStyles.container}>
      <View style={badgeComponentsScreenStyles.header}>
        <Text style={badgeComponentsScreenStyles.headerTitle}>
          Badge Components
        </Text>
        <Text style={badgeComponentsScreenStyles.headerSubtitle}>
          Status, Score & Unread Badges (3 components)
        </Text>
      </View>

      <View style={badgeComponentsScreenStyles.content}>
        {/* StatusBadge */}
        <View style={badgeComponentsScreenStyles.section}>
          <Text style={badgeComponentsScreenStyles.sectionTitle}>
            StatusBadge
          </Text>

          <View style={badgeComponentsScreenStyles.spacer}>
            <View>
              <Text style={badgeComponentsScreenStyles.subsectionTitle}>
                Match Statuses:
              </Text>
              <View className="flex-row flex-wrap gap-2">
                <StatusBadge status="scheduled" variant="match" />
                <StatusBadge status="live" variant="match" />
                <StatusBadge status="completed" variant="match" />
                <StatusBadge status="cancelled" variant="match" />
              </View>
            </View>

            <View>
              <Text style={badgeComponentsScreenStyles.subsectionTitle}>
                Tournament Statuses:
              </Text>
              <View className="flex-row flex-wrap gap-2">
                <StatusBadge status="upcoming" variant="tournament" />
                <StatusBadge status="registration" variant="tournament" />
                <StatusBadge status="ongoing" variant="tournament" />
                <StatusBadge status="finished" variant="tournament" />
              </View>
            </View>

            <View>
              <Text style={badgeComponentsScreenStyles.subsectionTitle}>
                Complaint Statuses:
              </Text>
              <View className="flex-row flex-wrap gap-2">
                <StatusBadge status="pending" variant="complaint" />
                <StatusBadge status="reviewing" variant="complaint" />
                <StatusBadge status="resolved" variant="complaint" />
                <StatusBadge status="rejected" variant="complaint" />
              </View>
            </View>
          </View>
        </View>

        {/* ScoreBadge */}
        <View style={badgeComponentsScreenStyles.section}>
          <Text style={badgeComponentsScreenStyles.sectionTitle}>
            ScoreBadge
          </Text>

          <View style={badgeComponentsScreenStyles.spacer}>
            <View>
              <Text style={badgeComponentsScreenStyles.subsectionTitle}>
                Compact:
              </Text>
              <View className="flex-row space-x-2">
                <ScoreBadge
                  homeScore={3}
                  awayScore={1}
                  variant="compact"
                  size="small"
                />
                <ScoreBadge
                  homeScore={3}
                  awayScore={1}
                  variant="compact"
                  size="medium"
                />
                <ScoreBadge
                  homeScore={3}
                  awayScore={1}
                  variant="compact"
                  size="large"
                  isLive
                />
              </View>
            </View>

            <View>
              <Text style={badgeComponentsScreenStyles.subsectionTitle}>
                Default:
              </Text>
              <ScoreBadge homeScore={21} awayScore={19} size="large" isLive />
            </View>

            <View>
              <Text style={badgeComponentsScreenStyles.subsectionTitle}>
                Detailed:
              </Text>
              <ScoreBadge
                homeScore={3}
                awayScore={1}
                homeName="Nguyễn Văn A"
                awayName="Trần Văn B"
                variant="detailed"
                size="large"
                highlightWinner
              />
            </View>
          </View>
        </View>

        {/* UnreadBadge */}
        <View style={badgeComponentsScreenStyles.section}>
          <Text style={badgeComponentsScreenStyles.sectionTitle}>
            UnreadBadge
          </Text>

          <View style={badgeComponentsScreenStyles.spacer}>
            <View>
              <Text style={badgeComponentsScreenStyles.subsectionTitle}>
                Dot Variant:
              </Text>
              <View className="flex-row space-x-8">
                <View className="relative">
                  <Bell size={24} color="#666" />
                  <UnreadBadge
                    variant="dot"
                    size="small"
                    position="top-right"
                  />
                </View>
                <View className="relative">
                  <Bell size={32} color="#666" />
                  <UnreadBadge
                    variant="dot"
                    size="medium"
                    position="top-right"
                  />
                </View>
                <View className="relative">
                  <Bell size={40} color="#666" />
                  <UnreadBadge
                    variant="dot"
                    size="large"
                    position="top-right"
                  />
                </View>
              </View>
            </View>

            <View>
              <Text style={badgeComponentsScreenStyles.subsectionTitle}>
                Number Variant:
              </Text>
              <View className="flex-row space-x-8">
                <View className="relative">
                  <Bell size={24} color="#666" />
                  <UnreadBadge count={3} size="small" position="top-right" />
                </View>
                <View className="relative">
                  <Bell size={32} color="#666" />
                  <UnreadBadge count={15} size="medium" position="top-right" />
                </View>
                <View className="relative">
                  <Bell size={40} color="#666" />
                  <UnreadBadge count={99} size="large" position="top-right" />
                </View>
                <View className="relative">
                  <Bell size={40} color="#666" />
                  <UnreadBadge
                    count={150}
                    size="large"
                    position="top-right"
                    maxCount={99}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={badgeComponentsScreenStyles.largeSpacer} />
      </View>
    </ScrollView>
  );
};

export default BadgeComponentsScreen;

