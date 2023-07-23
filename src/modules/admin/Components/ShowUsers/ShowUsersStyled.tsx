import styled from "styled-components";

export const ShowUsersStyled = styled.div`

  table {

    thead {

      tr {

        th {

        }
      }
    }
    tbody {

      tr {

        td {

          .container-img-actions {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .5vw;
            .img-edit {
              width: 1vw;
              cursor: pointer;
            }
            .img-delete {
              width: 1vw;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`