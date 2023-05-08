import React from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";

const ChatBox = () => {
  return (
    <main>
      <div className="messages-wrapper">
        <Message />
      </div>
      <SendMessage />
    </main>
  );
};

export default ChatBox;
