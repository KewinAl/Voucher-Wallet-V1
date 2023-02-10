import { PageDiv, CustomerMenuDiv, CustomerMenuLeft, CustomerMenuRight, CouponList } from "./CustomerProfile.styles";
import Coupon from "../../Components/CouponCard/Coupon";

const CustomerProfile = () => {
    return (
        <PageDiv>
            <h1>Customer Profile</h1>
            <CustomerMenuDiv>
                <CustomerMenuLeft>
                    <p>Profile Infos (unedited)</p>
                    <button>Preferences</button>
                    <button>Notifications Coupons</button>
                    <button>Edit Profile</button>
                    <button>Edit Profile</button>
                    <button>Seach All Coupons</button>
                </CustomerMenuLeft>
                <CustomerMenuRight>
                    <CouponList>
                        <Coupon/>
                        <Coupon/>
                        <Coupon/>
                        <Coupon/>
                    </CouponList>
                </CustomerMenuRight>
            </CustomerMenuDiv>
        </PageDiv>
    )
}

export default CustomerProfile;