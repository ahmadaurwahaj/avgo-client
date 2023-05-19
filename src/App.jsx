import "./font/stylesheet.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Messages, Login, Signup, VideoCalling, Settings } from "./Pages/index";

import { PrivateRoute } from "./utils/PrivateRoutes";
function App() {
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
        <Route path="/register" element={<Login type="register" />} />
        <Route path="/register2" element={<Signup />} />

        <Route
          path="/"
          exact
          element={userInfo !== undefined ? <VideoCalling /> : <Login />}
        />
        <Route path="/login" element={<Login type="login" />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
