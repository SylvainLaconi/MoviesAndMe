import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import FilmItem from "./FilmItem";
import { getFilmsListFromApi } from "../API/TMDBApi";

const Search = ({ navigation: { navigate } }) => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchText, setSearchText] = useState("");

  const handleSearchText = (text) => {
    setSearchText(text);
    setFilms([]);
    setCurrentPage(1);
    setTotalPages(0);
  };

  const loadFilms = () => {
    if (searchText.length > 0) {
      setLoading(true);
      getFilmsListFromApi(searchText, currentPage).then((data) => {
        setTotalPages(data.total_pages);
        setCurrentPage(data.page);
        setFilms([...films, ...data.results]);
        setLoading(false);
      });
    }
  };

  const onEndReachedFunction = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      loadFilms(searchText, currentPage + 1);
    }
  };

  const displayFilmDetails = (idFilm) => {
    navigate("FilmDetail", { idFilm: idFilm });
  };

  return (
    <View style={styles.main_container}>
      <TextInput
        style={styles.textInput}
        placeholder="Titre du film"
        onChangeText={(text) => handleSearchText(text)}
        onSubmitEditing={() => loadFilms(searchText, currentPage)}
      />
      <Button
        style={styles.button}
        title="Rechercher"
        onPress={() => loadFilms(searchText, currentPage)}
      />
      {loading ? (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <FilmItem {...item} displayFilmDetails={displayFilmDetails} />
          )}
          onEndReachedThreshold={0.5}
          onEndReached={() => onEndReachedFunction()}
        />
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  textInput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5,
  },
  button: {
    height: 50,
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
