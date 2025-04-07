export interface MessageType {
  id: string;
  user: string;
  text: string;
  timestamp: string;
  room: string;
  quotedMessage: MessageType | null;
  mediaUrl?: string;
  mediaType?: "image" | "video";
}
