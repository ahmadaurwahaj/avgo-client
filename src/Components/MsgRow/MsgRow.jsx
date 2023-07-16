import React from "react";
import style from "./MsgRow.module.css";
import uicon from "../../assets/icons/usericon.svg";

const MsgRow = (msg) => {
  console.log("Msg ", msg?.msg);
  return (
    <div className={style.msg_row}>
      <div className={style.msg_text}>
        <img className={style.background_icon} alt="bg_img" src={uicon} />
        <div>
          <p className={style.para_text}>
            <p className={style.uname}>{msg?.msg?.sender}</p>
            <p className={style.pra}>
              {msg?.msg?.message}
              <span style={{ fontSize: "6px" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;12:02 pm msg.msg.
              </span>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MsgRow;
