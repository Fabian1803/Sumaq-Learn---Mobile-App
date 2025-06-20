import { Platform } from 'react-native';

const getBaseUrl = () => {
  if (Platform.OS === 'android') {
    return 'http://10.0.2.2:8000'; // Android Emulator
  } else if (Platform.OS === 'ios') {
    return 'http://localhost:8000'; // iOS Simulator
  } else {
    return 'http://192.168.0.14:8000'; // Reemplaza con tu IP local si usas dispositivo físico
  }
};

export const API_BASE_URL = getBaseUrl();
