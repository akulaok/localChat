import {JSX} from "react";
import styles from "./Chat.module.css";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatInput from "../ChatInput/ChatInput";

interface ChatProps {
  username: string;
  room: string;
}

function Chat({username, room}: ChatProps): JSX.Element {
  return (
    <main className={styles.main}>
      <ChatHeader username={username} room={room} />
      <div className={styles.ChatContainer}>
        <ChatInput />
      </div>
    </main>
  );
}

export default Chat;
