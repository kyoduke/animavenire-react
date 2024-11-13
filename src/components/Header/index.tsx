import { FC } from "react";
import "./index.css";
import { Link } from "react-router-dom";
const Header: FC<{ isLogged: boolean }> = ({ isLogged }) => {
  return (
    <header className="navbar">
      <ul>
        <Link className={"main-link"} to={"/"}>
          AnimaVenire
        </Link>
        <div id="navbar-items">
          <li className="navbar-item">Animais</li>
          <li className="navbar-item">Mapa</li>
          {isLogged ? (
            <li className="navbar-item">
              <Link className="login-link" to={"/login"}>
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
