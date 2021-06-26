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
  selected: boolean;
};

export function Guild({ data, selected, ...rest }: Props) {
  const {
    id,
    name,
    logo_uri,
    owner,
  } = data;
  const { heading, highlight, on } = theme.colors;
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      {...rest}
    >
      <GuildLogo uri={logo_uri} />
      <View style={styles.content}>
        <Text style={[styles.title, {
          color: !selected ? heading : on,
        }]}>
          {name}
        </Text>
        <Text style={[styles.owner, {
          color: !selected ? highlight : on,
        }]}>{!owner ? 'Convidado' : 'Admnistrador'}</Text>
      </View>
      <Feather
        name={!selected ? 'chevron-right' : 'check-circle'}
        color={!selected ? heading : on}
        size={24}
      />
    </TouchableOpacity>
  );
};
