import {useState} from "react";
import {MessageType} from "../types/message";
import {getMediaInfo} from "../utils/getMediaInfo";

export const useChatLogic = (
  username: string,
  room: string,
  setMessages: (f: (prev: MessageType[]) => MessageType[]) => void
) => {
  const [quotedMessage, setQuotedMessage] = useState<MessageType | null>(null);

  const addMessage = (text: string, mediaFile?: File) => {
    const {mediaUrl, mediaType} = getMediaInfo(mediaFile);
    const newMsg: MessageType = {
      id: Date.now().toString(),
      user: username,
      text,
      timestamp: new Date().toISOString(),
      room: room,
      quotedMessage: quotedMessage,
      mediaUrl: mediaUrl,
      mediaType: mediaType,
    };
    setMessages((prev) => [...prev, newMsg]);
    setQuotedMessage(null);
  };

  return {addMessage, quotedMessage, setQuotedMessage};
};
