import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors';

export default function ChatDropDown() {
    const [isOpen, setIsOpen] = useState(false);
    const options = ['Bandeja de entrada', 'No leido', 'Destacado', 'Enviado', 'Archivado'];
    const [selectedOption, setSelectedOption] = useState('Bandeja de entrada');
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
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderColor: Colors.light.fourth,
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
        borderBottomWidth: 2,
        borderBottomColor: Colors.light.fourth,
    },
    optionText: {
        fontSize: 16,
    },
});