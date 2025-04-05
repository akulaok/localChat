import {JSX, useEffect, useState} from "react";
import styles from "./Chat.module.css";
import ChatHeader from "../ChatHeader/ChatHeader";
import {MessageType} from "../../types/message";
import MessageList from "../MessageList/MessageList";
import ChatInput from "../ChatInput/ChatInput";

interface ChatProps {
  username: string;
  room: string;
}

function Chat({username, room}: ChatProps): JSX.Element {
  const savedMessages = localStorage.getItem(`chat:${room}`);
  const [messages, setMessages] = useState<MessageType[]>(
    savedMessages ? JSON.parse(savedMessages) : []
  );

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === `chat:${room}` && e.newValue) {
        setMessages(JSON.parse(e.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [room]);

  useEffect(() => {
    localStorage.setItem(`chat:${room}`, JSON.stringify(messages));
  }, [messages, room]);

  const addMessage = (text: string) => {
    const newMsg: MessageType = {
      id: Date.now().toString(),
      user: username,
      text,
      timestamp: new Date().toISOString(),
      room: room,
    };
    setMessages((prev) => [...prev, newMsg]);
  };

  return (
    <main className={styles.main}>
      <ChatHeader username={username} room={room} />
      <div className={styles.ChatContainer}>
        <ChatInput onSend={addMessage} />
        <MessageList messages={messages} username={username} />
      </div>
    </main>
  );
}

export default Chat;
