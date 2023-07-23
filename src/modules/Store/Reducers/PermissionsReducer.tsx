import {
    CREATE_PERMISSION,
    CREATE_PERMISSION_FAILED,
    CREATE_PERMISSION_SUCCESS,
    CREATE_PERMISSION_USER, CREATE_PERMISSION_USER_FAILED, CREATE_PERMISSION_USER_SUCCESS,
    GET_ALL_PERMISSIONS,
    GET_ALL_PERMISSIONS_FAILED,
    GET_ALL_PERMISSIONS_SUCCESS,
} from "../Types/PermissionsType";
import {PermissionsModel} from "../../admin/domain/Models/PermissionsModel";

interface IPermissionsReducer {
    isLoadingCreatePermission:boolean;
    response:string;
    errors:string;
    isLoadingGetPermissions:boolean;
    allPermissions:PermissionsModel[];
    isLoadingCreatePermissionUser:boolean;
}
const initialStatePermissions:IPermissionsReducer = {
    isLoadingCreatePermission: false,
    isLoadingGetPermissions:false,
    allPermissions:[],
    isLoadingCreatePermissionUser:false,
    response: '',
    errors: '',
}

const PermissionsReducer = function (state = initialStatePermissions, action: { type: any; payload: any; }): IPermissionsReducer {
    switch (action.type) {
        case CREATE_PERMISSION:
            return {
                isLoadingCreatePermission: action.payload,
                isLoadingGetPermissions:state.isLoadingGetPermissions,
                allPermissions:state.allPermissions,
                isLoadingCreatePermissionUser:state.isLoadingCreatePermissionUser,
                response: '',
                errors: ''
            };
        case CREATE_PERMISSION_SUCCESS:
            return {
                isLoadingCreatePermission: false,
                isLoadingGetPermissions:state.isLoadingGetPermissions,
                allPermissions:state.allPermissions,
                isLoadingCreatePermissionUser:state.isLoadingCreatePermissionUser,
                response: action.payload,
                errors: ''
            };
        case CREATE_PERMISSION_FAILED:
            return {
                isLoadingCreatePermission: false,
                isLoadingGetPermissions:state.isLoadingGetPermissions,
                allPermissions:state.allPermissions,
                isLoadingCreatePermissionUser:state.isLoadingCreatePermissionUser,
                response: '',
                errors: action.payload
            };
        case GET_ALL_PERMISSIONS:
            return {
                isLoadingCreatePermission: state.isLoadingCreatePermission,
                isLoadingGetPermissions:action.payload,
                allPermissions:state.allPermissions,
                isLoadingCreatePermissionUser:state.isLoadingCreatePermissionUser,
                response: '',
                errors: ''
            };
        case GET_ALL_PERMISSIONS_SUCCESS:
            return {
                isLoadingCreatePermission: state.isLoadingCreatePermission,
                isLoadingGetPermissions:false,
                allPermissions:action.payload,
                isLoadingCreatePermissionUser:state.isLoadingCreatePermissionUser,
                response: '',
                errors: ''
            };
        case GET_ALL_PERMISSIONS_FAILED:
            return {
                isLoadingCreatePermission: state.isLoadingCreatePermission,
                isLoadingGetPermissions:false,
                allPermissions:state.allPermissions,
                isLoadingCreatePermissionUser:state.isLoadingCreatePermissionUser,
                response: '',
                errors: action.payload
            };
        case CREATE_PERMISSION_USER:
            return {
                isLoadingCreatePermission: state.isLoadingCreatePermission,
                isLoadingGetPermissions:state.isLoadingGetPermissions,
                allPermissions:state.allPermissions,
                isLoadingCreatePermissionUser:action.payload,
                response: '',
                errors: ''
            };
        case CREATE_PERMISSION_USER_SUCCESS:
            return {
                isLoadingCreatePermission: state.isLoadingCreatePermission,
                isLoadingGetPermissions:state.isLoadingGetPermissions,
                allPermissions:state.allPermissions,
                isLoadingCreatePermissionUser:false,
                response: action.payload,
                errors: ''
            };
        case CREATE_PERMISSION_USER_FAILED:
            return {
                isLoadingCreatePermission: state.isLoadingCreatePermission,
                isLoadingGetPermissions:state.isLoadingGetPermissions,
                allPermissions:state.allPermissions,
                isLoadingCreatePermissionUser:false,
                response: state.response,
                errors: action.payload
            };
        default:
            return state;
    }
}
export default PermissionsReducer;