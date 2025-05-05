import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import RecoveryNextButton from '@/components/shared/RecoveryNextButton'
import Icon from 'react-native-vector-icons/Feather'
import { Colors } from '@/constants/Colors'
import SecurePasswordEntry from '@/components/shared/SecurePasswordEntry'

export default function PasswordChange() {

    return (
        <View className='h-full justify-center px-[8%] gap-6'>
            <Text className='text-[28px] text-light-tile1 font-[500] text-center'>Cambio de contrasenas</Text>
            <Text className='text-[18px]'>Ingresa tu nueva contrasena para realizar el cambio</Text>
            <SecurePasswordEntry text='Contraseña' colorBg={Colors.light.tile3} colorText={Colors.light.tile1}/>
            <SecurePasswordEntry text='Repetir Contraseña' colorBg={Colors.light.tile3} colorText={Colors.light.tile1}/>
            <RecoveryNextButton value='Terminar' href='login/LoginScreen' route />
        </View>
    )
}