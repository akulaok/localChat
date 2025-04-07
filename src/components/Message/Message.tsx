import {JSX} from "react";
import {MessageType} from "../../types/message";
import MessageContainer from "../MessageContainer/MessageContainer";
import MessageBubble from "../MessageBubble/MessageBubble";

interface Props {
  username: string;
  message: MessageType;
  onQuote: React.Dispatch<React.SetStateAction<MessageType | null>>;
}

function Message({username, message, onQuote}: Props): JSX.Element {
  const isOwn = username === message.user;

  return (
    <MessageContainer isOwn={isOwn}>
      <MessageBubble message={message} isOwn={isOwn} onQuote={onQuote} />
    </MessageContainer>
  );
}

export default Message;
