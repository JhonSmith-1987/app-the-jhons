import {
    GET_AUTH_TOKEN, GET_AUTH_TOKEN_FAILED, GET_AUTH_TOKEN_SUCCESS,
    GET_TOKEN_ACTIVE, GET_USER_ACTIVE_SUCCESS,
    GET_USERS,
    GET_USERS_FAILED,
    GET_USERS_SUCCESS
} from "../Types/UserType";
import axios from "axios";
import {InfoUserModel} from "../../auth/domain/models/InfoUserModel";
import {PostAuthModel} from "../../auth/domain/models/AuthModel";
import tokenLocalStorage from "../../auth/shared/utils/TokenLocalStorage";
import {getUserActive} from "../../auth/shared/utils/GetUserActive";
import {ResponseAuthModel} from "../../auth/domain/models/ResponseAuthModel";
import {alertError} from "../../auth/shared/utils/Alerts/AlertError";
import {alertOk} from "../../auth/shared/utils/Alerts/AlertOk";


export const getUsers = () => (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/api/getUsers',
        headers: { }
    };
    dispatch({
        type: GET_USERS,
        payload: 'loading'
    });
    axios.request(config)
        .then((response) => {
            dispatch({
                type: GET_USERS_SUCCESS,
                payload: response.data
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_USERS_FAILED,
                payload: error
            });
        });
}
export const getAuthToken = (data:PostAuthModel) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/api/login',
        headers: {
            'Content-Type': 'application/json'
        },
        data : data
    };
    dispatch({
        type: GET_AUTH_TOKEN,
        payload: true
    });
    await axios.request(config)
        .then((response) => {
            let res:ResponseAuthModel = response.data;
            if (res.access_token !== '') {
                tokenLocalStorage(res.access_token);
                getUserActive(res.access_token);
                dispatch({
                    type: GET_AUTH_TOKEN_SUCCESS,
                    payload: false
                });
                alertOk(res.message);
            }
            alertError(res.message);
        })
        .catch((error) => {
            dispatch({
                type: GET_AUTH_TOKEN_FAILED,
                payload: error
            });
        });
}

export const getTokenActive = (token: string | null) => (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    if (token !== null) {
        dispatch({
            type: GET_TOKEN_ACTIVE,
            payload: token
        });
    }
    if (token === null) {
        dispatch({
            type: GET_TOKEN_ACTIVE,
            payload: null
        });
    }

}
export const getUserActiveState = (userActive: InfoUserModel | null) => (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    dispatch({
        type: GET_USER_ACTIVE_SUCCESS,
        payload: userActive
    });
}