import {CreatePermissionsStyled} from "./CreatePermissionsStyled";
import {useForm} from "react-hook-form";
import {AuthModel} from "../../../auth/domain/models/AuthModel";
import {CreatePermissionsModel} from "../../domain/Models/CreatePermissionsModel";
import {useAppDispatch, useAppSelector} from "../../../Utils/Hooks";



export default function CreatePermissions(): JSX.Element {

    const isLoadingCreatePermission = useAppSelector((state) => state.permissionsState.isLoadingCreatePermission);
    const {register, handleSubmit, formState: {errors}, reset} = useForm<CreatePermissionsModel>();
    const dispatch = useAppDispatch();

    function createPermission(data: CreatePermissionsModel) {
        console.log(data);
    }

    const onSubmit = (data: CreatePermissionsModel) => createPermission(data);

    return (
        <CreatePermissionsStyled>
           <h2>Crear permisos</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} type="text" placeholder="Nombre del permiso"/>
                <input disabled={isLoadingCreatePermission} type="submit" value="Crear permiso"/>
            </form>
        </CreatePermissionsStyled>
    );
}