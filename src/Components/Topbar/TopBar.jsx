import React from "react";
import style from "./TopBar.module.css";
import illustration from "../../assets/log.svg";
import { useNavigate } from "react-router-dom";
const TopBar = () => {
  const navigate = useNavigate()
  const logout = () => {
    navigate('/login')
  }
  return (
    <>
      <div className={style.top_bar}>
        <div className={style.logo}>
          <img className={style.icon} alt="bg_img" src={illustration} />
        </div>
        <div className={style.logout}>
          <button className={style.logout_btn} onClick = {logout}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default TopBar;