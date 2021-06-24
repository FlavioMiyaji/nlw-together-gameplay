import React from 'react';
import { ScrollView } from 'react-native';

import { styles } from './styles';
import { categories } from '../../utils/categories';
import { Category } from '../Category';

type Props = {
  caregorySelected: string;
  onSelect: (caregoryId: string) => void;
  hasCheckBox?: boolean;
}

export function CategorySelect(props: Props) {
  const {
    caregorySelected,
    onSelect,
    hasCheckBox = false,
  } = props;
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map(category => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === caregorySelected}
          onPress={() => onSelect(category.id)}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </ScrollView>
  );
};
