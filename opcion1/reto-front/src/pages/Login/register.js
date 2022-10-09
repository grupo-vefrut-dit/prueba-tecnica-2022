import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [data, setData] = useState({ user: "", pass: "" });
  const navigate = useNavigate();

  const handleClick = () => {
    addLocalstorage(data);
    navigate("/login");
  };

  const addLocalstorage = (data) => {
    let dataOld = JSON.parse(window.localStorage.getItem("accounts"));
    dataOld = dataOld !== null ? dataOld : [];
    window.localStorage.setItem("accounts", JSON.stringify([...dataOld, data]));
  };
  return (
    <div className="container-login">
      <input
        className="input"
        type="text"
        placeholder="Usuario"
        name="usuario"
        onChange={(e) => setData({ ...data, user: e.target.value })}
      />
      <input
        className="input"
        type="password"
        placeholder="Constraseña"
        onChange={(e) => setData({ ...data, pass: e.target.value })}
      />
      <button className="button-details" onClick={handleClick}>
        Registrarse
      </button>
      <Link className="text-white" to="/login">
        Iniciar Sesión
      </Link>
    </div>
  );
}

export { Register };
