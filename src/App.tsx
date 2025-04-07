import {useEffect, useState} from "react";
import "./App.css";
import {onLogin} from "./utils/authSrorage";
import Login from "./components/Login/Login";
import Chat from "./components/Chat/Chat";

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

  if (!username || !room)
    return (
      <Login
        onLogin={(user, roomName) =>
          onLogin(user, roomName, setUsername, setRoom)
        }
      />
    );
  return <Chat username={username} room={room}></Chat>;
}

export default App;