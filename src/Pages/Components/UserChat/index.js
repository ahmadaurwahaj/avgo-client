import React from "react";
import style from "./UserChat.module.css";
import uicon from "../../../assets/icons/usericon.svg";
import ticon from "../../../assets/icons/typing.svg";
import sicon from "../../../assets/icons/share.svg";
import sendicon from "../../../assets/icons/send.svg";
const UserChat = () => {
  return (
    <div className={style.chatbox}>
      <div className={style.col_1}>
        <div className={style.msg_h}>
          <button className={style.msg_btn}>Message (4)</button>
        </div>

        <div className={style.chat_content}>
          <div className={style.upercontent}>
            <div className={style.msg_row}>
              <div className={style.msg_text}>
                <img
                  className={style.background_icon}
                  alt="bg_img"
                  src={uicon}
                />
                <div>
                  <p className={style.para_text}>
                    <p className={style.uname}>Peter</p>
                    <p className={style.pra}>
                      {" "}
                      Hello Guys! Whats your opinion?
                      <span style={{ fontSize: "6px" }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;12:02 pm
                      </span>
                    </p>
                  </p>
                </div>
              </div>
            </div>

            <div className={style.msg_row}>
              <div className={style.msg_text}>
                <img
                  className={style.background_icon}
                  alt="bg_img"
                  src={uicon}
                />
                <div>
                  <p className={style.para_text}>
                    <p className={style.uname}>Peter</p>
                    <p className={style.pra}>
                      {" "}
                      Images are better.
                      <span style={{ fontSize: "6px" }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;12:03 pm
                      </span>
                    </p>
                  </p>
                </div>
              </div>
            </div>

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
            <div className={style.msg_row}>
              <div className={style.msg_text}>
                <img
                  className={style.background_icon}
                  alt="bg_img"
                  src={uicon}
                />
                <div>
                  <p className={style.para_text}>
                    <p className={style.uname}>Peter</p>
                    <p className={style.pra}>
                      {" "}
                      Anyone is up for illustration. I think there are less
                      relatable images according to our brand
                      <span style={{ fontSize: "6px" }} className={style.tiime}>
                        12:05 pm
                      </span>
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={style.spc}>
            <div className={style.typing}>
              <img className={style.background_icon} alt="bg_img" src={ticon} />
              <p className={style.p_typing}>peter is typing</p>
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

export default UserChat;
