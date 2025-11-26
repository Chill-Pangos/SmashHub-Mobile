import React from "react";
import { cardComponentsScreenStyles } from './CardComponentsScreenStyle';
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
    <ScrollView style={cardComponentsScreenStyles.container}>
      <View style={cardComponentsScreenStyles.header}>
        <Text style={cardComponentsScreenStyles.headerTitle}>
          Card Components
        </Text>
        <Text style={cardComponentsScreenStyles.headerSubtitle}>
          Tournament, Match & Athlete Cards (3 components)
        </Text>
      </View>

      <View style={cardComponentsScreenStyles.content}>
        {/* TournamentCard */}
        <View style={cardComponentsScreenStyles.section}>
          <Text style={cardComponentsScreenStyles.sectionTitle}>
            TournamentCard
          </Text>

          <View style={cardComponentsScreenStyles.spacer}>
            <View>
              <Text style={cardComponentsScreenStyles.subsectionTitle}>
                Compact:
              </Text>
              <TournamentCard
                tournament={tournament}
                variant="compact"
                onPress={() => console.log("Tournament")}
              />
            </View>

            <View>
              <Text style={cardComponentsScreenStyles.subsectionTitle}>
                Full:
              </Text>
              <TournamentCard
                tournament={tournament}
                variant="full"
                onPress={() => console.log("Tournament")}
              />
            </View>

            <View>
              <Text style={cardComponentsScreenStyles.subsectionTitle}>
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
        <View style={cardComponentsScreenStyles.section}>
          <Text style={cardComponentsScreenStyles.sectionTitle}>
            MatchCard
          </Text>

          <View style={cardComponentsScreenStyles.spacer}>
            <View>
              <Text style={cardComponentsScreenStyles.subsectionTitle}>
                Compact:
              </Text>
              <MatchCard
                match={match}
                variant="compact"
                onPress={() => console.log("Match")}
              />
            </View>

            <View>
              <Text style={cardComponentsScreenStyles.subsectionTitle}>
                Full:
              </Text>
              <MatchCard
                match={match}
                variant="full"
                onPress={() => console.log("Match")}
              />
            </View>

            <View>
              <Text style={cardComponentsScreenStyles.subsectionTitle}>
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
        <View style={cardComponentsScreenStyles.section}>
          <Text style={cardComponentsScreenStyles.sectionTitle}>
            AthleteCard
          </Text>

          <View style={cardComponentsScreenStyles.spacer}>
            <View>
              <Text style={cardComponentsScreenStyles.subsectionTitle}>
                Compact:
              </Text>
              <AthleteCard
                athlete={athlete}
                variant="compact"
                onPress={() => console.log("Athlete")}
              />
            </View>

            <View>
              <Text style={cardComponentsScreenStyles.subsectionTitle}>
                Full:
              </Text>
              <AthleteCard
                athlete={athlete}
                variant="full"
                onPress={() => console.log("Athlete")}
              />
            </View>

            <View>
              <Text style={cardComponentsScreenStyles.subsectionTitle}>
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

        <View style={cardComponentsScreenStyles.largeSpacer} />
      </View>
    </ScrollView>
  );
};

export default CardComponentsScreen;

