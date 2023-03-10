import {
  AnalyticsButton,
  CouponActionButton,
  CouponButtonDiv,
  CouponDescription,
  CouponDiv,
  DetailsDiv,
  Tag,
} from "./CouponCard.styles";
import { useState } from "react";
import AnalyticsOverlay from "../../Overlays/AnalyticsOverlay";
import Overlay from "../../Overlays/OverlayBase";
import DistributeCouponOverlay from "../../Overlays/DistributeOverlay/index";
import { useDispatch } from "react-redux";
import { deleteCoupon } from "../../../Store/couponSlice";

const CouponCard_Profile = ({ coupon }) => {
  const [analyticsVisibility, setanalyticsVisibility] = useState(false);
  const [distributionOverlayVisibility, setdistributionOverlayVisibility] =
    useState(false);
  const dispatch = useDispatch();
  return (
    <div style={{ backgroundImage: "url(background-image-url)" }}>
      <div style={{ position: "relative" }}>
        <CouponDiv backgroundimage={coupon.background_image}>
          <Overlay
            visibilityCondition={analyticsVisibility}
            exitFunction={setanalyticsVisibility}
          >
            <AnalyticsOverlay
              visible={analyticsVisibility}
              exitFunction={setanalyticsVisibility}
              redeemed={coupon.times_redeemed}
              redeemable={coupon.redeem_limit}
              analytics={coupon.analytics}
            />
          </Overlay>

          <Overlay
            visibilityCondition={distributionOverlayVisibility}
            exitFunction={setdistributionOverlayVisibility}
          >
            <DistributeCouponOverlay />
          </Overlay>
          <h1>{coupon.title}</h1>
          <Tag>{coupon.tag.name}</Tag>
          <DetailsDiv>
            <div>
              <p>Expiration Date</p>
              <p>Times used</p>
            </div>
            <div>
              <p className="aligned-end">{coupon.expiration_date}</p>
              <p className="aligned-end">{coupon.times_redeemed}</p>
            </div>
          </DetailsDiv>
          <CouponDescription>{coupon.description}</CouponDescription>

          <CouponButtonDiv>
            <AnalyticsButton
              color={"lightblue"}
              onClick={() => setanalyticsVisibility(true)}
            >
              Analytics
            </AnalyticsButton>
            <div>
              <CouponActionButton
                color={"#06C076"}
                onClick={() => setdistributionOverlayVisibility(true)}
              >
                Distribute
              </CouponActionButton>
              <CouponActionButton
                color={"#ff704d"}
                onClick={() => dispatch(deleteCoupon(coupon.id))}
              >
                DELETE
              </CouponActionButton>
            </div>
          </CouponButtonDiv>
        </CouponDiv>
      </div>
    </div>
  );
};
export default CouponCard_Profile;
