import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  content: {
    flex: 1,
    height: '100%',
    borderColor: theme.colors.secondary40,
    borderBottomWidth: 1,
    marginLeft: 16,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
  },
  owner: {
    marginTop: 8,
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 13,
  },
});
