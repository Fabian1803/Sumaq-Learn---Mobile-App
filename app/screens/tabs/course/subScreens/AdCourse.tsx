import { View, Text, ScrollView, Pressable, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';

export default function AdCourse() {
  const [isPressed, setIsPressed] = useState(false);
  const list = ['Bandeja de entrada', 'No leído', 'Destacado']
  return (
    <View className='bg-light-primary flex-1' >
      <View className='p-3 gap-3'>
        <Text className='text-2xl font-semibold'>Todos los anuncios</Text>
        <Text className='font-medium'>Filtro por estado:</Text>
        <View className='border-2 flex-row p-3 bg-light-neutral'>
          <TextInput className='flex-1'/>
          <Icon name="search1" size={20} color={Colors.light.fourth} />
        </View>
      </View>

      <View className='px-3 flex-1 bg-light-primary'>
        <ScrollView className='border-t-2 py-3'>
          <Pressable onPress={() => (router.push('/screens/tabs/course/sectionType/AdSection'))}
            onPressIn={() => (setIsPressed(true))}
            onPressOut={() => (setIsPressed(false))}
            className={`border-2 p-3 gap-10 bg-light-neutral ${isPressed ? 'border-r-2 ml-1' : 'border-r-[6px]'
              }`}
          >
            <Text className='font-medium text-lg'>Titulo del anuncio</Text>
            <View className='gap-3'>
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
              <Text>publicado: 24/03/25 a las 12:00 a.m.</Text>
            </View>
          </Pressable>
        </ScrollView>
      </View>

    </View>
  )
}
