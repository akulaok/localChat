import {JSX} from "react";
import styles from "./QuoteButton.module.css";
import clsx from "clsx";

interface Props {
  isOwn: boolean;
  onClick: () => void;
}

function QuoteButton({isOwn, onClick}: Props): JSX.Element {
  return (
    <button
      className={clsx(styles.button, {
        [styles.sentQuoteButton]: isOwn,
        [styles.receivedQuoteButton]: !isOwn,
      })}
      onClick={onClick}
      aria-label="Цитировать"
    ></button>
  );
}

export default QuoteButton;
