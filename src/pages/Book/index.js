import React, { useEffect } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
const Book = ({ navigation, route }) => {
  const { width, height } = Dimensions.get("window");

  useEffect(() => {
    console.log(route.params.object);
  }, []);
  let author = route.params.object.authors;
  return (
    <>
      <SafeAreaView style={{ flex: 1, height: height * 0.02 }}>
        <ScrollView>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={[
                styles.row,
                {
                  marginTop: height * 0.02,
                  height: height * 0.1,
                  width: width,
                  marginBottom: height * 0.01,
                },
              ]}
            >
              <View style={styles.buttonBack}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name="arrow-back-sharp" size={30} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.imageBox}>
              <Image
                source={{ uri: route.params.object.imageUrl }}
                resizeMode="stretch"
                style={styles.image}
              />
            </View>
            <View
              style={[styles.informationCard, { marginTop: height * 0.03 }]}
            >
              <Text numberOfLines={2} style={styles.title}>
                {route.params.object.title}
              </Text>
              <Text style={styles.subTitle}>
                {author.map((author) => author).join(", ")}
              </Text>
            </View>

            <View style={[styles.informationCard]}>
              <Text
                style={[
                  styles.informationTextLeft,
                  { marginTop: height * 0.02 },
                ]}
              >
                INFORMAÇÕES
              </Text>
              <View style={styles.row}>
                <Text style={[styles.informationTextLeft]}>Páginas</Text>
                <Text style={[styles.informationTextRight]}>
                  {route.params.object.pageCount} páginas
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.informationTextLeft]}>Editora</Text>
                <Text style={[styles.informationTextRight]}>
                  {route.params.object.publisher}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.informationTextLeft]}>Publicação</Text>
                <Text style={[styles.informationTextRight]}>
                  {route.params.object.published}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.informationTextLeft]}>Idioma</Text>
                <Text style={[styles.informationTextRight]}>
                  {route.params.object.language}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.informationTextLeft]}>
                  Título Original
                </Text>
                <Text style={[styles.informationTextRight]}>
                  {route.params.object.title}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.informationTextLeft]}>ISBN-10</Text>
                <Text style={[styles.informationTextRight]}>
                  {route.params.object.isbn10}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.informationTextLeft]}>ISBN-13</Text>
                <Text style={[styles.informationTextRight]}>
                  {route.params.object.isbn13}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.informationTextLeft]}>Categoria</Text>
                <Text style={[styles.informationTextRight]}>
                  {route.params.object.category}
                </Text>
              </View>
            </View>
            <View style={[styles.informationCard, { marginBottom: 50 }]}>
              <Text
                style={[
                  styles.informationTextLeft,
                  { marginTop: height * 0.02 },
                ]}
              >
                RESENHA DA EDITORA
              </Text>
              <View style={styles.row}>
                <Text style={[styles.description]}>
                  <Fontisto name="quote-a-right" size={24} color="#999" />{" "}
                  {route.params.object.description}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Book;
