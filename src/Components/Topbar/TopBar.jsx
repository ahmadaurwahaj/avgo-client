import React from "react";
import style from "./TopBar.module.css";
import illustration from "../../assets/log.svg";

const TopBar = () => {
  return (
    <>
      <div className={style.top_bar}>
        <div className={style.logo}>
          <img className={style.icon} alt="bg_img" src={illustration} />
        </div>
        <div className={style.logout}>
          <button className={style.logout_btn}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default TopBar;
