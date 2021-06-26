import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    minHeight: 95,
    padding: 16,
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
  },
});
