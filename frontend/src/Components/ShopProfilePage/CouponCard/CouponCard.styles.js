import styled from "styled-components";


export const CouponDiv = styled.div`
    padding: 20px 5px 0px;
    height: 24rem;
    width: 16rem;
    box-shadow: 5px 7px 14px -3px rgba(0,0,0,0.38);
    background: white;
    border: 3px solid #cccccc;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-size: large;
        text-decoration: underline;
        font-weight: 600;
    }
    >p {
        max-height: 50%;
        width: 80%;
        overflow: auto;
    }
`;

export const Tag = styled.div`
    background-color: ${p => p.theme.backgroundPurpleLight};
    border-radius: 15px;
    color: white;
    text-align: center;
    margin: 5px 0px;
    padding: 5px 15px ;
`
export const DetailsDiv = styled.div`
    width: 80%;
    padding: 15px 0px;
    display: flex;
    justify-content: space-between;
    p {
        font-size: small;
        color: #707070;
    }
    .aligned-end {
        text-align: end;
    }
`

export const CouponDescription = styled.p`
    height: 30%;
    border-radius: 5px;
    padding: 5px;
    overflow: auto;
    text-align: center;
`

export const CouponButtonDiv = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap:5px;
    margin: auto 0px 20px;
    >div {
        display: flex;
    }
`

export const AnalyticsButton = styled.button`
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    gap: 10px;
    border: solid 2px ${p => p.theme.backgroundPurpleLight};
    border-radius: 5px;
    color: ${p => p.theme.backgroundPurpleLight};
    background: none;
    
    &:hover {
    border: transparent solid 2px;
    background: ${p => p.theme.backgroundPurpleLight};
    cursor: pointer;
    color: white;
`

export const CouponActionButton = styled.div`
    width: 50%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    gap: 10px;
    border: solid 2px ${props => props.color};
    border-radius: 5px;
    color: ${props => props.color};
    background: none;
    
    &:hover {
    border: transparent solid 2px;
    background: ${props => props.color};
    cursor: pointer;
    color: white;
`