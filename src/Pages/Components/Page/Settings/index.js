import React from "react";
import { Link } from "react-router-dom";
function Settings() {
  return (
    <div>
      <p>Settings</p>
      <Link to="/video-calling">VideoCalling </Link>
      <Link to="/messages">Message </Link>
      <Link to="/settings">Settings </Link>
    </div>
  );
}

export default Settings;
