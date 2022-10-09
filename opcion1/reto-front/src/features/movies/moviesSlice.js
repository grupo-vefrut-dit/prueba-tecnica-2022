import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  favorities: [],
};
const addLocalstorage = (movie) => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  movie = { ...movie, user };
  let dataFavoritiesOld = JSON.parse(window.localStorage.getItem("favorities"));
  dataFavoritiesOld = dataFavoritiesOld !== null ? dataFavoritiesOld : [];
  window.localStorage.setItem(
    "favorities",
    JSON.stringify([...dataFavoritiesOld, movie])
  );
};
export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies = [...action.payload];
    },
    addFavorities: (state, action) => {
      const user = window.localStorage.getItem("user");
      if (user === null) {
        alert("Inicie Sesión");
        return;
      }
      const dataMovies = current(state.movies);
      let dataFavorities = JSON.parse(
        window.localStorage.getItem("favorities")
      );
      dataFavorities = dataFavorities === null ? [] : dataFavorities;
      const movie = dataMovies.find((movie) => movie.imdbID === action.payload);
      const movieFavorite = dataFavorities.find(
        (movie) => movie.imdbID === action.payload
      );
      const oneMovie = movie !== undefined ? movie : movieFavorite;

      if (oneMovie) {
        if (dataFavorities.length <= 0) {
          state.favorities.push(oneMovie);
          addLocalstorage(oneMovie);
        } else {
          const duplicateMovie = dataFavorities.find(
            (movie) => movie.imdbID === action.payload
          );
          if (duplicateMovie) {
            const newArrayFavorities = dataFavorities.filter(
              (movieFavorities) => movieFavorities.imdbID !== oneMovie.imdbID
            );
            state.favorities = newArrayFavorities;
            window.localStorage.setItem(
              "favorities",
              JSON.stringify(newArrayFavorities)
            );
          } else {
            state.favorities.push(oneMovie);
            addLocalstorage(oneMovie);
          }
        }
      }
    },
    getMovie: (state, action) => {
      const dataMovies = current(state.movies);
      const movie = dataMovies.find((movie) => movie.imdbID === action.payload);
      return movie;
    },
  },
});

export const { addMovie, addFavorities, getMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
