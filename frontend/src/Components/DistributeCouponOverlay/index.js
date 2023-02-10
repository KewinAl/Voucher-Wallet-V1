import { OverlayDiv } from "./DIstributeCouponOverlay.styles"

const DistributeCouponOverlay = (props) => {
    return (
        <OverlayDiv visible={props.visible}>
            <div></div>
        </OverlayDiv>
    )
}
export default DistributeCouponOverlay;