import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { getFilmDetailFromApi } from "../API/TMDBApi";
import FilmCard from "./FilmCard";
import { connect } from "react-redux";

const FilmDetail = ({ route }) => {
  const [film, setFilm] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFilmDetailFromApi(route.params.idFilm).then((data) => {
      setFilm(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <View style={styles.main_container}>
      {isLoading ? (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        film !== undefined && <FilmCard film={film} />
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    favoritesFilms: state.favoritesFilms,
  };
};

export default connect(mapStateToProps)(FilmDetail);

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollview_container: {
    flex: 1,
  },
});
