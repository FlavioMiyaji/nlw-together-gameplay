import React, { useCallback, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import { Appointment, AppointmentProps } from '../../components/Appointment';

import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { styles } from './styles';

export function Home() {
  const [category, setCategory] = useState('');
  const handleCategorySelect = useCallback((categoryId: string) => {
    setCategory(categoryId === category ? '' : categoryId)
  }, [category, setCategory]);
  const appointments: AppointmentProps[] = [{
    id: '1',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: '',
      owner: true,
    },
    category: '1',
    date: '22/06 às 20:40',
    description: 'É hoje que vamos ao challenger sem perder uma partida no md10',
  }, {
    id: '2',
    guild: {
      id: '2',
      name: 'Lendários',
      icon: '',
      owner: true,
    },
    category: '1',
    date: '22/06 às 20:40',
    description: 'É hoje que vamos ao challenger sem perder uma partida no md10',
  }];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <CategorySelect
        caregorySelected={category}
        onSelect={handleCategorySelect}
      />
      <View style={styles.content}>
        <ListHeader
          title="Partida agendadas"
          subtitle="Total 6"
        />
        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment data={item} />
          )}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </View>
    </View>
  );
}
