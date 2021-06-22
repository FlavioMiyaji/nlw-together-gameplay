import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

type Props = {
  uri?: string;
};

export function GuildIcon({ uri }: Props) {
  return (
    <Image
      style={styles.container}
      source={{ uri: !uri ? 'https://github.com/FlavioMiyaji.png' : uri }}
      resizeMode="cover"
    />
  );
};
