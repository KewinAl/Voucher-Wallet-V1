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
import RedeemOverlay from "../RedeemOverlay/overlay";

const Coupon = ({ details }) => {
  const [overlayVisibility, setOverlayVisibility] = useState(false);

  return (
    <>
      <CouponContainer>
        <RedeemOverlay
          visible={overlayVisibility}
          exitFunction={setOverlayVisibility}
        />
        <LeftContainer>
          <Amount>
            35%
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
            <RedeemButton
              onClick={() => setOverlayVisibility(!overlayVisibility)}
            >
              Generate code
            </RedeemButton>
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
