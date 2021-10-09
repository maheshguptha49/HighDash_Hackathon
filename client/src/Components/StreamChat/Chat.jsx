import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";
import axios from "axios";
import styled from "styled-components";
import { format } from "timeago.js";
import { useParams } from "react-router";
import { loadData } from "../../utils/localSt";

const Chat = () => {
  const [text, setText] = useState("");
  const [username, setUsername] = useState("Akshay");
  const [chat, setChat] = useState([]);
  var my;
  const param = useParams();
  console.log(param);
  useEffect(() => {
    let user = loadData("user");
    setUsername(user.name);

    //const userName = window.prompt("Username: ", "Anonymous");
    //setUsername(userName);
    const pusher = new Pusher("88357217eb7831ebfe53", {
      cluster: "ap2",
      encrypted: true,
    });
    const channel = pusher.subscribe("real-chat");
    channel.bind("message", (data) => {
      chat.push(data);
      console.log(chat);
      setChat(chat);
    });
    //this.handleTextChange = this.handleTextChange.bind(this);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:2424/api/storeComment")
      .then((res) => setChat(res.data.comment));
  }, []);

  const send = () => {
    const payload = {
      show: param.id,
      username: username,
      message: text,
      at: Date.now(),
    };
    axios
      .post("http://localhost:2424/api/message", payload)
      .then((res) => setChat([...chat, res.data]));
    axios
      .post("http://localhost:2424/api/storeComment", payload)
      .then((res) => console.log(res));
    console.log(chat);
  };

  return (
    <div>
      Chat
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ backgroundColor: "white" }}
      />
      <button onClick={send}>Send</button>
      {chat.map((i) => {
        if (username === i.username) {
          my = true;
        } else {
          my = false;
        }
        return (
          // <>
          //   <h2>{i.username}</h2>
          //   <p>{i.message}</p>
          // </>
          <Texted>
            <div style={{ flexDirection: my ? "row-reverse" : "row" }}>
              <img
                src={`https://avatars.dicebear.com/api/micah/${i.username}.svg`}
                alt="prof"
              />
              <p
                style={{
                  backgroundColor: my ? "rgb(228, 230, 235)" : "#4093ff",
                  color: my ? "rgb(5,5,5)" : "white",
                }}
              >
                {i.message}
              </p>
            </div>
            <div
              style={{ justifyContent: my ? "right" : "left", color: "white" }}
            >
              <h4>{format(i.at)}</h4>
              <h6>By {i.username}</h6>
            </div>
          </Texted>
        );
      })}
    </div>
  );
};

export default Chat;

const Texted = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    > img {
      width: 50px;
      height: 50px;
      margin: 0 10px;
      border-radius: 50%;
    }
  }
  h6 {
    font-size: 12px;
    color: white;
    padding: 8px 12px;
  }
  h4 {
    font-size: 12px;
    font-weight: 500;
    color: white;
  }
  p {
    font-size: 18px;
    max-width: 60%;
    padding: 10px;
    border-radius: 20px;
  }
`;
