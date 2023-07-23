import {HomeStyled} from "./HomeStyled";
import {Route, Switch} from "react-router-dom";
import React, {useEffect} from "react";
import Admin from "../../../modules/admin/presentation/screen/Admin/Admin";
import {useAppDispatch, useAppSelector} from "../../../modules/Utils/Hooks";
import SidebarHome from "../SidebarHome/SidebarHome";
import Circle from "../Circle/Circle";
import Budget from "../../../modules/Budget/Budget";
import ProtectedRoute from "../../../modules/auth/shared/utils/ProtectedRoute";
import {getUserActiveState} from "../../../modules/Store/Actions/userAction";
import {getLocalStorageUserActive} from "../../../modules/auth/shared/utils/TokenLocalStorage";
import ProtectedBudget from "../../../modules/auth/shared/utils/ProtectedBudget";



export default function Home(): JSX.Element {

    const dispatch = useAppDispatch();
    const userActive = useAppSelector((state) => state.userState.userActive);
    const token = useAppSelector((state) => state.userState.token);

    useEffect(() => {
        dispatch(getUserActiveState(getLocalStorageUserActive()));
    }, [dispatch]);

    return (
        <HomeStyled>
            <div className="container-info-user">
                <span>{userActive?.name}</span>
                <img alt="logout" src="/Image/cerrar-sesion.png"/>
            </div>
            <div className="container-content">
                <div className="sidebar">
                    <Circle
                        width={4}
                        height={4}
                        background="transparent"
                        color="unset"
                        border="2px solid #000"
                        altImg="logo"
                        src="/Image/mi_logo_deeckrite.png"
                    />
                    <SidebarHome/>
                </div>
                <div className="content">
                    <Switch>
                        <ProtectedRoute
                            isAuthenticated={!!userActive}
                            userTypes={userActive?.user_type}
                            redirectPath="/home"
                            path="/home/admin"
                            component={Admin}
                        />
                        {/*<Route path="/home/admin" children={<Admin/>}/>*/}
                        <ProtectedBudget
                            isAuthenticated={!!userActive}
                            userTypes={userActive?.user_type}
                            redirectPath="/home"
                            path="/home/budget"
                            component={Budget}
                        />
                    </Switch>
                </div>
            </div>
        </HomeStyled>
    );
}