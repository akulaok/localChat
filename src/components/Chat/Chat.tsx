import {JSX} from "react";
import styles from "./Chat.module.css";
import ChatHeader from "../ChatHeader/ChatHeader";
import {MessageType} from "../../types/message";
import MessageList from "../MessageList/MessageList";
import ChatInput from "../ChatInput/ChatInput";
import {useMessages} from "../../hooks/useMessages";

interface ChatProps {
  username: string;
  room: string;
}

function Chat({username, room}: ChatProps): JSX.Element {
  const {messages, setMessages} = useMessages(room);

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
