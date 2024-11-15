// AuthContext.js
import { createContext, useState, useContext, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const AuthContext = createContext({
  isLogged: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: Props) => {
  const [isLogged, setIsLogged] = useState(false);

  const login = () => setIsLogged(true);
  const logout = () => setIsLogged(false);

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
