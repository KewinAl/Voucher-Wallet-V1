import { CouponDiv, CouponActionButton, CouponButtonDiv, DetailsDiv, AnalyticsButton } from './CouponCard.styles'
import { useSelector } from "react-redux";
import AnalyticsOverlay from '../../AnalyticsOverlay/index';
 


const CouponCard_Profile = ({ coupon, toggleVisibility, toggleAnalytics }) => {
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
                <AnalyticsButton color={'lightblue'} onClick={() => toggleAnalytics(true)}>Analytics</AnalyticsButton>
                <div>
                    <CouponActionButton color={'#99e699'} onClick={() => toggleVisibility(true)}>Distribute</CouponActionButton>
                    <CouponActionButton color={'#ff704d'}>DELETE</CouponActionButton>
                </div>
            </CouponButtonDiv>
            
        </CouponDiv>
    )
}
export default CouponCard_Profile;