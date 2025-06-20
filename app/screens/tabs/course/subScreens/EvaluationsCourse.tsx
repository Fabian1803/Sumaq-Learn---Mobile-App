import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import DropDown from '@/components/shared/DropDown'
import Icon from 'react-native-vector-icons/AntDesign';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';

export default function EvaluationsCourse() {
  const [isPressed, setIsPressed] = useState(false);
  const list = ['Bandeja de entrada', 'No leído', 'Destacado']
  return (
    <View className='bg-light-primary flex-1' >
      <View className='p-3 gap-3'>
        <Text className='text-2xl font-semibold'>Total las Evaluaciones</Text>
        <Text className='text-justify'>Se listarán todas las Evaluaciones, las que suman para tu promedio final se indicarán como calificadas y las que no se indicarán como no calificadas.</Text>
        <Text className='font-medium'>Filtro por estado:</Text>
        <DropDown
          options={list}
          initialValue="No leído"
          onSelect={(val) => console.log('Valor recibido en el padre:', val)}
        />
      </View>

      <View className='px-3 flex-1 bg-light-primary'>
        <ScrollView className='border-t-2 py-3'>
          <Pressable onPress={()=> (router.push('/screens/tabs/course/sectionType/ExamSection'))}
            onPressIn={() => (setIsPressed(true))}
            onPressOut={() => (setIsPressed(false))}
            className={`border-2 p-3 gap-3 bg-light-neutral ${
              isPressed ? 'border-r-2 ml-1' : 'border-r-[6px]'
            }`}
          >
            <Text className='font-medium text-lg'>Practica calificada</Text>
            <Text>Semana 1</Text>
            <View className='flex-row gap-2 item border-1 bg-light-yellow border-[1px] py-1 px-2 items-center self-start'>
              <Icon name="exclamationcircleo" size={16} color={Colors.light.fourth} />
              <Text className='text-light-fourth'>Entregado</Text>
            </View>
            <View>
              <Text>Desde: 24/03/25 a las 12:00 a.m.</Text>
              <Text>Hasta ps: 22/07/25 a las 11:59 p.m.</Text>
            </View>
          </Pressable>
        </ScrollView>
      </View>

    </View>
  )
}