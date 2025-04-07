import {JSX, useRef} from "react";
import styles from "./ChatInputMedia.module.css";

interface ChatInputMediaProps {
  setMedia: (file: File) => void;
}

function ChatInputMedia({setMedia}: ChatInputMediaProps): JSX.Element {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        className={styles.input}
        onChange={(e) => {
          if (e.target.files?.[0]) {
            setMedia(e.target.files[0]);
          }
        }}
        accept="image/*,video/*"
      />

      <button
        className={styles.mediaButton}
        onClick={() => fileInputRef.current?.click()}
      ></button>
    </>
  );
}

export default ChatInputMedia;
