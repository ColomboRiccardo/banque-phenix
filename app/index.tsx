import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useAssets } from 'expo-asset'
import { ResizeMode, Video } from 'expo-av'
import { TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'

const Page = () => {
    const [assets] = useAssets([require("@/assets/videos/intro.mp4")])
    return (
        <View style={styles.container}>
            {assets && <Video source={{ uri: assets[0].uri }} style={styles.video} isMuted isLooping shouldPlay resizeMode={ResizeMode.COVER} />}
            <View style={{ alignItems: "center", height: "50%", justifyContent: 'flex-start', marginTop: 80 }}>
                <Text style={styles.welcome}>Welcome to Banque Phenix</Text>
            </View>
            <View style={styles.buttons}>
                <Link href={"/login"} asChild style={[defaultStyles.pillButton, { flex: 1, backgroundColor: Colors.dark }]}>
                    <TouchableOpacity>
                        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>Log In</Text>
                    </TouchableOpacity>
                </Link>
                <Link href={"/signup"} asChild style={[defaultStyles.pillButton, { flex: 1, backgroundColor: Colors.lightGray }]}>
                    <TouchableOpacity>
                        <Text style={{ color: Colors.dark, fontSize: 24, fontWeight: "bold" }}>Sign Up</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    video: {
        width: "100%",
        height: "100%",
        position: "absolute"
    },
    welcome: {
        fontSize: 38,
        fontWeight: "900",
        color: "white",
        textTransform: "uppercase",
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 20,
        paddingHorizontal: 10,
        marginTop: "auto",
        marginBottom: 40
    }
})

export default Page