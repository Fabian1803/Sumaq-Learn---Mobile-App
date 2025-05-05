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

export default function LoginScreen() {
    const [passBtn, setPassBtn] = useState(false);
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');
    const insets = useSafeAreaInsets();

    const handleLogin = () => {
        // Aquí iría la lógica de autenticación
        console.log('Código:', code);
        console.log('Contraseña:', password);
    };

    const handleForgotPassword = () => {
        console.log('Olvidé mi contraseña');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className='flex px-[30px] bg-light-tile1 h-full'
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
                <Text className='text-[28px] text-center text-light-tile4 font-[700] w-[55%]'>Universidad Tecnologica del Peru</Text>
            </View>

            <View className='h-[50%] flex gap-[10%]'>
                <View>
                    <Text className='text-[16px] mb-[8px] font-[700] text-light-tile4'>Código:</Text>
                    <View className='flex flex-row items-center rounded-[8px] px-[12px] bg-light-tile4 mb-[5%]'>
                        <Icon name="user" size={20} color="#769FCD" className='mr-[10px] w-[6%]' />
                        <TextInput
                            className='flex h-[50px] text-[16px] text-light-tile1 w-[94%]'
                            placeholder="Ingresa tu código"
                            placeholderTextColor="#769FCD"
                            value={code}
                            onChangeText={setCode}
                            autoCapitalize="none"
                            keyboardType="default"
                        />
                    </View>
                    <Text className='text-[16px] mb-[8px] font-[700] text-light-tile4'>Contraseña:</Text>
                    <SecurePasswordEntry
                        colorBg={Colors.light.tile4}
                        colorText={Colors.light.tile1}
                        text='ingresa tu contraseña'
                        value={password}
                        onChange={setPassword} />
                    <Link href="../passwordRecovery/RecoveryPanel" asChild>
                        <Pressable className='flex items-end mt-[4%]'>
                            <Text className='text-light-tile4 text-[14px] font-[500]'>¿Olvidaste tu contraseña?</Text>
                        </Pressable>
                    </Link>
                </View>

                <Link href="../dashboard/Course" asChild>
                    <Pressable className='bg-light-tile3 px-[15px] rounded-[8px] items-center mt-[20px] h-[50px] justify-center'>
                        <Text className='text-light-tile1 text-[16px] font-bold'>Ingresar</Text>
                    </Pressable>
                </Link>
            </View>
        </KeyboardAvoidingView >
    );
}

const styles = StyleSheet.create({

    loginButtonDisabled: {
        opacity: 0.5,
    },
});