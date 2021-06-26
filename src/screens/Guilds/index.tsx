import React from 'react';
import {
  View,
  FlatList,
} from 'react-native';

import {
  ListDivider,
  Guild,
} from '../../components';
import { GuildProps } from '../../components/Guild';

import { styles } from './styles';

type Props = {
  onSelectGuild: (guild: GuildProps) => void;
};

export function Guilds({ onSelectGuild }: Props) {
  const guilds = Array.from({ length: 10 }, (_, index) => ({
    id: `${index}`,
    name: 'Flávio',
    logo_uri: 'https://github.com/FlavioMiyaji.png',
    owner: true,
  }));
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.guilds}
      data={guilds}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Guild
          data={item}
          onPress={() => onSelectGuild(item)}
        />
      )}
      ItemSeparatorComponent={() => <ListDivider />}
      showsVerticalScrollIndicator={false}
    />
  );
};
