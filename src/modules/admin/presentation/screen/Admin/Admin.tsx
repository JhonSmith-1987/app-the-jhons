import {AdminStyled} from "./AdminStyled";
import {useState} from "react";
import {Link, Route, Switch} from "react-router-dom";
import CreatePermissions from "../../../Components/CreatePermissions/CreatePermissions";
import ShowPermissions from "../../../Components/ShowPermissions/ShowPermissions";

type dropdownType = 'permissions' | 'users' | '';
export default function Admin(): JSX.Element {

    const [showDropDawn, setShowDropDawn] = useState<boolean>(false);
    const [typeDropdawn, setTypeDropdawn] = useState<dropdownType>('')
    function handleShowDropdown(dataButton: dropdownType) {
        setTypeDropdawn(dataButton);
        setShowDropDawn(!showDropDawn);
    }

    return (
        <AdminStyled>
            <div className="container-sidebar">
                <h3>Panel de administración</h3>
                <div className="sidebar-admin">
                    <div className="container-button">
                        <span
                            onClick={() => handleShowDropdown('permissions')}
                            className={showDropDawn && typeDropdawn === 'permissions' ? 'title-link-selected' : 'title-link'}
                        >Permisos</span>
                        {showDropDawn && typeDropdawn === 'permissions' &&
                            <div className="dropdawn">
                                <Link to="/home/admin/create-permissions">Crear perisos</Link>
                                <Link to="/home/admin/permissions">Permisos</Link>
                                <span>contenido link</span>
                                <span>contenido link</span>
                            </div>
                        }
                    </div>
                    <div className="container-button">
                        <span
                            onClick={() => handleShowDropdown('users')}
                            className={showDropDawn && typeDropdawn === 'users' ? 'title-link-selected' : 'title-link'}
                        >Usuarios</span>
                        {showDropDawn && typeDropdawn === 'users' &&
                            <div className="dropdawn">
                                <span>contenido link</span>
                                <span>contenido link</span>
                                <span>contenido link</span>
                                <span>contenido link</span>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="content-admin">
                <Switch>
                    <Route path="/home/admin/create-permissions" children={<CreatePermissions/>}/>
                    <Route path="/home/admin/permissions" children={<ShowPermissions/>}/>
                </Switch>
            </div>
        </AdminStyled>
    );
}