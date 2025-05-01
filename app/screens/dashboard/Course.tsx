import React from 'react';
import { View, Text } from 'react-native';

export default function Course() {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contenido de los cursos</Text>
      <View>
        <Text className='color-red-500'>hola</Text>
      </View>
    </View>
  );
}
