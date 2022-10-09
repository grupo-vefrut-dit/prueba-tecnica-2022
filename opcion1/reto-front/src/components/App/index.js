import "./style.css";
import { Main } from "../../pages/Main";
import { Details } from "../../components/Details";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Favorities } from "../../pages/Favorities";
import { Login } from "../../pages/Login";
import { Register } from "../../pages/Login/register";

function App() {
  const moviesState = useSelector((state) => state.movies);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/favorities" element={<Favorities />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
