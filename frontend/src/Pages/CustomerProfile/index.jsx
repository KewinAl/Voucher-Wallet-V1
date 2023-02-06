import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getCustomerProfile,
  getMyCustomerProfile,
} from "../../API/lib/customerProfile";
import CustomerProfileCard from "../../Components/CustomerProfileCard";
import CouponCard from "../../Components/CouponCard/CouponCard";

const CustomerProfile = () => {
  const [customerProfile, setCustomerProfile] = useState({
    customer_profile: {},
  });

  const { customerId } = useParams();

  const handleGetCustomerProfile = async () => {
    try {
      const response = await getCustomerProfile(customerId);
      // console.log("fullCustomerData:", response.data);
      setCustomerProfile(response.data);
    } catch (e) {
      console.log("error->", e);
    }
  };

  const handleGetMyCustomerProfile = async () => {
    try {
      const response = await getMyCustomerProfile();
      // console.log("MyFullCustomerData:", response.data);
      setCustomerProfile(response.data);
      // console.log("check Customer Profile", customerProfile);
    } catch (e) {
      console.log("error->", e);
    }
  };
  // console.log("Customer Profile:", customerProfile);

  useEffect(() => {
    customerId ? handleGetCustomerProfile() : handleGetMyCustomerProfile();
  }, []);

  return (
    <>
      <div>
        <h1>Your Customer Profile:</h1>
      </div>
      {/*TODO: */}
      <CustomerProfileCard
        customerProfileProps={customerProfile}
      ></CustomerProfileCard>
      <div>
        {customerProfile && customerProfile.coupons_owned
          ? customerProfile.coupons_owned.map((coupon) => {
              return <CouponCard key={coupon.id} couponProps={coupon} />;
            })
          : null}
      </div>
    </>
  );
};
export default CustomerProfile;
