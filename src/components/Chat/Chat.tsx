import {JSX, useState} from "react";
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
  const [quotedMessage, setQuotedMessage] = useState<MessageType | null>(null);

  const addMessage = (text: string) => {
    const newMsg: MessageType = {
      id: Date.now().toString(),
      user: username,
      text,
      timestamp: new Date().toISOString(),
      room: room,
      quotedMessage: quotedMessage,
    };
    setMessages((prev) => [...prev, newMsg]);
    setQuotedMessage(null);
  };

  return (
    <main className={styles.main}>
      <ChatHeader username={username} room={room} />
      <div className={styles.ChatContainer}>
        <ChatInput
          onSend={addMessage}
          quotedMessage={quotedMessage}
          clearQuote={() => setQuotedMessage(null)}
        />
        <MessageList
          messages={messages}
          username={username}
          onQuote={setQuotedMessage}
        />
      </div>
    </main>
  );
}

export default Chat;
