import React, { useCallback, useState } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import {
  Background,
  Header,
  CategorySelect,
  GuildIcon,
} from '../../components';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const handleCategorySelect = useCallback((categoryId: string) => {
    setCategory(categoryId === category ? '' : categoryId)
  }, [category, setCategory]);
  return (
    <Background>
      <Header
        title="Agendar partida"
      />
      <Text style={styles.label}>Categoria</Text>
      <CategorySelect
        hasCheckBox
        caregorySelected={category}
        onSelect={handleCategorySelect}
      />
      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            <GuildIcon />
            <View style={styles.selectBory}>
              <Text style={styles.label}>Selecione um servidor</Text>
            </View>
            <Feather
              name="chevron-right"
              color={theme.colors.heading}
              size={18}
            />
          </View>
        </RectButton>
      </View>
    </Background>
  );
};
