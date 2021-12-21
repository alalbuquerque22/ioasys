import React from "react";
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import styles from "./styles";
import logo from '../../assets/logo-black.png';
const Home = () => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.logoContent}>
                        <Image
                            style={styles.logo}
                            source={logo}
                            resizeMode="contain" />
                        <Text style={styles.title}>Books</Text>
                        <View style={styles.iconBox}>
                            <View style={styles.iconLogout}>

                                <MaterialIcons name="logout" size={24} color="black" />
                            </View>
                        </View>

                    </View>

                    <View style={styles.formContent}>
                        <View style={styles.searchBox}>
                            <TextInput style={styles.text}
                            placeholder="Procure um Livro"
                            > 
                            </TextInput>
                            <TouchableOpacity style={styles.searchIcon} >

                            <EvilIcons name="search" size={24} color="black" />
                            </TouchableOpacity>

                        </View>
                        <View style={styles.iconLogout}>

                            <MaterialIcons name="logout" size={24} color="black" />
                        </View>
                    </View>
                </View>


                <ScrollView style={{flex:1}}>
                    <View style={styles.content}>
                        <View style={styles.card}>
                            <View style={styles.cardContent}>
                                <View style={styles.cardImage}>
                                    <Image
                                        style={styles.image}
                                        source={require('../../assets/book.png')}
                                        resizeMode="cover" />
                                </View>
                                <View style={styles.cardText}>
                                    <Text style={styles.cardTitle}>
                                        O Senhor dos Anéis
                                    </Text>
                                    <Text style={styles.cardAuthor}>
                                        J.R.R. Tolkien
                                    </Text>
                                    <Text style={styles.cardDescription}>
                                        150 páginas
                                        {'\n'}
                                        Editora Loyola
                                        {'\n'}
                                        Publicado em 2020
                                    </Text>
                                </View>
                            </View>
                        </View>
                        </View>

                    </ScrollView>


            </View>
        </SafeAreaView>
    );
}
export default Home;
