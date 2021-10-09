import React, { useState } from "react";
import Book from "../Components/BookShow/Book";
import Navbar from "../Components/Homepage/Navbar";
import styled from "styled-components";
import Chat from "../Components/StreamChat/Chat";
import styles from "../Components/Login/Login.module.css";

export default function Booking() {
  const [showChat, setShowChat] = useState(false);

  const handleChat = () => {
    setShowChat((p) => !p);
  };
  return (
    <Cont>
      <Navbar />
      <Book />
      <button
        onClick={handleChat}
        style={{
          margin: "auto",
          position: "absolute",
          right: 0,
          fontSize: "14px",
          padding: "15px",
        }}
        className={styles.loginBtn}
      >
        <span />
        <span />
        <span />
        <span /> {!showChat ? "Open Comments" : "Close Comments"}
      </button>
      {showChat && <Chat />}
    </Cont>
  );
}

const Cont = styled.div`
  background-color: #131a27;
`;
