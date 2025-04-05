import {JSX} from "react";
import {MessageType} from "../../types/message";
import styles from "./Message.module.css";

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
        {message.text}
      </div>
    </div>
  );
}

export default Message;
