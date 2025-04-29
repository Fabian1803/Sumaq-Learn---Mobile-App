import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useMenu } from '@/context/MenuContext'; // Asegúrate que este contexto existe

export const HeaderMenuButton = () => {
  const { openMenu } = useMenu();

  return (
    <TouchableOpacity onPress={openMenu} style={{ marginRight: 15 }}>
      <Text style={{ fontSize: 16, color: '#007AFF' }}>Menú</Text>
    </TouchableOpacity>
  );
};
