import React from 'react';
import { Image, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
  uri: string;
};

export function Avatar({ uri }: Props) {
  const { secondary50, secondary70 } = theme.colors;
  const colors = [secondary50, secondary70];
  if (!uri) {
    return (<LinearGradient style={styles.container} colors={colors} />);
  }
  return (
    <LinearGradient style={styles.container} colors={colors} >
      <Image
        style={styles.avatar}
        source={{ uri }}
        resizeMode="cover"
      />
    </LinearGradient>
  );
};
