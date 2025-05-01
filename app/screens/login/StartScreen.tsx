import { View, Text, Pressable, Image } from 'react-native';
import { Link } from 'expo-router';
import React, { useState } from 'react';

export default function StartScreen() {
    const [onPressend, setOnPressed] = useState({
        btn1: false,
        btn2: false,
    });

    const handlePressIn = (btn: string) => {
        setOnPressed(prevState => ({
            ...prevState,
            [btn]: true,
        }))
    };

    const handlePressOut = (btn: string) => {
        setOnPressed(prevState => ({
            ...prevState,
            [btn]: false,
        }))
    };

    return (
        <View className='flex justify-center items-center bg-light-tile1 h-full'>
            <View className='flex h-[80%] w-full justify-center items-center'>
                <Image
                    source={require('@/assets/images/icon.png')}
                    className='h-[300px] w-[300px]'
                />
            </View>
            <View className='flex h-[20%] w-full gap-1 items-center'>
                <Link href="./SearchSchoolScreen" asChild>
                    <Pressable className='w-[80%] items-center p-[15px] bg-light-tile4 rounded-lg'>
                        <Text className='text-light-tile1 font-semibold text-xl'>Encontrar mi escuela</Text>
                    </Pressable>
                </Link>
                <View className='flex gap-5 w-[80%]'>
                    <View className='flex flex-row'>
                        {/* Botón QR */}
                        <Pressable
                            onPressIn={() => handlePressIn('btn1')}
                            onPressOut={() => handlePressOut('btn1')}
                            className={`flex-1 items-center p-[15px] ${onPressend.btn1 ? 'bg-light-tile2' : ''}`}
                        >
                            <Text className='text-2xl text-light-tile4'>Cod QR</Text>
                        </Pressable>
                        <Pressable
                            onPressIn={() => handlePressIn('btn2')}
                            onPressOut={() => handlePressOut('btn2')}
                            className={`flex-1 items-center p-[15px] ${onPressend.btn2 ? 'bg-light-tile2' : ''}`}
                        >
                            <Text className='text-2xl text-light-tile4'>Network</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}