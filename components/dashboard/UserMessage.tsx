import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { Colors } from '@/constants/Colors'
import { router } from 'expo-router'

export default function UserMessage() {
    return (
        <TouchableOpacity style={styles.container} onPress={()=> (router.push('/screens/screenMessages/ChatUser'))}>
            <View style={styles.block1}>
                <View style={styles.icon}>
                    <Image
                        source={require('@/assets/images/fontCourse.jpeg')}
                        style={styles.iconChat}
                        resizeMode='cover'
                    />
                </View>
                <View>
                    <Text numberOfLines={2} 
                    style={{fontSize: 20, fontWeight: '600', color: Colors.light.primary}}>Fabian Mauro Rivera Morales</Text>
                    <Text style={{fontSize: 16, fontWeight: '600', color: Colors.light.primary}}>u20227896</Text>
                </View>
            </View>
            <View style={styles.block2}>
                <View style={styles.type}>
                    <Icon name='mail' size={28} style={{color: Colors.light.primary}} />
                    <Text style={{color: Colors.light.primary}}>u20227896@uni.edu.pe</Text>
                </View>
                <View style={styles.type}>
                    <Icon name='book' size={28} style={{color: Colors.light.primary}}/>
                    <Text style={{color: Colors.light.primary}}>Ingieneria de software</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.true,
        padding: 15,
        gap: 15,
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 10,
    },
    block1: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    icon: {
        borderWidth: 2,
        width: 75,
        height: 75,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
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
        gap: 10,
        alignItems: 'center',
    },
})