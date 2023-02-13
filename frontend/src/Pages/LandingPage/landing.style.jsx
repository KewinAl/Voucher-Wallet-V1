import styled from "styled-components";


export const LandingPageContainer = styled.div`
    height: 85vh;
    width: 100%;
    margin-bottom: 10vh;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3%;
    
`

export const Background = styled.div`
    background: ${p=>p.theme.backgroundPurpleLight};
    height: 90vh;
    width: 100%;
    position: absolute;
    z-index: -1;
    top:0;
    right: 0;
    left: 0;
    bottom: 10vh;
    transform: rotate(4deg);
    width: 200%;
    margin-left: -30px;

`

export const HeroTitle = styled.h1`
    font-size: 80px;
    color: white;
    width: 40%;
    font-family: 'Bebas Neue', cursive;
    line-height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    i {
        color: ${p=>p.theme.green};
        font-size: 80px;
        font-style: normal;
        /* font-family: 'Caveat', cursive; */
    }

    b {
        color: orange;
        font-size: 80px;
    }

`

export const HeroSubTitle = styled.p`
    font-size: ${p=>p.theme.fontSizeL};
    line-height: normal;
    margin: 20px 0;
    font-family: Arial, Helvetica, sans-serif;
`

export const LangingImage = styled.img`
    height: 100%;
    background: #06C076;
    border-radius: 50%;
    background-size: cover;
    margin-bottom: -30px;
    animation: rotation 5s infinite ease-in-out;

    @keyframes rotation {
        50% {transform: rotate(0)} to {transform: rotate(25deg)}
        50% {transform: rotate(-25deg)} to {transform: rotate(0)}
    }
`
