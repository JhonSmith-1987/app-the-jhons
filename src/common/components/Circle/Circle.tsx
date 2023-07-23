import {CircleStyled} from "./CircleStyled";

interface ICircleProps {
    width: number;
    height: number;
    border: string;
    background: string;
    color: string;
    altImg: string;
    src: string;
}

export default function Circle({
                                   width,
                                   height,
                                   background,
                                   color,
                                   border,
                                   altImg,
                                   src,
                               }: ICircleProps): JSX.Element {


    return (
        <CircleStyled
            width={width}
            height={height}
            background={background}
            color={color}
            border={border}
        >
            <img alt={altImg} src={src}/>
        </CircleStyled>
    );
}