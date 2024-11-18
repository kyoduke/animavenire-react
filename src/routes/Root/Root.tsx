import { Header } from "../../components/Header/Header";
import { PetsFeed } from "../../components/PetsFeed/PetsFeed";
import { useAuth } from "../../contexts/AuthContext";
import "./index.css";

function Root() {
  const { isLogged } = useAuth();
  return (
    <>
      <Header />
      {isLogged ? <PetsFeed /> : <></>}
    </>
  );
}

export { Root };
