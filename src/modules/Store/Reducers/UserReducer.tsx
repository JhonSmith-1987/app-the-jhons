import {InfoUserModel} from "../../auth/domain/models/InfoUserModel";
import {
    GET_AUTH_TOKEN, GET_AUTH_TOKEN_FAILED, GET_AUTH_TOKEN_SUCCESS,
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
    tokenActive:string | null;
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
    tokenActive:null,
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
                tokenActive:state.tokenActive,
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
                tokenActive:state.tokenActive,
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
                tokenActive:state.tokenActive,
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
                tokenActive:state.tokenActive,
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
                tokenActive:state.tokenActive,
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
                tokenActive:state.tokenActive,
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
                tokenActive:state.tokenActive,
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
                tokenActive:action.payload,
                errors:state.errors
            };
        default:
            return state;
    }
}
export default UserReducer;