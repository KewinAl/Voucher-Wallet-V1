import styled from "styled-components";

export const Overlay = styled.div`
  display: ${props => props.visible ? 'flex' : 'none'};
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(23, 22, 123, 0.5);
  align-items: center;
  justify-content: center;
`

export const CustomerProfileContainerPage = styled.div`
  height: calc(100vh - 65px);
  display: flex;
  flex-direction: column;
  justify-content: start;
  border: solid red;
  align-items: center;
  padding: 20px;
`

export const CustomerNavigation = styled.div`
  height: 80px;
  width: 70%;
  display: flex;
  justify-content: space-between;
  border: solid yellow;
  align-items: center;

  h1 {
    font-size: ${p => p.theme.fontSizeXXL};
    font-weight: bold;
  }

  section {
    height: 100%;
    width: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;

    button {
      height: 45px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      gap: 10px;
      border: solid 2px ${p => p.theme.green};
      border-radius: 5px;
      color: ${p => p.theme.green};
      background: none;
      
      &:hover {
        border: transparent solid 2px;
        background: ${p => p.theme.green};
        cursor: pointer;
        color: white;

      }
  }
}
`

export const NavigationContent = styled.div`
  width: 70%;
  height: 100%;
  border: solid blue;
`

export const CouponList = styled.section`
  border: solid green;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3%;
  padding: 0 3%;
  overflow: scroll;

  h2 {
    font-size: ${p => p.theme.fontSizeXL};
    text-align: start;
    width: 100%;
  }
`