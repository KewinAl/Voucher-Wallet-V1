import styled from "styled-components";


export const CouponDiv = styled.div`
    margin: 5px;
    height: 24rem;
    width: 16rem;
    box-shadow: 5px 7px 14px -3px rgba(0,0,0,0.38);
    background-color: white;
    border: 1px solid #cccccc;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-size: x-large;
    }
    >p {
        max-height: 50%;
        width: 80%;
        overflow: auto;
    }
`;
export const DetailsDiv = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    p {
        font-size: small;
        color: #bfbfbf;

    }
`
export const CouponButtonDiv = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    gap:5px;
    margin: auto 0px 20px;
`

export const CouponActionButton = styled.div`
    background-color: ${props => props.color};
    width: 50%;
    text-align: center;
    padding: 5px;
    border-radius: 10px;
`