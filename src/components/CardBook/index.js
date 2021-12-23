import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";
// export interface Book {
//     id: string,
//     authors: string,
//     title: string,
//     imageUrl: string,
//     publisher: string,
//     pageCount: number,
//     published: number
// }
// interface BookItemProps {
//     book: Book
// }
const CardBook = ({ id,imageUrl,title,authors,pageCount,publisher,published,object}) => {
    let url = imageUrl;
   const {navigate} = useNavigation();

    return (


        <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigate('Book',{
            object:object
        })}}>

        <View style={styles.content}>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <View style={styles.cardImage}>
                        {imageUrl&&
                        <Image
                        style={styles.image}
                        source={{ uri: url }} 
                        resizeMode="cover" />
                    }


                    </View>
                    <View style={styles.cardText}>
                        <Text style={styles.cardTitle}>
                            {title}
                        </Text>
                        <Text style={styles.cardAuthor}>
                            {authors}
                        </Text>
                        <Text style={styles.cardDescription}>
                            {pageCount} páginas
                            {'\n'}
                            {publisher}
                            {'\n'}
                            Publicado em {published}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
        </TouchableOpacity>

    )
}

export default CardBook;