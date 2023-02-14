import styled from "styled-components";
import QRCode from "qrcode.react";

export const OverlayMenu = styled.div`
  background-color: white;
  border-radius: 30px;
  width: 1000px;
  height: 600px;
  border: solid 2px #cccccc;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.51);
  overflow: hidden;
  z-index: 1000; /* erhöhter z-Index-Wert */
`;
export const QRCodeMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 65%;
`;
export const QRCodeLeft = styled.div`
  height: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const GenerateQRCodeTitle = styled.h2`
  font-weight: bold;
`;

export const QRCodeRight = styled.div`
  height: 100%;
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const QRCodeImage = styled(QRCode)`
  transform: scale(1.3);
`;

export const QRCodeButtonsDiv = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const QRCodeButton = styled.button`
   {
    height: 80%;
    width: 30%;
    cursor: pointer;
    border-radius: 15px;
    background-color: ${(props) => props.color};
  }
`;
