import {JSX, useState} from "react";
import styles from "./ChatInput.module.css";
import EmojiPickerWrapper from "../EmojiPicker/EmojiPicker";
import {MessageType} from "../../types/message";
interface ChatInputProps {
  onSend: (text: string) => void;
  quotedMessage: MessageType | null;
  clearQuote: () => void;
}

function ChatInput({
  onSend,
  quotedMessage,
  clearQuote,
}: ChatInputProps): JSX.Element {
  const [messageText, setMessageText] = useState("");

  const handleSend = () => {
    if (messageText.trim()) {
      onSend(messageText);
      setMessageText("");
    }
  };

  return (
    <div className={styles.chatInput}>
      {quotedMessage && (
        <div className={styles.quote}>
          <span className={styles.quoteText}>
            <strong>{quotedMessage.user}:</strong> {quotedMessage.text}
          </span>
          <button className={styles.closeQuote} onClick={clearQuote}>
            ✕
          </button>
        </div>
      )}

      <input
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        placeholder="Введите сообщение"
        type="text"
        className={styles.input}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />

      <EmojiPickerWrapper
        onEmojiClick={(emoji) => setMessageText((prev) => prev + emoji)}
      />

      <button className={styles.button} onClick={handleSend}></button>
    </div>
  );
}

export default ChatInput;
