import {AuthStyled} from "./AuthStyled";
import {useForm} from "react-hook-form";
import {AuthModel, PostAuthModel} from "../../../domain/models/AuthModel";
import {useAppSelector} from "../../../../Utils/Hooks";
import {useState} from "react";
import {authMethod} from "../../../shared/utils/AuthMethod";


export default function Auth(): JSX.Element {


    const [isLoadingAuthLogin, setIsLoadingAuthLogin] = useState<boolean>(false);
    const users = useAppSelector((state) => state.userState.users);
    const {register, handleSubmit, formState: {errors}, reset} = useForm<AuthModel>();

    function authSession(data: AuthModel) {
        let resData:PostAuthModel = {
            'email': data.email,
            'password': data.password
        }
        setIsLoadingAuthLogin(true);
        authMethod(resData).then(r => {
            setIsLoadingAuthLogin(false);
        })
    }

    const onSubmitAuth = (data:AuthModel) => authSession(data);

    return (
        <AuthStyled>
            {!isLoadingAuthLogin && (
                <form onSubmit={handleSubmit(onSubmitAuth)}>
                    <input {...register("email")} type="email" placeholder="email"/>
                    <input {...register("password")} type="password" placeholder="password"/>
                    <input {...register("confirm_password")} type="password" placeholder="repeat password"/>
                    <input type="submit" value="Ingresar"/>
                </form>
            )}
            {isLoadingAuthLogin && (
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