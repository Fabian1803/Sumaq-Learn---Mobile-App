import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import '../global.css';

import { SelectionProvider } from '@/context/SelectionContext';
import { MenuProvider } from '@/context/MenuContext';
import { applyGlobalFont } from '@/hooks/fontsConfig';
import { useCustomFonts } from '@/hooks/useFonts';

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    useCustomFonts().then(() => setFontsLoaded(true));
    applyGlobalFont();
  }, []);
  if (!fontsLoaded) return null;
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
