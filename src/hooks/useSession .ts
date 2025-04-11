import {useEffect, useState} from "react";
import {loadSession, saveSession} from "../utils/authSrorage";

export const useSession = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [room, setRoom] = useState<string | null>(null);

  useEffect(() => {
    const {username, room} = loadSession();
    setUsername(username);
    setRoom(room);
  }, []);

  const login = (username: string, room: string) => {
    setUsername(username);
    setRoom(room);
    saveSession(username, room);
  };

  const logout = () => {
    setUsername(null);
    setRoom(null);
    localStorage.removeItem("chat-session");
    window.location.reload();
  };

  return {username, room, logout, login};
};
