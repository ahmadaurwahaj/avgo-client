import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const data = "OK";
  return !data ? <Navigate to="/login" /> : children;
}

export { PrivateRoute };
