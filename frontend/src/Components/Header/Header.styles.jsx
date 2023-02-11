import { NavLink } from "react-router-dom"
import styled from "styled-components"


export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 65px;
    padding: 0 3%;
    background: ${p=>p.theme.backgroundPurpleLight};
`

export const LogoContainer = styled.img`
    height: 25px;    
`

export const MenuContainer = styled.div`
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 30%;
    gap: 5%;

`

export const MenuItem = styled(NavLink)`
    color: white;
    text-decoration: none;
    font-size: ${p=>p.theme.fontSizeM};
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 3px solid transparent;

    :hover {
        font-weight: bold;
        border-bottom: 3px solid ${p=>p.theme.green};
    }

`
export const AuthenticationContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 12%;
`

export const AuthButtonBase = styled.button`
    color: white;
    border: none;
    border-radius: 4px;
    height: 35px;
    width: 70px;
    font-size: ${p=>p.theme.fontSizeM};

    :hover {
        cursor: pointer;
        font-weight: bold;
    }
`

export const LoginButton = styled(AuthButtonBase)`
    background: none;

`

export const LogoutButton = styled(AuthButtonBase)`
    background: #ba0b0b;

`

export const SignupButton = styled(AuthButtonBase)`
    background: #06C076;

`