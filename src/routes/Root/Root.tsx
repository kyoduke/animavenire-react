import { Header } from "../../components/Header/Header";
import { PetsFeed } from "../../components/PetsFeed/PetsFeed";
import { useAuth } from "../../contexts/AuthContext";
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
          <h2>Bem-vindo ao AnimaVenire</h2>
          <p>
            AnimaVenire é uma plataforma dedicada a ajudar animais perdidos a
            encontrarem seus lares. Aqui você pode adicionar informações sobre
            animais perdidos e ajudar a comunidade a encontrá-los.
          </p>
          <p>
            Faça login para adicionar um animal perdido ou visualizar o feed de
            animais perdidos.
          </p>
        </div>
      )}
    </>
  );
}

export { Root };
