import {InfoUserModel} from "../../domain/models/InfoUserModel";
import {alertOk} from "./Alerts/AlertOk";

export default function tokenLocalStorage(token: string) {
    localStorage.setItem('token', token);
}

export function localStorageUserActive(user: InfoUserModel | null) {
    if (user) {
        let data: string = JSON.stringify(user);
        localStorage.setItem('user_active', data);
        alertOk('todo salio bien con el usuario activo' + user.name);
    }
}

export function getLocalStorageToken() {
    return localStorage.getItem('token');
}

export function getLocalStorageUserActive() {
    let data: string | null = localStorage.getItem('user_active');
    if (data !== null) {
        let obj: InfoUserModel = JSON.parse(data);
        return obj;
    }
    return null;
}