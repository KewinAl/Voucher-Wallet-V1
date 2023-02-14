import styled from "styled-components";


export const Button = styled.button`
    color: white;
    border: none;
    border-radius: 4px;
    height: 40px;
    width: 140px;
    font-size: ${p=>p.theme.fontSizeM};
    background-color: ${p=>p.theme.green};


    :hover {
        cursor: pointer;
        font-weight: bold;
    }

`