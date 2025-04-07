import {JSX} from "react";
import clsx from "clsx";
import styles from "./MessageFooter.module.css";
import {formatTime} from "../../utils/formatTime";

interface Props {
  isOwn: boolean;
  username: string;
  timestamp: string;
}

function MessageFooter({isOwn, username, timestamp}: Props): JSX.Element {
  return (
    <div className={styles.footer}>
      {!isOwn && <span className={styles.username}>{username}</span>}
      <span
        className={clsx({
          [styles.sentTimestamp]: isOwn,
          [styles.receivedTimestamp]: !isOwn,
        })}
      >
        {formatTime(timestamp)}
      </span>
    </div>
  );
}

export default MessageFooter;
