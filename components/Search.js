import React from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList,
  Text,
} from "react-native";
import films from "../Helpers/filmsData";
import FilmItem from "./FilmItem";

const Search = () => {
  return (
    <View style={styles.main_container}>
      <TextInput style={styles.textInput} placeholder="Titre du film" />
      <Button style={styles.button} title="Rechercher" onPress={() => {}} />
      <FlatList
        data={films}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <FilmItem {...item} />}
      />
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
