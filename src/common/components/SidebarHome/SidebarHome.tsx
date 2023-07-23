import {Home2Styled} from "./Home2Styled";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../modules/Utils/Hooks";
import {useEffect} from "react";
import {InfoUserModel} from "../../../modules/auth/domain/models/InfoUserModel";



export default function Home2(): JSX.Element {

    const userActive = useAppSelector((state) => state.userState.userActive);

    const history = useHistory();
    
    function redirectTo(userActive:InfoUserModel | null) {
        if (userActive !== null && userActive.user_type === 'admin') {
            history.push('/admin');
        }
    }
    useEffect(() => {
        redirectTo(userActive);
    }, []);
    

    return (
        <Home2Styled>
           
        </Home2Styled>
    );
}