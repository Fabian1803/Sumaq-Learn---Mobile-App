import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { router } from "expo-router";
import { moderateScale } from 'react-native-size-matters';
import { Colors } from '@/constants/Colors';

type ValMenu = {
    id: number,
    menu: boolean,
    name: string,
    code: string,
    teacher: string,
}

export default function CourseCharter({ id, menu, name, code, teacher }: ValMenu) {
    return (

        <Pressable onPress={() => (router.push({
            pathname: '/screens/tabs/course/MainCourse',
            params: { id: id.toString() },
        }))}
            key={id}
            style={[
                styles.container,
                menu ? styles.gridView : styles.listView
            ]}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('@/assets/images/fontCourse.jpeg')}
                    resizeMode='cover'
                    style={styles.image}
                />
            </View>
            <View style={styles.textContainer}>
                <Text numberOfLines={menu ? 1 : 2}
                    style={[styles.courseName, { fontSize: moderateScale(menu ? 16 : 19) }]}>{name}</Text>
                <Text style={{ fontSize: moderateScale(menu ? 14 : 16), color: Colors.light.third }}>{code}</Text>
                {!menu &&
                    <Text numberOfLines={1} style={{ fontSize: moderateScale(14), color: Colors.light.fourth, }}>{teacher}</Text>}
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderWidth: 2,
        borderRightWidth: 6,
    },
    gridView: {
        width: '48.5%',
        height: 160,
    },
    listView: {
        width: '100%',
        height: 256,
    },
    imageContainer: {
        flex: 1,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignSelf: 'stretch',
    },
    textContainer: {
        height: '40%',
        padding: moderateScale(8),
        justifyContent: 'space-between',
        backgroundColor: Colors.light.neutral,
        borderTopWidth: 2,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    courseName: {
        color: Colors.light.fourth,
        fontWeight: '600',
        lineHeight: moderateScale(18),
    },
});