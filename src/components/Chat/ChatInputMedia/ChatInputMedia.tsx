import {JSX, useRef} from "react";
import styles from "./ChatInputMedia.module.css";

interface ChatInputMediaProps {
  setMedia: (file: File) => void;
  attached: boolean;
}

function ChatInputMedia({
  setMedia,
  attached,
}: ChatInputMediaProps): JSX.Element {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMedia(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        className={styles.input}
        onChange={handleChange}
        accept="image/*,video/*"
      />

      <button
        className={`${styles.mediaButton} ${attached ? styles.attached : ""}`}
        onClick={handleClick}
        aria-label={attached ? "Файл прикреплён" : "Прикрепить файл"}
      />
    </>
  );
}

export default ChatInputMedia;
