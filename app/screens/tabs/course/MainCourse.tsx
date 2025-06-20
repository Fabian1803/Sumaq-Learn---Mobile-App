import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import PanelCourse from './PanelCourse'
import { useLocalSearchParams } from 'expo-router'

type CourseDetails = {
  id: number;
  name: string;
  code: string;
  course_type: string;
  teacher: {
    id: number;
    name: string;
  };
  modules: {
    type: string;
    description: string;
  }[];
};

export default function MainCourse() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [data, setData] = useState<CourseDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:8000/courses/${id}/details`)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error('Error al obtener curso:', err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <ActivityIndicator size="large" color="#000" style={{ marginTop: 40 }} />;
  }

  if (!data) {
    return <Text>Error cargando curso</Text>;
  }

  type ModuleType =
    | 'syllabus'
    | 'content'
    | 'evaluations'
    | 'tasks'
    | 'forum'
    | 'ratings'
    | 'ad'
    | 'zoom';

  const MODULE_CONFIG: Record<ModuleType, { name: string }> = {
    syllabus: { name: 'Sílabo' },
    content: { name: 'Contenido' },
    evaluations: { name: 'Evaluaciones' },
    tasks: { name: 'Tareas' },
    forum: { name: 'Foro' },
    ratings: { name: 'Calificaciones' },
    ad: { name: 'Anuncios' },
    zoom: { name: 'Clases por Zoom' },
  };

  return (
    <View className=' border-light-fourth flex-1 bg-light-primary'>
      <View className='px-3 pt-12 pb-5 border-light-fourth'>
        <Text
          className={`px-2 py-1 self-start border-[1px] text-white ${data.course_type === 'Presencial'
            ? 'bg-light-orange' : data.course_type === 'Virtual' ? 'bg-light-info'
              : data.course_type === 'Remoto' ? 'bg-light-true' : 'bg-light-secondary'
            }`}
        >
          {data.course_type}
        </Text>
        <Text className='text-[28px] font-semibold text-light-fourth'>{data.name}</Text>
        <Text>{data.code}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className='border-t-2 mx-3 pt-5'>
        {data.modules.map((mod) => (
          <PanelCourse
            key={mod.type}
            name={MODULE_CONFIG[mod.type as ModuleType]?.name || mod.type}
            description={mod.description}
            type={mod.type as ModuleType}
            code={data.code}
            idCourse={data.id}
          />
        ))}
      </ScrollView>
    </View>
  )
}