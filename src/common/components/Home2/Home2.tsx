import {HomeStyled} from "./HomeStyled";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {useAppDispatch} from "../../../modules/Utils/Hooks";



export default function Home(): JSX.Element {

    const history = useHistory();
    const dispatch = useAppDispatch();

    return (
        <HomeStyled>

        </HomeStyled>
    );
}