import * as Font from 'expo-font';

export const useCustomFonts = () => {
  return Font.loadAsync({
    'IBMPlexMono-Bold': require('@/assets/fonts/IBMPlexMono-Bold.ttf'),
    'IBMPlexMono-BoldItalic': require('@/assets/fonts/IBMPlexMono-BoldItalic.ttf'),
    'IBMPlexMono-ExtraLight': require('@/assets/fonts/IBMPlexMono-ExtraLight.ttf'),
    'IBMPlexMono-ExtraLightItalic': require('@/assets/fonts/IBMPlexMono-ExtraLightItalic.ttf'),
    'IBMPlexMono-Italic': require('@/assets/fonts/IBMPlexMono-Italic.ttf'),
    'IBMPlexMono-Light': require('@/assets/fonts/IBMPlexMono-Light.ttf'),
    'IBMPlexMono-LightItalic': require('@/assets/fonts/IBMPlexMono-LightItalic.ttf'),
    'IBMPlexMono-Medium': require('@/assets/fonts/IBMPlexMono-Medium.ttf'),
    'IBMPlexMono-MediumItalic': require('@/assets/fonts/IBMPlexMono-MediumItalic.ttf'),
    'IBMPlexMono-Regular': require('@/assets/fonts/IBMPlexMono-Regular.ttf'),
    'IBMPlexMono-SemiBold': require('@/assets/fonts/IBMPlexMono-SemiBold.ttf'),
    'IBMPlexMono-SemiBoldItalic': require('@/assets/fonts/IBMPlexMono-SemiBoldItalic.ttf'),
    'IBMPlexMono-Thin': require('@/assets/fonts/IBMPlexMono-Thin.ttf'),
    'IBMPlexMono-ThinItalic': require('@/assets/fonts/IBMPlexMono-ThinItalic.ttf'),
  });
};
