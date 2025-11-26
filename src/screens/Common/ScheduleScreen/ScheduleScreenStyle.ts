import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/design-tokens';

export const scheduleScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.foreground,
  },
  subtitle: {
    fontSize: 14,
    color: "#4b5563",
    marginTop: 8,
  },
});

