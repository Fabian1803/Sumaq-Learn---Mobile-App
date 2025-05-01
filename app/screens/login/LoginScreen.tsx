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
        // Navegar a pantalla de recuperación de contraseña
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

            <View className='flex items-center justify-center h-[30%]'>
                <View className='w-[100px] h-[100px] rounded-[40px] mb-[10px] bg-slate-500'></View>
                <Text className='text-[26px] text-center text-light-tile4 font-[700]'>Nombre de la universidad</Text>
            </View>

            <View className='h-[45%] flex gap-[20px]'>
                <View className='mb-[15px]'>
                    <Text className='text-[16px] mb-[8px] font-[700] text-light-tile4'>Código:</Text>
                    <View className='flex flex-row items-center rounded-[8px] px-[12px] bg-light-tile4'>
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
                </View>

                <View className='mb-[15px]'>
                    <Text className='text-[16px] mb-[8px] font-[700] text-light-tile4'>Contraseña:</Text>
                    <View className='flex flex-row items-center rounded-[8px] px-[12px] bg-light-tile4'>
                        <Icon name="lock" size={20} color="#769FCD" className='mr-[10px] w-[6%]' />
                        <TextInput
                            className='flex h-[50px] text-[16px] text-light-tile1 w-[79%]'
                            placeholder="Ingresa tu contraseña"
                            placeholderTextColor={Colors.light.tile1}
                            secureTextEntry={!passBtn}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity
                            onPress={() => setPassBtn(!passBtn)}
                            className='p-[10px] w-[14%]'
                        >
                            <Icon
                                name={passBtn ? "eye" : "eye-off"}
                                size={20}
                                color="#769FCD"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={handleForgotPassword}
                    className='flex items-end mt-[-10px]'
                >
                    <Text className='text-light-tile4 text-[14px] font-[500]'>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>

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