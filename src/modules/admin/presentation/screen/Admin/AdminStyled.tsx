import styled from "styled-components";

export const AdminStyled = styled.div`
  display: grid;
  grid-template-columns: .15fr 1fr;
  width: 100%;
  height: 95.9vh;
  background: #FFFFFF;
  
  .container-sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 2vw;
    width: 100%;
    height: 100%;

    h3 {
      width: 100%;
      margin: 0;
      text-align: center;
      font-size: 1vw;
      color: #333333;
    }
    .sidebar-admin {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      gap: .5vw;
      width: 100%;
      height: 80%;
      
      .container-button {
        display: flex;
        flex-direction: column;
        width: 100%;
        background: #CDCDCD;
        
        .title-link {
          font-size: .9vw;
          text-align: center;
          cursor: pointer;
          color: #4C4C4C;
        }
        .title-link-selected {
          font-size: .95vw;
          text-align: center;
          cursor: pointer;
          background: #404041;
          color: #D7D7D7;
          //clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 0 100%, 0% 50%, 0 0);
        }
        .dropdawn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: start;
          font-size: .9vw;
          padding: .5vw 0 1vw;
          
          span {
            width: 90%;
            padding: .2vw .2vw .2vw .5vw;
            cursor: pointer;
          }
        }
      }
    }
  }
  .content-admin {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #F1F1F1;
  }
`