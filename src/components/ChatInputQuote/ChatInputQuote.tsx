import {JSX} from "react";
import styles from "./ChatInputQuote.module.css";
import {MessageType} from "../../types/message";
interface ChatInputQuoteProps {
  quotedMessage: MessageType;
  clearQuote: () => void;
}

function ChatInputQuote({
  quotedMessage,
  clearQuote,
}: ChatInputQuoteProps): JSX.Element {
  return (
    <div className={styles.quote}>
      <span className={styles.quoteText}>
        <strong>{quotedMessage.user}:</strong> {quotedMessage.text}
      </span>
      <button className={styles.closeQuote} onClick={clearQuote}>
        ✕
      </button>
    </div>
  );
}

export default ChatInputQuote;
