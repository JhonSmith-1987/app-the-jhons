import {PostAuthModel} from "../../domain/models/AuthModel";
import axios from "axios";
import {ResponseAuthModel} from "../../domain/models/ResponseAuthModel";
import {alertError} from "./Alerts/AlertError";
import tokenLocalStorage from "./TokenLocalStorage";
import {userActive} from "./Alerts/UserActive";
import {alertOk} from "./Alerts/AlertOk";
import {useAppDispatch} from "../../../Utils/Hooks";

export async function authMethod(data:PostAuthModel) {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/api/login',
        headers: {
            'Content-Type': 'application/json'
        },
        data : data
    };
    await axios.request(config)
        .then((response) => {
            const resData:ResponseAuthModel = response.data;
            if (resData.access_token === '') {
                alertError(resData.message);
                return;
            }
            if (resData.access_token !== '') {
                // tokenLocalStorage(resData.access_token);
                userActive(resData.access_token);
                alertOk(resData.message);
                console.log(resData.access_token);
            }
        })
        .catch((error) => {
            console.log(error);
        });
}