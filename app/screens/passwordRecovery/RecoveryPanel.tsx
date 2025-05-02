import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Icon from 'react-native-vector-icons/Feather'
import { Colors } from '@/constants/Colors'

export default function RecoveryPanel() {
    return (
        <View className='h-full justify-center px-[8%] flex gap-6'>
            <View>
                <Text className='text-center text-[25px] font-[600]'>Olvidaste tu contrasena?</Text>
            </View>
            <View>
                <Text className='text-[18px]'>Ingresa tu correo institucional para crear una nueva contrasena</Text>
            </View>
            <View className='flex flex-row border-2 rounded-md px-[12px] items-center border-light-tile1'>
                <Icon name="mail" size={20} color="#769FCD" className='mr-[5px] w-[8%]' />
                <TextInput
                    className='w-[92%] py-[4%] text-[18px]'
                    placeholder='codigo@instituto.edu.pe'
                    placeholderTextColor={Colors.light.tile1}
                />
            </View>
            <Link href="../" asChild>
                <Pressable className='bg-light-tile1 p-[4%] rounded-md'>
                    <Text className='text-center text-light-tile4 text-[18px]'>Siguiente</Text>
                </Pressable>
            </Link>
        </View>
    )
}