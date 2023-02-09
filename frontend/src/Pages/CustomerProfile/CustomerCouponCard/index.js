import { CustomerCouponDiv, CustomerCouponHeader, RedeemButton, CustomerCouponDescription } from './CustomerCouponCard.styles'

const CustomerCouponCard = () => {
    return (
        <CustomerCouponDiv>
            <CustomerCouponHeader>
                <p>Shop Name</p>
                <p>Expiration</p>
            </CustomerCouponHeader>
            <p>Coupon Title</p>
            <CustomerCouponDescription>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
            </CustomerCouponDescription>
            <RedeemButton>
                <button>Redeem</button>
            </RedeemButton>
        </CustomerCouponDiv>
    )
}

export default CustomerCouponCard;