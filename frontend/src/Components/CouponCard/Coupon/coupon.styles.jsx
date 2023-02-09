import styled from "styled-components";
import tropical from "../../../Assets/tropical.jpg"

export const CouponContainer = styled.div`
    display: flex;
    height: 250px;
    width: 100%;
`

export const LeftContainer = styled.div`
    height: 100%;
    background-image: url(${tropical});
    background-size: cover;
    background-repeat: no-repeat;
    width: 70%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${p=>p.theme.borderRadiusXL};
    position: relative;

    ::after {
        content: "";
        position: absolute;
        right: -3px;
        top: 10px;
        bottom: 10px;
        border-right: dotted white 6px;
        width: 6px;
    }
`

export const OurLogo = styled.img`
    height: 20px;
    position: absolute;
    top: 10px;
    left: 10px;
    background: radial-gradient(black, transparent);

`

export const Amount =styled.h2`
    font-size: ${p=>p.theme.fontSizeXXXXL};
    font-family: 'Oswald', sans-serif;
    line-height: 50px;
    transform: rotate(-10deg);
    color: white;
    font-weight: bold;
    background: #1cc0f6;
    padding: 6%;
    border-radius: 60%;
`

export const Expiration = styled.p`
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: white;
    font-weight: bold;
    font-size: ${p=>p.theme.fontSizeL};
`

export const RightContainer = styled.div`
    display: flex;
    background: white;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 30%;
    padding: 10px;
    border-radius: ${p=>p.theme.borderRadiusXL};
`

export const CouponTitle = styled.h1`
    font-size: ${p=>p.theme.fontSizeXXL};
    font-weight: bold;
    color: black;

`

export const CodeSection = styled.section`
    border: solid orange 3px;
    border-radius: 4px;
    height: 35%;
    width: 80%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    label {
        height: 20px;
        font-size: ${p=>p.theme.fontSizeM};
        width: 60%;
        background: white;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: -10px;
        left: 10px;
        color: black;
    }

    code {
        font-family: 'Miriam Libre', sans-serif;
        font-size: ${p=>p.theme.fontSizeXXL};
        font-weight: bold;

    }   
`

export const Description = styled.p`
    font-size: ${p=>p.theme.fontSizeL};
    display: flex;
    text-align: center;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    width: 80%;
    height: 35%;

    small {
        font-size: ${p=>p.theme.fontSizeXS};
    }

    p {
        font-size: ${p=>p.theme.fontSizeS};
        color: orange;
    }
`