import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustration: {
    width: '100%',
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16,
    lineHeight: 40,
  },
  subtitle: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 64,
    lineHeight: 25,
  },
});
