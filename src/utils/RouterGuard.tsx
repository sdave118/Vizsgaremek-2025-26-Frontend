import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";



export const PublicOnlyRoute = () => {
  const {accessToken} = useAuth()

  if (accessToken) {
     return <Navigate to="/" replace />;
  }

  return <Outlet />
}

export const ProtectedRoute = () => {
  const { accessToken } = useAuth();


  if (!accessToken) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />
}