import React from "react"
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
} from "./coupon.styles"
import logo from "../../../Assets/voucherwallet-transparent.png"
import companyLogo from "../../../Assets/companyLogo.png"

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
                <CompanyLogo src={companyLogo} />
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
