import React, {
  useCallback,
} from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
} from 'react-native';

import Illustration from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles';

export function SignIn() {
  const handleSignIn = useCallback(() => {

  }, []);
  return (
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
  );
}
