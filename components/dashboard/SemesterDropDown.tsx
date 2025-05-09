import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function SemesterDropDown() {
    const [isOpen, setIsOpen] = useState(false);
    const options = ['Opción 1', 'Opción 2', 'Opción 3'];
    const [selectedOption, setSelectedOption] = useState('Option 1');
    
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setIsOpen(!isOpen)}
                style={styles.dropdownButton}
            >
                <Text style={styles.buttonText}>{selectedOption}</Text>
            </TouchableOpacity>
            
            {isOpen && (
                <View style={styles.dropdownList}>
                    {options.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.optionItem}
                            onPress={() => {
                                setSelectedOption(option);
                                setIsOpen(false);
                            }}
                        >
                            <Text style={styles.optionText}>{option}</Text>
                        </TouchableOpacity>
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
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: 'white',
    },
    buttonText: {
        fontSize: 16,
    },
    dropdownList: {
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 4,
        marginTop: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, // Para Android
    },
    optionItem: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    optionText: {
        fontSize: 16,
    },
});