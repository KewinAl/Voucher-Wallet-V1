import styled from "styled-components";




export const CustomerProfileContainerPage = styled.div`
    height: calc(100vh - 65px);
    display: flex;
    justify-content: start;
    border: solid red;
    align-items: center;
`

export const CustomerNavigation = styled.div`
    height: 100%;
    width: 30%;
    display: flex;
    border: solid yellow;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    
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

    h1 {
        font-size: ${p => p.theme.fontSizeXXXL};
        text-align: start;
        width: 100%;
        font-weight: bold;
    }
`