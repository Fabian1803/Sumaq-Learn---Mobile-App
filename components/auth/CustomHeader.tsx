// components/CustomHeader.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors';

type CustomHeaderProps = {
    title: string;
    showNext?: boolean;
    isNextEnabled?: boolean;
    onNext?: () => void;
};

export function CustomHeader({ title, showNext, isNextEnabled = true, onNext }: CustomHeaderProps) {
    const router = useRouter();
    const insets = useSafeAreaInsets();

    const headerHeight = insets.top - 15;

    return (
        <View>
            <View style={{ height: headerHeight, backgroundColor: Colors.light.secondary}}></View>
            <View style={styles.header}>
                
                <Text style={styles.title}>{title}</Text>

                {showNext && (
                    <TouchableOpacity onPress={isNextEnabled ? onNext : undefined}>
                        <Text style={[styles.nextText, { color: isNextEnabled ? Colors.light.true : Colors.light.alert }]}>
                            Siguiente
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        paddingHorizontal: 16,
        backgroundColor: Colors.light.secondary,
        borderBottomWidth: 3,
        borderBottomColor: Colors.light.fourth,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 4,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    nextText: {
        fontSize: 16,
        fontWeight: '600'
    },
});
