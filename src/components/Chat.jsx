import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Chat = () => {
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [targetUser, setTargetUser] = useState(null);
  const user = useSelector((store) => store.user);
  const userId = user?._id;

  const fetchChatMessages = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/chat/${targetUserId}`, {
        withCredentials: true,
      });
      const { chat, targetUserStatus } = res.data;
      setTargetUser(targetUserStatus);
      const chatMessages = chat.messages.map((msg) => {
        const { senderId, text, createdAt } = msg;
        return {
          firstName: senderId?.firstName,
          lastName: senderId?.lastName,
          text,
          createdAt,
        };
      });
      setMessages(chatMessages);
    } catch (err) {
      console.error(err);
    }
  };

  // Polling effect to update chat messages and target user status every 5 seconds
  useEffect(() => {
    fetchChatMessages();
    const interval = setInterval(fetchChatMessages, 5000);
    return () => clearInterval(interval);
  }, [targetUserId]);

  useEffect(() => {
    if (!userId) return;
    const socket = createSocketConnection();
    socket.emit("joinChat", {
      firstName: user.firstName,
      userId,
      targetUserId,
    });
    socket.on("messageReceived", ({ firstName, lastName, text }) => {
      setMessages((prev) => [
        ...prev,
        { firstName, lastName, text, createdAt: new Date() },
      ]);
    });
    return () => {
      socket.disconnect();
    };
  }, [userId, targetUserId, user.firstName]);

  const sendMessage = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      firstName: user.firstName,
      lastName: user.lastName,
      userId,
      targetUserId,
      text: newMessage,
    });
    setNewMessage("");
  };

  return (
    <div className="w-3/4 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col">
      <header className="p-5 border-b border-gray-600">
        <h1 className="text-xl font-bold">
          {targetUser
            ? `${targetUser.firstName} ${targetUser.lastName}`
            : "Loading..."}
        </h1>
        <p className="text-sm text-gray-400">
          {targetUser
            ? targetUser.isOnline
              ? "Online"
              : targetUser.lastSeen
              ? `Last seen: ${new Date(targetUser.lastSeen).toLocaleString()}`
              : ""
            : ""}
        </p>
      </header>
      <div className="flex-1 overflow-scroll p-5">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              "chat " +
              (user.firstName === msg.firstName ? "chat-end" : "chat-start")
            }
          >
            <div className="chat-header">
              {`${msg.firstName} ${msg.lastName}`}
              <time className="text-xs opacity-50">
                {new Date(msg.createdAt).toLocaleString()}
              </time>
            </div>
            <div className="chat-bubble">{msg.text}</div>
          </div>
        ))}
      </div>
      <div className="p-5 border-t border-gray-600 flex items-center gap-2">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border border-gray-500 text-white rounded p-2"
          placeholder="Type your message..."
        />
        <button onClick={sendMessage} className="btn btn-secondary">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
