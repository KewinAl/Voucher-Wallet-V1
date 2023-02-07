import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getCustomerProfile,
  getMyCustomerProfile,
} from "../../API/lib/customerProfile";
import CustomerProfileCard from "../../Components/CustomerProfileCard";

const CustomerProfile = () => {
  const [customerProfile, setCustomerProfile] = useState({
    customer_profile: {},
  });

  const { customerId } = useParams();
  const history = useNavigate();

  const handleGetCustomerProfile = async () => {
    try {
      const response = await getCustomerProfile(customerId);
      setCustomerProfile(response.data);
    } catch (e) {
      console.log("error->", e);
    }
  };

  const handleGetMyCustomerProfile = async () => {
    try {
      const response = await getMyCustomerProfile();
      setCustomerProfile(response.data);
    } catch (e) {
      console.log("error->", e);
    }
  };

  useEffect(() => {
    customerId ? handleGetCustomerProfile() : handleGetMyCustomerProfile();
  }, []);

  const handleViewAllCoupons = () => {
    history.push("/viewallcoupons");
  };

  return (
    <>
      <div>
        <h1>Your Customer Profile:</h1>
      </div>
      <CustomerProfileCard customerProfileProps={customerProfile} />
      <div>
        <button onClick={handleViewAllCoupons}>View All Coupons</button>
      </div>
    </>
  );
};
export default CustomerProfile;
