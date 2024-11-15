import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

function PublicRoute({ children }: Props) {
  const { isLogged } = useAuth();

  if (isLogged) {
    return <Navigate to="/" />;
  }

  return children;
}

export default PublicRoute;
