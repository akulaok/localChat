import {JSX} from "react";
import styles from "./ChatHeader.module.css";

interface ChatHeaderProps {
  username: string;
  room: string;
}

function ChatHeader({username, room}: ChatHeaderProps): JSX.Element {
  return (
    <header className={styles.header}>
      <span className={styles.name}>{username}</span>
      <span>комната: {room}</span>
      <button
        className={styles.button}
        onClick={() => {
          localStorage.removeItem("chat-session");
          window.location.reload();
        }}
      >
        Выйти
      </button>
    </header>
  );
}

export default ChatHeader;
