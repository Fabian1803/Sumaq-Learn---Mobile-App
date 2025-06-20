import { View, Pressable, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Text } from '@/components/shared/Text';

export default function StartScreen() {
    const [onPressend, setOnPressed] = useState({
        btn1: false,
        btn2: false,
    });

    const handlePressIn = (btn: string) => {
        setOnPressed(prevState => ({
            ...prevState,
            [btn]: true,
        }));
    };

    const handlePressOut = (btn: string) => {
        setOnPressed(prevState => ({
            ...prevState,
            [btn]: false,
        }));
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('@/assets/images/icon.png')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.buttonsContainer}>
                <Link href="./SearchSchoolScreen" asChild>
                    <Pressable style={styles.mainButton}>
                        <Text style={styles.mainButtonText}>Encontrar mi escuela</Text>
                    </Pressable>
                </Link>
                <View style={styles.secondaryButtonWrapper}>
                    <View style={styles.secondaryButtonRow}>
                        <Pressable
                            onPressIn={() => handlePressIn('btn1')}
                            onPressOut={() => handlePressOut('btn1')}
                            style={[styles.secondaryButton, onPressend.btn1 && styles.secondaryButtonActive]}
                        >
                            <Text style={styles.secondaryButtonText}>Cod QR</Text>
                        </Pressable>
                        <Pressable
                            onPressIn={() => handlePressIn('btn2')}
                            onPressOut={() => handlePressOut('btn2')}
                            style={[styles.secondaryButton, onPressend.btn2 && styles.secondaryButtonActive]}
                        >
                            <Text style={styles.secondaryButtonText}>Network</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f4ec',
    },
    logoContainer: {
        height: '80%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 300,
        width: 300,
        resizeMode: 'contain',
    },
    buttonsContainer: {
        height: '20%',
        width: '100%',
        alignItems: 'center',
        gap: 8,
    },
    mainButton: {
        width: '80%',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#2d1c0f',
        borderRadius: 8,
    },
    mainButtonText: {
        color: '#f8f4ec',
        fontSize: 20,
        fontWeight: '600',
    },
    secondaryButtonWrapper: {
        width: '80%',
        gap: 20,
    },
    secondaryButtonRow: {
        flexDirection: 'row',
    },
    secondaryButton: {
        flex: 1,
        alignItems: 'center',
        padding: 15,
    },
    secondaryButtonActive: {
        backgroundColor: '#d9a066',
    },
    secondaryButtonText: {
        fontSize: 20,
        color: '#2d1c0f',
    },
});
