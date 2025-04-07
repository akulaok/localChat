import {JSX} from "react";
import {MessageType} from "../../types/message";
import styles from "./Message.module.css";
import {formatTime} from "../../utils/formatTime";
import clsx from "clsx";

interface MessageProps {
  username: string;
  message: MessageType;
  onQuote: React.Dispatch<React.SetStateAction<MessageType | null>>;
}

function Message({username, message, onQuote}: MessageProps): JSX.Element {
  const isOwn = username === message.user;

  return (
    <div
      className={clsx(styles.messageContainer, {
        [styles.sentContainer]: isOwn,
        [styles.receivedContainer]: !isOwn,
      })}
    >
      <div
        className={clsx(styles.message, {
          [styles.sentMessage]: isOwn,
          [styles.receivedMessage]: !isOwn,
        })}
      >
        <div className={styles.header}>
          <button
            className={clsx(styles.button, {
              [styles.sentQuoteButton]: isOwn,
              [styles.receivedQuoteButton]: !isOwn,
            })}
            onClick={() => onQuote(message)}
            aria-label="Цитировать"
          ></button>
        </div>

        {message.quotedMessage && (
          <div className={styles.quoted}>
            <strong>{message.quotedMessage.user}:</strong>{" "}
            {message.quotedMessage.text}
          </div>
        )}

        <div className={styles.text}>{message.text}</div>

        <div className={styles.footer}>
          {!isOwn && <span className={styles.username}>{message.user}</span>}
          <span
            className={clsx({
              [styles.sentTimestamp]: isOwn,
              [styles.receivedTimestamp]: !isOwn,
            })}
          >
            {formatTime(message.timestamp)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Message;
