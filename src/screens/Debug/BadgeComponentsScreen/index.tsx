import React from "react";
import { View, Text, ScrollView } from "react-native";
import { StatusBadge, ScoreBadge, UnreadBadge } from "../../../components";
import { Bell } from "lucide-react-native";

/**
 * Badge Components Demo Screen
 */
const BadgeComponentsScreen: React.FC = () => {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="bg-primary-500 px-6 pt-12 pb-8">
        <Text className="text-white text-3xl font-bold mb-2">
          Badge Components
        </Text>
        <Text className="text-primary-100 text-sm">
          Status, Score & Unread Badges (3 components)
        </Text>
      </View>

      <View className="p-6 space-y-6">
        {/* StatusBadge */}
        <View className="bg-white rounded-xl p-6 shadow-sm">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            StatusBadge
          </Text>

          <View className="space-y-4">
            <View>
              <Text className="text-sm font-semibold text-gray-700 mb-2">
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
              <Text className="text-sm font-semibold text-gray-700 mb-2">
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
              <Text className="text-sm font-semibold text-gray-700 mb-2">
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
        <View className="bg-white rounded-xl p-6 shadow-sm">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            ScoreBadge
          </Text>

          <View className="space-y-4">
            <View>
              <Text className="text-sm font-semibold text-gray-700 mb-2">
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
              <Text className="text-sm font-semibold text-gray-700 mb-2">
                Default:
              </Text>
              <ScoreBadge homeScore={21} awayScore={19} size="large" isLive />
            </View>

            <View>
              <Text className="text-sm font-semibold text-gray-700 mb-2">
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
        <View className="bg-white rounded-xl p-6 shadow-sm">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            UnreadBadge
          </Text>

          <View className="space-y-4">
            <View>
              <Text className="text-sm font-semibold text-gray-700 mb-2">
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
              <Text className="text-sm font-semibold text-gray-700 mb-2">
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

        <View className="h-8" />
      </View>
    </ScrollView>
  );
};

export default BadgeComponentsScreen;
