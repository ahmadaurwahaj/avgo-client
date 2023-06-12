import React, { useState } from "react";
import style from "./UserChat.module.css";
import uicon from "../../assets/icons/usericon.svg";
import ticon from "../../assets/icons/typing.svg";
import sicon from "../../assets/icons/share.svg";
import sendicon from "../../assets/icons/send.svg";
import MsgRow from "../MsgRow/MsgRow";
import OurMsgRow from "../OurMsgRow/OurMsgRow";
import { useSelector } from "react-redux";
const UserChat = ({ message, socket, roomID }) => {
  const user = useSelector(state => state?.user);
  const [messageInput, setMessageInput] = useState("");
  const sendMessage = e => {
    e.preventDefault();
    if (messageInput !== "") {
      console.log("Sending Message");
      socket.emit("sendMessage", {
        room: roomID,
        encryptedMessage: messageInput,
        senderId: user?.name
      });
      setMessageInput("");
    }
  };
  return (
    <div className={style.chatbox}>
      <div className={style.col_1}>
        <div className={style.msg_h}>
          <button className={style.msg_btn}>
            Message {"(" + message.length + ")"}
          </button>
        </div>

        <div className={style.chat_content}>
          <div className={style.upercontent}>
            {message?.map((data, index) =>
              user?.name === data.senderId ? (
                <OurMsgRow msg={data} key={index} />
              ) : (
                <MsgRow msg={data} key={index} />
              )
            )}
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
            {/* <div className={style.typing}>
              <img className={style.background_icon} alt="bg_img" src={ticon} />
              <p className={style.p_typing}>peter is typing..</p>
            </div> */}
            <div className={style.message_bar}>
              {/* <button className={style.share_btn}>
                <img className={style.background_i} alt="bg_img" src={sicon} />
              </button> */}
              <form onSubmit={sendMessage}>
                <input
                  type="text"
                  placeholder="Write message here"
                  value={messageInput}
                  onChange={e => setMessageInput(e.target.value)}
                />
                <button type="submit" className={style.send_btn}>
                  <img
                    className={style.background_ic}
                    alt="bg_img"
                    src={sendicon}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChat;
