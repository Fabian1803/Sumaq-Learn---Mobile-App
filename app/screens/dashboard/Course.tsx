import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Course() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Selecciona una opción');

  const options = ['Opción 1', 'Opción 2', 'Opción 3'];
  return (
    <View>
      <Text>Mis cursos</Text>
      <View>
        <Text className='color-red-500'>Mis Cursos</Text>
      </View>
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text>{selectedOption}</Text>
      </TouchableOpacity>

      {isOpen && (
        <View >
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}
