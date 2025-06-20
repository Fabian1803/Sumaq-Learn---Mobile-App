import { View, Image } from 'react-native';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { jwtDecode } from 'jwt-decode';

export default function SplashScreen() {

  useEffect(() => {
    const checkAuth = async () => {
      const token = await SecureStore.getItemAsync('jwt');
      if (token) {
        try {
          const decoded: any = jwtDecode(token);
          const now = Date.now() / 1000;
          
          if (decoded.exp && decoded.exp > now) {
            router.replace('/screens/dashboard/Course');
            return;
          }
        } catch (err) {
          console.log('Token inválido o error al decodificar');
        }
      }

      // Si no hay token o está expirado
      router.replace('/screens/login/StartScreen');
    };

    const timer = setTimeout(checkAuth, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex justify-center items-center bg-light-tile1 h-full relative">
      <Image
        source={require('@/assets/images/font1.jpeg')}
        className="h-full w-full"
      />
      <Image
        source={require('@/assets/images/name.png')}
        className="absolute z-10"
        style={{ width: '90%', aspectRatio: 1 }}
        resizeMode="contain"
      />
    </View>
  );
}
