import {makeAutoObservable} from "mobx";
import {
  ILocalStorageService,
  LocalStorageService,
} from "./LocalStorageSessionService";

export interface IUserSession {
  userName: string;
  room: string;
  login: (userName: string, room: string) => void;
  logout: () => void;
}

export class UserSession implements IUserSession {
  private storageService: ILocalStorageService;
  private _userName: string;
  private _room: string;

  public constructor() {
    this._userName = "";
    this._room = "";
    this.storageService = new LocalStorageService();

    makeAutoObservable(this);
  }

  public get userName(): string {
    return this._userName;
  }

  public get room() {
    return this._room;
  }

  public login(userName: string, room: string) {
    console.log(userName);
    this._userName = userName;
    this._room = room;
    this.storageService.saveSession(userName, room);
  }

  public logout() {
    this._userName = "";
    this._room = "";
    this.storageService.clearSession();
    window.location.reload();
  }
}
