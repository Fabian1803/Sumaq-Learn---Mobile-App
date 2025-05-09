import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { moderateScale } from 'react-native-size-matters';
import CourseCharter from '@/components/dashboard/CourseCharter';
import SemesterDropDown from '@/components/dashboard/SemesterDropDown';
import { Colors } from '@/constants/Colors';

export default function Course() {
  const [isGrid, setIsGrid] = useState(false);
  return (
    <View className='px-5 pt-5 flex-1 border-t-[3px] bg-light-primary'>
      <View className='gap-4'>
        <Text style={{ fontSize: moderateScale(20) }}>Mis cursos</Text>
        <View>
          <Text>Filtrar por:</Text>
          <SemesterDropDown />
        </View>

        <View className='flex-row items-center border-b-2 pb-1 border-b-light-fourth'>
          <Text className='flex-1' style={{ fontSize: moderateScale(18) }}>Nombre del ciclo actual</Text>
          <Pressable onPress={() => (setIsGrid(!isGrid))}
            className='p-1 bg-light-secondary border-2 border-light-primary rounded-lg'>
            <Text>
              <Icon name={isGrid ? 'scan-outline' : 'grid-outline'} size={28} style={{color: Colors.light.fourth}} />
            </Text>
          </Pressable>
        </View>

      </View>

      <ScrollView
        className="h-auto pt-5"
        showsVerticalScrollIndicator={false}
      >
        <View className={`${isGrid ? 'flex-row flex-wrap gap-[3%] pb-16' : 'flex-col gap-5 pb-5'}`}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <CourseCharter id={item} key={item} menu={isGrid} />
          ))}
        </View>
      </ScrollView>

    </View>
  );
}
