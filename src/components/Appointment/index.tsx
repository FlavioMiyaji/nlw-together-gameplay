import React from 'react';
import { Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { theme } from '../../global/styles/theme';
import { categories } from '../../utils/categories';
import { GuildIcon } from '../GuildIcon';
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

import { styles } from './styles';

export type GuildProps = {
  id: string;
  name: string;
  icon?: string;
  owner: boolean;
};

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
    icon,
    name,
    owner,
  } = guild;
  const { primary, on } = theme.colors;
  const ownerColor = owner ? primary : on;
  return (
    <RectButton {...rest} >
      <View style={styles.container}>
        <GuildIcon uri={icon} />
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
      </View>
    </RectButton>
  );
};
