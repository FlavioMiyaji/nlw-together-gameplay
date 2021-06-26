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
    setCategory(category => categoryId === category ? '' : categoryId)
  }, []);
  const appointments: AppointmentProps[] = Array.from({ length: 10 }, (_, index) => ({
    id: `${index + 1}`,
    guild: {
      id: `${index + 1}`,
      name: `Guild Lendários ${index + 1}`,
      logo_uri: 'https://github.com/FlavioMiyaji.png',
      owner: ((index + 1) % 2 == 0),
    },
    category: `${((index + 1) % 4)}`,
    date: '22/06 às 20:40',
    description: 'É hoje que vamos ao challenger sem perder uma partida no md10',
  }));
  const handleAppointmentDetails = () => {
    navigation.navigate('AppointmentDetails');
  };
  const handleAppointmentCreate = () => {
    navigation.navigate('AppointmentCreate');
  };
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd onPress={handleAppointmentCreate} />
        </View>
        <CategorySelect
          caregorySelected={category}
          onSelect={handleCategorySelect}
        />
        <View style={styles.content}>
          <ListHeader
            title="Partida agendadas"
            subtitle={`Total ${appointments.length}`}
          />
          <FlatList
            contentContainerStyle={styles.matches}
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
