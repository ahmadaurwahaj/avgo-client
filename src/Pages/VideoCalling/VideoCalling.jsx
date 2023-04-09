import React from "react";
import { Link } from "react-router-dom";
import style from "./VideoCalling.module.css";
import add1 from "../../assets/icons/add.svg";
import nxt from "../../assets/icons/nxt.svg";
import info from "../../assets/icons/info.svg";
import SideBar from "../../Components/Sidebar/SideBar";
import UserChat from "../../Components/UserChat/UserChat";
function VideoCalling() {
  return (
    <div className={style.main}>
      {/* <div className={style.innermain}> */}
      <div className={style.inner}>
        <div className={style.left_container}>
          <div>
            <SideBar />
          </div>
        </div>
        <div className={style.mid_container}>
          <div className={style.top}>
            <div className={style.left_innercontainer}>
              <div>
                <button className={style.navbar_buttons_left}>
                  <img
                    className={style.background_icon}
                    alt="bg_img"
                    src={nxt}
                  />
                </button>
              </div>
              <div className={style.name}>Peter</div>
            </div>

            <div className={style.navbar_buttons_right}>
              <button className={style.add_btn}>
                <img
                  className={style.background_icon}
                  alt="bg_img"
                  src={add1}
                />
              </button>
            </div>
          </div>
          <div className={style.m_container}>p</div>

          <div className={style.info}>
            <img
              className={style.background_infoicon}
              alt="bg_img"
              src={info}
            />
            <p className={style.info_text}>
              <span style={{ fontSize: "10px" }}>Quota of the day: </span>{" "}
              <br />
              <span style={{ fontSize: "12px" }}>
                Thank you everyone for joining the design critique meeting. I
                want everyone's opinion so please start
              </span>
            </p>
          </div>
        </div>

        <div className={style.right_container}>
          <div className={style.space_bar}></div>
          <div>
            <UserChat />
          </div>
        </div>
        <div className={style.space_baar}></div>
      </div>
    </div>
  );
}

export default VideoCalling;

{
  /* <Link to="/video-calling">VideoCalling </Link>
<Link to="/messages">Message </Link>
<Link to="/settings">Settings </Link> */
}
