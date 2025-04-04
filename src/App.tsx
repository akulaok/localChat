import {useEffect, useState} from "react";
import "./App.css";
import Login from "./Login/Login";

function App() {
  const [username, setUsername] = useState<string | null>(null);
  const [room, setRoom] = useState<string | null>(null);

  useEffect(() => {
    const savedSession = localStorage.getItem("chat-session");
    if (savedSession) {
      const parsed = JSON.parse(savedSession);
      setUsername(parsed.username);
      setRoom(parsed.room);
    }
  }, []);

  const onLogin = (username: string, room: string) => {
    setUsername(username);
    setRoom(room);
    localStorage.setItem(
      "chat-session",
      JSON.stringify({username: username, room: room})
    );
  };

  return <Login onLogin={onLogin}></Login>;
}

export default App;
