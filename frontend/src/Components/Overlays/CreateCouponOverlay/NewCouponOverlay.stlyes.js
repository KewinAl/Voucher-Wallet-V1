import styled from "styled-components";


export const OverlayDiv = styled.div`
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
`;
export const OverlayMenu = styled.div`
    background-color: white;
    border-radius: 30px;
    width: 1000px;
    height: 600px;
    border: solid 2px #cccccc;
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.51);
    overflow: hidden;
    z-index: 3; 
`
export const CouponCreationMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 40%;

`
export const CouponCreationLeft = styled.div`
    height: 100%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const CouponCreationRight = styled.div`
    height: 100%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    >label {
        display: flex;
        flex-direction: column;
    }
`

export const CouponPreview = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    justify-content: space-around;
`

export const NewCouponButtonsDiv = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
    
export const NewCouponButton = styled.button` {
        height: 80%;
        width: 30%;
        cursor: pointer;
        border-radius: 15px;
        background-color: ${props => props.color};
    }
`