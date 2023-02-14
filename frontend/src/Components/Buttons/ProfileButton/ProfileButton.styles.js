import styled from "styled-components";
import { CgProfile } from 'react-icons/cg'

export const ProfileButtonBase = styled.button`
    height: 45px;
    width: 45px;
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color:  ${p => p.theme.backgroundPurpleLight};
    border: none;
    
`
export const ProfileImage = styled(CgProfile)`
    height: 100%;
    width: 100%;
    stroke-width: 1%;
    color: white;
`