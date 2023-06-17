import "./font/stylesheet.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Messages, Login, Signup, VideoCalling, Settings } from "./Pages/index";
import { PrivateRoute } from "./utils/PrivateRoutes";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state?.user?.isLoggedIn);
  const userInfo = "Hello";
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/messages"
          element={
            <PrivateRoute>
              <Messages />
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />
        <Route
          path="/videoCall"
          element={
            <PrivateRoute>
              <VideoCalling />
            </PrivateRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PrivateRoute>
              <Login type="register" />
            </PrivateRoute>
          }
        />
        <Route
          path="/register2"
          element={
            <PrivateRoute>
              <Signup />
            </PrivateRoute>
          }
        />

        <Route
          path="/"
          exact
          // element={isLoggedIn ? <VideoCalling /> : <Login />}
          element={
            // isLoggedIn ? <Navigate to="videocall" /> : <Navigate to="login" />
            <PrivateRoute>
              <VideoCalling />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          exact
          element={<Login type="login" />}
          //element={isLoggedIn ? <VideoCalling /> : <Login type="login" />} // todo: change this to the below line
          // element={isLoggedIn && <Navigate to="videocall" />} // TODO: fix this, it should navigagte to the url rather than shwoing the component
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
