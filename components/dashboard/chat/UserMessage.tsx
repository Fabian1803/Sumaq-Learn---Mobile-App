import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { Colors } from '@/constants/Colors'
import { router } from 'expo-router'

export default function UserMessage() {
    return (
        <TouchableOpacity style={styles.container} onPress={()=> (router.push('/screens/tabs/messages/ChatUser'))}>
            <View style={styles.block1}>
                <View style={styles.icon}>
                    <Image
                        source={require('@/assets/images/fontCourse.jpeg')}
                        style={styles.iconChat}
                        resizeMode='cover'
                    />
                </View>
                <View style={{ flex: 1}}>
                    <Text numberOfLines={2} 
                    style={{fontSize: 20, fontWeight: '600', lineHeight: 20, color: Colors.light.fourth}}>Fabian Mauro Rivera Morales</Text>
                    <Text style={{fontSize: 16, fontWeight: '600', color: Colors.light.fourth}}>u20227896</Text>
                </View>
            </View>
            <View style={styles.block2}>
                <View style={styles.type}>
                    <Icon name='mail' size={28} style={{color: Colors.light.fourth}} />
                    <Text style={{color: Colors.light.fourth}}>u20227896@uni.edu.pe</Text>
                </View>
                <View style={styles.type}>
                    <Icon name='book' size={28} style={{color: Colors.light.fourth}}/>
                    <Text style={{color: Colors.light.fourth}}>Ingieneria de software</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.neutral,
        padding: 8,
        gap: 8,
        borderWidth: 2,
        borderRightWidth: 6,
        marginBottom: 10,
    },
    block1: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    icon: {
        borderWidth: 2,
        width: 75,
        height: 75,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconChat: {
        width: 150,
        height: 150,
    },
    block2: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    type: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
})