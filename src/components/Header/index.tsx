import { FC } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Header: FC = () => {
  const { isLogged, login, logout } = useAuth();
  return (
    <header className="navbar">
      <ul>
        <Link className={"main-link"} to={"/"}>
          AnimaVenire
        </Link>
        <div id="navbar-items">
          <li className="navbar-item">
            <Link to={""}>Animais</Link>
          </li>
          <li className="navbar-item">
            <Link to={""}>Mapa</Link>
          </li>
          {isLogged ? (
            <li className="navbar-item">
              <Link className="login-link" to={"/logout"}>
                Sair
              </Link>
            </li>
          ) : (
            <li className="navbar-item ">
              <Link className="login-link" to={"/login"}>
                Entrar
              </Link>
            </li>
          )}
        </div>
      </ul>
    </header>
  );
};

export default Header;
