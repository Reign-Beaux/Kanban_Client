import { Home, Login, RecoverPassword } from "@/presentation/pages";
import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { RouteAccessControl } from ".";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RouteAccessControl element={<Home />} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/recover-password",
    element: <RecoverPassword />,
  },
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
];

const router = createBrowserRouter(routes);

export { router };
