import { useEffect, useRef, useState } from "react";
import "./App.css";
import ChatInput from "./components/ChatInput";
import ChatText from "./components/ChatText";

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      id: "id1",
      message: "Hello",
      sender: "user",
    },
    {
      id: "id2",
      message: "Hi 👋 I am your Chatbot",
      sender: "chatbot",
    },
  ]);

  // Scroll container reference
  // const chatContainerRef = useRef(null);

  // Auto scroll when message changes
  // useEffect(() => {
  //   const container = chatContainerRef.current;
  //   if (container) {
  //     container.scrollTop = container.scrollHeight;
  //   }
  // }, [chatMessages]);

  const chatContainerRef = useRef(null)

  useEffect(()=>{
    const container = chatContainerRef.current
    if(container){
      container.scrollTop = container.scrollHeight;
    }
  })

  return (
    <div className="chat-container" >
      {/* Chat messages area */}
      <div className="chat-box" ref={chatContainerRef}>
        {chatMessages.map((chatMessage) => (
          <ChatText
            key={chatMessage.id}
            message={chatMessage.message}
            sender={chatMessage.sender}
          />
        ))}
      </div>

      {/* Input area */}
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
