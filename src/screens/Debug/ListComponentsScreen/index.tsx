import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { MatchList, RankingTable, NotificationList } from "../../../components";
import {
  mockMatches,
  mockRankings,
  mockNotifications,
} from "../../../mockdata/mockData";

/**
 * List Components Demo Screen
 */
const ListComponentsScreen: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="bg-primary-500 px-6 pt-12 pb-8">
        <Text className="text-white text-3xl font-bold mb-2">
          List Components
        </Text>
        <Text className="text-primary-100 text-sm">
          Match List, Ranking Table & Notifications (3 components)
        </Text>
      </View>

      <View className="p-6 space-y-6">
        {/* MatchList */}
        <View className="bg-white rounded-xl p-6 shadow-sm">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            MatchList
          </Text>

          <View className="h-96 border border-gray-200 rounded-lg overflow-hidden">
            <MatchList
              matches={mockMatches}
              groupBy="date"
              sortBy="time"
              onMatchPress={(match) => console.log("Match:", match.id)}
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          </View>
        </View>

        {/* RankingTable */}
        <View className="bg-white rounded-xl p-6 shadow-sm">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            RankingTable
          </Text>

          <View className="space-y-4">
            <View>
              <Text className="text-sm font-semibold text-gray-700 mb-2">
                Full Variant:
              </Text>
              <View className="h-80 border border-gray-200 rounded-lg overflow-hidden">
                <RankingTable
                  rankings={mockRankings}
                  variant="full"
                  sortable
                  highlightPlayerId="1"
                />
              </View>
            </View>

            <View>
              <Text className="text-sm font-semibold text-gray-700 mb-2">
                Compact Variant:
              </Text>
              <View className="h-64 border border-gray-200 rounded-lg overflow-hidden">
                <RankingTable
                  rankings={mockRankings}
                  variant="compact"
                  highlightPlayerId="2"
                />
              </View>
            </View>
          </View>
        </View>

        {/* NotificationList */}
        <View className="bg-white rounded-xl p-6 shadow-sm">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            NotificationList
          </Text>

          <View className="h-96 border border-gray-200 rounded-lg overflow-hidden">
            <NotificationList
              notifications={mockNotifications}
              groupByDate
              showSwipeActions
              onNotificationPress={(notif) =>
                console.log("Notification:", notif.id)
              }
              onMarkAsRead={(id) => console.log("Mark as read:", id)}
              onDelete={(id) => console.log("Delete:", id)}
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          </View>
        </View>

        <View className="h-8" />
      </View>
    </ScrollView>
  );
};

export default ListComponentsScreen;
