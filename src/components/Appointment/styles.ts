import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 16,
  },
  content: {
    flex: 1,
    height: '100%',
    borderColor: theme.colors.secondary40,
    borderBottomWidth: 1,
    marginLeft: 16,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
  },
  category: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 13,
    marginRight: 24,
  },
  footer: {
    marginTop: 8,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    marginLeft: 8,
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
    fontSize: 13,
  },
  playerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  player: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.highlight,
    fontSize: 13,
    marginLeft: 7,
    marginRight: 24,
  },
});
