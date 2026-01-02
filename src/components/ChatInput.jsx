import { useState } from "react";

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    setInputText(e.target.value);
  }

  function chatResponse(inputText) {
    const msg = inputText.toLowerCase();

    if (msg.includes("hi") || msg.includes("hey")) {
      return "Hii How can I help you?";
    } else {
      return "Sorry, I didn't understand";
    }
  }

  function sendMessage() {
    if (!inputText.trim()) return;

    const newMessage = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newMessage);

    const chatReply = chatResponse(inputText);

    setTimeout(() => {
      setChatMessages([
        ...newMessage,
        {
          message: chatReply,
          sender: "chatbot",
          id: crypto.randomUUID(),
        },
      ]);
    }, 1000);

    setInputText("");
  }

  // ENTER key support
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  }

  return (
    <div className="chat-input">
      <input
        value={inputText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Send a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatInput;
