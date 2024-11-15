import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";

export const Logout = (): null => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/login");
  }, [logout, navigate]);

  return null;
};
