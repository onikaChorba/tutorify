import React, { useState, useEffect } from "react";

export default function SendMessage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  const scrollToMessage = () => {
    const chat = document.querySelector("#messages");

    chat.scroll({ behavior: "smooth" });
    chat.scrollBottom = -chat.scrollHeight;
  };

  useEffect(() => {
    scrollToMessage();
  }, [messages]);

  return (
    <div className="">
      <h1 className="">Community Chat</h1>

      <div className="">
        <form onSubmit={sendMessage}>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className=""
            type="text"
          />
          <button className="">SEND</button>
        </form>
      </div>
      <div id="messages" className="messages">
        {messages.map((message, idx) => {
          return <div key={idx}>{message}</div>;
        })}
      </div>
    </div>
  );
}
