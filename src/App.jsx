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
          path="/video-calling"
          element={
            <PrivateRoute>
              <VideoCalling />
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          exact
          element={userInfo !== undefined ? <VideoCalling /> : <Login />}
        />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
