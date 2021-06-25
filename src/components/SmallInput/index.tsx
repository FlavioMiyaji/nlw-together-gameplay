import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

type Props = TextInputProps & {
}

export function SmallInput(props: Props) {
  return (
    <TextInput
      style={styles.container}
      keyboardType="numeric"
      {...props}
    />
  );
};
