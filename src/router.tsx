import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home, About, Layout } from "./components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "*", element: <Navigate to="/home" replace /> },
    ],
  },
  { path: "*", element: <Navigate to="/home" replace /> },
]);
