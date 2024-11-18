import { Header } from "../../components/Header/Header";
import { PetsFeed } from "../../components/PetsFeed/PetsFeed";
import { useAuth } from "../../contexts/AuthContext";

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
