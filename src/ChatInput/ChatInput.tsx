import {JSX} from "react";
import styles from "./ChatInput.module.css";
function ChatInput(): JSX.Element {
  return (
    <div className={styles.chatInput}>
      <input
        placeholder="Введите сообщение"
        type="text"
        className={styles.input}
      ></input>
      <button className={styles.button}></button>
    </div>
  );
}

export default ChatInput;
