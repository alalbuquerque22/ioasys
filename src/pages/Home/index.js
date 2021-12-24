import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import styles from "./styles";
import CardBook from "../../components/CardBook";

import Hamburger from "../../assets/hamburger.png";
import logo from "../../assets/logo-black.png";

import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import api from "../../services/api";
import PageHeader from "../../components/PageHeader";
const Home = ({ navigation }) => {
  const [books, setBooks] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [page, setPage] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState([]);
  const [yearSelected, setYearSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([
    "Design",
    "UX Design",
    "UI Design",
    "Arquitetura da informação",
    "CSS",
    "Usabilidade",
    "Design Thinking",
    "Outros",
  ]);
  const [year, setYear] = useState([
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
  ]);
  useEffect(() => {
    getBooks();
  }, [page]);
  function toggleSelection(item) {
    let index = selected.findIndex(i => i === item);
    let arrSelected = [...selected];
    if (index !== -1) {
      arrSelected.splice(index, 1);
    } else {
      arrSelected.push(item);
    }
    setSelected(arrSelected);
  }
  function toggleSelectionYear(item) {
    let index = yearSelected.findIndex(i => i === item);
    let arrSelected = [...yearSelected];
    if (index !== -1) {
      arrSelected.splice(index, 1);
    } else {
      arrSelected.push(item);
    }
    setYearSelected(arrSelected);
    console.log('yearSelected',yearSelected)
  }

  const searchBookByTitle = (text) => {
    let arr = originalData;
    setBooks(
      arr.filter(
        (book) =>
          book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.authors.toLowerCase().includes(search.toLowerCase()) ||
          book.publisher.toLowerCase().includes(search.toLowerCase())
      )
    );

  };
  const getBooks = async () => {
    await api
      .get(`/books?page=${page}`, {
        params: {
          published:yearSelected.length > 0 ? yearSelected : null,
          category: selected.length > 0 ? selected : null,
        },
        timeout: 1000 * 5
        
        })
      .then((response) => {
        setBooks(response.data.data);
        setOriginalData(response.data.data);
        if (page > 1) {
          setBooks([...books, ...response.data.data]);
          setOriginalData([...originalData, ...response.data.data]);
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const ButtonOptionYear = () => {
    return year.map((item) => (
      <>
        <Pressable
          key={item}
          style={[
            styles.button,
            yearSelected?.findIndex(i => i === item) !== -1 ?
              styles.buttonSelected :
              styles.buttonUnselected,
          ]}
          onPress={() => toggleSelectionYear(item)}
        >
          <Text
            style={[styles.textStyle, yearSelected?.findIndex(i => i === item) !== -1 ?
              null : styles.textUnselected
            ]}
          >
            {item}
          </Text>
        </Pressable>
      </>
    ));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* <PageHeader /> */}
        <View style={styles.header}>
          <View style={styles.logoContent}>
            <Image style={styles.logo} source={logo} resizeMode="contain" />
            <Text style={styles.title}>Books</Text>
            <View style={styles.iconBox}>
              <View style={styles.iconLogout}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.replace("Login");
                  }}
                >
                  <MaterialIcons name="logout" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.formContent}>
            <View style={styles.searchBox}>
              <TextInput
                style={[{ flex: 1 }, styles.text]}
                placeholder="Procure um Livro"
                value={search}
                onChangeText={(text) => {
                  setSearch(text);
                }}
                autoCapitalize="none"
                returnKeyType="done"
                onSubmitEditing={() => searchBookByTitle()}
              ></TextInput>
              <TouchableOpacity
                style={styles.searchIcon}
                onPress={() => searchBookByTitle()}
              >
                <EvilIcons name="search" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                }}
              >
                <Image source={Hamburger} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <FlatList
          data={books}
          keyExtractor={(item) => item?.id}
          horizontal={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <>
              <CardBook
                id={item.id}
                imageUrl={item?.imageUrl}
                title={item?.title}
                authors={item?.authors[0]}
                pageCount={item?.pageCount}
                publisher={item?.publisher}
                published={item?.published}
                object={item}
              />
            </>
          )}
          refreshing={false}
          onRefresh={() => {getBooks()}}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            setPage(page + 1);
          }}
        />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View>
                <Text style={styles.modalText}>Selecione a categoria</Text>

                <View style={styles.modalButtons}>
                  {category.map((item) => (
                    <>
                      <Pressable
                        key={item}
                        style={[
                          styles.button,
                          selected?.findIndex(i => i === item) !== -1 ?
                            styles.buttonSelected :
                            styles.buttonUnselected,
                        ]}
                        onPress={() => toggleSelection(item)}
                      >
                        <Text
                          style={[
                            styles.textStyle,
                            selected?.findIndex(i => i === item) !== -1 ?
                              null : styles.textUnselected,
                          ]}
                        >
                          {item}
                        </Text>
                      </Pressable>
                    </>
                  ))}
                </View>
              </View>
              <View>
                <Text style={styles.modalText}>Selecione o ano</Text>
                <View style={styles.modalButtons}>
                  <ButtonOptionYear />
                </View>
              </View>
              <Pressable

                style={[
                  styles.button,
                  {
                    borderColor: "#B22E6F",
                    borderWidth: 1,
                    width: "25%",
                    marginTop: 40,
                    backgroundColor: '#FFF'
                  },
                ]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                   getBooks()}}
              >
                <Text style={[styles.textStyle, { color: "#B22E6F" }]}>
                  Filtrar
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};
export default Home;
