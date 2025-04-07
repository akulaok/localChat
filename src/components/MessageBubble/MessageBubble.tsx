import {JSX} from "react";
import styles from "./MessageBubble.module.css";
import clsx from "clsx";
import {MessageType} from "../../types/message";
import QuoteButton from "../QuoteButton/QuoteButton";
import QuotedBlock from "../QuotedBlock/QuotedBlock";
import MediaContent from "../MediaContent/MediaContent";
import MessageFooter from "../MessageFooter/MessageFooter";

interface Props {
  message: MessageType;
  isOwn: boolean;
  onQuote: (msg: MessageType) => void;
}

function MessageBubble({message, isOwn, onQuote}: Props): JSX.Element {
  return (
    <div
      className={clsx(styles.message, {
        [styles.sentMessage]: isOwn,
        [styles.receivedMessage]: !isOwn,
      })}
    >
      <div className={styles.header}>
        <QuoteButton isOwn={isOwn} onClick={() => onQuote(message)} />
      </div>

      {message.quotedMessage && <QuotedBlock quoted={message.quotedMessage} />}

      <div className={styles.text}>{message.text}</div>

      <MediaContent url={message.mediaUrl} type={message.mediaType} />

      <MessageFooter
        isOwn={isOwn}
        username={message.user}
        timestamp={message.timestamp}
      />
    </div>
  );
}

export default MessageBubble;
