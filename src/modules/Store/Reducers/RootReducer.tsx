import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import PermissionsReducer from "./PermissionsReducer";

const RootReducer = combineReducers({
    userState: UserReducer,
    permissionsState: PermissionsReducer,
});
export default RootReducer;