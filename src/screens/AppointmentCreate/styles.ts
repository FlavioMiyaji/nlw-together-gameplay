import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  form: {
    paddingTop: 32,
    paddingHorizontal: 24,
  },
  select: {
    width: '100%',
    height: 65,
    flexDirection: 'row',
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    paddingRight: 24,
    overflow: 'hidden',
  },
  selectBory: {
    flex: 1,
    alignItems: 'center',
  },
  horarios: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  fields: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
  },
  divider: {
    marginHorizontal: 8,
    fontSize: 15,
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
  },
  caracterLimits: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
  },
});
