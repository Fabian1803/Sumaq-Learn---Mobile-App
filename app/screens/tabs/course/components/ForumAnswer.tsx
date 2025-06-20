import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React, { ReactNode, useState } from 'react'
import { Colors } from '@/constants/Colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  isRespuest?: boolean;
  children?: ReactNode;
  messager: string;
  username?: string;   
  timestamp?: string;    
};
export default function ForumAnswer({ isRespuest, children, messager }: Props) {
    const [isPressed, setIsPressed] = useState(false);
    return (
        <View style={{ gap: 5, flexDirection: isRespuest ? 'row' : 'column' }}>
            {isRespuest &&(
                <View style={{ paddingLeft: 10, paddingRight: 5 }}>
                    <View style={{ borderWidth: 2, flex: 1, borderStyle: 'dotted' }}></View>
                </View>
            )}
            <View style={styles.container}>
                <View style={styles.head}>
                    <View style={styles.imgCont}>
                        <Image
                            source={require('@/assets/images/fontCourse.jpeg')}
                            resizeMode='cover'
                            style={styles.imgIcon}
                        />
                    </View>
                    <View style={styles.nameCont}>
                        <Text style={{ fontSize: 17, fontWeight: '500', lineHeight: 18 }} >
                            Fabian Mauro Rivera Morales
                        </Text>
                        <Text>U20227896</Text>
                    </View>
                </View>
                <View style={{ padding: 6, gap: 13 }}>
                    <Text style={{ fontSize: 18, textAlign: 'justify' }}>{messager}</Text>

                    <View style={styles.contentMessager}>
                        <Text style={{ fontSize: 12 }}>24/03/2025 a las 09:47</Text>
                        {!isRespuest && (
                            <Pressable 
                            onPressIn={() => (setIsPressed(true))}
                            onPressOut={() => (setIsPressed(false))}
                            style={[styles.btnRest, {borderRightWidth: isPressed ? 2 : 5}]}
                            >
                                <Icon name="subdirectory-arrow-right" size={20} color={Colors.light.fourth} />
                                <Text style={{ fontWeight: '500' }}>Responder</Text>
                            </Pressable>
                        )}
                    </View>
                </View>
            </View>
            {!isRespuest && (<View>{children}</View>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        backgroundColor: Colors.light.neutral,
        flex: 1,
    },
    head: {
        flexDirection: 'row',
        gap: 10,
        borderBottomWidth: 2,
        padding: 6,
    },
    imgCont: {
        overflow: 'hidden',
        borderWidth: 2,
        width: 60,
        height: 60,
    },
    imgIcon: {
        height: '100%',
        width: '100%',
    },
    nameCont: {
        justifyContent: 'center',
        flex: 1,
        gap: 3,
    },
    contentMessager: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btnRest: {
        flexDirection: 'row',
        borderWidth: 2,
        backgroundColor: Colors.light.neutral,
        paddingHorizontal: 4,
        paddingVertical: 2,
        justifyContent: 'center'
    },
})