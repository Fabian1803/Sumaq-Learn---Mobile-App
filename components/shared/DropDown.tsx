import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors'

type DropDownProps = {
  options: string[];
  initialValue?: string;
  onSelect?: (value: string) => void;
};

export default function DropDown({ options, initialValue, onSelect }: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initialValue || options[0]);

  const handleSelect = (option: string) => {
    console.log('Seleccionado:', option);
    setSelectedOption(option);
    setIsOpen(false);
    onSelect?.(option);
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setIsOpen(prev => !prev)}
        style={styles.dropdownButton}
      >
        <Text style={styles.buttonText}>{selectedOption}</Text>
      </Pressable>

      {isOpen && (
        <View style={styles.dropdownList}>
          {options.map((option, index) => (
            <Pressable
              key={index}
              style={styles.optionItem}
              onPress={() => handleSelect(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1,
  },
  dropdownButton: {
    borderWidth: 1,
    borderColor: Colors.light.fourth,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.light.orange,
  },
  buttonText: {
    fontSize: 16,
  },
  dropdownList: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: Colors.light.orange,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: Colors.light.fourth,
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  optionItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.fourth,
  },
  optionText: {
    fontSize: 16,
  },
});
