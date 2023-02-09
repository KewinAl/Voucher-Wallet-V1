import { PageDiv, CustomerMenuDiv, CustomerMenuLeft, CustomerMenuRight } from "./CustomerProfile.styles";
import CustomerCouponCard from './CustomerCouponCard'

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
                    <CustomerCouponCard />
                    <CustomerCouponCard />
                    <CustomerCouponCard />
                </CustomerMenuRight>
            </CustomerMenuDiv>
        </PageDiv>
    )
}

export default CustomerProfile;