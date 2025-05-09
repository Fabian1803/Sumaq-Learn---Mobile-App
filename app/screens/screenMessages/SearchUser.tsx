import { View, Text, ScrollView, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import UserMessage from '@/components/dashboard/UserMessage'

export default function SearchUser() {
    return (
        <View className='flex-1 '>
            <View className='px-4 pb-3 gap-5 border-b-[3px]'>
                <Text className='text-2xl font-semibold'>Nuevo mensaje</Text>
                <View className='gap-3'>
                    <View className='flex-row gap-3 items-center'>
                        <Icon name='circle' />
                        <Text>Busca un contacto mediante su codigo</Text>
                    </View>
                    <View className='flex-row gap-3 items-center'>
                        <Icon name='circle' />
                        <Text>Escribe mas de 3 letras de su nombre completo</Text>
                    </View>
                </View>
                <View className='flex flex-row items-center rounded-[8px] px-[12px] bg-light-tile1 border-2'>
                    <TextInput
                        className='flex h-[40px] text-[16px] text-light-tile4 w-[94%] items-center'
                        placeholder="Ingresa tu código"
                        placeholderTextColor="#769FCD"
                        autoCapitalize="none"
                        keyboardType="default"
                    />
                    <Icon name="search" size={20} color="#769FCD" className='mr-[10px] w-[6%]' />

                </View>
            </View>
            <ScrollView className='p-4'>
                <UserMessage />
                <UserMessage />
                <UserMessage />
                <UserMessage />
            </ScrollView>
        </View>
    )
}