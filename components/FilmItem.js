import React from "react";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { getImageFromApi } from "../API/TMDBApi";

const FilmItem = ({
  title,
  vote_average,
  overview,
  release_date,
  poster_path,
  displayFilmDetails,
  id,
}) => {
  const favorites = useSelector((state) => state.favoritesFilms);

  const [isFavorite, setIsFavorite] = useState(false);

  const ToggleFavorite = () => {
    if (favorites.findIndex((item) => item.id === id) !== -1) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  };

  useEffect(() => {
    ToggleFavorite();
  }, [favorites]);

  return (
    <TouchableOpacity
      style={styles.main_container}
      onPress={() => displayFilmDetails(id)}
    >
      <Image
        style={styles.image_container}
        source={{ uri: getImageFromApi(poster_path) }}
      />
      <View style={styles.content_container}>
        <View style={styles.header_container}>
          <View style={styles.title_container}>
            {isFavorite && (
              <Image
                style={styles.favorite_image}
                source={require("../Images/ic_favorite.png")}
              />
            )}
            <Text style={styles.title_text}>{title}</Text>
          </View>
          <View style={styles.vote_container}>
            <Text style={styles.vote_text}>{vote_average}</Text>
          </View>
        </View>
        <View style={styles.decription_container}>
          <Text style={styles.description_text} numberOfLines={6}>
            {overview}
          </Text>
        </View>
        <View style={styles.date_container}>
          <Text style={styles.date_text}>Sorti le {release_date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FilmItem;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    height: 190,
    flexDirection: "row",
  },
  image_container: {
    flex: 1,
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: "grey",
  },
  content_container: {
    flex: 2,
    margin: 5,
  },
  header_container: {
    flex: 3,
    flexDirection: "row",
  },
  decription_container: {
    flex: 7,
  },
  date_container: {
    flex: 1,
  },
  title_container: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "center",
  },
  vote_container: {
    flex: 1,
    justifyContent: "center",
  },
  title_text: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 5,
    flex: 1,
    flexWrap: "wrap",
  },
  vote_text: {
    fontSize: 26,
    fontWeight: "bold",
    paddingHorizontal: 5,
  },
  description_text: {
    fontSize: 12,
    fontStyle: "italic",
    color: "grey",
  },
  date_text: {
    fontSize: 14,
    textAlign: "right",
  },
  favorite_image: {
    width: 20,
    height: 20,
  },
});
