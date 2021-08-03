import React from "react";
import { StyleSheet } from "react-native";
import FilmList from "./FilmList";
import { useSelector } from "react-redux";

const Favorites = ({ navigation: { navigate } }) => {
  const favorites = useSelector((state) => state.favoritesFilms);
  return <FilmList films={favorites} navigate={navigate} />;
};

const styles = StyleSheet.create({});

export default Favorites;
