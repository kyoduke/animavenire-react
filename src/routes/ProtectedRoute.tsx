import { FC, ReactNode } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

const ProtectedRoute: FC<Props> = ({ children }) => {
  const { isLogged } = useAuth();

  if (!isLogged) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export { ProtectedRoute };
