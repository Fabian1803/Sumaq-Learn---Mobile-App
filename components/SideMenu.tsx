import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useMenu } from '@/context/MenuContext';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';

const SCREEN_WIDTH = Dimensions.get('window').width;
const MENU_WIDTH = SCREEN_WIDTH * 0.8;

export const SideMenu = () => {
  const { isVisible, closeMenu } = useMenu();
  const slideAnim = useRef(new Animated.Value(-MENU_WIDTH)).current;
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -MENU_WIDTH,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setShouldRender(false);
      });
    }
  }, [isVisible]);

  if (!shouldRender) return null;

  const menuItems = [
    { title: 'Inicio', route: '/screens/dashboard/Course' },
    { title: 'Perfil', route: '/screens/Profile' },
    { title: 'Chat', route: '/screens/dashboard/Messages' },
    { title: 'Cerrar Sesión', route: '/screens/Logout' },
  ];

  return (
    <View style={styles.overlay} className=''>
      <TouchableOpacity style={styles.backdrop} onPress={closeMenu} activeOpacity={1} />
      <Animated.View
        style={[styles.menuContainer, {
          transform: [{ translateX: slideAnim }]
        }]}
        className='bg-light-tile1'>
        <View className='flex flex-row px-[15px] gap-5'>
          <View className="border-2" style={{overflow: 'hidden' , width: 90, height: 90, borderRadius: 50}}>
            <Image
              source={require('@/assets/images/blanco.png')}
              className='h-full w-full'
              resizeMode='cover'
            />
          </View>
          <View className='flex flex-1 items-start justify-center'>
            <Text className='text-light-tile4 font-bold text-2xl' style={{ lineHeight: 20 }}>Fabian Mauro Rivera Morales</Text>
            <Text className='text-light-tile4'>Ingieneria de Software</Text>
          </View>
        </View>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => {
              router.push(item.route as any);
              closeMenu();
            }}
          >
            <Text className='text-light-tile4 text-2xl'>{item.title}</Text>
          </TouchableOpacity>
        ))}

        <View className='flex flex-row justify-between'>
          <Image
            source={require('@/assets/images/icon.png')}
            className='w-[110px] h-[110px]'
          />
          <Image
            source={require('@/assets/images/icon.png')}
            className='w-[110px] h-[110px]'
          />
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    flexDirection: 'row',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  menuContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: MENU_WIDTH,
    paddingTop: 60,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.tile4,
  },
});
