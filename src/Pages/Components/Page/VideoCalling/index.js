import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import { Peer } from "peerjs";
import ReactPlayer from "react-player";
const socket = io(`http://localhost:3300`);

function VideoCalling() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [roomStatus, setRoomStatus] = useState({
    connected: false,
    message: ""
  });
  const [messageInput, setMessageInput] = useState("");
  const [roomIdOtherUser, setRoomIdOtherUser] = useState("");
  const [message, setMessage] = useState([]);
  const [mystream, setMystream] = useState(null);
  const [peerId, setpeerId] = useState(null);
  const [otherpeerId, setotherpeerId] = useState(null);
  const peerInstance = useRef(null);
  const [otherStream, setOtherStream] = useState(null);
  const getUserMedia = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });
    setMystream(stream);
  };

  useEffect(() => {
    getUserMedia();
    console.log("BEFORE", socket.id);
    socket.on("connect", () => {
      setIsConnected(true);
      console.log("connected with ,", socket.id);
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
      socket.on("ack", d => {
        console.log("PEER ID", id);
        socket.emit("privateRoom", {
          room: "private room",
          peerId: id
        });
      });
    });

    socket.on("wait", ({ message }) => {
      console.log(message);
      setRoomStatus({ connected: false, message });
    });
    socket.on("private ack", data => {
      setRoomIdOtherUser(data.roomID);
    });
    socket.on("toast", ({ message }) => {
      setRoomStatus({ connected: true, message });
    });
    socket.on("newMessage", data => {
      const messObj = {
        message: data.message.encryptedMessage,
        senderId: data.senderId
      };
      setMessage(prevArray => [...prevArray, messObj]);
      //msgs.insertAdjacentHTML("beforeend", template);
      //let height = msgs.offsetHeight;
      //window.scroll(0, height);
    });
    socket.on("init-call", async ({ pId }) => {
      console.log("CONNECTED, init-call", pId);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      const call = peer.call(pId, stream);
      call.on("stream", remoteStream => {
        setOtherStream(remoteStream);
      });

      /*const call = peerInstance.current.call(pId, mystream);
      console.log(typeof peer.call(pId, mystream));
      call.on("stream", remoteStream => {
        setOtherStream(remoteStream);
      });*/
    });
    peer.on("call", async call => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      call.answer(stream);

      call.on("stream", remoteStream => {
        setOtherStream(remoteStream);
      });
    });
    /*socket.on("disconnect", () => {
      setIsConnected(false);
    });*/

    return () => {
      socket.off("connect");
      socket.off("ack");
      socket.off("private ack");
      socket.off("wait");
      socket.off("toast");
      socket.off("newMessage");

      socket.off("disconnect");
      peer.off("open");
      peer.off("call");
    };
  }, []);

  const sendMessage = () => {
    socket.emit("sendMessage", {
      room: roomIdOtherUser,
      encryptedMessage: messageInput
    });
    setMessageInput("");
  };

  return (
    <div>
      <p>VideoCalling</p>
      <div>
        <p>Connected: {"" + isConnected}</p>
      </div>
      {/* <Link to="/video-calling">VideoCalling </Link>
      <Link to="/messages">Message </Link>
      <Link to="/settings">Settings </Link> */}
      <div>
        <p>{roomStatus.message}</p>
      </div>
      <ReactPlayer url={mystream} playing={true} />
      <ReactPlayer url={otherStream} playing={true} />
      {roomStatus.connected && (
        <div>
          <ul>
            {message.map((data, index) =>
              socket.id === data.senderId ? (
                <li key={index} style={{ marginLeft: "300px" }}>
                  {data.message}
                </li>
              ) : (
                <li key={index} style={{ marginLeft: "0px" }}>
                  {data.message}
                </li>
              )
            )}
          </ul>
          <input
            type="text"
            placeholder="Message"
            value={messageInput}
            onChange={e => setMessageInput(e.target.value)}
          />
          <button onClick={sendMessage}>Send Message</button>
        </div>
      )}
      {/*       
      <div class="chat-body">
        <div class="ui grid">
          <div class="row outer">
            <div class="one wide column"></div>
            <div class="fourteen wide column">
              <div class="ui raised segment header centered semi top">
                <div>
                  <i class="user icon"></i>
                  WAHAJ
                </div>
              </div>
              <div class="ui vertical grid" id="msgs">
                <div class="sixteen column row"></div>
                <div class="sixteen column row"></div>
              </div>
            </div>
          </div>
          <div class="one wide column"></div>
          <div class="row">
            <div class="five wide column"></div>
            <div class="six wide column">
              <div class="ui mini modal transition tada" id="confirm">
                <div class="header">End This Chat</div>
                <div class="content">
                  <p>Are you sure you want to end this chat?</p>
                </div>
                <div class="actions">
                  <div class="ui teal button" id="cancel">
                    No
                  </div>
                  <div class="ui red right labeled icon button" id="close">
                    Yes
                    <i class="sign out icon"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="five wide column"></div>
          </div>
        </div>
        <div class="ui raised segment sixteen column row full bottom">
          <div class="ui action icon input full">
            <button class="ui red right labeled icon button" id="endbtn">
              <i class="ban icon"></i>
              <span class="txt">End</span>
            </button>
            <a href="/chat">
              <button class="ui teal icon button hide" id="newbtn">
                <span>New</span>
              </button>
            </a>
            <input
              type="text"
              placeholder="Please wait for another user..."
              id="message"
              disabled="true"
              tabindex="0"
            ></input>
            <button class="ui teal labeled icon button" id="sendbtn">
              <i class="fitted send icon"></i>
              <span class="txt">Send</span>
            </button>
            <a href="/">
              <button class="ui red icon button right-float hide" id="homebtn">
                <span>Home</span>
              </button>
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default VideoCalling;
