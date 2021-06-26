import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  overlay: {
    height: '100%',
    backgroundColor: theme.colors.overlay,
  },
  container: {
    flex: 1,
    marginTop: getStatusBarHeight() + 100,
  },
  bar: {
    width: 39,
    height: 2,
    borderRadius: 2,
    backgroundColor: theme.colors.secondary30,
    alignSelf: 'center',
    marginTop: 13,
  },
});
