import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { Colors } from '@/constants/Colors';

export default function ExamSection() {
  const [isPressed, setIsPressed] = useState<number | null>(null);

  const listInfo = [
    {
      icon: "calendar",
      name: 'Fecha de vencimiento',
      cont: 'Miércoles, 28 de mayo de 2025 a las 20:00 p.m.',
    },
    {
      icon: "retweet",
      name: 'Intentos utilizados',
      cont: 'Has utilizado 1 de 1 intento',
    },
    {
      icon: "filetext1",
      name: 'Rúbrica',
      cont: 'Esta tarea será evaluada con la siguiente rúbrica. Ver rúbrica',
    },
  ]
  const buttons = [
    { text: 'Ver Rubrica Calificada' },
    { text: 'Revisar Tarea' },
  ];
  return (
    <ScrollView className='bg-light-primary p-3'>
      <View className='flex-row justify-between items-center'>
        <Text className='text-xl font-semibold flex-1'>Titulo del examen muy largo para probar el tema</Text>
        <View className='items-center'>
          <Text className='text-lg font-medium'>Nota</Text>
          <Text className='text-2xl font-bold'>20/20</Text>
        </View>
      </View>
      <View className='flex-row justify-between items-center my-3'>
        <Text>Examen Calificado</Text>
        <View className='flex-row border-[1px] bg-light-true px-2 py-1 gap-1'>
          <Icon
            name="check"
            size={20}
            color={Colors.light.primary}
          />
          <Text className='text-light-primary font-semibold'>Entregado</Text>
        </View>
      </View>
      <View className='gap-3 pb-5'>
        {buttons.map((btn, index) => (
          <Pressable
            key={index}
            onPressIn={() => setIsPressed(index)}
            onPressOut={() => setIsPressed(null)}
            className='border-2 p-3 bg-light-neutral'
            style={{
              borderRightWidth: isPressed === index ? 2 : 6,
              marginLeft: isPressed === index ? 4 : 0,
            }}
          >
            <Text className='font-bold text-lg text-center'>{btn.text}</Text>
          </Pressable>
        ))}
      </View>
      <View className='gap-3 border-y-[1px] py-5'>
        {listInfo.map((i, index) => (
          <View
            key={index}
            className='flex-row p-3 border-[1px] gap-3 items-center bg-light-neutral'>
            <Icon
              name={i.icon}
              size={40}
              color={Colors.light.fourth}
            />
            <View className='flex-1 justify-center'>
              <Text className='text-lg font-semibold'>{i.name}</Text>
              <Text>{i.cont}</Text>
            </View>
          </View>
        ))}
      </View>
      <View className='py-3 gap-3 mb-16'>
        <View>
          <Text className='text-xl font-semibold'>Indicaciones de la tarea</Text>
          <Text>indicaciones del profesor sobre la entrega de esta tarea</Text>
        </View>
        <View>
          <Text className='text-xl font-semibold'>Entregables esperados:</Text>
          <Text>aqui va el contenido que se espera entregar referente a la entrega</Text>
        </View>
        <View>
          <Text className='text-xl font-semibold'>Fecha de entrega de la actividad:</Text>
          <Text className='text-justify'>Del Miércoles, 11 de junio a las 02:07 p.m. al Viernes, 13 de junio a las 02:26 p.m.</Text>
        </View>
      </View>
    </ScrollView>
  )
}