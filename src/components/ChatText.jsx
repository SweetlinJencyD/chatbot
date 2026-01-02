import userImg from "../assets/user.png";
import robotImg from "../assets/robot.png";

function ChatText({ message, sender }) {
  return (
    <div className={`chat-message ${sender}`}>
      {sender === "chatbot" && <img src={robotImg} />}
      <p>{message}</p>
      {sender === "user" && <img src={userImg} />}
    </div>
  );
}

export default ChatText;
