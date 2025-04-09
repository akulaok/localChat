import {JSX, useState} from "react";
import styles from "./ChatInput.module.css";
import {MessageType} from "../../types/message";
import ChatInputQuote from "../ChatInputQuote/ChatInputQuote";
import ChatInputField from "../ChatInputField/ChatInputField";
import ChatInputMedia from "../ChatInputMedia/ChatInputMedia";
interface ChatInputProps {
  onSend: (text: string, mediaFile?: File) => void;
  quotedMessage: MessageType | null;
  clearQuote: () => void;
}

function ChatInput({
  onSend,
  quotedMessage,
  clearQuote,
}: ChatInputProps): JSX.Element {
  const [messageText, setMessageText] = useState("");
  const [media, setMedia] = useState<File | undefined>(undefined);

  const handleSend = () => {
    if (messageText.trim()) {
      onSend(messageText, media);
      setMessageText("");
      setMedia(undefined);
    }
  };

  return (
    <div className={styles.chatInput}>
      {quotedMessage && (
        <ChatInputQuote quotedMessage={quotedMessage} clearQuote={clearQuote} />
      )}
      <ChatInputField
        messageText={messageText}
        setMessageText={setMessageText}
        handleSend={handleSend}
      />
      <ChatInputMedia setMedia={setMedia} attached={!!media} />
      <button className={styles.sendButton} onClick={handleSend}></button>
    </div>
  );
}

export default ChatInput;
