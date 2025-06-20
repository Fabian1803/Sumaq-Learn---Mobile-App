import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import Icon from 'react-native-vector-icons/Feather';

export default function ChatInputTab() {
    const insets = useSafeAreaInsets();
    const volB = insets.bottom + 10;
    return (
        <View style={[styles.cont, { paddingBottom: volB }]}
        >
            <TouchableOpacity>
                <Icon name='image' size={30} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name='folder-plus' size={30} />
            </TouchableOpacity>
            <TextInput style={styles.input} />
            <TouchableOpacity>
                <Icon name='send' size={30} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.light.neutral,
        borderTopColor: Colors.light.fourth,
        borderTopWidth: 2,
        paddingHorizontal: 10,
        gap: 10,
        paddingVertical: 10,
        alignItems: 'center',
    },
    input: {
        borderWidth: 2,
        borderRadius: 5,
        flex: 1,
        height: 40,
        fontSize: 18,
        paddingLeft: 5,
    }
})