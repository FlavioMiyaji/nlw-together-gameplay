import React from 'react';
import { Text, View } from 'react-native';

import { theme } from '../../global/styles/theme';
import { Avatar } from '../Avatar';

import { styles } from './styles';

export type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
};

type Props = {
  data: MemberProps;
};

export function Member({ data }: Props) {
  const {
    id,
    username,
    avatar_url,
    status,
  } = data;
  const isOnline = status === 'online';
  const { on, primary } = theme.colors;
  const statusColor = !isOnline ? primary : on;
  return (
    <View style={styles.container}>
      <Avatar urlImage={avatar_url} />
      <View>
        <Text style={styles.username}>
          {username}
        </Text>
        <View style={styles.status}>
          <View
            style={[
              styles.statusBullet,
              { backgroundColor: statusColor },
            ]}
          >
          </View>
          <Text style={styles.nameStatus}>
            {!isOnline ? 'Ocupado' : 'Disponível'}
          </Text>
        </View>
      </View>
    </View>
  );
};
