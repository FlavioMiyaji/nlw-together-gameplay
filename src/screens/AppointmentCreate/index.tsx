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
  SmallInput,
  TextArea,
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
      <Text
        style={[styles.label, {
          marginTop: 36,
          marginHorizontal: 24,
          marginBottom: 18,
        }]}
      >
        Categoria
      </Text>
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
        <View style={styles.horarios}>
          <View>
            <Text style={styles.label} >
              Dia e mês
            </Text>
            <View style={styles.fields}>
              <SmallInput maxLength={2} />
              <Text style={styles.divider} >/</Text>
              <SmallInput maxLength={2} />
            </View>
          </View>
          <View>
            <Text style={styles.label} >
              Hora e minuto
            </Text>
            <View style={styles.fields}>
              <SmallInput maxLength={2} />
              <Text style={styles.divider} >:</Text>
              <SmallInput maxLength={2} />
            </View>
          </View>
        </View>
        <View>
          <Text
            style={[styles.label, {
              marginTop: 18,
            }]}
          >
            Descrição
          </Text>
          <Text style={styles.caracterLimits}>
            max 100 caracteres
          </Text>
        </View>
        <TextArea
          multiline
          maxLength={100}
          numberOfLines={5}
          autoCorrect={false}
        />
      </View>
    </Background >
  );
};
