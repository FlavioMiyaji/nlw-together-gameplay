import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8,
  },
  content: {
    position: "relative",
    width: 100,
    height: 116,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent:'space-between',
    paddingVertical: 20,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 15,
    marginTop: 18,
  },
  checked: {
    position: "absolute",
    top: 7,
    right: 7,
    width: 10,
    height: 10,
    backgroundColor: theme.colors.primary,
  },
  check: {
    position: "absolute",
    top: 7,
    right: 7,
    width: 12,
    height: 12,
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary50,
    borderWidth: 2,
    borderRadius: 3,
  },
});
