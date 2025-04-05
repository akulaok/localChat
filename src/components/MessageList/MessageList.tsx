import {JSX, useEffect, useRef} from "react";
import {MessageType} from "../../types/message";
import Message from "../Message/Message";
import styles from "./MessageList.module.css";

interface MessageListProps {
  messages: MessageType[];
  username: string;
}

function MessageList({username, messages}: MessageListProps): JSX.Element {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
  }, [messages]);

  return (
    <div className={styles.messagesBox}>
      {messages.map((message) => (
        <Message username={username} message={message}></Message>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessageList;
