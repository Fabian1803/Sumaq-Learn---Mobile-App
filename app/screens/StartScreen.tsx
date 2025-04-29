import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Colors } from '@/constants/Colors';

export default function StartScreen() {
    const [onPressend, setOnPressed] = useState({
        btn1: false,
        btn2: false,
    });

    const handlePressIn = (btn: string) => {
        setOnPressed(prevState => ({
            ...prevState,
            [btn]: true,
        }))
    };

    const handlePressOut = (btn: string) => {
        setOnPressed(prevState => ({
            ...prevState,
            [btn]: false,
        }))
    };
    return (
        <View style={styles.container}>
            <View style={styles.block1}>
                <Image
                    source={require('@/assets/images/icon.png')}
                    style={{ width: 270, height: 270 }}
                />
            </View>
            <View style={styles.block2}>
                <Link href="./SearchSchoolScreen" asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Encontrar mi escuela</Text>
                    </Pressable>
                </Link>
                <View style={styles.bInfo}>
                    <View style={styles.btnsInfo}>
                        <Pressable onPressIn={() => handlePressIn('btn1')}
                            onPressOut={() => handlePressOut('btn1')}
                            style={[styles.subBtn, onPressend.btn1 && styles.subBtnPressed]}>
                            <Text style={styles.subBtnTxt}>Cod QR</Text>
                        </Pressable>
                        <Pressable onPressIn={() => handlePressIn('btn2')}
                            onPressOut={() => handlePressOut('btn2')}
                            style={[styles.subBtn, onPressend.btn2 && styles.subBtnPressed]}>
                            <Text style={styles.subBtnTxt}>Network</Text>
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
        backgroundColor: Colors.light.tile1,
    },
    block1: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    block2: {
        flex: 2,
        width: '100%',
        gap: 5,
        alignItems: 'center',
    },
    button: {
        width: '70%',
        alignItems: 'center',
        padding: 15,
        backgroundColor: Colors.light.tile4,
        borderRadius: 5,
    },
    buttonText: {
        color: Colors.light.tile1,
        fontSize: 16,
        fontWeight: 500,
    },
    bInfo: {
        flex: 1,
        gap: 5,
        width: '70%',
    },
    btnsInfo: {
        flexDirection: 'row',
    },
    subBtn: {
        flex: 1,
        alignItems: 'center',
        padding: 15,
    },
    subBtnPressed: {
        backgroundColor: Colors.light.tile2,
    },
    subBtnTxt: {
        color: Colors.light.tile4,
        fontSize: 18,
    },
});