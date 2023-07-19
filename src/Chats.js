import React, { useEffect, useState } from "react";
import { getDatabase, ref, push, set, onChildAdded } from "firebase/database";

function Chats(props) {
  const { name } = props;
  const [chats, setChats] = useState([]);
  const [chatMessage, setChatMessage] = useState("");

  const db = getDatabase();
  const chatListRef = ref(db, "chats");

  const handleClick = (e) => {
    setChatMessage(e.target.value);
  };

  const sendMessage = () => {
    const chatRef = push(chatListRef);
    set(chatRef, {
      name,
      message: chatMessage,
    });
    setChatMessage("");
  };

  const loadMessage = () => {
    onChildAdded(chatListRef, (data) => {
      setChats((prevChats) => [...prevChats, data.val()]);
      setTimeout(() => {
        updateHeight();
      }, 100);
    });
  };

  const updateHeight = () => {
    const el = document.getElementById("chat");
    el.scrollTop = el.scrollHeight;
  };

  useEffect(() => {
    loadMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>
        User: <span className="text-danger">{name}</span>
      </h1>
      <div id="chat" className="chat-container">
        {chats.map((chat, i) => (
          <div
            key={i}
            className={`d-flex ${name === chat.name && "flex-row-reverse"}`}
          >
            <p
              className="border border-3 my-3 p-3 rounded rounded-4"
              style={{
                backgroundColor: `${
                  name === chat.name ? "cadetblue" : "bisque"
                }`,
                color: "black",
              }}
            >
              <strong>{chat.name}: </strong>
              <span>{chat.message}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="btm">
        <input
          type="text"
          className="form-control"
          onChange={handleClick}
          value={chatMessage}
          placeholder="Enter message..."
        />
        <button className="btn btn-outline-success ms-2" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Chats;
