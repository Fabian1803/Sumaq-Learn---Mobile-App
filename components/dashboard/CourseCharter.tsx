import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { moderateScale } from 'react-native-size-matters';
import { Colors } from '@/constants/Colors';

type ValMenu = {
    id: number,
    menu: boolean,
}

export default function CourseCharter({ id, menu }: ValMenu) {
    return (
        <View
            key={id}
            style={[
                styles.container,
                menu ? styles.gridView : styles.listView
            ]}
        >
            <View style={styles.imageContainer}>
                <Image
                    source={require('@/assets/images/fontCourse.jpeg')}
                    resizeMode='cover'
                    style={styles.image}
                />
            </View>
            <View style={styles.textContainer}>
                <Text numberOfLines={menu ? 1 : 2} 
                style={[styles.courseName, {fontSize: moderateScale(menu ? 16 : 19) }]}>Nombre del curso muy largo como cloud</Text>
                <Text style={{fontSize: moderateScale(menu ? 14 : 16), color: Colors.light.third }}>123H78G</Text>
                {!menu && 
                <Text style={{fontSize: moderateScale(16), color: Colors.light.fourth,}}>nombre del profesor con su apellido</Text>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderWidth: 3,
        borderRadius: 10,
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
        backgroundColor: Colors.light.primary,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    courseName: {
        color: Colors.light.fourth,
        fontWeight: '600', 
        lineHeight: moderateScale(18),
    },
});