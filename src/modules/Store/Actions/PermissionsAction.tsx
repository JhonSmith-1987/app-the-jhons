import {
    CREATE_PERMISSION,
    CREATE_PERMISSION_FAILED,
    CREATE_PERMISSION_SUCCESS,
    CREATE_PERMISSION_USER, CREATE_PERMISSION_USER_FAILED, CREATE_PERMISSION_USER_SUCCESS,
    GET_ALL_PERMISSIONS,
    GET_ALL_PERMISSIONS_FAILED,
    GET_ALL_PERMISSIONS_SUCCESS,
} from "../Types/PermissionsType";
import axios from "axios";
import {CreatePermissionUserModel} from "../../admin/domain/Models/CreatePermissionUserModel";

export const createPermission = (name_permission:string) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `http://127.0.0.1:8000/api/createPermission?name=${name_permission}`,
        headers: { }
    };
    dispatch({
        type: CREATE_PERMISSION,
        payload: true
    });
    await axios.request(config)
        .then((response) => {
            dispatch({
                type: CREATE_PERMISSION_SUCCESS,
                payload: response.data
            });
        })
        .catch((error) => {
            dispatch({
                type: CREATE_PERMISSION_FAILED,
                payload: error
            });
        });
}
export const getAllPermission = () => (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/api/getPermissions',
        headers: { }
    };
    dispatch({
        type: GET_ALL_PERMISSIONS,
        payload: true
    });
    axios.request(config)
        .then((response) => {
            dispatch({
                type: GET_ALL_PERMISSIONS_SUCCESS,
                payload: response.data
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_ALL_PERMISSIONS_FAILED,
                payload: error
            });
        });
}
export const createPermissionUser = (data:CreatePermissionUserModel) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/api/createPermissionUser',
        headers: {
            'Content-Type': 'application/json'
        },
        data : data
    };
    dispatch({
        type: CREATE_PERMISSION_USER,
        payload: true
    });
    await axios.request(config)
        .then((response) => {
            dispatch({
                type: CREATE_PERMISSION_USER_SUCCESS,
                payload: response.data
            });
        })
        .catch((error) => {
            dispatch({
                type: CREATE_PERMISSION_USER_FAILED,
                payload: error
            });
        });
}