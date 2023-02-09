import { useState } from "react"
import NewCouponOverlay from "../../Pages/CreateNewCoupon"
import CouponCard_Profile from "./CouponCard/index"
import { PageDiv, Menu, MenuLeft, MenuRight } from "./ShopProfile.styles"


const ShopProfileDiv = () => {
    let couponData = {
        id: 1,
        expiration_date: "01.01.2023",
        description: 'Gucci Gucci Myam myam myam',
        times_used: 15.000,
    }

    const [overlayVisibility, setOverlayVisibility] = useState(false)

    return (
        <PageDiv>
            <NewCouponOverlay visible={overlayVisibility} exitFunction={setOverlayVisibility} />
            <p>Shop Owner Profile (possibly name)</p>
            <Menu>
                <MenuLeft>
                    <button onClick={() => setOverlayVisibility(!overlayVisibility)}>Create New Coupon</button>
                    <button>Edit Profile</button>
                    <button>Delete Account</button>
                </MenuLeft>
                <MenuRight>
                    <div>
                    <CouponCard_Profile />
                    <CouponCard_Profile />
                    <CouponCard_Profile />
                    <CouponCard_Profile />
                    <CouponCard_Profile />
                    <CouponCard_Profile />
                    <CouponCard_Profile />
                    <CouponCard_Profile />
                    <CouponCard_Profile />
                    <CouponCard_Profile />
                    <CouponCard_Profile />
                    <CouponCard_Profile />
                    <CouponCard_Profile />
                    <CouponCard_Profile />
                    <CouponCard_Profile />
                    <CouponCard_Profile />
                    <CouponCard_Profile />
                    </div>
                </MenuRight>
            </Menu>
            
        </PageDiv>
    )
}
export default ShopProfileDiv