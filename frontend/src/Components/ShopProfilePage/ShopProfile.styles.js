import styled from "styled-components";


export const PageDiv = styled.div`
    max-height: 80%;
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
export const Menu = styled.div`
    display: flex;
    width: 90%;
    max-height: 80%;
`
export const MenuLeft = styled.div`
    width: 15%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 20px 50px;

    >button {
        border-radius: 10px;
        padding: 10px;
    }
`
export const MenuRight = styled.div`
    border: 2px solid #cccccc;
    padding: 10px;
    background-color: #e6e6e6;
    box-shadow: inset 7px 5px 16px -5px rgba(0,0,0,0.44);
    border-radius: 0px 30px 30px;
    width: 80%;
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
`