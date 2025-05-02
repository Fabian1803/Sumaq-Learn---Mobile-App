import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import RecoveryNextButton from '@/components/RecoveryNextButton';

export default function CodeVerification() {
    const valInput = 'text-[25px] text-center border-2 w-[15%] h-[15vw] rounded-md bg-light-tile3 border-light-tile1';
    return (
        <View className='h-full flex justify-center px-[8%] gap-6'>
            <Text className='text-center text-light-tile1 text-[28px] font-[600]'>Verificacion de codigo</Text>

            <Text className='text-[18px]'>Hemos enviado un codigo de verificacion a tu correo</Text>
            <View className='flex flex-row justify-between'>
                <TextInput className={valInput} />
                <TextInput className={valInput} />
                <TextInput className={valInput} />
                <TextInput className={valInput} />
                <TextInput className={valInput} />
            </View>
            <RecoveryNextButton value='Verificar' href='PasswordChange' />
        </View>
    )
}