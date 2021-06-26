import React from 'react';
import {
  FlatList,
} from 'react-native';

import {
  ListDivider,
  Guild,
} from '../../components';
import { GuildProps } from '../../components/Guild';

import { styles } from './styles';

type Props = {
  selectedGuild?: GuildProps;
  onSelectGuild: (guild: GuildProps) => void;
};

export function Guilds({ selectedGuild, onSelectGuild }: Props) {
  const guilds = Array.from({ length: 10 }, (_, index) => ({
    id: `${index + 1}`,
    name: `Guild Lendários ${index + 1}`,
    logo_uri: 'https://github.com/FlavioMiyaji.png',
    owner: ((index + 1) % 2 == 0),
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
          selected={selectedGuild?.id === item.id}
          onPress={() => onSelectGuild(item)}
        />
      )}
      ItemSeparatorComponent={() => <ListDivider />}
      showsVerticalScrollIndicator={false}
    />
  );
};
