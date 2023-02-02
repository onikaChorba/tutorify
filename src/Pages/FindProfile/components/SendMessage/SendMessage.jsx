import React, { useState, useEffect } from "react";
import Button from "@/components/Button";

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
      <h1 className="">Tutors Chat</h1>
      <div id="messages" className="messages">
        {messages.map((message, idx) => {
          return <div key={idx}>{message}</div>;
        })}
      </div>
      <div className="">
        <form onSubmit={sendMessage}>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className=""
            type="text"
          />
          <Button green small>
            <span className="button__text "> SEND </span>
          </Button>
        </form>
      </div>
    </div>
  );
}
