import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import { TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'

const Signup = () => {

    const onSignup = async () => { }
    const [countryCode, setCountryCode] = useState("+49")
    const [phoneNumber, setphoneNumber] = useState("123 456 7890")
    const keyboardverticalOffset = Platform.OS === "ios" ? 90 : 0

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={keyboardverticalOffset}>
            <View style={defaultStyles.container}>
                <Text style={defaultStyles.header}>Let's get started!</Text>
                <Text style={defaultStyles.descriptionText}>
                    Enter your phone number. We will send you a confirmation code there
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput style={[styles.input, { flex: 0.2 }]} placeholder="Country code" keyboardType="numeric" placeholderTextColor={Colors.gray} value={countryCode} />
                    <TextInput style={[styles.input, { flex: 1 }]} placeholder="Mobile number" keyboardType="numeric" placeholderTextColor={Colors.gray} value={phoneNumber} onChangeText={setphoneNumber} />
                </View>
                <Link href={"/login"} asChild>
                    <TouchableOpacity>
                        <Text style={defaultStyles.textLink}>Already have an account? Log in</Text>
                    </TouchableOpacity>
                </Link>

                <View style={{ flex: 1 }} />

                <TouchableOpacity style={[defaultStyles.pillButton, phoneNumber === "" ? styles.disabled : styles.enabled, { marginTop: 20 }]} onPress={onSignup}>
                    <Text style={defaultStyles.buttonText}>Sign up</Text>
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


export default Signup