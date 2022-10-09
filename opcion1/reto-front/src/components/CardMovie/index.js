import "./style.css";
import see from "../../assets/see.svg";
import calendar from "../../assets/calendar.svg";
import { useDispatch } from "react-redux";
import { addFavorities } from "../../features/movies/moviesSlice";
import { Link } from "react-router-dom";

function CardMovie({ img, date, title, id, favorite = false }) {
  const distpach = useDispatch();
  const handleFavorities = (id) => {
    distpach(addFavorities(id));
  };
  return (
    <div className="card">
      <span
        onClick={() => handleFavorities(id)}
        className={`card--favorite ${favorite ? "card--favorite-active" : ""}`}
      >
        ♥
      </span>
      <img className="card--img" src={img} alt="img" />
      <section className="information">
        <span className="card-date">
          <img className="card--img card--img-see" src={calendar} alt="img" />
          {date}
        </span>
        <span className="card--title">{title}</span>

        <Link className="button-details" to={`/details/${id}`}>
          <img className="card--img card--img-see" src={see} alt="img" />
          See
        </Link>
      </section>
    </div>
  );
}

export { CardMovie };
