import React from "react";
import style from "./SideBar.module.css";
import illustration from "../../../assets/icons/vid.svg";
import illustration1 from "../../../assets/icons/msg.svg";
import illustration2 from "../../../assets/icons/acnt.svg";
import icn from "../../../assets/icons/icn.svg";
import prof from "../../../assets/icons/prof.svg";

const SideBar = () => {
  return (
    <div class={style.sidebar}>
      <div class={style.sidebar_btn}>
        <img className={style.background_icon} alt="bg_img" src={icn} />
      </div>

      <div class={style.sidebar_middle}>
        <button class={style.sidebar_btn1}>
          <img
            className={style.background_icon}
            alt="bg_img"
            src={illustration}
          />
        </button>
        <button class={style.sidebar_btn2}>
          <img
            className={style.background_icon}
            alt="bg_img"
            src={illustration1}
          />
        </button>
        <button class={style.sidebar_btn3}>
          <img
            className={style.background_icon}
            alt="bg_img"
            src={illustration2}
          />
        </button>
      </div>

      <button class={style.sidebar_btn4}>
        <img className={style.background_icon} alt="bg_img" src={prof} />
      </button>
    </div>
  );
};

export default SideBar;
