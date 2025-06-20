import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import RecoveryNextButton from '@/components/shared/RecoveryNextButton';

export default function CodeVerification() {
    const valInput = 'text-[25px] text-center border-2 w-[15%] h-[15vw] rounded-md bg-light-neutral border-light-fourth';
    return (
        <View className='bg-light-primary h-full flex justify-center px-[8%] gap-6'>
            <Text className='text-center text-light-third text-[28px] font-[600]'>Verificacion de codigo</Text>

            <Text className='text-[18px] text-light-fourth'>Hemos enviado un codigo de verificacion a tu correo</Text>
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