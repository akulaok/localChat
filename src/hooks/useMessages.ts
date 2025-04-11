import {useEffect, useState} from "react";
import {MessageType} from "../types/message";
import {LocalStorageService} from "../services/LocalStorageSessionService";

export const useMessages = (room: string) => {
  const storageService = new LocalStorageService();
  const [messages, setMessages] = useState<MessageType[]>(
    storageService.loadMessages(room)
  );

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
    storageService.saveMessage(room, messages);
  }, [messages, room]);

  return {messages, setMessages};
};
