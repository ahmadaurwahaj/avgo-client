import React from "react";
import style from "./Messages.module.css";
import MsgSideBar from "../../Components/MsgSidebar/MsgSidebar";
import SideBar from "../../Components/Sidebar/SideBar";
import UserChat from "../../Components/ChatBox/ChatBox";
import MsgRow from "../../Components/MsgRow/MsgRow";
import ShowMsg from "../../Components/ShowMsg/ShowMsg";
import uicon from "../../assets/icons/usericon.svg";
import { Link } from "react-router-dom";
import ChatBox from "../../Components/ChatBox/ChatBox";

function Messages() {
  return (
    // <div>

    <div className={style.main}>
      <div className={style.inner}>
        <div>
          <SideBar type="messages" />
        </div>
        <div className={style.left_container}></div>
        <div className={style.Rec_1}>
          {/* <div className={style.Rec_3}> */}
          <div className={style.Rec_2}>
            <div className={style.left_side}>
              <div className={style.left_topbar}>Messages</div>
              <div className={style.left_userchat}>
                <div className={style.inner_chat}>
                  <div>
                    <ShowMsg textmsg="Hello Guys! Whats your opinion" />
                  </div>
                  <div>
                    <ShowMsg textmsg="Hello Guys! Whats your opinion" />
                  </div>
                  <div>
                    <ShowMsg textmsg="Hello Guys! Whats your opinion" />
                  </div>
                </div>
              </div>
            </div>
            <div className={style.right_side}>
              <div className={style.right_topbar}>
                <div className={style.msg_row}>
                  {/* <div className={style.msg_text}> */}
                  <img
                    className={style.background_icon}
                    alt="bg_img"
                    src={uicon}
                  />
                  <div>
                    {/* <p className={style.para_text}> */}
                    <p className={style.uname}>peter</p>
                    {/* <p className={style.pra}> */}
                    {/* {textmsg} */}
                    {/* <span style={{ fontSize: "6px" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;12:02 pm
              </span> */}
                    {/* </p> */}
                    {/* </p> */}
                  </div>
                  {/* </div> */}
                </div>
              </div>
              <div className={style.right_userchat}>
                <ChatBox />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <p>Messages</p> */}

      {/* </div> */}
    </div>
    // </div>
  );
}

export default Messages;

{
  /* <Link to="/video-calling">VideoCalling </Link>
<Link to="/messages">Message </Link>
<Link to="/settings">Settings </Link> */
}
