import { Nullable } from "../types/nullable";

export const onLogin = (username: Nullable<string>, room: Nullable<string>, setUsername: (u: Nullable<string>) => void, setRoom: (r: Nullable<string>) => void) => {
  setUsername(username);
  setRoom(room);
  localStorage.setItem(
    "chat-session",
    JSON.stringify({ username, room })
  );
};
