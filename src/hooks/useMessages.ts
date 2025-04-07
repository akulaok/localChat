import {useEffect, useState} from "react";
import {MessageType} from "../types/message";
import {loadMessages, sendMessage} from "../utils/messageStorage";

export const useMessages = (room: string) => {
  const [messages, setMessages] = useState<MessageType[]>(loadMessages(room));

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === `chat:${room}` && e.newValue) {
        setMessages(JSON.parse(e.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [room]);

  useEffect(() => {
    sendMessage(room, messages);
  }, [messages, room]);

  return {messages, setMessages};
};
