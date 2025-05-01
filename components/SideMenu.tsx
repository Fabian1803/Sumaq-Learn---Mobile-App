import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useMenu } from '@/context/MenuContext';
import { router } from 'expo-router';

const SCREEN_WIDTH = Dimensions.get('window').width;
const MENU_WIDTH = SCREEN_WIDTH * 0.7;

export const SideMenu = () => {
  const { isVisible, closeMenu } = useMenu();
  const slideAnim = useRef(new Animated.Value(-MENU_WIDTH)).current;
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true); // Mostrar el menú antes de animar
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
        setShouldRender(false); // Ocultar el menú después de animar
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
    <View style={styles.overlay}>
      <TouchableOpacity style={styles.backdrop} onPress={closeMenu} activeOpacity={1} />
      <Animated.View style={[styles.menuContainer, { transform: [{ translateX: slideAnim }] }]}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => {
              router.push(item.route as any);
              closeMenu();
            }}
          >
            <Text style={styles.menuText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
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
    backgroundColor: 'white',
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
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    fontSize: 16,
  },
});
