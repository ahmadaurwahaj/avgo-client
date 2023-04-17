import React from "react";
import style from "./MsgSidebar.module.css";
import vidbtn from "../../assets/icons/vidbtn.svg";
import msgbtn from "../../assets/icons/msgbtn.svg";
import acnt from "../../assets/icons/acnt.svg";
import icn from "../../assets/icons/icn.svg";
import prof from "../../assets/icons/prof.svg";



const MsgSideBar = () => {
  return (
    <div class={style.sidebar}>
      <div class={style.sidebar_btn}>
        <img alt="bg_img" src={icn} />
      </div>

      <div class={style.sidebar_middle}>
        <button class={style.sidebar_btn1}>
          <img className={style.background_icon} alt="bg_img" src={vidbtn} />
        </button>
        <button class={style.sidebar_btn2}>
          <img className={style.background_icon} alt="bg_img" src={msgbtn} />
        </button>
        <button class={style.sidebar_btn3}>
          <img className={style.background_icon} alt="bg_img" src={acnt} />
        </button>
      </div>

      <button class={style.sidebar_btn4}>
        <img className={style.background_icon} alt="bg_img" src={prof} />
      </button>
    </div>
  );
};

export default MsgSideBar;