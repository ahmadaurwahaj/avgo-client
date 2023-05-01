import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <nav className={style.mainNav}>
        <div className={style.leftBar}>
          <div className={style.logo}>Logo</div>
        </div>
        <div className={style.rightBar}>
          {/* <div className={style.lng}> */}
          <div>
            <select className={style.Language} id="language">
              <option value="eng">English</option>
              <option value="spa">Spanish</option>
              <option value="fre">French</option>
            </select>
          </div>

          {/* <div className={style.log}> */}
          <div>
            <Link to="/login" className={style.login2}>
              Login
            </Link>
          </div>

          {/* <div className={style.reg}> */}
          <div>
            <Link to="/signup" className={style.register}>
              Register
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
