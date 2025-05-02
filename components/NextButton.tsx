// components/NextButton.tsx
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useSelection } from '@/context/SelectionContext';
import { router } from 'expo-router';

export const NextButton = () => {
  const { selectedSchool } = useSelection();
  const canNavigate = Boolean(selectedSchool);
  return (
    <TouchableOpacity
      onPress={() => canNavigate && router.push('./screens/LoginScreen')}
      style={{ marginRight: 15 }}
    >
      <Text style={{ color: canNavigate ? '#007AFF' : '#ccc', fontSize: 16 }}>
        Siguiente
      </Text>
    </TouchableOpacity>

  );
};
