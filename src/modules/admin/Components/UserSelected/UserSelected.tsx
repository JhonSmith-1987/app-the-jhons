import {UserSelectedStyled} from "./UserSelectedStyled";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../Utils/Hooks";
import {getSingleUser} from "../../../Store/Actions/userAction";
import {Controller, useForm} from "react-hook-form";
import {createPermissionUser, getAllPermission} from "../../../Store/Actions/PermissionsAction";
import {CreatePermissionUserModel} from "../../domain/Models/CreatePermissionUserModel";
import {Simulate} from "react-dom/test-utils";
import reset = Simulate.reset;

interface formPermissions {
    permissions: string[];
}

export default function UserSelected(): JSX.Element {

    const [assignPermissions, setAssignPermissions] = useState<boolean>(false);

    const {register, handleSubmit, reset} = useForm<formPermissions>();

    const dispatch = useAppDispatch();
    const {id} = useParams<{ id: string }>();

    const singleUser = useAppSelector((state) => state.userState.singleUser);
    const allPermissions = useAppSelector((state) => state.permissionsState.allPermissions);

    useEffect(() => {
        console.log(id);
    }, [id]);
    useEffect(() => {
        dispatch(getSingleUser(parseInt(id))).then(r => {
            dispatch(getAllPermission());
        });
    }, [dispatch, id]);

    function handleShowPermissions() {
        setAssignPermissions(!assignPermissions);
    }

    function handleAssignPermissions(data: formPermissions) {
        console.log(data.permissions);
        for (let permission of data.permissions) {
            let data_permission: CreatePermissionUserModel = {
                'name': permission,
                'user_id': parseInt(id)
            }
            console.log(data_permission);
            dispatch(createPermissionUser(data_permission)).then(r => {
                reset();
            });
        }
    }

    const onSubmit = (data: formPermissions) => handleAssignPermissions(data);

    return (
        <UserSelectedStyled>
            <h1>{singleUser?.name}</h1>
            <div>
                <span>fecha de creacion:</span>
                <span>{singleUser?.created_at}</span>
            </div>
            <div>
                <span>Ultima fecha de actualización:</span>
                <span>{singleUser?.updated_at}</span>
            </div>
            <div>
                <span>Email:</span>
                <span>{singleUser?.email}</span>
            </div>
            <div>
                <h3>Permisos</h3>
                <button onClick={handleShowPermissions}>{!assignPermissions ? 'Asignar permisos' : 'Atras'}</button>
                {assignPermissions &&
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {allPermissions && allPermissions.map((permission) => (
                            <label key={permission.id}>
                                <input type="checkbox" {...register('permissions')} value={permission.name}/>
                                {permission.name}
                            </label>
                        ))}
                        <input type="submit" value="Asignar permiso"/>
                    </form>
                }
                {!assignPermissions &&
                    <form>
                        {allPermissions && allPermissions.map((permission) => (
                            <label key={permission.id}>
                                <input type="checkbox" checked/>
                                {permission.name}
                            </label>
                        ))}
                    </form>
                }
            </div>
        </UserSelectedStyled>
    );
}