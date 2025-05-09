import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMenu } from '@/context/MenuContext';
import Icon from 'react-native-vector-icons/Entypo';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

type Props = {
  showBackButton?: boolean;
};

export const CustomHeaderWithMenu = ({ showBackButton }: Props) => {
  const insets = useSafeAreaInsets();
  const { openMenu } = useMenu();
  const router = useRouter();

  const headerHeight = 60 + insets.top;

  return (
    <View style={[styles.header, { paddingTop: insets.top, height: headerHeight }]} className='bg-light-tile1'>
      <TouchableOpacity
        onPress={showBackButton ? () => router.back() : openMenu}
        style={styles.menuButton}
      >
        <Icon
          name={showBackButton ? 'chevron-left' : 'menu'}
          size={40}
          color={Colors.light.fourth}
        />
      </TouchableOpacity>

      <Image
        source={require('@/assets/images/iconH.png')}
        height={10}
        width={25}
        style={{height: 60, width: 180}}
      />
      <View style={styles.menuButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.light.primary,
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
