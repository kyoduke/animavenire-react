import { Navigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Login } from "../../components/Login/Login";
import { useAuth } from "../../contexts/AuthContext";
import "./index.css";

function LoginPage() {
  const { isLogged } = useAuth();
  if (isLogged) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <Header />
      <Login />
    </>
  );
}

export { LoginPage };
