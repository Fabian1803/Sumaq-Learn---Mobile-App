// components/CustomHeaderWithMenu.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMenu } from '@/context/MenuContext';

type Props = {
  title: string;
};

export const CustomHeaderWithMenu = ({ title }: Props) => {
  const insets = useSafeAreaInsets();
  const { openMenu } = useMenu();

  const headerHeight = 60 + insets.top;

  return (
    <View style={[styles.header, { paddingTop: insets.top, height: headerHeight }]}>
      <TouchableOpacity onPress={openMenu} style={styles.menuButton}>
        <Text style={styles.menuText}>☰</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
      
      {/* Espacio reservado para mantener el título centrado */}
      <View style={styles.menuButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuButton: {
    width: 40, // Para centrar el título
    alignItems: 'center',
  },
  menuText: {
    fontSize: 24,
    color: '#007AFF',
  },
});
