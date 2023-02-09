import React from "react"
import {
    Amount,
    CouponContainer,
    LeftContainer,
    RightContainer,
} from "./coupon.styles"

const Coupon = () => {
    return (
        <CouponContainer>
            <LeftContainer>
                <Amount>30% OFF</Amount>
                
            </LeftContainer>
            <RightContainer>
                
            </RightContainer>
        </CouponContainer>
    )
}

export default Coupon
