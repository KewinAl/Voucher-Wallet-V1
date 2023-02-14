import styled from "styled-components";

export const OverlayDiv = styled.div`
    display: ${props => props.visible ? 'flex' : 'none'};
    position: fixed; 
    width: 100vw; 
    height: 100vh; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(23, 22, 123, 0.5); 
    align-items: center;
    justify-content: center;
`