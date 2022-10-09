import "./style.css";
import { useSelector } from "react-redux";
import { Header } from "../../components/Header";
import { CardMovie } from "../../components/CardMovie";
import { Navigate } from "react-router-dom";

function Favorities() {
  let data = JSON.parse(window.localStorage.getItem("favorities"));
  const user = JSON.parse(window.localStorage.getItem("user"));

  data = data === null ? [] : data.filter((movie) => movie.user === user);
  return user !== null ? (
    <>
      <Header title="Inicio" />
      <div className="main">
        <div className="movies">
          {data.map((movie) => (
            <CardMovie
              id={movie.imdbID}
              key={movie.imdbID}
              img={movie.Poster}
              date={movie.Year}
              title={movie.Title}
              favorite={true}
            />
          ))}
        </div>
      </div>
    </>
  ) : (
    <Navigate to="/" replace />
  );
}

export { Favorities };
