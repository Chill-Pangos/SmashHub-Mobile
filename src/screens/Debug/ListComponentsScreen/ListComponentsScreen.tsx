import React, { useState } from "react";
import { listComponentsScreenStyles } from "./ListComponentsScreenStyle";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <ScrollView style={listComponentsScreenStyles.container}>
        <View style={listComponentsScreenStyles.header}>
          <Text style={listComponentsScreenStyles.headerTitle}>
            List Components
          </Text>
          <Text style={listComponentsScreenStyles.headerSubtitle}>
            Match List, Ranking Table & Notifications (3 components)
          </Text>
        </View>

        <View style={listComponentsScreenStyles.content}>
          {/* MatchList */}
          <View style={listComponentsScreenStyles.section}>
            <Text style={listComponentsScreenStyles.sectionTitle}>
              MatchList
            </Text>

            <View
              style={{
                height: 384,
                borderWidth: 1,
                borderColor: "#e5e7eb",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
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
          <View style={listComponentsScreenStyles.section}>
            <Text style={listComponentsScreenStyles.sectionTitle}>
              RankingTable
            </Text>

            <View style={listComponentsScreenStyles.spacer}>
              <View>
                <Text style={listComponentsScreenStyles.subsectionTitle}>
                  Full Variant:
                </Text>
                <View
                  style={{
                    height: 320,
                    borderWidth: 1,
                    borderColor: "#e5e7eb",
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                >
                  <RankingTable
                    rankings={mockRankings}
                    variant="full"
                    sortable
                    highlightPlayerId="1"
                  />
                </View>
              </View>

              <View>
                <Text style={listComponentsScreenStyles.subsectionTitle}>
                  Compact Variant:
                </Text>
                <View
                  style={{
                    height: 256,
                    borderWidth: 1,
                    borderColor: "#e5e7eb",
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                >
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
          <View style={listComponentsScreenStyles.section}>
            <Text style={listComponentsScreenStyles.sectionTitle}>
              NotificationList
            </Text>

            <View
              style={{
                height: 384,
                borderWidth: 1,
                borderColor: "#e5e7eb",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
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

          <View style={listComponentsScreenStyles.largeSpacer} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListComponentsScreen;
