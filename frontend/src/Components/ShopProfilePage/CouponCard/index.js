import { CouponDiv, CouponActionButton, CouponButtonDiv, DetailsDiv } from './CouponCard.styles'
import { useSelector } from "react-redux";
 


const CouponCard_Profile = () => {

    return (
        <CouponDiv>
            <h1>Coupon Title</h1>
            <DetailsDiv>
                <p> exp_date </p>
                <p> times used </p>
            </DetailsDiv>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </p>
            <CouponButtonDiv>
                <CouponActionButton color={'#99e699'}>Distribute</CouponActionButton>
                <CouponActionButton color={'#ff704d'}>DELETE</CouponActionButton>
            </CouponButtonDiv>
            
        </CouponDiv>
    )
}
export default CouponCard_Profile;