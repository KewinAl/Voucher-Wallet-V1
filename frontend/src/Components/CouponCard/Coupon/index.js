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

const Coupon = ({details}) => {
    return (
        <CouponContainer>
            <LeftContainer>
                <Amount>35%<br/>OFF</Amount>
                <Expiration>
                    Expiration:
                    <code>{ details.expiration}</code>
                </Expiration>
                <CompanyName>{details.company}</CompanyName>
                <OurLogo src={logo} />
            </LeftContainer>
            <RightContainer>
                <CouponTitle>{details.title}</CouponTitle>
                <CodeSection>
                    <label>Voucher Code</label>
                    <code>XKTN-452</code>
                </CodeSection>
                <Description>
                    {details.description}
                    <small>*Terms and Conditions apply.</small>
                    <p>{details.link}</p>
                </Description>
            </RightContainer>
        </CouponContainer>
    )
}

export default Coupon
