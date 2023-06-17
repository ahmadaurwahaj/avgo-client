import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const data = "OK";
  const isLoggedIn = useSelector((state) => state?.user?.isLoggedIn);

  return !isLoggedIn ? <Navigate to="/login" /> : children;
}

export { PrivateRoute };
