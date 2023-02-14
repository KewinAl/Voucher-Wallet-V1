import React from "react";
import {
  GenerateQRCodeTitle,
  OverlayDiv,
  OverlayMenu,
  QRCodeButton,
  QRCodeButtonsDiv,
  QRCodeImage,
  QRCodeLeft,
  QRCodeMenu,
  QRCodeRight,
} from "./overlay.styles";
import QRCode from "qrcode.react";

const RedeemOverlay = (props) => {
  const safeCoupon = () => {
    //TODO: Implement safeCoupon logic
    props.exitFunction(!props.visible);
  };
  const QRGenerator = ({ value }) => <QRCode value={value} />;

  const checkIfExit = (e) => {
    if (e.target.id == "overlay") {
      props.exitFunction(!props.visible);
    }
  };

  return (
    <OverlayDiv
      id="overlay"
      visible={props.visible}
      onClick={(e) => {
        checkIfExit(e);
      }}
    >
      <OverlayMenu>
        <QRCodeMenu>
          <QRCodeLeft>
            <GenerateQRCodeTitle>Your personal QR Code: </GenerateQRCodeTitle>
          </QRCodeLeft>
          <QRCodeRight>
            <QRCodeImage value="https://www.example.com" />
          </QRCodeRight>
        </QRCodeMenu>
        <QRCodeButtonsDiv>
          <QRCodeButton color="lightgreen" onClick={() => safeCoupon()}>
            send via Email
          </QRCodeButton>
        </QRCodeButtonsDiv>
      </OverlayMenu>
    </OverlayDiv>
  );
};

export default RedeemOverlay;
