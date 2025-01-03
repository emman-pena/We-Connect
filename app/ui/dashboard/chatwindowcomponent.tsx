"use client";

import { useState } from "react";

export default function ChatWindow({ chatname }: { chatname: string }) {
  {/**An array storing the chat messages. Each message has a sender 
    (either "me" or "them") and text (the message content). */}
    const [messages, setMessages] = useState([
    { sender: "them", text: "Hey! How are you doing today?" },
    { sender: "me", text: "I'm doing great, thanks! How about you?" },
  ]);

  const [newMessage, setNewMessage] = useState("");

    {/**It checks if newMessage contains any non-whitespace characters with 
        newMessage.trim(). If valid, it updates the messages state by adding the new 
        message (with "me" as the sender and the content of newMessage). 
        After sending the message, the newMessage state is reset to an empty string 
        (setNewMessage("")), clearing the input field.*/}

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages((prev) => [...prev, { sender: "me", text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-full">
        {/* Header */}
      <div className="p-4 bg-green-500 text-white flex items-center justify-between rounded-md">
        <h1 className="text-lg font-semibold">{chatname}</h1>
      </div>

      {/* Messages */}
      <div className="flex-grow p-4 overflow-y-auto bg-white rounded-md">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-3 flex ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-5 py-2 rounded-full ${
                msg.sender === "me"
                  ? "bg-green-500 text-white"
                  : "bg-gray-300 text-black"
              }`}

              style={{
                wordWrap: "break-word", // Ensures the text wraps when it is too long
                whiteSpace: "pre-wrap", // Allows line breaks if the text contains them
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 bg-gray-200 flex items-center rounded-md">
        <input
          type="text"
          className="flex-grow px-4 py-2 rounded-lg border border-gray-400 "
          placeholder="Aa"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
        />
        <button
          className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
