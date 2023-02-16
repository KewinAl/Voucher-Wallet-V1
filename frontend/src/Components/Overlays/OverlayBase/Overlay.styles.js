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
  background-color: rgba(10, 20, 70, 0.8);
  opacity: 1;
  align-items: center;
  justify-content: center;
  z-index: 999;
`