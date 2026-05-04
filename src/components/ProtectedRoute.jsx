import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!user || !isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}
