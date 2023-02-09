import { PageDiv, CustomerMenuDiv, CustomerMenuLeft, CustomerMenuRight } from "./CustomerProfile.styles";
import CustomerCouponCard from '../../Components/CouponCard/CustomerCouponCard/index'

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
                    <div>
                        <CustomerCouponCard />
                        <CustomerCouponCard />
                        <CustomerCouponCard />
                        <CustomerCouponCard />
                        <CustomerCouponCard />
                        <CustomerCouponCard />
                        <CustomerCouponCard />
                        <CustomerCouponCard />
                        <CustomerCouponCard />
                        <CustomerCouponCard />
                        <CustomerCouponCard />
                    </div>
                </CustomerMenuRight>
            </CustomerMenuDiv>
        </PageDiv>
    )
}

export default CustomerProfile;