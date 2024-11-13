import "./index.css";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import KeyIcon from "@mui/icons-material/Key";

export default function Login() {
  return (
    <div id="login-container">
      <h1 className="title">Login</h1>
      <div className="form-group">
        <div className="input-container">
          <div className="icon-container">
            <AlternateEmailIcon />
          </div>
          <input type="text" placeholder="usuário" />
        </div>
        <div className="input-container">
          <KeyIcon />
          <input type="text" placeholder="senha" />
        </div>
        <div className="remember-be">
          <input type="checkbox" name="rememberMe" id="" />
          <label htmlFor="rememberMe">Lembre-se de mim</label>
        </div>
        <button>Entrar</button>
      </div>
    </div>
  );
}
