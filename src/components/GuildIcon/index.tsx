import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

type Props = {
  uri?: string;
};

export function GuildIcon({ uri }: Props) {
  if (!uri) {
    return <View style={styles.container} />
  }
  return (
    <Image
      style={styles.container}
      source={{ uri }}
      resizeMode="cover"
    />
  );
};
