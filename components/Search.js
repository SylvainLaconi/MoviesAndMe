import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import FilmItem from "./FilmItem";
import axios from "axios";
import API_TOKEN from "../API/TMDBApi";

const Search = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  let searchText = "";

  const loadFilms = async () => {
    if (searchText.length > 0) {
      try {
        const url =
          "https://api.themoviedb.org/3/search/movie?api_key=" +
          API_TOKEN +
          "&language=fr&query=" +
          searchText;
        const dataMovies = await axios.get(url);
        setFilms(dataMovies.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSearchText = (text) => {
    searchText = text;
  };

  return (
    <View style={styles.main_container}>
      <TextInput
        style={styles.textInput}
        placeholder="Titre du film"
        onChangeText={(text) => handleSearchText(text)}
      />
      <Button style={styles.button} title="Rechercher" onPress={loadFilms} />
      {!loading && (
        <FlatList
          data={films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FilmItem {...item} />}
        />
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 40,
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
});
