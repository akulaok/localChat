import {JSX, useState} from "react";
import styles from "./ChatInput.module.css";
import EmojiPickerWrapper from "../EmojiPicker/EmojiPicker";
interface ChatInputProps {
  onSend: (text: string) => void;
}

function ChatInput({onSend}: ChatInputProps): JSX.Element {
  const [messageText, setMessageText] = useState("");

  const handleSend = () => {
    if (messageText.trim()) {
      onSend(messageText);
      setMessageText("");
    }
  };

  return (
    <div className={styles.chatInput}>
      <input
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        placeholder="Введите сообщение"
        type="text"
        className={styles.input}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      ></input>
      <EmojiPickerWrapper onEmojiClick={ (emoji) => setMessageText((prev) => prev + emoji)} />
      <button className={styles.button} onClick={handleSend}></button>
    </div>
  );
}

export default ChatInput;
