// components/CustomHeader.tsx
import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
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
    const [isPressed, setIsPressed] = useState(false);
    const headerHeight = insets.top;
    if (!showNext) return null;
    return (
        <View>
            <View style={{ height: headerHeight, backgroundColor: Colors.light.neutral }}></View>
            <View style={styles.header}>

                <Text style={styles.title}>{title}</Text>

                {showNext && (
                    <Pressable
                        onPress={isNextEnabled ? onNext : undefined}
                        onPressIn={() => setIsPressed(true)}
                        onPressOut={() => setIsPressed(false)}
                    >
                        <Text style={[styles.nextText, {
                            backgroundColor: isNextEnabled ? Colors.light.neutral : Colors.light.primary,
                            borderRightWidth: isNextEnabled ? (isPressed ? 2 : 6) : 2,
                            borderColor: isNextEnabled ? Colors.light.fourth : 'rgba(0, 0, 0, 0.2)',
                            color: isNextEnabled ? Colors.light.fourth : 'rgba(0, 0, 0, 0.2)',
                        }]}>
                            Siguiente
                        </Text>
                    </Pressable>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 55,
        paddingHorizontal: 16,
        backgroundColor: Colors.light.neutral,
        borderBottomWidth: 2,
        borderTopWidth: 2,
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
        fontWeight: '600',
        borderWidth: 2,
        paddingVertical: 4,
        paddingHorizontal: 9,
    },
});
