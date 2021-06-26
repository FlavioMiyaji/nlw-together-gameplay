import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 104,
    paddingTop: getStatusBarHeight() + 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  title: {
    flex: 1,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 16,
  },
  action: {
    width: 24,
    height: 24,
  },
});
