import { Stack } from 'expo-router';
import React from 'react';
import '../global.css';

import { SelectionProvider } from '@/context/SelectionContext';
import { MenuProvider } from '@/context/MenuContext';

export default function RootLayout() {
  return (
    <SelectionProvider>
      <MenuProvider>
        <Stack
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            animation: 'fade',
            headerShown: false,
          }}
        />
      </MenuProvider>
    </SelectionProvider>
  );
}
