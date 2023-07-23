import {CREATE_PERMISSION, CREATE_PERMISSION_FAILED, CREATE_PERMISSION_SUCCESS} from "../Types/PermissionsType";
import axios from "axios";

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
    axios.request(config)
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