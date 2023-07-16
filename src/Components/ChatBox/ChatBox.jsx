import React from "react";
import style from "./ChatBox.module.css";
import uicon from "../../assets/icons/usericon.svg";
import ticon from "../../assets/icons/typing.svg";
import sicon from "../../assets/icons/share.svg";
import sendicon from "../../assets/icons/send.svg";
import MsgRow from "../MsgRow/MsgRow";
import OurMsgRow from "../OurMsgRow/OurMsgRow";
import { useSelector } from "react-redux";
const ChatBox = (msgObj) => {
  const MessageObj = Object.values(msgObj)[0];

  const id = useSelector((state) => state?.user?.id);
  return (
    <div className={style.chatbox}>
      <div className={style.col_1}>
        {/* <div className={style.msg_h}>
          <button className={style.msg_btn}>Message (4)</button>
        </div> */}

        <div className={style.chat_content}>
          <div className={style.upercontent}>
            {MessageObj?.map((data) => {
              return (data?.sender === id || data?.receiver === id) &&
                data?.sender === id ? (
                <OurMsgRow msg={data} />
              ) : (
                <MsgRow msg={data} />
              );
            })}

            {/* <div className={style.msg_row}>
              <div className={style.msg_text}>
                <img
                  className={style.background_icon}
                  alt="bg_img"
                  src={uicon}
                />
              </div>
            </div> */}
          </div>

          <div className={style.spc}>
            <div className={style.typing}>
              {/* <img className={style.background_icon} alt="bg_img" src={ticon} /> */}
              {/* <p className={style.p_typing}>peter is typin</p> */}
            </div>
            <div className={style.message_bar}>
              <button className={style.share_btn}>
                <img className={style.background_i} alt="bg_img" src={sicon} />
              </button>
              <input type="text" placeholder="Write message here" />
              <button className={style.send_btn}>
                <img
                  className={style.background_ic}
                  alt="bg_img"
                  src={sendicon}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
