import styled from "styled-components";


export const PageDiv = styled.div`
    max-height: 90%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    justify-content: start;
    >p {
        font-size: xx-large;
        padding: 10px 0px;
    }
`;

export const CustomerMenuDiv = styled.div`
    width: 90%;
    height: 80%;

    display: flex;
    justify-content: space-between;
`
export const CustomerMenuLeft = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    >p {
        font-size: xx-large;
    }

    >button {
        width: 70%;
        padding: 15px;
        border-radius: 10px;
        font-size: x-large;
    }
`

export const CustomerMenuRight = styled.div`
    width: 66%;
    border: 2px solid #cccccc;
    padding: 10px;
    background-color: #e6e6e6;
    box-shadow: inset 7px 5px 16px -5px rgba(0,0,0,0.44);
    border-radius: 0px 30px 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    overflow-y: auto;
`