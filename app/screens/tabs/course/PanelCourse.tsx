import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';

type prop = {
    icon?: string,
    name: string,
    description: string,
    type?: string,
    code: string,
    idCourse: number,
}

export default function PanelCourse({ icon, name, description, type, code, idCourse }: prop) {
    const iconName = icon || 'book';
    const typeRoutes = {
        default: '/screens/tabs/course/subScreens/DefaultCourse',
        content: '/screens/tabs/course/subScreens/ContentCourse',
        forum: '/screens/tabs/course/subScreens/ForumsCourse',
        ad: '/screens/tabs/course/subScreens/AdCourse',
        zoom: '/screens/tabs/course/subScreens/ZoomCourse', 
        evaluations: '/screens/tabs/course/subScreens/EvaluationsCourse',
        ratings: '/screens/tabs/course/subScreens/RatingsCourse',
        tasks: '/screens/tabs/course/subScreens/TasksCourse',
    } as const;
    return (
        <TouchableOpacity
            onPress={() => {
                const route = typeRoutes[type as keyof typeof typeRoutes] || typeRoutes.default;
                router.push({ pathname: route, params: { code, idCourse}});
            }}
        >
            <View style={styles.container}>
                <View style={styles.col1}>
                    <Icon
                        name={iconName}
                        size={40}
                        color={Colors.light.fourth}
                    />
                </View>
                <View style={styles.col2}>
                    <Text style={styles.text1}>{name}</Text>
                    <Text numberOfLines={2}>{description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderRightWidth: 6,
        flexDirection: 'row',
        padding: 5,
        gap: 5,
        height: 90,
        backgroundColor: Colors.light.neutral,
        marginBottom: 10,
    },
    col1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
    },
    col2: {
        flex: 1,
        justifyContent: 'center',
    },
    text1: {
        fontSize: 20,
        fontWeight: '500',
    },
    text2: {
        padding: 5,
    }
})