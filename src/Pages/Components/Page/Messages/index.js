import React from "react";
import { Link } from "react-router-dom";
function Messages() {
  return (
    <div>
      <p>Messages</p>
      <Link to="/video-calling">VideoCalling </Link>
      <Link to="/messages">Message </Link>
      <Link to="/settings">Settings </Link>
    </div>
  );
}

export default Messages;
