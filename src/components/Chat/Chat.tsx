import {JSX} from "react";
import styles from "./Chat.module.css";
import ChatHeader from "../ChatHeader/ChatHeader";
import MessageList from "../MessageList/MessageList";
import ChatInput from "../ChatInput/ChatInput";
import {useMessages} from "../../hooks/useMessages";
import {useChatLogic} from "../../hooks/useChatLogic";

interface ChatProps {
  username: string;
  room: string;
}

function Chat({username, room}: ChatProps): JSX.Element {
  const {messages, setMessages} = useMessages(room);

  const {addMessage, quotedMessage, setQuotedMessage} = useChatLogic(
    username,
    room,
    setMessages
  );
  return (
    <main className={styles.main}>
      <ChatHeader username={username} room={room} />
      <div className={styles.ChatContainer}>
        <ChatInput
          onSend={addMessage}
          quotedMessage={quotedMessage}
          clearQuote={() => setQuotedMessage(null)}
        />
        <MessageList
          messages={messages}
          username={username}
          onQuote={setQuotedMessage}
        />
      </div>
    </main>
  );
}

export default Chat;
