import {JSX} from "react";
import styles from "./ChatHeader.module.css";
import {useSession} from "../../../hooks/useSession ";

interface ChatHeaderProps {
  username: string;
  room: string;
}

function ChatHeader({username, room}: ChatHeaderProps): JSX.Element {
  const {logout} = useSession();

  return (
    <header className={styles.header}>
      <span className={styles.name}>{username}</span>
      <span>комната: {room}</span>
      <button className={styles.button} onClick={logout}>
        Выйти
      </button>
    </header>
  );
}

export default ChatHeader;
