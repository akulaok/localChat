import EmojiPicker from "emoji-picker-react";
import {useState} from "react";
import styles from "./EmojiPicker.module.css";
interface EmojiPickerWrapperProps {
  onEmojiClick: (emoji: string) => void;
}

export default function EmojiPickerWrapper({
  onEmojiClick,
}: EmojiPickerWrapperProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        type="button"
        onClick={() => setOpen(!open)}
      ></button>
      {open && (
        <div className={styles.emojiBox}>
          <EmojiPicker
            onEmojiClick={(emojiData) => {
              onEmojiClick(emojiData.emoji);
              setOpen(false);
            }}
            height={350}
          />
        </div>
      )}
    </div>
  );
}
