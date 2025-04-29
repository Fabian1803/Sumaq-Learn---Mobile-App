import { View } from 'react-native';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { Image } from 'react-native'
import { Colors } from '@/constants/Colors';

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/screens/StartScreen'); // Redirige al Login después de 2 segundos
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.light.tile1 }}>
      <Image
        source={require('@/assets/images/icon.png')}
        style={{ width: 250, height: 250 }}
      />
    </View>
  );
}