import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { router } from 'expo-router';

type Props = {
  name: string;
  type: 'material' | 'forum' | 'exam';
  forum_id?: string;
  task_ref?: string;  // Prop añadida
};

export default function SectionContainerCourse({ 
  name, 
  type, 
  forum_id,
  task_ref 
}: Props) {
  const [isPressed, setIsPressed] = useState(true);
  
  const iconMap = {
    material: 'file-outline',
    forum: 'chat-minus-outline',
    exam: 'file-sign',
  } as const;

  const handlePress = () => {
    if (type === 'forum' && forum_id) {
      router.navigate({
        pathname: '/screens/tabs/course/sectionType/ForumSection',
        params: { idCourse: forum_id }
      });
    } else if (type === 'exam' && task_ref) {
      router.navigate({
        pathname: '/screens/tabs/course/sectionType/ExamSection',
        params: { taskId: task_ref }
      });
    } else {
      router.navigate('/screens/tabs/course/sectionType/MaterialSection');
    }
  };

  return (
    <Pressable
      style={[styles.container, {
        borderRightWidth: isPressed ? 6 : 2,
        marginLeft: isPressed ? 0 : 2,
      }]}
      onPressIn={() => setIsPressed(false)}
      onPressOut={() => setIsPressed(true)}
      onPress={handlePress}
    >
      <Icon name={iconMap[type]} size={25} color={Colors.light.fourth} />
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 5,
    backgroundColor: Colors.light.neutral,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  text: {
    flex: 1,
    color: Colors.light.fourth,
    fontSize: 16,
    fontWeight: '500',
  },
});