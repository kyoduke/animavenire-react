import Header from "../../components/Header";
import Login from "../../components/Login";
import "./index.css";
import { useAuth } from "../../contexts/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  // TODO: Login Page
  return (
    <>
      <Header />
      <Login />
      <button onClick={() => login()}>LOGOUT</button>
    </>
  );
}
