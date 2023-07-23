import React, {useEffect} from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import Auth from "./modules/auth/presentation/screen/Auth/Auth";
import Home from "./common/components/Home/Home";
import {useAppDispatch, useAppSelector} from "./modules/Utils/Hooks";
import {getLocalStorageUserActive} from "./modules/auth/shared/utils/TokenLocalStorage";
import {getUserActiveState} from "./modules/Store/Actions/userAction";

function App() {

    const dispatch = useAppDispatch();
    const userActive = useAppSelector((state) => state.userState.userActive);


    useEffect(() => {
        let userA = getLocalStorageUserActive();
        dispatch(getUserActiveState(userA));
    }, [dispatch]);

    useEffect(() => {
        console.log(userActive);
    }, [userActive]);

    return (
        <Switch>
            <Route path="/auth" children={<Auth/>}/>
            <Route path="/home" children={<Home/>}/>
            <Redirect to="auth"/>
        </Switch>
    );
}

export default App;

{/*<ProtectedRoute*/}
{/*    isAuthenticated={!!userActive && !!token}*/}
{/*    userTypes={userActive?.user_type}*/}
{/*    redirectPath="/auth"*/}
{/*    path="/admin"*/}
{/*    component={Admin}*/}
{/*/>*/}