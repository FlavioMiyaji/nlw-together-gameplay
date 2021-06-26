import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 234,
    overflow: "hidden",
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 24,
  },
  title: {
    fontSize: 28,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
  },
  container: {
    flex: 1,
    paddingTop: 30,
  },
  members: {
    paddingVertical: 24,
    paddingLeft: 24,
  },
  footer: {
    paddingHorizontal: 24,
  },
});
