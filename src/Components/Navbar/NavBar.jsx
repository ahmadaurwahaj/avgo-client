import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./NavBar.module.css";
import icn from "../../assets/icons/icn.svg";

const NavBar = ({ type }) => {
  const navigate = useNavigate();
  const nav = to => {
    console.log(to, type);

    if (to !== type) navigate(`/${to}`);
  };
  return (
    <div>
      <nav className={style.mainNav}>
        <div className={style.leftBar}>
          <div className={style.logo}>
            <img src={icn} />
          </div>
        </div>
        <div className={style.rightBar}>
          {/* <div className={style.lng}> */}
          {/* <div>
            <select className={style.Language} id="language">
              <option value="eng">English</option>
              <option value="spa">Spanish</option>
              <option value="fre">French</option>
            </select>
          </div> */}

          <div>
            <button
              className={
                type !== "register"
                  ? `${style.underlinedBtn} ${style.right}`
                  : style.nonUnderlined
              }
              onClick={() => nav("login")}
            >
              Login
            </button>
          </div>
          <div>
            <button
              className={
                type !== "register"
                  ? style.nonUnderlined
                  : `${style.underlinedBtn} ${style.left}`
              }
              onClick={() => nav("register")}
            >
              Register
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
