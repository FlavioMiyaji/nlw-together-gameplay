import React, {
  ReactNode,
} from 'react';
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
} from 'react-native';
import { Background } from '..';

import { styles } from './styles';

type Props = ModalProps & {
  children: ReactNode;
  onClose: () => void;
};

export function ModalView(props: Props) {
  const { children, onClose, ...rest } = props;
  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
