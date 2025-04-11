import {createContext, useContext} from "react";
import {IUserSession, UserSession} from "../services/UserSessionService";

export const StorageContext = createContext<{userSession: IUserSession}>({
  userSession: new UserSession(),
});
export const useStorage = () => {
  const context = useContext(StorageContext);
  return context;
};
