import styled from "styled-components";


export const CouponContainer = styled.div`
    border: solid orange;
    display: flex;
    flex-direction: column;
    height: 250px;
    width: 100%;
    font-family: 'Oswald', sans-serif;
    padding: 10px;
`

export const LeftContainer = styled.div`
    border: solid purple;
    height: 100%;
    width: 70%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: ${p=>p.theme.borderRadiusXL};
`

export const Amount =styled.div`
    font-size: 30px;
    font-family: ;
    color: white;
`



export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 30%;
    border-radius: ${p=>p.theme.borderRadiusXL};
`

export const RedeemButton = styled.div`
    margin-left: auto;
    
    position: relative;
    >button {
        position: absolute;
        left: -100px;
        width: 160px;
        padding: 10px;
        background-color: lightgreen;
        border: border: solid 2px #cccccc;
        box-shadow: 5px 7px 14px -3px rgba(0,0,0,0.38);
        border-radius: 10px;
        font-size: large;
    }
`