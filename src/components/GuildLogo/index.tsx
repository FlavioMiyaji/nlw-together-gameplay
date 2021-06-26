import React from 'react';
import { Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';

import { styles } from './styles';

type Props = {
  uri?: string;
};

export function GuildLogo({ uri }: Props) {
  const { secondary50, secondary70 } = theme.colors;
  const colors = [secondary50, secondary70];
  if (!uri) {
    return (<LinearGradient style={styles.container} colors={colors} />);
  }
  return (
    <LinearGradient style={styles.container} colors={colors}>
      <Image
        style={styles.logo}
        source={{ uri }}
        resizeMode="cover"
      />
    </LinearGradient>
  );
};
