import React, { useCallback, useState } from 'react';
import {
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import {
  Background,
  Header,
  CategorySelect,
  GuildIcon,
  SmallInput,
  TextArea,
  Button,
} from '../../components';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const handleCategorySelect = useCallback((categoryId: string) => {
    setCategory(categoryId === category ? '' : categoryId)
  }, [category, setCategory]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Background>
        <Header
          title="Agendar partida"
        />
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingVertical: 24 }}
        >
          <Text
            style={[styles.label, {
              marginHorizontal: 24,
            }]}
          >Categoria</Text>
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
                  size={24}
                />
              </View>
            </RectButton>
            <View style={styles.horarios}>
              <View>
                <Text style={styles.label}>Dia e mês</Text>
                <View style={styles.fields}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
              <View>
                <Text style={styles.label}> Hora e minuto</Text>
                <View style={styles.fields}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>
            <View style={styles.labels}>
              <Text style={[styles.label, { marginBottom: 0 }]}>Descrição</Text>
              <Text style={styles.caracterLimits}>Max 100 caracteres</Text>
            </View>
            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Button
            title="Agendar partida"
          />
        </View>
      </Background >
    </KeyboardAvoidingView>
  );
};
