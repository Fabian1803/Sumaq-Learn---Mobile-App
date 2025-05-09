import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import RecoveryNextButton from '@/components/shared/RecoveryNextButton'
import { Colors } from '@/constants/Colors'
import SecurePasswordEntry from '@/components/shared/SecurePasswordEntry'

export default function PasswordChange() {

    return (
        <View className='h-full justify-center px-[8%] gap-6 bg-light-primary'>
            <Text className='text-[28px] text-light-secondary font-[500] text-center'>Cambio de contrasenas</Text>
            <Text className='text-[18px] text-light-fourth'>Ingresa tu nueva contrasena para realizar el cambio</Text>
            <SecurePasswordEntry text='Contraseña' colorBg={Colors.light.primary} colorText={Colors.light.fourth}/>
            <SecurePasswordEntry text='Repetir Contraseña' colorBg={Colors.light.primary} colorText={Colors.light.fourth}/>
            <RecoveryNextButton value='Terminar' href='login/LoginScreen' route />
        </View>
    )
}