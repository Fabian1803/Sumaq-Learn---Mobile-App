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
import Icon from 'react-native-vector-icons/AntDesign';
import * as SecureStore from 'expo-secure-store';

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

  const menuStudent = [
    { title: 'Tablero', route: '/screens/dashboard/Course', icon: 'dashboard' },
    { title: 'Carnet', route: '/screens/dashboard/UserCard', icon: 'barcode' },
    { title: 'Correo', route: '/screens/dashboard/Course', icon: 'mail' },
  ];

  const menuOpcional = [
    { title: 'Pagos', route: '/screens/dashboard/Course', icon: 'creditcard' },
    { title: 'Servicios', route: '/screens/Profile', icon: 'pushpino' },
    { title: 'Tramites', route: '/screens/dashboard/Messages', icon: 'filetext1' },
  ];

  const menuSettings = [
    { title: 'Ver Perfil', route: '/screens/dashboard/Messages', icon: 'profile' },
    { title: 'Cambiar Usuario', route: '/screens/dashboard/Messages', icon: 'sync' },
    { title: 'Cerrar Sesión', route: '/screens/Logout', icon: 'logout' },
  ];

  return (
    <View style={styles.overlay} className=''>
      <TouchableOpacity style={styles.backdrop} onPress={closeMenu} activeOpacity={1} />
      <Animated.View
        style={[styles.menuContainer, {
          transform: [{ translateX: slideAnim }]
        }]}
        className='bg-light-tile1'>
        <View className='flex flex-row px-[15px] gap-5'
          style={{ borderBottomWidth: 2, paddingBottom: 25, borderBottomColor: Colors.light.fourth }}>
          <View className="border-2" style={{ overflow: 'hidden', width: 80, height: 80, borderRadius: 50 }}>
            <Image
              source={require('@/assets/images/blanco.png')}
              className='h-full w-full'
              resizeMode='cover'
            />
          </View>
          <View className='flex flex-1 items-start justify-center'>
            <Text className='text-light-tile4 font-bold text-2xl' style={{ lineHeight: 20 }}>Fabian Mauro Rivera Morales</Text>
            <Text className='text-light-tile4'>u20227896@gmail.com</Text>
          </View>
        </View>
        <View style={{ borderBottomWidth: 2, borderBlockColor: Colors.light.fourth }}>
          {menuStudent.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              className='flex flex-row items-center bg-light-primary'
              onPress={() => {
                router.push(item.route as any);
                closeMenu();
              }}
            >

              <Icon name={item.icon} size={24} color={Colors.light.fourth} className='mr-[10px] w-[15%]' />
              <Text className='text-light-fourth text-2xl'>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ borderBottomWidth: 2, borderBlockColor: Colors.light.fourth }}>
          {menuOpcional.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              className='flex flex-row items-center bg-light-primary'
              onPress={() => {
                router.push(item.route as any);
                closeMenu();
              }}
            >

              <Icon name={item.icon} size={24} color={Colors.light.fourth} className='mr-[10px] w-[15%]' />
              <Text className='text-light-fourth text-2xl'>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ borderBottomWidth: 2, borderBlockColor: Colors.light.fourth }}>
          {menuSettings.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              className='flex flex-row items-center bg-light-primary'
              onPress={async () => {
                if (item.title === 'Cerrar Sesión') {
                  await SecureStore.deleteItemAsync('jwt');
                  router.replace('/screens/login/StartScreen');
                } else {
                  router.push(item.route as any);
                }
                closeMenu();
              }}
            >
              <Icon name={item.icon} size={24} color={Colors.light.fourth} className='mr-[10px] w-[15%]' />
              <Text className='text-light-text1 text-2xl'>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className='flex flex-row flex-1 justify-between'>
          <Text>v. 0.0.5</Text>
          <Image
            source={require('@/assets/images/icon.png')}
            className='w-[110px] h-[110px]'
          />

          <Icon name='infocirlceo' />
          <Icon name='setting' />
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
    backgroundColor: Colors.light.primary,
    borderRightColor: Colors.light.fourth,
    borderRightWidth: 3,
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
    padding: '3%',
    paddingHorizontal: 45,
  },
});
