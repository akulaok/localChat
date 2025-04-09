import {JSX} from "react";
import styles from "./ChatPage.module.css";
import ChatHeader from "../../components/Chat/ChatHeader/ChatHeader";
import MessageList from "../../components/Message/MessageList/MessageList";
import {useMessages} from "../../hooks/useMessages";
import {useChatLogic} from "../../hooks/useChatLogic";
import ChatInput from "../../components/Chat/ChatInput/ChatInput";

interface ChatPageProps {
  username: string;
  room: string;
}

function ChatPage({username, room}: ChatPageProps): JSX.Element {
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

export default ChatPage;
