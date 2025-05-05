import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMenu } from '@/context/MenuContext';
import Icon from 'react-native-vector-icons/Entypo';
import { Colors } from '@/constants/Colors';

type Props = {
  title: string;
};

export const CustomHeaderWithMenu = ({ title }: Props) => {
  const insets = useSafeAreaInsets();
  const { openMenu } = useMenu();

  const headerHeight = 60 + insets.top;

  return (
    <View style={[styles.header, { paddingTop: insets.top, height: headerHeight }]} className='bg-light-tile1'>
      <TouchableOpacity onPress={openMenu} style={styles.menuButton}>
        <Icon name="menu" size={20} color={Colors.light.tile4} style={{fontSize: 40}} />
      </TouchableOpacity>

      <Text className='text-light-tile4 font-bold text-2xl'>{title}</Text>

      <View style={styles.menuButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
  },
  menuButton: {
    width: 40, // Para centrar el título
    alignItems: 'center',
  },
  menuText: {
    fontSize: 30,
  },
});
