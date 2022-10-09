import "./style.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({ user: "", pass: "" });
  const handleLogin = () => {
    let dataOld = JSON.parse(window.localStorage.getItem("accounts"));
    dataOld = dataOld !== null ? dataOld : [];
    dataOld = dataOld.filter((e) => e.user === data.user);
    if (dataOld.length >= 1) {
      if (data.pass !== dataOld[0].pass) {
        alert("ingrese contraseña valida");
      } else {
        window.localStorage.setItem("user", JSON.stringify(dataOld[0].user));
        navigate("/");
      }
    } else {
      alert("ingrese usuario valido");
    }
    //window.localStorage.setItem("accounts", JSON.stringify([...dataOld, data]));
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
      <button className="button-details" onClick={handleLogin}>
        ingresar
      </button>
      <Link className="text-white" to="/register">
        Registrarse
      </Link>
    </div>
  );
}

export { Login };
