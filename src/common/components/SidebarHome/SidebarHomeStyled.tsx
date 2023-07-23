import styled from "styled-components";

export const SidebarHomeStyled = styled.div`
  width: 100%;
  
    ul {
      display: flex;
      flex-direction: column;
      gap: 1vw;
      list-style: none;
      margin-block-start: 0;
      margin-block-end: 0;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 0;
      
      li {
        color: whitesmoke;
        background: #878787;
        padding: .5vw 1vw;
        border-radius: 10px;
        cursor: pointer;
        font-size: 1vw;
        transition: .3s ease;
        text-align: center;
      }
    }
`