import { NavLink } from "react-router-dom"
import styled from "styled-components"


export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    padding: 0 5%;
    background: #5836be;
`

export const LogoContainer = styled.img`
    height: 25px;    
`

export const MenuContainer = styled.div`
    border: solid green;
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 30%;
    gap: 5%;

`

export const MenuItem = styled(NavLink)`
    color: white;
    text-decoration: none;
    font-size: ${p=>p.theme.fontSizeM};

`

export const AuthenticationContainer = styled.div`
    border: solid blue;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

`

export const AuthButton = styled.button`
    background: ${p => p.login ? "none" : "orange"};
    border: ${p => p.login ? "none" : "orange"};
    
`



export const Buttons = styled.div`
  display: flex;
  gap: 2px;
  justify-content: center;

  #signup {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  #login {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  button {
    display: flex;
    width: 100px;
    height: 40.57px;
    border: none;
    font-size: 16px;
    background-color: #e47d31;
    line-height: 18.75px;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;

  }

  button:hover {
    cursor: pointer;
  }


`;
