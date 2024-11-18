import { FC, useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Modal } from "../Modal/Modal";

const Header: FC = () => {
  const { isLogged } = useAuth();
  const [logoutModal, setLogoutModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div id="header-component">
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
                <button
                  onClick={() => setLogoutModal(!logoutModal)}
                  className="login-link"
                >
                  Sair
                </button>
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
      <Modal
        isOpened={logoutModal}
        setIsOpened={() => setLogoutModal(!logoutModal)}
      >
        <div onClick={(e) => e.stopPropagation()} className="modal-content">
          <div className="title">
            <p>Sair da conta</p>
          </div>
          <div className="modal-text">
            <p>Tem certeza de que deseja sair da sua conta?</p>
            <p> Você precisará fazer login novamente para acessar.</p>
          </div>
          <div className="modal-buttons">
            <button onClick={() => navigate("/logout")}>Sair</button>
            <button
              className="cancel-btn"
              onClick={() => setLogoutModal(!logoutModal)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export { Header };
