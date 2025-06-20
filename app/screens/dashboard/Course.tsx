import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { moderateScale } from 'react-native-size-matters';
import CourseCharter from '@/components/dashboard/CourseCharter';
import SemesterDropDown from '@/components/dashboard/SemesterDropDown';
import { Colors } from '@/constants/Colors';
import { API_BASE_URL } from '@/services/api';
import * as SecureStore from 'expo-secure-store';
import { jwtDecode } from 'jwt-decode';

interface Course {
  id: number;
  name: string;
  code: string;
  teacher_name?: string;
}

interface JwtPayload {
  sub: string;
}

export default function Course() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isGrid, setIsGrid] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = await SecureStore.getItemAsync('jwt');
        if (!token) throw new Error('Token no encontrado');

        const decoded = jwtDecode<JwtPayload>(token);
        const userId = parseInt(decoded.sub);


        const res = await fetch(`${API_BASE_URL}/courses/user/${userId}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error('Error al obtener cursos');
        }

        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.error('Error al obtener cursos:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <View className='px-3 pt-3 flex-1 bg-light-primary'>
      <View className='gap-4'>
        <Text style={{ fontSize: moderateScale(20) }}>Mis cursos</Text>
        <View>
          <Text>Filtrar por:</Text>
          <SemesterDropDown />
        </View>

        <View className='flex-row items-center border-b-2 pb-1 border-b-light-fourth'>
          <Text className='flex-1' style={{ fontSize: moderateScale(18) }}>Nombre del ciclo actual</Text>
          <Pressable
            onPress={() => (setIsGrid(!isGrid))}
            className='p-1  border-2'
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            style={{ borderRightWidth: isPressed ? 2 : 6 }}
          >
            <Text>
              <Icon name={isGrid ? 'scan-outline' : 'grid-outline'} size={28} style={{ color: Colors.light.fourth }} />
            </Text>
          </Pressable>
        </View>

      </View>

      <ScrollView
        className="h-auto pt-5"
        showsVerticalScrollIndicator={false}
      >
        <View className={`${isGrid ? 'flex-row flex-wrap gap-[3%] pb-16' : 'flex-col gap-3 pb-5'}`}>
          {courses.map((course) => (
            <CourseCharter
              key={course.id}
              id={course.id}
              menu={isGrid}
              name={course.name}
              code={course.code}
              teacher={course.teacher_name || 'Profesor no asignado'}
            />
          ))}
        </View>
      </ScrollView>

    </View>
  );
}
