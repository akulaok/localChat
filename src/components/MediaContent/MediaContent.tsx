import {JSX} from "react";

interface Props {
  url?: string;
  type?: "image" | "video";
}

function MediaContent({url, type}: Props): JSX.Element | null {
  if (!url || !type) return null;

  if (type === "image") {
    return <img src={url} alt="attached" />;
  }

  if (type === "video") {
    return (
      <video controls>
        <source src={url} />
        Your browser does not support the video tag.
      </video>
    );
  }

  return null;
}

export default MediaContent;
