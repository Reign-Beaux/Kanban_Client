import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export interface RouteAccessControlProps {
  element: ReactNode;
}

export const RouteAccessControl = ({ element }: RouteAccessControlProps) => {
  const token = localStorage.getItem("session");

  if (!token) return <Navigate to="/login" />;

  return <>{ element }</>;
};
