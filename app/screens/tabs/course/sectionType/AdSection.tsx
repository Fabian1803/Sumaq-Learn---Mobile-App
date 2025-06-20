import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

export default function AdSection() {
    return (
        <ScrollView className='bg-light-neutral'>
            <View className='p-3 pb-5 bg-light-neutral gap-3 border-b-2'>
                <Text className='font-semibold text-xl'>Titulo del anuncio</Text>
                <View className='flex-row items-center gap-3'>
                    <View className='border-[1px] w-8 h-8 overflow-hidden'>
                        <Image
                            source={require('@/assets/images/fontCourse.jpeg')}
                            resizeMode='cover'
                            className='w-full h-full'
                        />
                    </View>
                    <Text style={{ fontSize: 14, fontWeight: '400', lineHeight: 18 }} >
                        Fabian Mauro Rivera Morales
                    </Text>
                </View>
                <Text className='text-[12px]'>publicado: 24/03/25 a las 12:00 a.m.</Text>
            </View>
            <View className='m-3 bg-light-primary flex-1 h-full'>
                <Text className='text-lg p-3'>Estimados alumnos un buen día, si tuvieren alguna duda respecto al tema de la semana 12, no dude en consultar por este mismo canal y así no tener ningún problema.</Text>
            </View>
        </ScrollView>
    )
}