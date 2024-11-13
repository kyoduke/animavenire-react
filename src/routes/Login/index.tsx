import Header from "../../components/Header";
import Login from "../../components/Login";
import "./index.css";

export default function LoginPage() {
  // TODO: Login Page
  return (
    <>
      <Header isLogged={false} />
      <Login />
    </>
  );
}
