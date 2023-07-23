import {ShowUsersStyled} from "./ShowUsersStyled";
import {useAppDispatch, useAppSelector} from "../../../Utils/Hooks";
import {useEffect} from "react";
import {deleteUser, getUsers} from "../../../Store/Actions/userAction";
import Swal from "sweetalert2";
import {useHistory} from "react-router-dom";



export default function ShowUsers(): JSX.Element {

    const history = useHistory();
    const dispatch = useAppDispatch();
    const allUsers = useAppSelector((state) => state.userState.users);

    function alertDeleteUser(id_user:number) {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Si desistes en eliminar, da click en cancelar',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteUser(id_user)).then(r => {
                    dispatch(getUsers());
                    Swal.fire('Eliminado', 'El elemento ha sido eliminado', 'success');
                });
            }
        });
    }

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    function goToUser(id: number) {
        history.push(`/home/admin/user-selected/${id}`);
    }

    return (
        <ShowUsersStyled>
            <table border={1}>
                <thead>
                <tr>
                    <th>Nombre usuario</th>
                    <th>email usuario</th>
                    <th>Aciones</th>
                </tr>
                </thead>
                <tbody>
                {allUsers && allUsers.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <div className="container-img-actions">
                                <img
                                    className="img-edit"
                                    alt="edit"
                                    src="/Image/edit.png"
                                />
                                <img
                                    className="img-delete"
                                    alt="delete"
                                    src="/Image/delete.png"
                                    onClick={() => alertDeleteUser(user.id)}
                                />
                                <img
                                    className="img-delete"
                                    alt="go-to"
                                    src="/Image/ver.png"
                                    onClick={() => goToUser(user.id)}
                                />
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </ShowUsersStyled>
    );
}