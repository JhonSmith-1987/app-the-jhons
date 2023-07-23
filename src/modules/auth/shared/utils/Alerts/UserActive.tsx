import axios from "axios";
import {InfoUserModel} from "../../../domain/models/InfoUserModel";
import {localStorageUserActive} from "../TokenLocalStorage";

export async function userActive(token:string) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/api/infoUser',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
    await axios.request(config)
        .then((response) => {
            const res:InfoUserModel = response.data;
            console.log(res);
            localStorageUserActive(res);
        })
        .catch((error) => {
            console.log(error);
        });
}