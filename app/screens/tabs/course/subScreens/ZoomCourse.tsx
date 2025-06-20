import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'

export default function ZoomCourse() {
  const [isInit, setIsInit] = useState(false);

  const list = [
    {
      tittle: 'Titulo largo sobre la clase que hay que tener',
      type: 'semana 3',
      url: 'sala1',
      status: true,
    },
    {
      tittle: 'Titulo largo sobre la clase que hay que tener',
      type: 'semana 4',
      url: 'sala1',
      status: true,
    },
    {
      tittle: 'Titulo largo sobre la clase que hay que tener',
      type: 'semana 5',
      url: 'sala1',
      status: true,
    },
    {
      tittle: 'Titulo largo sobre la clase que hay que tener',
      type: 'semana 1',
      url: 'sala1',
      status: false,
    },
    {
      tittle: 'Titulo largo sobre la clase que hay que tener',
      type: 'semana 2',
      url: 'sala1',
      status: false,
    },
  ];

  const filteredList = list.filter(item => item.status === isInit);

  return (
    <ScrollView className='bg-light-primary p-3'>
      <View className='flex-row'>
        <Pressable
          className={`border-2 border-r-[1px] flex-1 py-4 ${isInit ? 'bg-light-accent' : ''}`}
          onPress={() => setIsInit(true)}
        >
          <Text className='text-center'>Próximas clases</Text>
        </Pressable>
        <Pressable
          className={`border-2 border-l-[1px] flex-1 py-4 ${!isInit ? 'bg-light-accent' : ''}`}
          onPress={() => setIsInit(false)}
        >
          <Text className='text-center'>Clases pasadas</Text>
        </Pressable>
      </View>

      <Text className='my-3 text-xl font-medium'>Tus clases vía Zoom</Text>

      <View className='gap-3'>
        {filteredList.map((i, index) => (
          <View
            key={index}
            className='border-2 border-r-[6px] p-3 gap-3 bg-light-neutral'
          >
            <Text
              className='text-xl font-semibold leading-5'
              numberOfLines={3}
            >
              {i.tittle}
            </Text>
            <Text>{i.type}</Text>
            <Pressable className='bg-light-orange self-start border-2 px-3 py-1'>
              <Text className='text-lg'>Unirse a clase</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
