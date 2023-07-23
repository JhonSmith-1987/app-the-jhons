import {CreateUsertyled} from "./CreateUsertyled";
import React from "react";
import {useForm} from "react-hook-form";
import {CreateUserModel} from "../../domain/Models/CreateUserModel";
import {useAppDispatch, useAppSelector} from "../../../Utils/Hooks";
import {createUser, getUsers} from "../../../Store/Actions/userAction";

export default function CreateUser(): JSX.Element {

    const isLoadingCreateUser = useAppSelector((state) => state.userState.isLoadingCreateUser);

    const dispatch = useAppDispatch();

    const {register, handleSubmit, formState: {errors}, reset} = useForm<CreateUserModel>();

    const allPermissions = useAppSelector((state) => state.permissionsState.allPermissions);

    function handleCreatePermission(data: CreateUserModel) {
        console.log(data);
        dispatch(createUser(data)).then(r => {
           dispatch(getUsers());
           reset();
        });
    }
    const onSubmit = (data: CreateUserModel) => handleCreatePermission(data);

    return (
        <CreateUsertyled>
            <h2>Crear Usuario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} type="text" placeholder="Nombre del usuario"/>
                <input {...register("email")} type="email" placeholder="Email del usuario"/>
                <input {...register("password")} type="password" placeholder="Password del usuario"/>
                <input
                    disabled={isLoadingCreateUser}
                    type="submit"
                    value={!isLoadingCreateUser ? 'Crear usuario' : 'Se esta creando un usuario...'}
                />
            </form>
        </CreateUsertyled>
    );
}