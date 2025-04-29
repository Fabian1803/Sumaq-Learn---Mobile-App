import {
    View, Text, StyleSheet, TextInput, TouchableOpacity,
    KeyboardAvoidingView, Platform, Pressable,
    Image
} from 'react-native';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Colors } from '@/constants/Colors';

export default function LoginScreen() {
    const [passBtn, setPassBtn] = useState(false);
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');

    const handleLogin = () => {
        // Aquí iría la lógica de autenticación
        console.log('Código:', code);
        console.log('Contraseña:', password);
    };

    const handleForgotPassword = () => {
        // Navegar a pantalla de recuperación de contraseña
        console.log('Olvidé mi contraseña');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.header}>
                <Image
                    source={require('@/assets/images/icon.png')}
                    style={{ width: 110, height: 110 }}
                />
            </View>

            <View style={styles.universityContainer}>
                <View style={styles.universityLogo}></View>
                <Text style={styles.universityText}>Nombre de la universidad</Text>
            </View>

            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Código:</Text>
                    <View style={styles.inputWrapper}>
                        <Icon name="user" size={20} color="#769FCD" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Ingresa tu código"
                            placeholderTextColor="#769FCD"
                            value={code}
                            onChangeText={setCode}
                            autoCapitalize="none"
                            keyboardType="default"
                        />
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Contraseña:</Text>
                    <View style={styles.inputWrapper}>
                        <Icon name="lock" size={20} color="#769FCD" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Ingresa tu contraseña"
                            placeholderTextColor={Colors.light.tile1}
                            secureTextEntry={!passBtn}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity
                            onPress={() => setPassBtn(!passBtn)}
                            style={styles.eyeIcon}
                        >
                            <Icon
                                name={passBtn ? "eye" : "eye-off"}
                                size={20}
                                color="#769FCD"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={handleForgotPassword}
                    style={styles.forgotPasswordButton}
                >
                    <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>

                <Link href="./Course" asChild>
                    <Pressable style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Ingresar</Text>
                    </Pressable>
                </Link>
            </View>
        </KeyboardAvoidingView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor: Colors.light.tile1,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        maxHeight: 100,
        marginTop: 40,
    },
    universityContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 220,
    },
    universityLogo: {
        width: 100,
        height: 100,
        borderRadius: 40,
        marginBottom: 10,
        backgroundColor: '#e1f5fe', // Color temporal para visualización
    },
    universityText: {
        fontSize: 26,
        textAlign: 'center',
        color: Colors.light.tile4,
        fontWeight: 700,
    },
    formContainer: {
        flex: 1,
        gap: 20,
    },
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        fontWeight: '700',
        color: Colors.light.tile4,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: Colors.light.tile4,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 16,
        color: Colors.light.tile1,
    },
    eyeIcon: {
        padding: 10,
    },
    forgotPasswordButton: {
        alignSelf: 'flex-end',
        marginTop: -10,
    },
    forgotPasswordText: {
        color: Colors.light.tile4,
        fontSize: 14,
        fontWeight: 500,
    },
    loginButton: {
        backgroundColor: Colors.light.tile3,
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
        opacity: 1,
    },
    loginButtonDisabled: {
        opacity: 0.5,
    },
    loginButtonText: {
        color: Colors.light.tile1,
        fontSize: 16,
        fontWeight: 'bold',
    },
});