import { Stack } from 'expo-router';
import React from 'react';
import "../global.css";

import { SelectionProvider } from '@/context/SelectionContext';
import { MenuProvider } from '@/context/MenuContext';
import { SideMenu } from '@/components/SideMenu';
import { CustomHeaderWithMenu } from '@/components/CustomHeaderWithMenu';

export default function RootLayout() {
  return (
    <SelectionProvider>
      <MenuProvider>
        <>
          <Stack
            screenOptions={{
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              animation: 'fade', // Animación 'default', 'slide_from_right', 'slide_from_left', 'fade', 'none')
            }}
          >
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="screens/login/StartScreen" options={{ headerShown: false }} />
            <Stack.Screen name="screens/login/SearchSchoolScreen" options={{ headerShown: false }} />
            <Stack.Screen name="screens/login/LoginScreen" options={{ headerShown: false }} />
            <Stack.Screen name="screens/passwordRecovery/RecoveryPanel" options={{ headerShown: false }} />

            <Stack.Screen
              name="screens/dashboard/Course"
              options={{
                header: () => <CustomHeaderWithMenu title="Cursos" />,
              }}
            />
            <Stack.Screen
              name="screens/dashboard/Messages"
              options={{
                header: () => <CustomHeaderWithMenu title="Messages" />,
              }}
            />
          </Stack>

          <SideMenu />
        </>
      </MenuProvider>
    </SelectionProvider>
  );
}
