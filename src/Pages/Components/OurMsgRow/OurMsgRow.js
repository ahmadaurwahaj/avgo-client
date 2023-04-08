import React from "react";
import style from "./OurMsgRow.module.css";

const OurMsgRow = () => {
  return (
    <div className={`${style.msg_row} ${style.msg_row2}`}>
      <div className={style.msg_text}>
        <div>
          <p className={style.para_text}>
            <p className={style.yourname}>You</p>
            <p className={style.your_text}>
              {" "}
              Yes, it will decrease the loading{" "}
              <span style={{ fontSize: "6px" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;12:00 pm
              </span>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMsgRow;
