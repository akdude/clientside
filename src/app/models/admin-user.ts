import { LocalStorageKeys } from '../enums';

export class AdminUser {
    idUser: string;
    accessKey: string;
    publicKey: string;
    sessionId: string;
    sessionKey: string;
    get(): AdminUser{
        return JSON.parse(localStorage.getItem(LocalStorageKeys.AdminUser));
    }
}