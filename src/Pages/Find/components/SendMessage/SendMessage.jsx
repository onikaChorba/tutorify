import React, { useState, useEffect } from "react";
import "./SendMessage.scss";
import Button from "@/components/Button";

export default function SendMessage({ person }) {
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
    <div className="sendMessage">
      <h1 className="sendMessage__title">
        Tutors Chat with: <span>{person.name}</span>
      </h1>
      <div className="messages" id="messages">
        {messages.map((message, idx) => {
          return (
            <div className="message" key={idx}>
              {message}
            </div>
          );
        })}
      </div>
      <div>
        <form onSubmit={sendMessage}>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="sendMessage__input"
            type="text"
          />
          <button className="sendMessage__button">
            <Button orange small>
              <span className="button__text "> SEND </span>
            </Button>
          </button>
        </form>
      </div>
    </div>
  );
}
