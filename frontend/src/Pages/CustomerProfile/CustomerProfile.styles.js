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
  align-items: center;
  padding: 20px;
`

export const CustomerNavigation = styled.div`
  height: 80px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: ${p => p.theme.fontSizeXXL};
    font-weight: bold;
    font-family: Miriam Libre;
  }

  section {
    height: 100%;
    width: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;

    >button {
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
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex; 
  justify-content: center;
`

export const CouponList = styled.section`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4%;
  padding: 2%;

  h2 {
    font-size: ${p => p.theme.fontSizeXL};
    text-align: start;
    width: 100%;
  }
`