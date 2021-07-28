import axios from "axios";

const API_TOKEN = "80c8183279290aca469a188058ddbc5e";

export const getImageFromApi = (name) => {
  return "https://image.tmdb.org/t/p/w300" + name;
};

export const getFilmDetailFromApi = async (id) => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_TOKEN}&language=fr`
    )
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const getFilmsListFromApi = async (text, page) => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=${text}&page=${page}`
    )
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
