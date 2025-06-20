import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import DropDown from '@/components/shared/DropDown'
import Icon from 'react-native-vector-icons/AntDesign';
import { Colors } from '@/constants/Colors';
import { router, useLocalSearchParams } from 'expo-router';
import moment from 'moment';
import { API_BASE_URL } from '@/services/api';

type Forum = {
  id: number;
  title: string;
  course_id: number;
  week: number;
  created_at: string;
  is_graded: boolean;
  start_date: string;
  end_date: string;
  created_by: {
    id: number;
    full_name: string;
  };
};

export default function ForumsCourse() {
  const [pressedForumId, setPressedForumId] = useState<number | null>(null);
  const [status, setStatus] = useState('Todos');
  const [forums, setForums] = useState<Forum[]>([]);
  const { idCourse } = useLocalSearchParams<{ idCourse: string }>()
  const courseId = Number(idCourse);

  useEffect(() => {
    fetch(`${API_BASE_URL}/forums/course/${courseId}/filter/${status}`)
      .then(res => res.json())
      .then(data => {
        setForums(data);
        console.log('Foros recibidos:', data);
      })
      .catch(err => console.error('Error al cargar foros:', err));
  }, [status]);

  const list = ['Todos', 'Programada', 'Por Entregar', 'Entregada', 'Vencida'];

  return (
    <View className='bg-light-neutral flex-1'>
      <View className='p-3 gap-3'>
        <Text className='text-2xl font-semibold'>Total de foros</Text>
        <Text className='text-justify'>
          Se listarán todos los foros, las que suman para tu promedio final se indicarán como calificadas y las que no se indicarán como no calificadas.
        </Text>
        <Text className='font-medium'>Filtro por estado:</Text>
        <DropDown
          options={list}
          initialValue="Todos"
          onSelect={(val) => setStatus(val)}
        />
      </View>

      <View className='px-3 flex-1 bg-light-primary border-t-2'>
        <ScrollView className='py-3' showsVerticalScrollIndicator={false} >
          <View className='gap-2'>
            {forums.map((forum, index) => (
              <Pressable
                key={forum.id}
                onPress={() => router.push({ pathname: '/screens/tabs/course/sectionType/ForumSection', params: { idCourse: forum.id }})}
                onPressIn={() => setPressedForumId(forum.id)}
                onPressOut={() => setPressedForumId(null)}
                className={`border-2 p-3 gap-3 bg-light-neutral ${pressedForumId === forum.id ? 'border-r-2 ml-1' : 'border-r-[6px]'
                  }`}
              >
                <Text className='font-medium text-lg'>
                  {forum.title} - {forum.is_graded ? 'calificado' : 'no calificado'}
                </Text>

                <Text>Semana {forum.week}</Text>

                <View className={`flex-row gap-2 item border-1 ${forum.is_graded ? 'bg-light-true' : 'bg-light-alert'} border-[1px] py-1 px-2 items-center self-start`}>
                  <Icon name="close" size={16} color={Colors.light.primary} />
                  <Text className='text-light-primary'>{forum.is_graded ? 'Entregado' : 'No entregado'}</Text>
                </View>

                <View>
                  <Text>Desde: {moment(forum.start_date).format('DD/MM/YY [a las] hh:mm a')}</Text>
                  <Text>Hasta: {moment(forum.end_date).format('DD/MM/YY [a las] hh:mm a')}</Text>
                </View>

                <Text className='text-sm text-gray-500'>
                  Creado por: {forum.created_by.full_name}
                </Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
