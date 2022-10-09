import "./style.css";
import flechaAbajo from "../../assets/flechaAbajo.svg";
import { GetMovies } from "../../api/movie";
import { useDispatch } from "react-redux";
import { addMovie } from "../../features/movies/moviesSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header({ title = "Favorities" }) {
  const [inputSearch, setInputSearch] = useState();

  const dispatch = useDispatch();
  const handleSearch = async (e) => {
    if (e.keyCode === 13) {
      const value = inputSearch;
      const dataMovies = await GetMovies(value);
      dispatch(addMovie(dataMovies.data.Search));      
    }
  };
  return (
    <nav className="content">
      <Link
        className="head-title"
        to={title === "Inicio" ? "/" : "/favorities"}
      >
        <h3>{title}</h3>
      </Link>
      {title !== "Inicio" ? (
        <div>
          <input
            className="input--search"
            type="text"
            placeholder="The Avengers"
            onKeyDown={handleSearch}
            onChange={(e) => {
              setInputSearch(e.target.value);
            }}
          />
          <button
            className="btn-search"
            onClick={async () => {
              const value = inputSearch;
              const dataMovies = await GetMovies(value);
              dispatch(addMovie(dataMovies.data.Search));
            }}
          >
            🔎
          </button>
        </div>
      ) : (
        ""
      )}

      {window.localStorage.getItem("user") !== null ? (
        <ul>
          <li>
            <a href="#">
              {JSON.parse(window.localStorage.getItem("user"))}
              <img src={flechaAbajo} alt="flecha" className="Arrow-down" />
            </a>
            <ul className="dropdown">
              <li>
                <Link
                  className="head-title"
                  to="/"
                  onClick={() => {
                    window.localStorage.removeItem("user");
                    window.location.reload();
                  }}
                >
                  Cerrar Sesión
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      ) : (
        <Link className="head-title" to="/login">
          Login
        </Link>
      )}
    </nav>
  );
}

export { Header };
