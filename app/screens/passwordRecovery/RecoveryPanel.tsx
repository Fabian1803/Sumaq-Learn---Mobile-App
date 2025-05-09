import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { Colors } from '@/constants/Colors'
import RecoveryNextButton from '@/components/shared/RecoveryNextButton'

export default function RecoveryPanel() {
    return (
        <View className='h-full justify-center px-[8%] flex gap-6 bg-light-primary'>
            <Text className='text-center text-[25px] font-[600] text-light-secondary'>Olvidaste tu contrasena?</Text>
            <Text className='text-[18px] text-light-fourth'>Ingresa tu correo institucional para crear una nueva contrasena</Text>
            <View className='flex-row border-[3px] rounded-md px-[12px] items-center border-light-tile1 bg-light-primary border-light-fourth'>
                <Icon name="mail" size={20} color={Colors.light.fourth} className='mr-[5px] w-[8%]' />
                <TextInput
                    className='w-[92%] py-[4%] text-[18px] text-light-fourth'
                    placeholder='codigo@instituto.edu.pe'
                    placeholderTextColor={Colors.light.fourth}
                />
            </View>
            <RecoveryNextButton value='Siguiente' href='CodeVerification' />
        </View>
    )
}