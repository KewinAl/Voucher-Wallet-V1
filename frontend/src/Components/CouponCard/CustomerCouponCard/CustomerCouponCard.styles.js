import styled from "styled-components";


export const CustomerCouponDiv = styled.div`
    background-color: white;;
    display: flex;
    flex-direction: column;
    width: ${props => props.width ? props.width : '90%'};
    height: 12rem;
    padding: 10px 30px;
    border: solid 2px #cccccc;
    box-shadow: 5px 7px 14px -3px rgba(0,0,0,0.38);
    >p {
        margin: 3px;
    }
`;
export const CustomerCouponDescription = styled.div`
 height: 90px;
    overflow: auto;
`
export const CustomerCouponHeader = styled.div`
    display: flex;
    justify-content: space-between;
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