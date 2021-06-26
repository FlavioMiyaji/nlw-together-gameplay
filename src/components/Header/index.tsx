import React, {
  ReactNode,
} from 'react';
import { Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../../global/styles/theme';

import { styles } from './styles';

type Props = {
  title: string;
  action?: ReactNode;
};

export function Header({ title, action }: Props) {
  const { secondary40, secondary100, heading } = theme.colors;
  const navigation = useNavigation();
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary40, secondary100]}
    >
      <BorderlessButton
        onPress={navigation.goBack}
      >
        <Feather
          name="arrow-left"
          size={24}
          color={heading}
        />
      </BorderlessButton>
      <Text
        style={styles.title}
        numberOfLines={1}
      >
        {title}
      </Text>
      <View style={styles.action}>
        {action}
      </View>
    </LinearGradient>
  );
};
