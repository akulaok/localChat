import {JSX} from "react";
import styles from "./MediaContent.module.css";
interface Props {
  url?: string;
  type?: "image" | "video";
}

function MediaContent({url, type}: Props): JSX.Element | null {
  if (!url || !type) return null;

  if (type === "image") {
    return <img className={styles.media} src={url} alt="attached" />;
  }

  if (type === "video") {
    return (
      <video controls className={styles.media}>
        <source src={url} />
      </video>
    );
  }

  return null;
}

export default MediaContent;
