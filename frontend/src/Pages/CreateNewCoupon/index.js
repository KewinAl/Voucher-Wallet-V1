import { OverlayDiv, OverlayMenu, CouponCreationMenu, CouponPreview, CouponCreationLeft, CouponCreationRight, NewCouponButtonsDiv, NewCouponButton } from "./NewCouponOverlay.stlyes"
import Coupon from "../../Components/CouponCard/Coupon";

const NewCouponOverlay = (props) => {
    const safeCoupon = () => {
        props.exitFunction(!props.visible)
    }
    
    const checkIfExit = (e) => {
        if (e.target.id == "overlay") {
            props.exitFunction(!props.visible)
        }
    }

    return ( 
        <OverlayDiv id="overlay" visible={props.visible} onClick={(e) => {checkIfExit(e)}}>
            <OverlayMenu>
                <CouponCreationMenu>
                    <CouponCreationLeft>
                        <input placeholder="Coupon Title"/>
                        <input placeholder="Description"/>
                        <input placeholder="Number of Coupons"/>
                        <input placeholder="Tags" />
                    </CouponCreationLeft>
                    <CouponCreationRight>
                        <input type='file' />
                        <input type='text' placeholder="Shop Link" />
                        <label>Expiration Date 
                            <input type={'date'} />
                        </label>
                    </CouponCreationRight>
                </CouponCreationMenu>
                <CouponPreview>
                    <h1>Preview</h1>
                    <Coupon />
                </CouponPreview>
                <NewCouponButtonsDiv>
                    <NewCouponButton color='lightgreen' onClick={() => safeCoupon()} >Save</NewCouponButton>                    
                </NewCouponButtonsDiv>
            </OverlayMenu>
        </OverlayDiv>
    )

} 

export default NewCouponOverlay;