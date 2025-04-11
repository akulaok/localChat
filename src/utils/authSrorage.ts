export const saveSession = (username: string, room: string): void => {
  localStorage.setItem("chat-session", JSON.stringify({username, room}));
};

export const loadSession = (): {
  username: string | null;
  room: string | null;
} => {
  const savedSession = localStorage.getItem("chat-session");
  if (savedSession) {
    return JSON.parse(savedSession);
  }
  return {username: null, room: null};
};
