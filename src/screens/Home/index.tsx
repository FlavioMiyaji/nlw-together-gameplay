import React, { useCallback, useState } from 'react';
import { View } from 'react-native';

import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';
import { styles } from './styles';

export function Home() {
  const [category, setCategory] = useState('');
  const handleCategorySelect = useCallback((categoryId: string) => {
    setCategory(categoryId === category ? '' : categoryId)
  }, [category, setCategory]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <CategorySelect
        caregorySelected={category}
        onSelect={handleCategorySelect}
      />
      <View style={styles.content}>
        
      </View>
    </View>
  );
}
