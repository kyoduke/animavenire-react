import { FC, useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Modal } from "../Modal/Modal";

const Header: FC = () => {
  const { isLogged } = useAuth();
  const [logoutModal, setLogoutModal] = useState(false);
  const navigate = useNavigate();

  function toggleLogoutModal() {
    setLogoutModal(!logoutModal);
  }

  return (
    <>
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
                <button onClick={toggleLogoutModal} className="login-link">
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
      <Modal isOpened={logoutModal} setIsOpened={toggleLogoutModal}>
        <div onClick={(e) => e.stopPropagation()} className="modal-content">
          <p>Deseja sair?</p>
          <button onClick={() => navigate("/logout")}>Sim</button>
          <button>Não</button>
        </div>
      </Modal>
    </>
  );
};

export { Header };
