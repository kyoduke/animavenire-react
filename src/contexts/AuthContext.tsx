// AuthContext.js
import { createContext, useState, useContext, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const AuthContext = createContext({
  isLogged: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: Props) => {
  const isLoggedLS = localStorage.getItem("isLogged");
  const [isLogged, setIsLogged] = useState(isLoggedLS == "true" ? true : false);

  const login = () => {
    setIsLogged(true);
    localStorage.setItem("isLogged", "true");
  };
  const logout = () => {
    setIsLogged(false);
    localStorage.setItem("isLogged", "false");
  };

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
