import React from "react";
import { ImageBackground, SafeAreaView, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import background from '../../assets/background.png';
import logo from '../../assets/Logo.png';
import { useNavigation } from "@react-navigation/native";
const SignIn = () => {
    const { navigate } = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground
                source={background}
                style={styles.content}
                resizeMode="stretch"
            >
                <View style={styles.logoContent}>
                    <Image
                        style={styles.logo}
                        source={logo}
                        resizeMode="contain" />
                    <Text style={styles.title}>Books</Text>
                </View>
                <View style={styles.formContent}>
                    <View style={styles.boxInput}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="#fff"
                        />
                    </View>
                    <View style={[styles.boxInput]}>
                        <Text style={styles.label}>Senha</Text>
                        <TextInput 
                         style={styles.input}
                         keyboardType="visible-password"
                         placeholder="Email"
                         placeholderTextColor="#fff"
                         />
                         <View style={styles.boxButton}>

                         <TouchableOpacity
                          onPress={() => navigate("Home")}
                          style={styles.button}>
                                <Text style={styles.buttonText}>Entrar</Text>
                         </TouchableOpacity>
                         </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

export default SignIn;