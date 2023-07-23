import {AuthStyled} from "./AuthStyled";
import {useForm} from "react-hook-form";
import {AuthModel, PostAuthModel} from "../../../domain/models/AuthModel";
import {useAppDispatch, useAppSelector} from "../../../../Utils/Hooks";
import {useHistory} from "react-router-dom";
import {getAuthToken, getUserActiveState} from "../../../../Store/Actions/userAction";
import {useEffect} from "react";
import {getLocalStorageUserActive} from "../../../shared/utils/TokenLocalStorage";


export default function Auth(): JSX.Element {

    const token = useAppSelector((state) => state.userState.token);
    const isLoadindToken = useAppSelector((state) => state.userState.isLoadingAuthToken);
    const userActive = useAppSelector((state) => state.userState.userActive);
    const {register, handleSubmit, formState: {errors}, reset} = useForm<AuthModel>();
    const history = useHistory();
    const dispatch = useAppDispatch();

    function authSession(data: AuthModel) {
        let resData: PostAuthModel = {
            'email': data.email,
            'password': data.password
        }
        dispatch(getAuthToken(resData)).then(() => {
            let userA = getLocalStorageUserActive();
            dispatch(getUserActiveState(userA));
            history.push('/home');
        });
    }

    const onSubmitAuth = (data: AuthModel) => authSession(data);

    useEffect(() => {
        let userA = getLocalStorageUserActive();
        if (userA !== null) {
            history.push('/home');
        }
    }, [history]);

    return (
        <AuthStyled>
            {isLoadindToken && <div>Esta buscando sesión...</div>}
            {!isLoadindToken &&
                <form onSubmit={handleSubmit(onSubmitAuth)}>
                    <input {...register("email")} type="email" placeholder="email"/>
                    <input {...register("password")} type="password" placeholder="password"/>
                    <input {...register("confirm_password")} type="password" placeholder="repeat password"/>
                    <input type="submit" value="Ingresar"/>
                </form>
            }
        </AuthStyled>
    );
}