import {CreatePermissionsStyled} from "./CreatePermissionsStyled";
import {useForm} from "react-hook-form";
import {CreatePermissionsModel} from "../../domain/Models/CreatePermissionsModel";
import {useAppDispatch, useAppSelector} from "../../../Utils/Hooks";
import {createPermission, getAllPermission} from "../../../Store/Actions/PermissionsAction";
import {alertOk} from "../../../auth/shared/utils/Alerts/AlertOk";
import {useHistory} from "react-router-dom";



export default function CreatePermissions(): JSX.Element {

    const responseCreatePermission = useAppSelector((state) => state.permissionsState.response);
    const isLoadingCreatePermission = useAppSelector((state) => state.permissionsState.isLoadingCreatePermission);
    const {register, handleSubmit, formState: {errors}, reset} = useForm<CreatePermissionsModel>();
    const dispatch = useAppDispatch();
    const history = useHistory();

    function handleCreatePermission(data: CreatePermissionsModel) {
        console.log(data);
        dispatch(createPermission(data.name)).then(r => {
            dispatch(getAllPermission());
            reset();
            history.push('/home/admin/permissions');
        })
    }

    const onSubmit = (data: CreatePermissionsModel) => handleCreatePermission(data);

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