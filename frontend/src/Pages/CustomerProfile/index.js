import { CouponList, CustomerProfileContainerPage, CustomerNavigation, NavigationContent } from "./CustomerProfile.styles";
import Coupon from "../../Components/CouponCard/Coupon";


const CustomerProfile = () => {


    
    return (
        <CustomerProfileContainerPage>
            <CustomerNavigation>
                <h1>Your Profile</h1>
                <button>Notifications Coupons</button>
                <button>Edit Profile</button>
            </CustomerNavigation>
            <NavigationContent>
                <CouponList>
                    <h2>My Coupons</h2>
                    {/* <Coupon />
                    <Coupon/>
                    <Coupon/>
                    <Coupon/> */}
                </CouponList>
            </NavigationContent>
        </CustomerProfileContainerPage>
    )
}

export default CustomerProfile;