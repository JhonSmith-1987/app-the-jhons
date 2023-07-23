import {
    CREATE_USER,
    CREATE_USER_FAILED,
    CREATE_USER_SUCCESS,
    DELETE_USER,
    DELETE_USER_SUCCESS,
    GET_AUTH_TOKEN,
    GET_AUTH_TOKEN_FAILED,
    GET_AUTH_TOKEN_SUCCESS,
    GET_SINGLE_USER,
    GET_SINGLE_USER_DELETE,
    GET_SINGLE_USER_SUCCESS,
    GET_TOKEN_ACTIVE,
    GET_USER_ACTIVE_SUCCESS,
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
import {CreateUserModel} from "../../admin/domain/Models/CreateUserModel";


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
export const createUser = (data:CreateUserModel) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    let resData:any = {
        'name': data.name,
        'email': data.email,
        'password': data.password,
        'user_type': 'noFunciona',
    }
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/api/createUser',
        headers: {
            'Content-Type': 'application/json'
        },
        data: resData
    };
    dispatch({
        type: CREATE_USER,
        payload: true
    });
    await axios.request(config)
        .then((response) => {
            console.log(response);
            dispatch({
                type: CREATE_USER_SUCCESS,
                payload: response.data
            });
        })
        .catch((error) => {
            console.log(error);
            dispatch({
                type: CREATE_USER_FAILED,
                payload: error
            });
        });
}
export const deleteUser = (id_user:number) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `http://127.0.0.1:8000/api/deleteUser/${id_user}`,
        headers: { }
    };
    dispatch({
        type: DELETE_USER,
        payload: true
    });
    await axios.request(config)
        .then((response) => {
            console.log(response);
            dispatch({
                type: DELETE_USER_SUCCESS,
                payload: response.data
            });
        })
        .catch((error) => {
            console.log(error);
            dispatch({
                type: DELETE_USER_SUCCESS,
                payload: error
            });
        });
}
export const getSingleUser = (id_user:number) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://127.0.0.1:8000/api/getUsersForId/${id_user}`,
        headers: { }
    };
    dispatch({
        type: GET_SINGLE_USER,
        payload: true
    });
    await axios.request(config)
        .then((response) => {
            console.log(response);
            dispatch({
                type: GET_SINGLE_USER_SUCCESS,
                payload: response.data
            });
        })
        .catch((error) => {
            console.log(error);
            dispatch({
                type: GET_SINGLE_USER_DELETE,
                payload: error
            });
        });
}