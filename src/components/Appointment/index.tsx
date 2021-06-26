import React from 'react';
import { Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';
import { categories } from '../../utils/categories';
import { GuildLogo } from '../GuildLogo';
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

import { GuildProps } from '../Guild';

import { styles } from './styles';

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

type Props = RectButtonProps & {
  data: AppointmentProps;
};

export function Appointment({ data, ...rest }: Props) {
  const category = categories.find(({ id }) => id === data.category);
  const {
    id,
    guild,
    date,
    description,
  } = data;
  const {
    logo_uri,
    name,
    owner,
  } = guild;
  const { primary, on } = theme.colors;
  const ownerColor = owner ? primary : on;
  return (
    <RectButton {...rest} >
      <View style={styles.container}>
        <GuildLogo uri={logo_uri} />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{name}</Text>
            {category && (<Text style={styles.category}>{category.title}</Text>)}
          </View>
          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />
              <Text style={styles.date}>{date}</Text>
            </View>
            <View style={styles.playerInfo}>
              <PlayerSvg fill={ownerColor} />
              <Text style={[styles.player, { color: ownerColor }]}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>
          </View>
        </View>
        <Feather
          name="chevron-right"
          color={theme.colors.heading}
          size={24}
        />
      </View>
    </RectButton>
  );
};
