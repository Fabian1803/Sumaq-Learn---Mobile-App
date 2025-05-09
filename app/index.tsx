import { View } from 'react-native';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { Image } from 'react-native';

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/screens/login/StartScreen');
    }, 2000);

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
