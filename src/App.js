import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation
} from "react-router-dom";
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
        <Route
          path="/signup"
          element={
            <PrivateRoute>
              <Signup />
            </PrivateRoute>
          }
        />

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
