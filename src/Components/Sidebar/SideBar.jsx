import React from "react";
import style from "./SideBar.module.css";
import vid from "../../assets/icons/vid.svg";
import vidbtn from "../../assets/icons/vidbtn.svg";
import msg from "../../assets/icons/msg.svg";
import msgbtn from "../../assets/icons/msgbtn.svg";
import acnt from "../../assets/icons/acnt.svg";
import icn from "../../assets/icons/icn.svg";
import prof from "../../assets/icons/prof.svg";
import { useNavigate } from "react-router-dom";
const SideBar = ({ type }) => {
  console.log(type);
  const navigate = useNavigate();
  const nav = to => {
    if (to !== type) navigate(`/${to}`);
  };
  return (
    <div className={style.sidebar}>
      <div className={style.sidebar_btn}>
        <img alt="bg_img" src={icn} />
      </div>

      <div className={style.sidebar_middle}>
        <button
          className={type === "videoCall" ? style.focused : style.non_focused}
          onClick={() => nav("videoCall")}
        >
          <img
            className={style.background_icon}
            alt="bg_img"
            src={type === "videoCall" ? vid : vidbtn}
          />
        </button>

        <button
          className={type === "messages" ? style.focused : style.non_focused}
          onClick={() => nav("messages")}
        >
          <img
            className={style.background_icon}
            alt="bg_img"
            src={type === "messages" ? msgbtn : msg}
          />
        </button>

        <button
          className={type === "settings" ? style.focused : style.non_focused}
          onClick={() => nav("settings")}
        >
          <img className={style.background_icon} alt="bg_img" src={acnt} />
        </button>
      </div>

      <button className={style.sidebar_btn4}>
        <img className={style.background_icon} alt="bg_img" src={prof} />
      </button>
    </div>
  );
};

export default SideBar;
