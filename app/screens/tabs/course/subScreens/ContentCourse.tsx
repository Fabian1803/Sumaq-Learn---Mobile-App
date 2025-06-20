import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import WeekContainerCourse from '../components/WeekContainerCourse'
import SectionContainerCourse from '../components/SectionContainerCourse'
import { useLocalSearchParams } from 'expo-router'

type Material = {
  nombre: string;
  tipo: 'material' | 'forum' | 'exam';
  pdf_url?: string;
  forum_id?: string;
  task_ref?: string;
};

type Clase = {
  titulo: string;
  materiales: Material[];
};

type Semana = {
  titulo: string;
  clases: Clase[];
};

type ContentData = {
  section_code: string;
  name: string;
  description: string;
  extra: {
    general?: Material[];
    semanas: Semana[];
  };
};

export default function ContentCourse() {
  const { code } = useLocalSearchParams<{ code: string }>()
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/content/${code}`)
      .then(res => res.json())
      .then(json => {
        if (Array.isArray(json) && json.length > 0) {
          setContent(json[0]); // Tomamos el primer (y único) resultado
        }
      })
      .catch(err => console.error("Error al cargar contenido:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Text>Cargando contenido...</Text>;
  }

  if (!content) {
    return <Text>No hay contenido disponible.</Text>;
  }
  const semanas = content.extra.semanas || []
  const general = content.extra.general || []

  return (
    <ScrollView className='bg-light-primary p-3'>
      {general.length > 0 && (
        <WeekContainerCourse information>
          {general.map((mat, i) => (
            <SectionContainerCourse
              key={i}
              name={mat.nombre}
              type={mat.tipo}
            />
          ))}
        </WeekContainerCourse>
      )}

      {semanas.length > 0 ? (
        <Text className='py-3 text-xl font-semibold'>Todas las semanas ({semanas.length})</Text>
      ) : (
        <Text className='py-3 text-xl font-semibold'>No hay semanas disponibles</Text>
      )}

      <View className='flex-1 gap-3 mb-14'>
        {semanas.map((semana, i) => (
          <WeekContainerCourse key={i} num={`${i + 1}`}>
            <View className='gap-1'>
              {semana.clases.map((clase, j) => (
                <WeekContainerCourse key={`${i}-${j}`} name={clase.titulo} subContainer>
                  <View className='gap-1'>
                    {clase.materiales.map((mat, k) => (
                      <SectionContainerCourse
                        key={`${i}-${j}-${k}`}
                        name={mat.nombre}
                        type={mat.tipo}
                        forum_id={mat.tipo === 'forum' ? mat.forum_id : undefined}
                        task_ref={mat.tipo === 'exam' ? mat.task_ref : undefined}
                      />
                    ))}
                  </View>
                </WeekContainerCourse>
              ))}
            </View>
          </WeekContainerCourse>
        ))}
      </View>
    </ScrollView>
  )
}