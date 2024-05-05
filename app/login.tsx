import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import { TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

enum SignInType {
    Phone, Email, Google, Apple
}


const Login = () => {

    const [countryCode, setCountryCode] = useState("+49")
    const [phoneNumber, setphoneNumber] = useState("123 456 7890")
    const keyboardverticalOffset = Platform.OS === "ios" ? 90 : 0

    const onLogin = async (type: SignInType) => {
        if (type === SignInType.Phone) {

        }
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={keyboardverticalOffset}>
            <View style={defaultStyles.container}>
                <Text style={defaultStyles.header}>Welcome back!</Text>
                <Text style={defaultStyles.descriptionText}>
                    Enter your phone number associated with your account
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput style={[styles.input, { flex: 0.2 }]} placeholder="Country code" keyboardType="numeric" placeholderTextColor={Colors.gray} value={countryCode} />
                    <TextInput style={[styles.input, { flex: 1 }]} placeholder="Mobile number" keyboardType="numeric" placeholderTextColor={Colors.gray} value={phoneNumber} onChangeText={setphoneNumber} />
                </View>
                <Link href={"/signup"} asChild>
                    <TouchableOpacity>
                        <Text style={defaultStyles.textLink}>Don't have an account? Sign up</Text>
                    </TouchableOpacity>
                </Link>

                <TouchableOpacity onPress={() => onLogin(SignInType.Phone)} style={[defaultStyles.pillButton, phoneNumber === "" ? styles.disabled : styles.enabled, { marginTop: 20 }]}>
                    <Text style={defaultStyles.buttonText}>Sign in</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
                    <View style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray }} />
                    <Text style={{ color: Colors.gray, fontSize: 20 }}>or</Text>
                    <View style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray }} />
                </View>
                <TouchableOpacity onPress={() => onLogin(SignInType.Email)} style={[defaultStyles.pillButton, { flexDirection: "row", gap: 16, marginTop: 20, backgroundColor: "#fff" }]}>
                    <Ionicons name="mail" size={24} color={"#000"} />
                    <Text style={[defaultStyles.buttonText, { color: "000" }]}>Continue with email</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onLogin(SignInType.Google)} style={[defaultStyles.pillButton, { flexDirection: "row", gap: 16, marginTop: 20, backgroundColor: "#fff" }]}>
                    <Ionicons name="logo-google" size={24} color={"#000"} />
                    <Text style={[defaultStyles.buttonText, { color: "000" }]}>Continue with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onLogin(SignInType.Apple)} style={[defaultStyles.pillButton, { flexDirection: "row", gap: 16, marginTop: 20, backgroundColor: "#fff" }]}>
                    <Ionicons name="logo-apple" size={24} color={"#000"} />
                    <Text style={[defaultStyles.buttonText, { color: "000" }]}>Continue with Apple</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 40,
        flexDirection: "row"
    },
    input: {
        backgroundColor: Colors.lightGray,
        padding: 20,
        borderRadius: 16,
        fontSize: 20,
        marginRight: 10
    },
    enabled: {
        backgroundColor: Colors.primary
    },
    disabled: {
        backgroundColor: Colors.primaryMuted
    }

})


export default Login
