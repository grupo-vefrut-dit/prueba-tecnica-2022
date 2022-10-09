import "./style.css";
import { useSelector } from "react-redux";
import { Header } from "../../components/Header";
import { CardMovie } from "../../components/CardMovie";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../../features/movies/moviesSlice";
import { GetMovies } from "../../api/movie";

function Main() {
  const data = useSelector((state) => state.movies);
  const user = JSON.parse(window.localStorage.getItem("user"));

  let dataFavorities = JSON.parse(window.localStorage.getItem("favorities"));
  dataFavorities = dataFavorities === null ? [] : dataFavorities;

  const dispatch = useDispatch();

  const getMovies = async () => {
    const dataMovies = await GetMovies();
    dispatch(addMovie(dataMovies.data.Search));
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <Header />
      <div className="main">
        <div className="movies">
          {data.movies.map((movie) => {
            const searchMovieFavoritie = dataFavorities.find(
              (movieFavoritie) => movieFavoritie.imdbID === movie.imdbID
            );
            if (searchMovieFavoritie && searchMovieFavoritie.user === user) {
              return (
                <CardMovie
                  id={movie.imdbID}
                  key={movie.imdbID}
                  img={movie.Poster}
                  date={movie.Year}
                  title={movie.Title}
                  favorite={true}
                />
              );
            }
            return (
              <CardMovie
                id={movie.imdbID}
                key={movie.imdbID}
                img={movie.Poster}
                date={movie.Year}
                title={movie.Title}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export { Main };
