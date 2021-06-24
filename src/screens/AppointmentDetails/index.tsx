import React from 'react';
import {
  Text,
  View,
  FlatList,
  ImageBackground,
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import BannerPng from '../../assets/banner.png';
import {
  Background,
  ButtonIcon,
  Header,
  ListDivider,
  ListHeader,
  Member,
} from '../../components';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function AppointmentDetails() {
  const handleShare = () => { };
  const menbers = [{
    id: '1',
    username: 'Flávio',
    avatar_url: 'https://github.com/FlavioMiyaji.png',
    status: 'online',
  }, {
    id: '2',
    username: 'Flávio',
    avatar_url: 'https://github.com/FlavioMiyaji.png',
    status: 'offline',
  }];
  return (
    <Background>
      <Header
        title="Detalhes"
        action={(
          <BorderlessButton
            onPress={handleShare}
          >
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        )}
      />
      <ImageBackground
        style={styles.banner}
        source={BannerPng}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>
          <Text style={styles.subtitle} ellipsizeMode="tail">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem nesciunt veritatis quas mollitia laboriosam deserunt asperiores est id ab atque?
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.container}>
        <ListHeader
          title="Jogadores"
          subtitle="Total 3"
        />
        <FlatList
          style={styles.menbers}
          data={menbers}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Member data={item} />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
        />
        <View style={styles.footer}>
          <ButtonIcon
            title="Entrar na partida"
          />
        </View>
      </View>
    </Background>
  );
};
