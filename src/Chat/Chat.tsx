import {JSX} from "react";
import styles from "./Chat.module.css";
import ChatHeader from "../ChatHeader/ChatHeader";

interface ChatProps {
  username: string;
  room: string;
}

function Chat({username, room}: ChatProps): JSX.Element {
  return (
    <main className={styles.main}>
      <ChatHeader username={username} room={room} />
    </main>
  );
}

export default Chat;
