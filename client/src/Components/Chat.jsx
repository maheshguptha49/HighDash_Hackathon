import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";
import axios from "axios";

const Chat = () => {
  const [text, setText] = useState("");
  const [username, setUsername] = useState("Akshay");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    const userName = window.prompt("Username: ", "Anonymous");
    setUsername(userName);
    const pusher = new Pusher("88357217eb7831ebfe53", {
      cluster: "ap2",
      encrypted: true,
    });
    const channel = pusher.subscribe("real-chat");
    channel.bind("message", (data) => {
      chat.push(data);
      setChat(chat);
    });
    //this.handleTextChange = this.handleTextChange.bind(this);
  }, []);

  const send = () => {
    const payload = {
      username: username,
      message: text,
    };
    axios
      .post("http://localhost:2424/api/message", payload)
      .then((res) => setChat([...chat, res.data]));
    console.log(chat);
  };

  return (
    <div>
      Chat
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={send}>Send</button>
      {chat.map((i) => {
        return (
          <>
            <h2>{i.username}</h2>
            <p>{i.message}</p>
          </>
        );
      })}
    </div>
  );
};

export default Chat;
