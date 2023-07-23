import {ShowPermissionsStyled} from "./ShowPermissionsStyled";
import {useAppDispatch, useAppSelector} from "../../../Utils/Hooks";
import {useEffect} from "react";
import {getAllPermission} from "../../../Store/Actions/PermissionsAction";



export default function ShowPermissions(): JSX.Element {

    const dispatch = useAppDispatch();
    const allPermissions = useAppSelector((state) => state.permissionsState.allPermissions);

    useEffect(() => {
        dispatch(getAllPermission());
    }, [dispatch]);
    
    return (
        <ShowPermissionsStyled>
           <table border={1}>
               <thead>
               <tr>
                   <th>Nombre Permiso</th>
                   <th>Aciones</th>
               </tr>
               </thead>
               <tbody>
               {allPermissions && allPermissions.map((permission) => (
                   <tr key={permission.id}>
                       <td>{permission.name}</td>
                       <td>
                           <div className="container-img-actions">
                               <img className="img-edit" alt="edit" src="/Image/edit.png"/>
                               <img className="img-delete" alt="delete" src="/Image/delete.png"/>
                           </div>
                       </td>
                   </tr>
               ))}
               </tbody>
           </table>
        </ShowPermissionsStyled>
    );
}