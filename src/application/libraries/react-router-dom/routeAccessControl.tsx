import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSessionStore } from "../zustand";

export interface RouteAccessControlProps {
  element: ReactNode;
}

export const RouteAccessControl = ({ element }: RouteAccessControlProps) => {
  const { token } = useSessionStore((state) => state);

  if (!token) return <Navigate to="/login" />;

  return <>{ element }</>;
};
