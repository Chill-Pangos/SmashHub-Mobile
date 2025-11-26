import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/design-tokens';

export const listComponentsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors[`"gray-50`"],
  },
  header: {
    backgroundColor: colors.primary[500],
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 32,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  headerSubtitle: {
    color: colors.primary[100],
    fontSize: 14,
  },
  content: {
    padding: 24,
  },
  section: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors[`"gray-900`"],
    marginBottom: 16,
  },
  subsectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors[`"gray-700`"],
    marginBottom: 8,
  },
  spacer: {
    height: 16,
  },
  largeSpacer: {
    height: 32,
  },
});

