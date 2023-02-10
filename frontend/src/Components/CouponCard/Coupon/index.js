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
                <CompanyLogo src={companyLogo} />
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
                    <a href={details.link}>{details.link}</a>
                </Description>
            </RightContainer>
        </CouponContainer>
    )
}

export default Coupon
