import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { useMenu } from '@/context/MenuContext';

export const SideMenu = () => {
  const { isVisible, closeMenu } = useMenu(); // Usamos el contexto

  if (!isVisible) return null;

  const menuItems = [
    { title: 'Inicio', route: '/screens/Home' },
    { title: 'Perfil', route: '/screens/Profile' },
    { title: 'Configuración', route: '/screens/Settings' },
    { title: 'Cerrar Sesión', route: '/screens/Logout' },
  ];

  return (
    <View style={styles.overlay}>
      <TouchableOpacity style={styles.backdrop} onPress={closeMenu} activeOpacity={1} />
      <View style={styles.menuContainer}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    flexDirection: 'row',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  menuContainer: {
    width: '70%',
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