import React from "react";
import { Link } from "react-router-dom";
function VideoCalling() {
  return (
    <div>
      <p>VideoCalling</p>
      <Link to="/video-calling">VideoCalling </Link>
      <Link to="/messages">Message </Link>
      <Link to="/settings">Settings </Link>
    </div>
  );
}

export default VideoCalling;
