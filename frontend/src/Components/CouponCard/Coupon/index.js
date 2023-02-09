import React from "react"
import {
    Amount,
    CodeSection,
    CompanyName,
    CouponContainer,
    CouponTitle,
    Description,
    Expiration,
    LeftContainer,
    OurLogo,
    RightContainer,
} from "./coupon.styles"
import logo from "../../../Assets/voucherwallet-transparent.png"

const Coupon = () => {
    return (
        <CouponContainer>
            <LeftContainer>
                <Amount>35%<br/>OFF</Amount>
                <Expiration>
                    Expiration:
                    <code>12/2023</code>
                </Expiration>
                <CompanyName>Bags Company, LLC</CompanyName>
                <OurLogo src={logo} />
            </LeftContainer>
            <RightContainer>
                <CouponTitle>Summer Sale!</CouponTitle>
                <CodeSection>
                    <label>Voucher Code</label>
                    <code>XKTN-452</code>
                </CodeSection>
                <Description>
                    Enjoy 35% off your next purchase!
                    <small>*Terms and Conditions apply.</small>
                    <p>company.com/redeem</p>
                </Description>
            </RightContainer>
        </CouponContainer>
    )
}

export default Coupon
