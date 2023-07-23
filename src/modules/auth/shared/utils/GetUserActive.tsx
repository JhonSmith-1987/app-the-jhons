import axios from "axios";
import {InfoUserModel} from "../../domain/models/InfoUserModel";
import {localStorageUserActive} from "./TokenLocalStorage";


export function getUserActive(token:string) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/api/infoUser',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
    axios.request(config)
        .then((response) => {
            const resData:InfoUserModel = response.data;
            localStorageUserActive(resData);
        })
        .catch((error) => {
            console.log(error);
        });
}