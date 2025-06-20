import React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
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
  const headerHeight = insets.top;

  return (
    <View>
      <View style={{ height: headerHeight, backgroundColor: Colors.light.neutral }}></View>
      <View style={styles.header}>
        <Pressable
          onPress={showBackButton ? () => router.back() : openMenu}
          style={styles.menuButton}
        >
          <Icon
            name={showBackButton ? 'chevron-left' : 'menu'}
            size={40}
            color={Colors.light.fourth}
          />
        </Pressable>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Image
            source={require('@/assets/images/iconH.png')}
            height={10}
            width={25}
            style={{ height: 60, width: 180 }}
          />
        </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.light.neutral,
    height: 65,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
  },
  menuButton: {
    alignItems: 'center',
    borderRightWidth: 2,
    paddingHorizontal: 13,
    height: '100%',
    justifyContent: 'center',
  },
  menuText: {
    fontSize: 30,
  },
});
