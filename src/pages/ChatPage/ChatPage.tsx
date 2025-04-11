import {JSX, useContext} from "react";
import styles from "./ChatPage.module.css";
import ChatHeader from "../../components/Chat/ChatHeader/ChatHeader";
import MessageList from "../../components/Message/MessageList/MessageList";
import {useMessages} from "../../hooks/useMessages";
import {useChatLogic} from "../../hooks/useChatLogic";
import ChatInput from "../../components/Chat/ChatInput/ChatInput";
import {StorageContext} from "../../contexts/StorageContext";

function ChatPage(): JSX.Element {
  const {userSession} = useContext(StorageContext);
  const {userName, room} = userSession;
  const {messages, setMessages} = useMessages(room);
  const {addMessage, quotedMessage, setQuotedMessage} = useChatLogic(
    userName,
    room,
    setMessages
  );
  return (
    <main className={styles.main}>
      <ChatHeader />
      <div className={styles.ChatContainer}>
        <ChatInput
          onSend={addMessage}
          quotedMessage={quotedMessage}
          clearQuote={() => setQuotedMessage(null)}
        />
        <MessageList
          messages={messages}
          username={userName}
          onQuote={setQuotedMessage}
        />
      </div>
    </main>
  );
}

export default ChatPage;
