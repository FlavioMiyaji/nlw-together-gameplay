import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

type Props = TextInputProps & {
}

export function TextArea(props: Props) {
  return (
    <TextInput
      style={styles.container}
      {...props}
    />
  );
};
