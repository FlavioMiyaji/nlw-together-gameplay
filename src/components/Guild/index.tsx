import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { GuildLogo } from '../GuildLogo';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export type GuildProps = {
  id: string;
  name: string;
  logo_uri?: string;
  owner: boolean;
};

type Props = TouchableOpacityProps & {
  data: GuildProps;
};

export function Guild({ data, ...rest }: Props) {
  const {
    id,
    name,
    logo_uri,
    owner,
  } = data;
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      {...rest}
    >
      <GuildLogo uri={logo_uri} />
      <View style={styles.content}>
        <Text style={styles.title}>
          {name}
        </Text>
        <Text style={styles.owner}>{!owner ? 'Convidado' : 'Admnistrador'}</Text>
      </View>
      <Feather
        name="chevron-right"
        color={theme.colors.heading}
        size={24}
      />
    </TouchableOpacity>
  );
};
