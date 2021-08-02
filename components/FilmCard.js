import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { getImageFromApi } from "../API/TMDBApi";
import moment from "moment";
import numeral from "numeral";
import { useDispatch, useSelector } from "react-redux";

const FilmCard = ({ film }) => {
  const favorites = useSelector((state) => state.favoritesFilms);
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(false);

  const ToggleFavorite = () => {
    if (favorites.findIndex((item) => item.id === film.id) !== -1) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  };

  useEffect(() => {
    ToggleFavorite();
  }, [favorites]);

  return (
    <ScrollView style={styles.scrollview_container}>
      <View>
        <Image
          style={styles.image_container}
          source={{ uri: getImageFromApi(film.backdrop_path) }}
        />
      </View>
      <View style={styles.title_container}>
        <Text style={styles.text_title}>{film.title}</Text>
        <TouchableOpacity
          style={styles.favorite_container}
          onPress={() => dispatch({ type: "TOGGLE_FAVORITE", value: film })}
        >
          {isFavorite ? (
            <Image
              style={styles.favorite_image}
              source={require("../Images/ic_favorite.png")}
            />
          ) : (
            <Image
              style={styles.favorite_image}
              source={require("../Images/ic_favorite_border.png")}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.overview_container}>
        <Text style={styles.text_overview}>{film.overview}</Text>
      </View>
      <View style={styles.infos_container}>
        <Text style={styles.text_infos}>
          Sorti le {moment(film.release_date).format("DD/MM/YYYY")}
        </Text>
        <Text style={styles.text_infos}>Note : {film.vote_average} / 10</Text>
        <Text style={styles.text_infos}>
          Nombre de votes : {film.vote_count}
        </Text>
        <Text style={styles.text_infos}>
          Budget : {numeral(film.revenue).format("0,0 $")}
        </Text>
        <Text style={styles.text_infos}>
          Genre(s) : {film.genres.map((genre) => genre.name).join(" / ")}
        </Text>
        <Text style={styles.text_infos}>
          Companie(s):{" "}
          {film.production_companies.map((company) => company.name).join(" / ")}
        </Text>
      </View>
    </ScrollView>
  );
};

export default FilmCard;

const styles = StyleSheet.create({
  scrollview_container: {
    flex: 1,
  },
  image_container: {
    flex: 2,
    height: 169,
    margin: 5,
  },
  title_container: {
    flex: 1,
    margin: 5,
  },
  overview_container: {
    flex: 1,
    margin: 5,
  },
  infos_container: {
    flex: 3,
    margin: 5,
  },

  text_title: {
    fontWeight: "bold",
    fontSize: 35,
    flex: 1,
    flexWrap: "wrap",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: "#000000",
    textAlign: "center",
  },
  text_overview: {
    fontStyle: "italic",
    color: "#666666",
    margin: 5,
    marginBottom: 15,
  },
  text_infos: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  favorite_container: {
    alignItems: "center",
  },
  favorite_image: {
    width: 40,
    height: 40,
  },
});
