import React from "react";
import { FlatList } from "react-native";
import FilmItem from "./FilmItem";

const FilmList = ({ navigate, films, page, totalPages, loadFilms }) => {
  const displayFilmDetails = (idFilm) => {
    navigate("FilmDetail", { idFilm: idFilm });
  };

  return (
    <FlatList
      data={films}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <FilmItem {...item} displayFilmDetails={displayFilmDetails} />
      )}
      onEndReachedThreshold={0.5}
      onEndReached={() => page < totalPages && loadFilms()}
    />
  );
};

export default FilmList;
