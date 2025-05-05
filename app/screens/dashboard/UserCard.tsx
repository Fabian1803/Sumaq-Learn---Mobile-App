import { View, Text, Image } from 'react-native'
import { moderateScale } from 'react-native-size-matters';
import React from 'react'

export default function UserCard() {
    return (
        <View className='bg-light-tile4 flex flex-1'>
            <View className='flex flex-row h-[30%] border-b-2 
            border-b-light-tile2 justify-center items-center gap-5'>
                <View className="border-2 border-light-tile1" style={{ overflow: 'hidden', width: 120, height: 120, borderRadius: 60 }}>
                    <Image
                        source={require('@/assets/images/blanco.png')}
                        className='h-full w-full'
                        resizeMode='cover'
                    />
                </View>
                <View className='h-[120px] w-[50%]'>
                    <View>
                        <Text className='text-wrap text-light-tile1 font-bold justify-start'
                        style={{fontSize: moderateScale(21)}}>
                            Fabian Mauro Rivera Morales
                        </Text>
                    </View>
                    <View className='flex-1 justify-center'>
                        <View className='border-t-2 border-t-light-tile2'></View>
                    </View>
                    <View className='justify-end'>
                        <Text className='font-semibold text-light-tile1' style={{fontSize: moderateScale(17)}}>Codigo escuela</Text>
                        <Text className='text-light-tile1' style={{fontSize: moderateScale(15)}}>u20227896</Text>
                    </View>
                </View>
            </View>
            <View className='flex h-[70%]'>
                <View className='flex-1 gap-8 mt-8'>
                    <View className='mx-[18vw] py-3 border-b-2 border-b-light-tile2'>
                        <Text className=' text-light-tile1 font-semibold'
                        style={{fontSize: moderateScale(15)}}>Puedes entrar a la Universidad mostrando tu codigo</Text>
                    </View>
                    <View className='items-center'>
                        <View className='border-2 h-[180px] w-[320px]'></View>
                    </View>
                </View>
                <View className='flex h-[70px] border-t-2 border-t-light-tile2 justify-center items-center'>
                    <Text>Logo escuela</Text>
                </View>
            </View>
        </View>
    )
}