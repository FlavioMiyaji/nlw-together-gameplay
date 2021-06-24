import { useNavigation } from '@react-navigation/native';
import React, {
  useState,
  useCallback,
} from 'react';
import {
  View,
  FlatList,
} from 'react-native';

import {
  Appointment,
  AppointmentProps,
  Background,
  ButtonAdd,
  CategorySelect,
  ListDivider,
  ListHeader,
  Profile,
} from '../../components';

import { styles } from './styles';

export function Home() {
  const [category, setCategory] = useState('');
  const navigation = useNavigation();
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
  const handleAppointmentDetails = () => {
    navigation.navigate('AppointmentDetails');
  };
  return (
    <Background>
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
            style={styles.matches}
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment
                data={item}
                onPress={handleAppointmentDetails}
              />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />}
          />
        </View>
      </View>
    </Background>
  );
}
