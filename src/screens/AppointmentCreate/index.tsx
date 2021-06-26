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
  GuildLogo,
  SmallInput,
  TextArea,
  Button,
  ModalView,
} from '../../components';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { Guilds } from '../Guilds';
import { GuildProps } from '../../components/Guild';

export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [guild, setGuild] = useState<GuildProps>();
  const [openGuilds, setOpenGuilds] = useState(false);
  const handleCategorySelect = useCallback((categoryId: string) => {
    setCategory(category => categoryId === category ? '' : categoryId)
  }, []);
  const handleOpenGuilds = useCallback(() => setOpenGuilds(true), []);
  const handleCloseGuilds = useCallback(() => setOpenGuilds(false), []);
  const handleGuildSelect = useCallback((guild: GuildProps) => {
    setGuild(guild);
    setOpenGuilds(false);
  }, []);
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
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                <GuildLogo uri={guild?.logo_uri} />
                <View style={styles.selectBory}>
                  {(!guild) ? (
                    <Text style={styles.label}>Selecione um servidor</Text>
                  ) : (
                      <Text style={styles.label}>{guild.name}</Text>
                    )}
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
        <ModalView
          visible={openGuilds}
          onDismiss={handleCloseGuilds}
        >
          <Guilds
            selectedGuild={guild}
            onSelectGuild={handleGuildSelect}
          />
        </ModalView>
      </Background >
    </KeyboardAvoidingView>
  );
};
