import React from "react";
import { View, Text, ScrollView } from "react-native";
import { TournamentCard, MatchCard, AthleteCard } from "../../../components";
import {
  mockTournaments,
  mockMatches,
  mockUsers,
} from "../../../mockdata/mockData";

/**
 * Card Components Demo Screen
 */
const CardComponentsScreen: React.FC = () => {
  const tournament = mockTournaments[0];
  const match = mockMatches[0];
  const athlete = mockUsers[0];

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="bg-primary-500 px-6 pt-12 pb-8">
        <Text className="text-white text-3xl font-bold mb-2">
          Card Components
        </Text>
        <Text className="text-primary-100 text-sm">
          Tournament, Match & Athlete Cards (3 components)
        </Text>
      </View>

      <View className="p-6 space-y-6">
        {/* TournamentCard */}
        <View className="bg-white rounded-xl p-6 shadow-sm">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            TournamentCard
          </Text>

          <View className="space-y-4">
            <View>
              <Text className="text-sm font-semibold text-gray-700 mb-2">
                Compact:
              </Text>
              <TournamentCard
                tournament={tournament}
                variant="compact"
                onPress={() => console.log("Tournament")}
              />
            </View>

            <View>
              <Text className="text-sm font-semibold text-gray-700 mb-2">
                Full:
              </Text>
              <TournamentCard
                tournament={tournament}
                variant="full"
                onPress={() => console.log("Tournament")}
              />
            </View>

            <View>
              <Text className="text-sm font-semibold text-gray-700 mb-2">
                Featured:
              </Text>
              <TournamentCard
                tournament={tournament}
                variant="featured"
                onPress={() => console.log("Tournament")}
              />
            </View>
          </View>
        </View>

        {/* MatchCard */}
        <View className="bg-white rounded-xl p-6 shadow-sm">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            MatchCard
          </Text>

          <View className="space-y-4">
            <View>
              <Text className="text-sm font-semibold text-gray-700 mb-2">
                Compact:
              </Text>
              <MatchCard
                match={match}
                variant="compact"
                onPress={() => console.log("Match")}
              />
            </View>

            <View>
              <Text className="text-sm font-semibold text-gray-700 mb-2">
                Full:
              </Text>
              <MatchCard
                match={match}
                variant="full"
                onPress={() => console.log("Match")}
              />
            </View>

            <View>
              <Text className="text-sm font-semibold text-gray-700 mb-2">
                Live:
              </Text>
              <MatchCard
                match={{ ...match, status: "live" }}
                variant="live"
                onPress={() => console.log("Match")}
              />
            </View>
          </View>
        </View>

        {/* AthleteCard */}
        <View className="bg-white rounded-xl p-6 shadow-sm">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            AthleteCard
          </Text>

          <View className="space-y-4">
            <View>
              <Text className="text-sm font-semibold text-gray-700 mb-2">
                Compact:
              </Text>
              <AthleteCard
                athlete={athlete}
                variant="compact"
                onPress={() => console.log("Athlete")}
              />
            </View>

            <View>
              <Text className="text-sm font-semibold text-gray-700 mb-2">
                Full:
              </Text>
              <AthleteCard
                athlete={athlete}
                variant="full"
                onPress={() => console.log("Athlete")}
              />
            </View>

            <View>
              <Text className="text-sm font-semibold text-gray-700 mb-2">
                Stats:
              </Text>
              <AthleteCard
                athlete={athlete}
                variant="stats"
                onPress={() => console.log("Athlete")}
              />
            </View>
          </View>
        </View>

        <View className="h-8" />
      </View>
    </ScrollView>
  );
};

export default CardComponentsScreen;
