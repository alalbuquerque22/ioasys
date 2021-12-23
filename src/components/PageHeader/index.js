import React from "react";
import { Image, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import styles from "./styles";
import Hamburger from "../../assets/hamburger.png";
import logo from '../../assets/logo-black.png';
const PageHeader=()=>{
    return(
        <View style={{flex:1}}>

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
                        <View style={{alignItems:'center',justifyContent:'center',padding:20}}>
                            <Image source={Hamburger}  />
                            
                        </View>
                    </View>
                </View>
                                </View>
    )
}
export default PageHeader;