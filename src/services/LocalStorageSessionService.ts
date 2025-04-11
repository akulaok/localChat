import {SESSION_KEY} from "../consts";
import {MessageType} from "../types/message";

export interface ILocalStorageService {
  loadSession: () => {username: string | null; room: string | null};
  clearSession: () => void;
  saveSession: (username: string, room: string) => void;
  loadMessages: (room: string) => MessageType[];
  saveMessage: (room: string, messages: MessageType[]) => void;
}

export class LocalStorageService implements ILocalStorageService {
  loadSession() {
    const savedSession = localStorage.getItem(SESSION_KEY);
    return savedSession
      ? JSON.parse(savedSession)
      : {username: null, room: null};
  }

  clearSession() {
    localStorage.removeItem(SESSION_KEY);
  }

  saveSession(username: string, room: string) {
    localStorage.setItem(SESSION_KEY, JSON.stringify({username, room}));
  }

  loadMessages(room: string) {
    const savedMessages = localStorage.getItem(`chat:${room}`);
    return savedMessages ? JSON.parse(savedMessages) : [];
  }

  saveMessage(room: string, messages: MessageType[]) {
    localStorage.setItem(`chat:${room}`, JSON.stringify(messages));
  }
}
