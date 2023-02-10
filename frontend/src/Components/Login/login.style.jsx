import styled from 'styled-components';


export const LoginForm = styled.form`
    border: solid red;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2%;

    h1 {
        font-size: ${props => props.theme.fontSizeXL};
        font-weight: bold;
    }

    h2 {
        font-size: ${props => props.theme.fontSizeL};
        font-family: 'Shadows Into Light', cursive;
    }

    input {
        border: none;
        box-shadow: ${props => props.theme.boxShadowLighter};
        background: white;
        border-radius: 4px;
        width: 220px;
        height: 50px;
        font-size: ${props => props.theme.fontSizeM};
        padding: 20px;

        ::placeholder {
            font-size: ${props => props.theme.fontSizeM};
            color: lightgray;
        }
    }
`

export const LoginButton = styled.button`
    border: none;
    height: 40px;
    width: 220px;
    background: ${props => props.theme.green};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    color: white;
    margin-top: 30px;
`

export const ForgotLink = styled.a`
    font-size: ${props => props.theme.fontSizeS};
    color: ${props => props.theme.green};
`