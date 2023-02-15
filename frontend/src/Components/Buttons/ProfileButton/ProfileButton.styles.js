import styled from "styled-components";
import { CgProfile } from 'react-icons/cg'

export const ProfileButtonBase = styled.button`
    height: 45px;
    width: 45px;
    display: flex;
    justify-content: center;
    background-color:  ${p => p.theme.backgroundPurpleLight};
    align-items: center;
    padding: 0 10px;
    border: solid 2px ${p => p.theme.green};
    border-radius: 5px;
    color: ${p => p.theme.green};
    background: none;
    
    &:hover {
    border: transparent solid 2px;
    background: ${p => p.theme.green};
    cursor: pointer;
    color: white;


`
export const ProfileImage = styled(CgProfile)`
    height: 100%;
    width: 100%;
    stroke-width: 1%;
`