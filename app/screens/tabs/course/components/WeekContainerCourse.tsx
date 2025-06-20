import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { ReactNode, useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { Colors } from '@/constants/Colors';

type Promps = {
  children: ReactNode,
  information?: boolean,
  subContainer?: boolean,
  name?: string,
  num?: string,
}

export default function WeekContainerCourse({ children, information, subContainer, num, name}: Promps) {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <View>
      <Pressable onPress={() => (setIsPressed(!isPressed))}
        style={[styles.head, { 
          borderRightWidth: isPressed ? 2 : subContainer ? 2 : 6,
          paddingVertical: information ? 13 : 15,
          }]}>
        {information ? (
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, gap: 5, }}>
            <Icon name="book" size={25} color={Colors.light.fourth} />
            <Text style={styles.text}>Informacion general del curso</Text>
          </View>
        ) : subContainer ? (
          <Text style={styles.text}>{name}</Text>
        ) : (
          <Text style={styles.text}>Semana {num}</Text>
        )}
        <Icon name={isPressed ? 'up' : "down"} size={20} color={Colors.light.fourth} />
      </Pressable>
      <View style={[styles.body, { display: isPressed ? 'flex' : 'none' }]}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  head: {
    borderWidth: 2,
    flexDirection: 'row',
    backgroundColor: Colors.light.neutral,
    paddingLeft: 5,
    paddingRight: 10,
    alignItems: 'center',
  },
  body: {
    borderWidth: 2,
    padding: 5,
    borderTopWidth: 0,
  },
  text: {
    flex: 1,
    color: Colors.light.fourth,
    fontSize: 16,
    fontWeight: '600',
  },
})