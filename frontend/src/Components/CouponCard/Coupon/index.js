import React, { useState } from "react";
import {
  Amount,
  CodeSection,
  CompanyLogo,
  CompanyName,
  CouponContainer,
  CouponTitle,
  Description,
  Expiration,
  LeftContainer,
  OurLogo,
  RedeemButton,
  RightContainer,
} from "./coupon.styles";
import logo from "../../../Assets/voucherwallet-transparent.png";
import RedeemOverlay from "../../../Components/Overlays/RedeemOverlays/overlay";
import Overlay from "../../../Components/Overlays/OverlayBase";
import { useLocation } from "react-router-dom";

const Coupon = ({ details }) => {
  const location = useLocation().pathname;
  const [overlayVisibility, setOverlayVisibility] = useState(false);

  return (
    <>
      <CouponContainer>
        <Overlay
          visibilityCondition={overlayVisibility}
          exitFunction={setOverlayVisibility}
        >
          <RedeemOverlay
            visible={overlayVisibility}
            exitFunction={setOverlayVisibility}
          />
        </Overlay>
        <LeftContainer image={details.background_image}>
          <Amount>
            {details.discount}
            {details.discount_type === "percent" ? "%" : "$"}
            <br />
            OFF
          </Amount>
          <Expiration>
            Expiration:
            <code>{details.expiration_date}</code>
          </Expiration>
          <CompanyName>{details.company}</CompanyName>
          <OurLogo src={logo} />
          <CompanyLogo src={details.companyLogo} />
        </LeftContainer>
        <RightContainer>
          <CouponTitle>{details.title}</CouponTitle>
          <CodeSection>
            <label>Voucher Code</label>
            {location == "/me" ? (
              <RedeemButton
                onClick={() => setOverlayVisibility(!overlayVisibility)}
              >
                Generate code
              </RedeemButton>
            ) : (
              ""
            )}
          </CodeSection>
          <Description>
            {details.description}
            <small>*Terms and Conditions apply.</small>

            <a href={details.link}>{details.link}</a>
          </Description>
        </RightContainer>
      </CouponContainer>
    </>
  );
};

export default Coupon;
