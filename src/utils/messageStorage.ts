import {MessageType} from "../types/message";

export const sendMessage = (room: string, messages: MessageType[]) => {
  localStorage.setItem(`chat:${room}`, JSON.stringify(messages));
};

export const loadMessages = (room: string): MessageType[] => {
  const savedMessages = localStorage.getItem(`chat:${room}`);
  return savedMessages ? JSON.parse(savedMessages) : [];
};