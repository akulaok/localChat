import {JSX, useContext} from "react";
import styles from "./ChatHeader.module.css";
import {StorageContext} from "../../../contexts/StorageContext";

function ChatHeader(): JSX.Element {
  const {userSession} = useContext(StorageContext);
  const {userName, room} = userSession;
  return (
    <header className={styles.header}>
      <span className={styles.name}>{userName}</span>
      <span>комната: {room}</span>
      <button className={styles.button} onClick={() => userSession.logout()}>
        Выйти
      </button>
    </header>
  );
}

export default ChatHeader;
