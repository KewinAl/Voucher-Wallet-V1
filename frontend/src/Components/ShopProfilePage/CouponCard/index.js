import { CouponDiv, CouponActionButton, CouponButtonDiv, DetailsDiv, AnalyticsButton } from './CouponCard.styles'
import { useState } from 'react';
import { useSelector } from "react-redux";
import AnalyticsOverlay from '../../Overlays/AnalyticsOverlay';
import Overlay from '../../Overlays/OverlayBase';
import DistributeCouponOverlay from '../../Overlays/DistributeOverlay/index'
 


const CouponCard_Profile = ({ coupon }) => {

    const [analyticsVisibility, setanalyticsVisibility] = useState(false)
    const [distributionOverlayVisibility, setdistributionOverlayVisibility] = useState(false);

    return (
        <CouponDiv>
            <Overlay visibilityCondition={analyticsVisibility} exitFunction={setanalyticsVisibility}>
                <AnalyticsOverlay
                    visible={analyticsVisibility}
                    exitFunction={setanalyticsVisibility}
                />
            </Overlay>

            <Overlay visibilityCondition={distributionOverlayVisibility} exitFunction={setdistributionOverlayVisibility}>
                <DistributeCouponOverlay/>
            </Overlay>
            
            <h1>{coupon.title}</h1>
            <DetailsDiv>
                <p> {coupon.expiration_date} </p>
                <p> {coupon.times_redeemed} </p>
            </DetailsDiv>
            <p>
                {coupon.description}
            </p>
            <CouponButtonDiv>
                <AnalyticsButton color={'lightblue'} onClick={() => setanalyticsVisibility(true)}>Analytics</AnalyticsButton>
                <div>
                    <CouponActionButton color={'#99e699'} onClick={() => setdistributionOverlayVisibility(true)}>Distribute</CouponActionButton>
                    <CouponActionButton color={'#ff704d'}>DELETE</CouponActionButton>
                </div>
            </CouponButtonDiv>
            
        </CouponDiv>
    )
}
export default CouponCard_Profile;