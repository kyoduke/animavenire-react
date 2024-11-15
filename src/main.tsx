import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root/index.tsx";
import LoginPage from "./routes/Login/index.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { Logout } from "./routes/Logout/index.ts";
import ProtectedRoute from "./routes/ProtectedRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Root />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
