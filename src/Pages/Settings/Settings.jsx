import React from "react";
import style from "./Settings.module.css";
import SideBar from "../../Components/Sidebar/SideBar";

import { Link } from "react-router-dom";
function Settings() {
  return (

    <div className={style.main}>
      <div className={style.inner}>
      <div>
          <SideBar/>
        </div>
        <div className={style.left_container}></div>
        <div className={style.Rec_1}>
        <div className={style.Rec_2}>
      

</div>
        </div>

      </div>
    {/* <div>
      <p>Settings</p>
      <Link to="/video-calling">VideoCalling </Link>
      <Link to="/messages">Message </Link>
      <Link to="/settings">Settings </Link>
    </div> */}
    </div>
  );
}

export default Settings;
