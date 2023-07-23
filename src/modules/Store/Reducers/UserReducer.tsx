import {InfoUserModel} from "../../auth/domain/models/InfoUserModel";
import {
    CREATE_USER,
    CREATE_USER_FAILED,
    CREATE_USER_SUCCESS,
    DELETE_USER,
    DELETE_USER_FAILED,
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
import {ResponseAuthModel} from "../../auth/domain/models/ResponseAuthModel";

interface IUserReducer {
    isLoadingUsers: boolean;
    users: InfoUserModel[];
    isLoadingAuthToken:boolean;
    authData: ResponseAuthModel | null;
    token:string | null;
    isLoadingUserActive:boolean;
    userActive: InfoUserModel | null;
    isLoadingCreateUser:boolean;
    tokenActive:string | null;
    isLoadingDeleteUser:boolean;
    isLoadingSingleUser:boolean;
    singleUser:InfoUserModel | null;
    errors: string
}

const initialStateUsers: IUserReducer = {
    isLoadingUsers: false,
    users: [],
    isLoadingAuthToken:false,
    authData:null,
    token:'',
    isLoadingUserActive:false,
    userActive:null,
    isLoadingCreateUser:false,
    tokenActive:null,
    isLoadingDeleteUser:false,
    isLoadingSingleUser:false,
    singleUser:null,
    errors: ''
}

const UserReducer = function (state = initialStateUsers, action: { type: any; payload: any; }): IUserReducer {
    switch (action.type) {
        case GET_USERS:
            return {
                isLoadingUsers:true,
                users:state.users,
                isLoadingAuthToken:state.isLoadingAuthToken,
                authData:state.authData,
                token:state.token,
                isLoadingUserActive:state.isLoadingUserActive,
                userActive:state.userActive,
                isLoadingCreateUser:state.isLoadingCreateUser,
                tokenActive:state.tokenActive,
                isLoadingDeleteUser:state.isLoadingDeleteUser,
                isLoadingSingleUser:state.isLoadingSingleUser,
                singleUser:state.singleUser,
                errors:state.errors
            };
        case GET_USERS_SUCCESS:
            return {
                isLoadingUsers:false,
                users:action.payload,
                isLoadingAuthToken:state.isLoadingAuthToken,
                authData:state.authData,
                token:state.token,
                isLoadingUserActive:state.isLoadingUserActive,
                userActive:state.userActive,
                isLoadingCreateUser:state.isLoadingCreateUser,
                tokenActive:state.tokenActive,
                isLoadingDeleteUser:state.isLoadingDeleteUser,
                isLoadingSingleUser:state.isLoadingSingleUser,
                singleUser:state.singleUser,
                errors:state.errors
            };
        case GET_USERS_FAILED:
            return {
                isLoadingUsers:false,
                users:state.users,
                isLoadingAuthToken:state.isLoadingAuthToken,
                authData:state.authData,
                token:state.token,
                isLoadingUserActive:state.isLoadingUserActive,
                userActive:state.userActive,
                isLoadingCreateUser:state.isLoadingCreateUser,
                tokenActive:state.tokenActive,
                isLoadingDeleteUser:state.isLoadingDeleteUser,
                isLoadingSingleUser:state.isLoadingSingleUser,
                singleUser:state.singleUser,
                errors:action.payload
            };
        case GET_AUTH_TOKEN:
            return {
                isLoadingUsers:state.isLoadingUsers,
                users:state.users,
                isLoadingAuthToken:action.payload,
                authData:state.authData,
                token:state.token,
                isLoadingUserActive:state.isLoadingUserActive,
                userActive:state.userActive,
                isLoadingCreateUser:state.isLoadingCreateUser,
                tokenActive:state.tokenActive,
                isLoadingDeleteUser:state.isLoadingDeleteUser,
                isLoadingSingleUser:state.isLoadingSingleUser,
                singleUser:state.singleUser,
                errors:state.errors
            };
        case GET_AUTH_TOKEN_SUCCESS:
            return {
                isLoadingUsers:state.isLoadingUsers,
                users:state.users,
                isLoadingAuthToken:action.payload,
                authData:state.authData,
                token:action.payload.access_token,
                isLoadingUserActive:state.isLoadingUserActive,
                userActive:state.userActive,
                isLoadingCreateUser:state.isLoadingCreateUser,
                tokenActive:state.tokenActive,
                isLoadingDeleteUser:state.isLoadingDeleteUser,
                isLoadingSingleUser:state.isLoadingSingleUser,
                singleUser:state.singleUser,
                errors:state.errors
            };
        case GET_AUTH_TOKEN_FAILED:
            return {
                isLoadingUsers:state.isLoadingUsers,
                users:state.users,
                isLoadingAuthToken:false,
                authData:state.authData,
                token:state.token,
                isLoadingUserActive:state.isLoadingUserActive,
                userActive:state.userActive,
                isLoadingCreateUser:state.isLoadingCreateUser,
                tokenActive:state.tokenActive,
                isLoadingDeleteUser:state.isLoadingDeleteUser,
                isLoadingSingleUser:state.isLoadingSingleUser,
                singleUser:state.singleUser,
                errors:action.payload
            };
        case GET_USER_ACTIVE_SUCCESS:
            return {
                isLoadingUsers:state.isLoadingUsers,
                users:state.users,
                isLoadingAuthToken:state.isLoadingAuthToken,
                authData:state.authData,
                token:state.token,
                isLoadingUserActive:false,
                userActive:action.payload,
                isLoadingCreateUser:state.isLoadingCreateUser,
                tokenActive:state.tokenActive,
                isLoadingDeleteUser:state.isLoadingDeleteUser,
                isLoadingSingleUser:state.isLoadingSingleUser,
                singleUser:state.singleUser,
                errors:state.errors
            };
        case GET_TOKEN_ACTIVE:
            return {
                isLoadingUsers:state.isLoadingUsers,
                users:state.users,
                isLoadingAuthToken:state.isLoadingAuthToken,
                authData:state.authData,
                token:state.token,
                isLoadingUserActive:state.isLoadingUserActive,
                userActive:state.userActive,
                isLoadingCreateUser:state.isLoadingCreateUser,
                tokenActive:action.payload,
                isLoadingDeleteUser:state.isLoadingDeleteUser,
                isLoadingSingleUser:state.isLoadingSingleUser,
                singleUser:state.singleUser,
                errors:state.errors
            };
        case CREATE_USER:
            return {
                isLoadingUsers:state.isLoadingUsers,
                users:state.users,
                isLoadingAuthToken:state.isLoadingAuthToken,
                authData:state.authData,
                token:state.token,
                isLoadingUserActive:state.isLoadingUserActive,
                userActive:state.userActive,
                isLoadingCreateUser:true,
                tokenActive:state.tokenActive,
                isLoadingDeleteUser:state.isLoadingDeleteUser,
                isLoadingSingleUser:state.isLoadingSingleUser,
                singleUser:state.singleUser,
                errors:state.errors
            };
        case CREATE_USER_SUCCESS:
            return {
                isLoadingUsers:state.isLoadingUsers,
                users:state.users,
                isLoadingAuthToken:state.isLoadingAuthToken,
                authData:state.authData,
                token:state.token,
                isLoadingUserActive:state.isLoadingUserActive,
                userActive:state.userActive,
                isLoadingCreateUser:false,
                tokenActive:state.tokenActive,
                isLoadingDeleteUser:state.isLoadingDeleteUser,
                isLoadingSingleUser:state.isLoadingSingleUser,
                singleUser:state.singleUser,
                errors:state.errors
            };
        case CREATE_USER_FAILED:
            return {
                isLoadingUsers:state.isLoadingUsers,
                users:state.users,
                isLoadingAuthToken:state.isLoadingAuthToken,
                authData:state.authData,
                token:state.token,
                isLoadingUserActive:state.isLoadingUserActive,
                userActive:state.userActive,
                isLoadingCreateUser:false,
                tokenActive:state.tokenActive,
                isLoadingDeleteUser:state.isLoadingDeleteUser,
                isLoadingSingleUser:state.isLoadingSingleUser,
                singleUser:state.singleUser,
                errors:action.payload
            };
        case DELETE_USER:
            return {
                isLoadingUsers:state.isLoadingUsers,
                users:state.users,
                isLoadingAuthToken:state.isLoadingAuthToken,
                authData:state.authData,
                token:state.token,
                isLoadingUserActive:state.isLoadingUserActive,
                userActive:state.userActive,
                isLoadingCreateUser:state.isLoadingCreateUser,
                tokenActive:state.tokenActive,
                isLoadingDeleteUser:action.payload,
                isLoadingSingleUser:state.isLoadingSingleUser,
                singleUser:state.singleUser,
                errors:''
            };
        case DELETE_USER_SUCCESS:
            return {
                isLoadingUsers:state.isLoadingUsers,
                users:state.users,
                isLoadingAuthToken:state.isLoadingAuthToken,
                authData:state.authData,
                token:state.token,
                isLoadingUserActive:state.isLoadingUserActive,
                userActive:state.userActive,
                isLoadingCreateUser:state.isLoadingCreateUser,
                tokenActive:state.tokenActive,
                isLoadingDeleteUser:false,
                isLoadingSingleUser:state.isLoadingSingleUser,
                singleUser:state.singleUser,
                errors:''
            };
        case DELETE_USER_FAILED:
            return {
                isLoadingUsers:state.isLoadingUsers,
                users:state.users,
                isLoadingAuthToken:state.isLoadingAuthToken,
                authData:state.authData,
                token:state.token,
                isLoadingUserActive:state.isLoadingUserActive,
                userActive:state.userActive,
                isLoadingCreateUser:state.isLoadingCreateUser,
                tokenActive:state.tokenActive,
                isLoadingDeleteUser:false,
                isLoadingSingleUser:state.isLoadingSingleUser,
                singleUser:state.singleUser,
                errors:action.payload
            };
        case GET_SINGLE_USER:
            return {
                isLoadingUsers:state.isLoadingUsers,
                users:state.users,
                isLoadingAuthToken:state.isLoadingAuthToken,
                authData:state.authData,
                token:state.token,
                isLoadingUserActive:state.isLoadingUserActive,
                userActive:state.userActive,
                isLoadingCreateUser:state.isLoadingCreateUser,
                tokenActive:state.tokenActive,
                isLoadingDeleteUser:state.isLoadingDeleteUser,
                isLoadingSingleUser:true,
                singleUser:state.singleUser,
                errors:''
            };
        case GET_SINGLE_USER_SUCCESS:
            return {
                isLoadingUsers:state.isLoadingUsers,
                users:state.users,
                isLoadingAuthToken:state.isLoadingAuthToken,
                authData:state.authData,
                token:state.token,
                isLoadingUserActive:state.isLoadingUserActive,
                userActive:state.userActive,
                isLoadingCreateUser:state.isLoadingCreateUser,
                tokenActive:state.tokenActive,
                isLoadingDeleteUser:state.isLoadingDeleteUser,
                isLoadingSingleUser:false,
                singleUser:action.payload,
                errors:''
            };
        case GET_SINGLE_USER_DELETE:
            return {
                isLoadingUsers:state.isLoadingUsers,
                users:state.users,
                isLoadingAuthToken:state.isLoadingAuthToken,
                authData:state.authData,
                token:state.token,
                isLoadingUserActive:state.isLoadingUserActive,
                userActive:state.userActive,
                isLoadingCreateUser:state.isLoadingCreateUser,
                tokenActive:state.tokenActive,
                isLoadingDeleteUser:state.isLoadingDeleteUser,
                isLoadingSingleUser:false,
                singleUser:state.singleUser,
                errors:action.payload
            };
        default:
            return state;
    }
}
export default UserReducer;