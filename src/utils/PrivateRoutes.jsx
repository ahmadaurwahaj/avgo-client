import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const data = "OK";
  // const isLogedIn = useSelector((state) => state?.user?.isLogedIn);
  const isLoggedIn = useSelector((state) => state?.user?.isLoggedIn);

  return !isLoggedIn ? (
    <>
      <Navigate to="/login" />
    </>
  ) : (
    children
  );
}

export { PrivateRoute };
