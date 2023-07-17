import React from "react";
import style from "./MsgRow.module.css";
import uicon from "../../assets/icons/usericon.svg";

const MsgRow = (msg) => {
  return (
    <div className={style.msg_row}>
      <div className={style.msg_text}>
        <img className={style.background_icon} alt="bg_img" src={uicon} />
        <div>
          <p className={style.para_text}>
            <p className={style.uname}>
              {msg?.msg?.sender ? msg?.msg?.sender : msg?.sender?.user_name}
            </p>
            <p className={style.pra}>
              {msg?.msg?.message ? msg?.msg?.message : msg?.message}
              <span style={{ fontSize: "6px" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;12:02 pm.
              </span>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MsgRow;
