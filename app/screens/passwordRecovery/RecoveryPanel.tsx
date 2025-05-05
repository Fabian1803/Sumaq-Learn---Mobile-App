import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { Colors } from '@/constants/Colors'
import RecoveryNextButton from '@/components/shared/RecoveryNextButton'

export default function RecoveryPanel() {
    return (
        <View className='h-full justify-center px-[8%] flex gap-6'>
            <Text className='text-center text-[25px] font-[600] text-light-tile1'>Olvidaste tu contrasena?</Text>
            <Text className='text-[18px]'>Ingresa tu correo institucional para crear una nueva contrasena</Text>
            <View className='flex flex-row border-2 rounded-md px-[12px] items-center border-light-tile1 bg-light-tile3'>
                <Icon name="mail" size={20} color="#769FCD" className='mr-[5px] w-[8%]' />
                <TextInput
                    className='w-[92%] py-[4%] text-[18px]'
                    placeholder='codigo@instituto.edu.pe'
                />
            </View>
            <RecoveryNextButton value='Siguiente' href='CodeVerification' />
        </View>
    )
}