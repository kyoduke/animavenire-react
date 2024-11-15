import "./index.css";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import KeyIcon from "@mui/icons-material/Key";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const mockUser = {
  email: "caio@duque.com",
  password: "123",
};

export default function Login() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChangeEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setEmailInput(e.target.value);
    console.log(passwordInput);
  };

  const handleChangePasswordInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setError("");
    setPasswordInput(e.target.value);
    console.log(passwordInput);
  };

  const validateCredentialsAndLogin = () => {
    if (emailInput === mockUser.email && passwordInput === mockUser.password) {
      login();
      return navigate("/");
    }

    setError("* Email ou senha inválidos");
  };

  return (
    <div id="login-container">
      <h1 className="title">Login</h1>
      <div className="form-group">
        <div className="input-container">
          <div className="icon-container">
            <AlternateEmailIcon />
          </div>
          <input
            type="text"
            value={emailInput}
            onChange={handleChangeEmailInput}
            placeholder="Email"
          />
        </div>
        <div className="input-container">
          <KeyIcon />
          <input
            type="password"
            placeholder="Senha"
            value={passwordInput}
            onChange={handleChangePasswordInput}
          />
        </div>
        <div className="remember-me">
          <p className="form-error">{error}</p>
          <input id="" type="checkbox" name="rememberMe" />
          <label htmlFor="rememberMe">Lembre-se de mim</label>
        </div>

        <button onClick={validateCredentialsAndLogin}>Entrar</button>
      </div>
      <div className="not-a-member">
        <p>
          Ainda não é membro? Registre-se <Link to={"/login"}>aqui</Link>
        </p>
      </div>
    </div>
  );
}
