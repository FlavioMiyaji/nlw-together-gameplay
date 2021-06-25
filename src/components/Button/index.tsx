import React from 'react';
import {
  Text,
} from "react-native";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
}

export function Button(props: Props) {
  const { title, ...rest } = props;
  return (
    <RectButton
      style={styles.container}
      activeOpacity={.7}
      {...rest}
    >
      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  );
};
