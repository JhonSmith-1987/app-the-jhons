import {SidebarHomeStyled} from "./SidebarHomeStyled";
import {useHistory} from "react-router-dom";
import {useAppSelector} from "../../../modules/Utils/Hooks";

type navigation = 'admin' | 'budget';
export default function SidebarHome(): JSX.Element {

    const userActive = useAppSelector((state) => state.userState.userActive);
    const history = useHistory();

    function handleDirectionNavigation(directionNavigation:navigation) {
        history.push(`/home/${directionNavigation}`);
    }

    return (
        <SidebarHomeStyled>
           <ul>
               {userActive && userActive.user_type === 'admin' &&
                   <li onClick={() => handleDirectionNavigation('admin')}>Administrador</li>
               }
               <li onClick={() => handleDirectionNavigation('budget')}>Mi presupuesto</li>
           </ul>
        </SidebarHomeStyled>
    );
}