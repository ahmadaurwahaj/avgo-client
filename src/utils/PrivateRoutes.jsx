import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  //   const { userInfo } = useSelector(state => state.loggedInUser);
  //   const { data } = userInfo;
  const data = { key: "hello" };
  return !data ? <Navigate to="/login" /> : children;
  // if (!data) {
  //   // not logged in so redirect to login page with the return url
  //   return ;
  // }

  // authorized so return child components
  // return children;
}

export { PrivateRoute };
