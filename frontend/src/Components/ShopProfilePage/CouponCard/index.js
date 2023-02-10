import { CouponDiv, CouponActionButton, CouponButtonDiv, DetailsDiv } from './CouponCard.styles'
import { useSelector } from "react-redux";
 


const CouponCard_Profile = ({coupon}) => {
    return (
        <CouponDiv>
            <h1>{coupon.title}</h1>
            <DetailsDiv>
                <p> {coupon.expiration_date} </p>
                <p> {coupon.times_redeemed} </p>
            </DetailsDiv>
            <p>
                {coupon.description}
            </p>
            <CouponButtonDiv>
                <CouponActionButton color={'#99e699'}>Distribute</CouponActionButton>
                <CouponActionButton color={'#ff704d'}>DELETE</CouponActionButton>
            </CouponButtonDiv>
            
        </CouponDiv>
    )
}
export default CouponCard_Profile;