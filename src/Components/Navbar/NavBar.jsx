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

          <div>
            <button className={style.login2}>Login</button>
          </div>
          <div>
            <Link to="/register" className={style.link}>
              <button className={style.register}>Register</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
