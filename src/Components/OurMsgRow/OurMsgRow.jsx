import React from "react";
import style from "./OurMsgRow.module.css";

const OurMsgRow = ({ textmsg }) => {
  return (
    <div className={`${style.msg_row} ${style.msg_row2}`}>
      <div className={style.msg_text}>
        <div>
          <div className={style.para_text}>
            <p className={style.yourname}>You</p>
            <p className={style.your_text}>
              {textmsg}
              <span style={{ fontSize: "6px" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;12:00 pm
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMsgRow;
