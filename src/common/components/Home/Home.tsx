import {AuthStyled} from "./AuthStyled";
import {useForm} from "react-hook-form";
import {AuthModel, PostAuthModel} from "../../../domain/models/AuthModel";
import {useAppDispatch, useAppSelector} from "../../../../Utils/Hooks";
import {useHistory} from "react-router-dom";
import {getAuthToken, getUserActive} from "../../../../Store/Actions/userAction";


export default function Auth(): JSX.Element {

    const token = useAppSelector((state) => state.userState.token);
    const isLoadindToken = useAppSelector((state) => state.userState.isLoadingAuthToken);
    const users = useAppSelector((state) => state.userState.users);
    const {register, handleSubmit, formState: {errors}, reset} = useForm<AuthModel>();
    const history = useHistory();
    const dispatch = useAppDispatch();

    function authSession(data: AuthModel) {
        let resData:PostAuthModel = {
            'email': data.email,
            'password': data.password
        }
        dispatch(getAuthToken(resData)).then(() => {
            if (token) {
                dispatch(getUserActive(token)).then(() => {
                    history.push('/admin');
                })
            }
        });
    }

    const onSubmitAuth = (data:AuthModel) => authSession(data);

    return (
        <AuthStyled>
            {!isLoadindToken && (
                <form onSubmit={handleSubmit(onSubmitAuth)}>
                    <input {...register("email")} type="email" placeholder="email"/>
                    <input {...register("password")} type="password" placeholder="password"/>
                    <input {...register("confirm_password")} type="password" placeholder="repeat password"/>
                    <input type="submit" value="Ingresar"/>
                </form>
            )}
            {isLoadindToken && (
                <div>Esta buscando datos</div>
            )}
            {users && users.map((user) => (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.user_type}</p>
                </div>
            ))}
        </AuthStyled>
    );
}