import {ShowPermissionsStyled} from "./ShowPermissionsStyled";



export default function ShowPermissions(): JSX.Element {
    

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
               <tr>
                   <td>pepito</td>
                   <td>
                       <div className="container-img-actions">
                           <img className="img-edit" alt="edit" src="/Image/edit.png"/>
                           <img className="img-delete" alt="delete" src="/Image/delete.png"/>
                       </div>
                   </td>
               </tr>
               </tbody>
           </table>
        </ShowPermissionsStyled>
    );
}