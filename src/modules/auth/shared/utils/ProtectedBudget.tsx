import {Redirect, Route, RouteProps} from "react-router-dom";
import React from "react";

interface IProtectedRouteProps extends RouteProps {
    isAuthenticated: boolean;
    userTypes: string | undefined;
    redirectPath: string;
}

const ProtectedRoute: React.FC<IProtectedRouteProps> = ({
                                                            isAuthenticated,
                                                            userTypes,
                                                            redirectPath,
                                                            ...res
                                                        }) => {
    if (!isAuthenticated) {
        console.log(isAuthenticated);
        return <Redirect to={redirectPath}/>
    }
    return userTypes === 'budget' ? <Route {...res} /> : <Redirect to={redirectPath} />
}
export default ProtectedRoute;