import { ChangingPassword, Home, Login, RecoverPassword } from "@/presentation/pages";
import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { RouteAccessControl } from ".";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RouteAccessControl element={<Home />} />,
  },
  {
    path: "/changing-password/{token}",
    element: <ChangingPassword />
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
