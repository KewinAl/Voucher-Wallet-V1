import React from "react";
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
  RightContainer,
} from "./coupon.styles";
import logo from "../../../Assets/voucherwallet-transparent.png";

const Coupon = ({ details }) => {
  return (
    <CouponContainer>
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
          <code>XXX-XXXX</code>
        </CodeSection>
        <Description>
          {details.description}
          <small>*Terms and Conditions apply.</small>
          <a href={details.link}>{details.link}</a>
        </Description>
      </RightContainer>
    </CouponContainer>
  );
};

export default Coupon;
