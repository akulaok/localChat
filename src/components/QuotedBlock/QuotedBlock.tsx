import {JSX} from "react";
import styles from "./QuotedBlock.module.css";
import {MessageType} from "../../types/message";

interface Props {
  quoted: MessageType;
}

function QuotedBlock({quoted}: Props): JSX.Element {
  return (
    <div className={styles.quoted}>
      <strong>{quoted.user}:</strong> {quoted.text}
    </div>
  );
}

export default QuotedBlock;
