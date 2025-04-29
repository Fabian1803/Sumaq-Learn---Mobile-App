import { HeaderMenuButton } from '@/components/HeaderMenuButton';
import { NextButton } from '@/components/NextButton';
import { SelectionProvider } from '@/context/SelectionContext';
import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <SelectionProvider>
      <Stack
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          animation: 'fade', // Animación 'default', 'slide_from_right', 'slide_from_left', 'fade', 'none')
        }}
      >
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="screens/StartScreen"
          options={{
            title: 'StartScreen',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="screens/SearchSchoolScreen"
          options={{
            title: 'Buscar',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="screens/LoginScreen"
          options={{
            title: 'LoginScreen',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="screens/Course"
          options={{
            title: 'Cursos',
            headerShown: true,
            headerRight: () => <HeaderMenuButton />,
          }}
        />
      </Stack>
    </SelectionProvider>
  );
}