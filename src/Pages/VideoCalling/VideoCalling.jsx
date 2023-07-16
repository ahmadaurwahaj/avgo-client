import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./VideoCalling.module.css";
import add1 from "../../assets/icons/add.svg";
import nxt from "../../assets/icons/nxt.svg";
import info from "../../assets/icons/info.svg";
import FaceDetection from "../../Components/FaceDetection/FaceDetection";
import SideBar from "../../Components/Sidebar/SideBar";
import UserChat from "../../Components/UserChat/UserChat";
import io from "socket.io-client";
import { Peer } from "peerjs";
import { useSelector } from "react-redux";
import AvatarRenderer from "../../Components/AvatarRenderer/AvatarRenderer";
const socket = io(`http://localhost:3300`);
function VideoCalling() {
  const [cameraAllowed, setCameraAllowed] = useState(false);
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [faceDetectionRunning, setFaceDetectionRunning] = useState(true);
  const [userConnected, setUserConnected] = useState(null);
  const [messageInput, setMessageInput] = useState("");
  const [roomIdOtherUser, setRoomIdOtherUser] = useState("");
  const [message, setMessage] = useState([]);
  const [mystream, setMystream] = useState(null);
  const [peerId, setpeerId] = useState(null);
  const [otherpeerId, setotherpeerId] = useState(null);
  const [roomStatus, setRoomStatus] = useState({
    connected: false,
    message: ""
  });
  const peerInstance = useRef(null);
  const [otherStream, setOtherStream] = useState(null);
  const user = useSelector(state => state?.user);
  // const [requestRecieved, setRequestRecieved] = useState(null);
  const getStream = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });
    setMystream(stream);
  };
  useEffect(() => {
    getStream();
    return () => {
      getStream();
    };
  }, []);
  useEffect(() => {
    console.log("BEFORE", socket.id);
    socket.on("connect", () => {
      socket.emit("setUserData", { ...user });
    });

    const peer = new Peer("", {
      host: "0.peerjs.com",
      port: 443,
      path: "/",
      pingInterval: 5000
    });
    peerInstance.current = peer;
    peer.on("open", id => {
      console.log(id);
      setpeerId(id);
      socket.emit("peerInit", { peerId: id });
    });
    socket.on("ack", id => {
      console.log("\nACKKKKK\n");
      socket.emit("privateRoom", {
        room: "private room",
        peerId: peerId
      });
    });
    socket.on("wait", ({ message }) => {
      console.log(message);
      setRoomStatus({ connected: false, message });
    });
    socket.on("private ack", data => {
      setRoomIdOtherUser(data.roomID);
    });
    socket.on("toast", ({ message, user1, user2 }) => {
      console.log("USER CONNECTED", user1);
      setRoomStatus({ connected: true, message });
      if (user1?.id === user?.id) setUserConnected(user2);
      else setUserConnected(user1);
    });
    socket.on("newMessage", data => {
      const messObj = {
        message: data.message.encryptedMessage,
        senderId: data.senderId
      };
      setMessage(prevArray => [...prevArray, messObj]);

      //let height = msgs.offsetHeight;
      //window.scroll(0, height);
    });
    socket.on("init-call", async ({ pId }) => {
      console.log("CONNECTED, init-call", pId);
      const call = peer.call(pId, mystream);
      console.log("Initiated call");
      call.on("stream", remoteStream => {
        setOtherStream(remoteStream);
        console.log(remoteStream);
      });
    });

    /*const call = peerInstance.current.call(pId, mystream);
        console.log(typeof peer.call(pId, mystream));
        call.on("stream", remoteStream => {
          setOtherStream(remoteStream);
        });*/
    // });
    peer.on("call", async call => {
      call.answer(mystream);

      call.on("stream", remoteStream => {
        console.log(remoteStream);
        setOtherStream(remoteStream);
      });
    });
    // socket.on("disconnect", () => {
    //   setIsConnected(false);
    // });
    socket.on("alone", () => {
      setRoomStatus({ ...roomStatus, connected: false });
      setUserConnected(null);
      setMessage([]);
      socket.emit("setUserData", { ...user });
      socket.emit("peerInit", { peerId: peerId });
    });
    socket.on("AddFriendRequest", () => {});
    socket.emit("friendAdded", () => {});
    return () => {
      socket.off("connect");
      socket.off("ack");
      socket.off("private ack");
      socket.off("wait");
      socket.off("toast");
      socket.off("newMessage");
      socket.off("alone");
      socket.off("init-call");
      peer.off("open");
      peer.off("call");
    };
  }, []);
  const sendRequest = () => {
    console.log("HERE");
    socket.emit("sendRequest");
  };
  return (
    <div className={style.main}>
      <div className={style.inner}>
        <div className={style.left_container}>
          <div>
            <SideBar type="videoCall" />
          </div>
        </div>

        <div className={style.mid_container}>
          {mystream && (
            <div className={style.top}>
              <div className={style.left_innercontainer}>
                <div>
                  <button className={style.navbar_buttons_left}>
                    <img
                      className={style.background_icon}
                      alt="bg_img"
                      src={nxt}
                    />
                  </button>
                </div>
                <div className={style.name}>{userConnected?.name}</div>
              </div>

              <div className={style.navbar_buttons_right}>
                <button className={style.add_btn} onClick={sendRequest}>
                  <img
                    className={style.background_icon}
                    alt="bg_img"
                    src={add1}
                  />
                </button>
              </div>
            </div>
          )}
          <div className={style.m_container}>
            {/* {(!cameraAllowed || !faceDetectionRunning) && (
              <h1 className={style.loadingText}>
                Loading necessary resources...
              </h1>
            )}
              */}
            {/* {mystream && <AvatarRenderer streaming={mystream} />} */}
            {/* <FaceDetection
              setCameraAllowed={setCameraAllowed}
              setFaceDetectionRunning={setFaceDetectionRunning}
              faceDetectionRunning={faceDetectionRunning}
            /> */}
          </div>
          {/* <div>
          </div> */}

          {mystream && (
            <div className={style.info}>
              <img
                className={style.background_infoicon}
                alt="bg_img"
                src={info}
              />
              <div className={style.info_text}>
                <span className={style.user_quota}>Bio: </span>
                <br />
                <span className={style.user_infotext}>
                  {userConnected?.bio}
                </span>
              </div>
            </div>
          )}
        </div>
        {mystream && (
          <div className={style.right_container}>
            <div className={style.space_bar}></div>
            <div>
              {roomStatus?.connected && (
                <UserChat
                  message={message}
                  socket={socket}
                  roomID={roomIdOtherUser}
                />
              )}
            </div>
          </div>
        )}
        <div className={style.space_baar}></div>
      </div>
    </div>
  );
}

export default VideoCalling;
