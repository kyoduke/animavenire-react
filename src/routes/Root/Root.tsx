import { Header } from "../../components/Header/Header";
import { PetsFeed } from "../../components/PetsFeed/PetsFeed";
import { useAuth } from "../../contexts/AuthContext";
import landingPageImage from "../../../public/img/landing-page.jpg";
import "./Root.css";

function Root() {
  const { isLogged } = useAuth();
  return (
    <>
      <Header />
      {isLogged ? (
        <PetsFeed />
      ) : (
        <div className="container">
          <div className="main-container">
            <div className="main-info">
              <h1>Bem-vindo ao AnimaVenire</h1>
              <p>
                AnimaVenire é uma plataforma dedicada a ajudar animais perdidos
                a encontrarem seus lares. Aqui você pode adicionar informações
                sobre animais e ajudar a comunidade a encontrá-los.
              </p>
              <p>
                Faça login para adicionar informações de um animal ou visualizar
                o feed de animais.
              </p>
              <button>Crie a sua conta aqui</button>
            </div>
            <div className="image-container">
              <img
                src={landingPageImage}
                alt="Uma pessoa abraçando o cachorro."
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { Root };
