import {ReactNode} from "react";
import {StorageContext} from "./StorageContext";
import {UserSession} from "../services/UserSessionService";

export const StorageProvider = ({children}: {children: ReactNode}) => {
  const StorageService = {userSession: new UserSession()};

  return (
    <StorageContext.Provider value={StorageService}>
      {children}
    </StorageContext.Provider>
  );
};
