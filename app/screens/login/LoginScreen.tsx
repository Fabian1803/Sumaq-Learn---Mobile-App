import {
    View, Text, StyleSheet, TextInput, TouchableOpacity,
    KeyboardAvoidingView, Platform, Pressable,
    Image
} from 'react-native';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Colors } from '@/constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SecurePasswordEntry from '@/components/shared/SecurePasswordEntry';
import { API_BASE_URL } from '@/services/api';
import * as SecureStore from 'expo-secure-store';
import { router } from 'expo-router';

export default function LoginScreen() {
    const [passBtn, setPassBtn] = useState(false);
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');
    const insets = useSafeAreaInsets();
    const [isPressed, setIsPressed] = useState(false);

    const handleLogin = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    codigo: code,
                    password: password,
                    instituteId: 1,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error en la autenticación');
            }

            const data = await response.json();
            console.log('Login exitoso:', data);

            await SecureStore.setItemAsync('jwt', data.token);

            router.replace('../dashboard/Course');

        } catch (error) {
            if (error instanceof Error) {
                console.error('Fallo en login:', error.message);
            } else {
                console.error('Fallo en login:', error);
            }
        }
    };


    const handleForgotPassword = () => {
        console.log('Olvidé mi contraseña');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className='flex px-[30px] bg-light-neutral h-full'
        >
            <View style={{ paddingTop: insets.top }} className='flex flex-row items-center gap-[12px] h-[15%]'>
                <Image
                    source={require('@/assets/images/icon.png')}
                    className='w-[110px] h-[110px] ml-[-10px]'
                />
            </View>

            <View className='flex flex-row items-center justify-center h-[25%]'>
                <Image
                    source={require('@/assets/images/icon.png')}
                    className='w-[150px] h-[150px]'
                />
                <Text className='text-[28px] text-center text-light-fourth font-[700] w-[55%]'>Universidad Tecnologica del Peru</Text>
            </View>

            <View className='h-[50%] flex gap-[10%]'>
                <View>
                    <Text className='text-[16px] mb-[8px] font-[700] text-light-fourth'>Código:</Text>
                    <View className='flex flex-row items-center px-[12px] bg-light-primary
                     mb-[5%] border-2 border-r-[6px] border-light-fourth'>
                        <Icon name="user" size={20} color={Colors.light.fourth} className='mr-[10px] w-[6%]' />
                        <TextInput
                            className='flex h-[43px] text-[16px] text-light-fourth w-[94%]'
                            placeholder="Ingresa tu código"
                            placeholderTextColor={Colors.light.fourth}
                            value={code}
                            onChangeText={setCode}
                            autoCapitalize="none"
                            keyboardType="default"
                        />
                    </View>
                    <Text className='text-[16px] mb-[8px] font-[700] text-light-fourth'>Contraseña:</Text>
                    <SecurePasswordEntry
                        colorBg={Colors.light.primary}
                        colorText={Colors.light.fourth}
                        text='Ingresa tu contraseña'
                        value={password}
                        onChange={setPassword} />
                    <Link href="../passwordRecovery/RecoveryPanel" asChild>
                        <Pressable className='flex items-end mt-[4%]'>
                            <Text className='text-light-fourth text-[14px] font-[500]'>¿Olvidaste tu contraseña?</Text>
                        </Pressable>
                    </Link>
                </View>

                <Pressable onPress={handleLogin}
                    className='mt-[20px] px-[15px] items-center rounded-lg h-[45px] justify-center'
                    style={{
                        backgroundColor: isPressed ? Colors.light.secondary : Colors.light.fourth,
                    }}
                >
                    <Text className='text-light-primary text-[16px] font-bold'>Ingresar</Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView >
    );
}

const styles = StyleSheet.create({

    loginButtonDisabled: {
        opacity: 0.5,
    },
});