import { View } from 'react-native';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { Image } from 'react-native'

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/screens/login/StartScreen');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex justify-center items-center bg-light-tile1 h-full">
      <Image
        source={require('@/assets/images/icon.png')}
        className='h-[250px] w-[250px]'
      />
    </View>
  );
}