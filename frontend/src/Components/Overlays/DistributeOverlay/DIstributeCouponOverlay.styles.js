import styled from "styled-components";

export const OverlayDiv = styled.div`
  width: 900px;
  height: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  border-radius: 25px;


  > h1 {
    font-size: xx-large;
    color: #06C076;

  }

  > form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 35px;
    width: 70%;
    height: 80%;
    padding: 25px;


    > div {
      display: flex;
      padding: 20px;
      gap: 40px;


      > input {
        width: 20%;
        box-shadow: ${props => props.theme.boxShadowLighter};
        background: white;
        border-radius: 5px;
        width: 200px;
        height: 25px;

      }
    }

    > button {
      width: 70%;
      padding: 15px;
      margin: auto;
      background-color: #522fbc;
      color: white;
      border-radius: 25px;
      cursor: pointer;

    }
  }
}
`;