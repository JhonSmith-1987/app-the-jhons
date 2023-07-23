import {CREATE_PERMISSION, CREATE_PERMISSION_FAILED, CREATE_PERMISSION_SUCCESS} from "../Types/PermissionsType";

interface IPermissionsReducer {
    isLoadingCreatePermission:boolean;
    response:string;
    errors:string
}
const initialStatePermissions:IPermissionsReducer = {
    isLoadingCreatePermission: false,
    response: '',
    errors: '',
}

const PermissionsReducer = function (state = initialStatePermissions, action: { type: any; payload: any; }): IPermissionsReducer {
    switch (action.type) {
        case CREATE_PERMISSION:
            return {
                isLoadingCreatePermission: action.payload,
                response: '',
                errors: ''
            };
        case CREATE_PERMISSION_SUCCESS:
            return {
                isLoadingCreatePermission: false,
                response: action.payload,
                errors: ''
            };
        case CREATE_PERMISSION_FAILED:
            return {
                isLoadingCreatePermission: false,
                response: '',
                errors: action.payload
            };
        default:
            return state;
    }
}
export default PermissionsReducer;