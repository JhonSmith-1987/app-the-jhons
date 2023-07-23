import styled from "styled-components";

export const HomeStyled = styled.div`
  width: 100%;
  height: 100vh;
  background: #FFFFFF;
  
  .container-info-user {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 2vw;
    width: 100%;
    height: 2vw;
    background: #FFFFFF;
    
    span {
      font-size: .9vw;
      color: #333333;
    }
    img {
      width: 1.5vw;
    }
  }
  .container-content {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: .2fr 1fr;
    
    .sidebar {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2vw;
      padding: 2vw 1vw;
      height: 91.8vh;
      background: #F1F1F1;
    }
    .content {
      height: 95.9vh;
      background: #E4E4E4;
      margin-top: 2vw;
    }
  }
`