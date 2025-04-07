import {JSX, ReactNode} from "react";
import styles from "./MessageContainer.module.css";
import clsx from "clsx";

interface Props {
  isOwn: boolean;
  children: ReactNode;
}

function MessageContainer({isOwn, children}: Props): JSX.Element {
  return (
    <div
      className={clsx(styles.messageContainer, {
        [styles.sentContainer]: isOwn,
        [styles.receivedContainer]: !isOwn,
      })}
    >
      {children}
    </div>
  );
}

export default MessageContainer;
