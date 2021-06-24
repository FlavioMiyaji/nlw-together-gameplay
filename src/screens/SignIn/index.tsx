import React, {
  useCallback,
} from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Illustration from '../../assets/illustration.png';
import { Background, ButtonIcon } from '../../components';

import { styles } from './styles';

export function SignIn() {
  const navigarion = useNavigation();
  const handleSignIn = useCallback(() => {
    navigarion.navigate('Home');
  }, []);
  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={Illustration}
          style={styles.illustration}
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            {`Conecte-se\ne organize suas\njogatinas`}
          </Text>
          <Text style={styles.subtitle}>
            {`Crie grupos para jogar seus games\nfavoritos com seus amigos`}
          </Text>
          <ButtonIcon
            title="Entrar com Discord"
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  );
}
