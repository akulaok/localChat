import {JSX} from "react";
import {MessageType} from "../../types/message";
import styles from "./Message.module.css";
import {formatTime} from "../../utils/formatTime";

interface MessageProps {
  username: string;
  message: MessageType;
}

function Message({username, message}: MessageProps): JSX.Element {
  const isOwnMessage = username === message.user;

  return (
    <div
      className={`${styles.messageContainer} ${
        isOwnMessage ? styles.sentContainer : styles.receivedContainer
      }`}
    >
      <div
        className={`${styles.message} ${
          isOwnMessage ? styles.sentMessage : styles.receivedMessage
        }`}
      >
        <div className={styles.text}>{message.text}</div>
        <div className={styles.footer}>
          {!isOwnMessage && (
            <span className={styles.username}>{message.user}</span>
          )}
          <span
            className={`${
              isOwnMessage ? styles.sentTimestamp : styles.receivedTimestamp
            }`}
          >
            {formatTime(message.timestamp)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Message;
