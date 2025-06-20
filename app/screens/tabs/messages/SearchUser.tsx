import { View, Text, ScrollView, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import UserMessage from '@/components/dashboard/chat/UserMessage'
import { Colors } from '@/constants/Colors';

export default function SearchUser() {
    return (
        <View className='flex-1 '>
            <View className='px-3 pb-3 gap-2 border-b-[3px] bg-light-neutral'>
                <Text className='text-2xl font-semibold'>Nuevo mensaje</Text>
                <View className='gap-2'>
                    <View className='flex-row gap-3 items-center'>
                        <Icon name='circle' />
                        <Text>Busca un contacto mediante su codigo</Text>
                    </View>
                    <View className='flex-row gap-3 items-center'>
                        <Icon name='circle' />
                        <Text>Escribe mas de 3 letras de su nombre completo</Text>
                    </View>
                </View>
                <View className='flex flex-row items-center 
                px-[12px] bg-light-tile1 border-2 bg-light-primary'>
                    <TextInput
                        className='flex h-[40px] text-[16px] text-light-tile4 w-[94%] items-center'
                        placeholder="Ingresa tu código"
                        placeholderTextColor={Colors.light.fourth}
                        autoCapitalize="none"
                        keyboardType="default"
                    />
                    <Icon name="search" size={20} color={Colors.light.fourth} className='mr-[10px] w-[6%]' />

                </View>
            </View>
            <ScrollView className='p-3 bg-light-primary' showsVerticalScrollIndicator={false}>
                <UserMessage />
                <UserMessage />
                <UserMessage />
                <UserMessage />
            </ScrollView>
        </View>
    )
}