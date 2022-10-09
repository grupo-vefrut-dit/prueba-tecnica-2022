import "./style.css";
import { useParams } from "react-router-dom";
import leftArrow from "../../assets/left-arrow.svg";
import { useState, useEffect } from "react";
import { GetMoviesId } from "../../api/movie";
import { Link } from "react-router-dom";

function Details() {
  const [dataMovie, setDataMovie] = useState({});
  const { id } = useParams();

  const getDataMovie = async () => {
    const movie = await GetMoviesId(id);
    setDataMovie(movie.data);
  };

  useEffect(() => {
    getDataMovie();
  }, []);

  return (
    <div className="container">
      <img className="details-img" src={dataMovie.Poster} alt="" />
      <div className="information-details">
        <h2 className="details--title">{dataMovie.Title}</h2>
        <hr />
        <p>
          <span className="text-blue">Director:</span>{" "}
          <span className="text-grey">{dataMovie.Writer}</span>
        </p>
        <p>
          <span className="text-blue">Actors:</span>{" "}
          <span className="text-grey">{dataMovie.Actors}</span>
        </p>
        <p>
          <span className="text-blue">Genre:</span>{" "}
          <span className="text-grey">{dataMovie.Genre}</span>
        </p>
        <p>
          <span className="text-blue">Released:</span>{" "}
          <span className="text-grey">
            {/*} ⭐{dataMovie.Ratings[0].Value.split("/", 1)[0]}*/}
          </span>
        </p>
        <p>
          <span className="text-blue">Score:</span>{" "}
          <span className="text-grey">{dataMovie.Writer}</span>
        </p>
        <p>
          <span className="text-blue">Description:</span>{" "}
          <span className="text-grey">{dataMovie.Plot}</span>
        </p>
        <Link className="btn-back" to="/">
          <img className="arrow-left" src={leftArrow} alt="back" /> Back
        </Link>
      </div>
    </div>
  );
}

export { Details };
