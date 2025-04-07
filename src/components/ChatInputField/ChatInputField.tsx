import {JSX} from "react";
import styles from "./ChatInputField.module.css";
import EmojiPickerWrapper from "../EmojiPicker/EmojiPicker";
interface ChatInputFieldProps {
  messageText: string;
  setMessageText: React.Dispatch<React.SetStateAction<string>>;
  handleSend: () => void;
}

function ChatInputField({
  messageText,
  setMessageText,
  handleSend,
}: ChatInputFieldProps): JSX.Element {
  return (
    <>
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
    </>
  );
}

export default ChatInputField;
