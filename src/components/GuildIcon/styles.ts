import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary50,
    width: 64,
    height: 64,
    borderRadius: 8,
    marginRight: 20,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
  },
});
