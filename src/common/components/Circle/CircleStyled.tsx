import styled from "styled-components";

interface ICircleStyledProps {
    width: number;
    height: number;
    border:string;
    background:string;
    color:string;
}
export const CircleStyled = styled.div<ICircleStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({width}) => width + 'vw'};
  height: ${({height}) => height + 'vw'};
  border: ${({border}) => border};
  background: ${({background}) => background};
  color: ${({color}) => color};
  border-radius: 100%;
  
  img {
    width: 100%;
    border-radius: 100%;
  }
`