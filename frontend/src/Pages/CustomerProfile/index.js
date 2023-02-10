import { CouponList, CustomerProfileContainerPage, CustomerNavigation, NavigationContent } from "./CustomerProfile.styles";
import Coupon from "../../Components/CouponCard/Coupon";


const CustomerProfile = () => {
    return (
        <CustomerProfileContainerPage>
            <CustomerNavigation>
                <p>Profile Infos (unedited)</p>
                <button>Preferences</button>
                <button>Notifications Coupons</button>
                <button>Edit Profile</button>
                <button>Seach All Coupons</button>
            </CustomerNavigation>
            <NavigationContent>
                <CouponList>
                    <h1>My Coupons</h1>
                    <Coupon/>
                    <Coupon/>
                    <Coupon/>
                    <Coupon/>
                </CouponList>
            </NavigationContent>
        </CustomerProfileContainerPage>
    )
}

export default CustomerProfile;