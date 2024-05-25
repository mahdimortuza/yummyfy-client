import App from "@/App";
import About from "@/pages/about/About";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import Recipes from "@/pages/recipes/Recipes";
import Registration from "@/pages/register/Registration";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
]);
export default router;
