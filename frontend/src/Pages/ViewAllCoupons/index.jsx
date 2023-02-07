import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getAllCoupons } from "../../API/lib/coupons";

const ViewAllCoupons = () => {
  const [coupons, setCoupons] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const handleGetAllCoupons = async () => {
      try {
        const response = await getAllCoupons();
        setCoupons(response.data);
      } catch (e) {
        console.log("error->", e);
      }
    };
    handleGetAllCoupons();
  }, []);

  const handleFilterCoupons = () => {
    const filteredCoupons = coupons.filter(
      (coupon) => coupon.expiration_date > new Date().toLocaleString()
    );
    return filteredCoupons;
  };

  const handleBack = () => {
    history.push("/");
  };

  return (
    <>
      <div>
        <h1>All Coupons:</h1>
      </div>
      <div>
        {handleFilterCoupons().map((coupon) => {
          return (
            <div key={coupon.id}>
              <div>Coupon Shop Profile: {coupon.shop_profile.name}</div>
              <div>Description: {coupon.description}</div>
              <div>Expiration Date: {coupon.expiration_date}</div>
              <div>Amount: {coupon.amount - coupon.redeemed_codes}</div>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={handleBack}>Back</button>
      </div>
    </>
  );
};

export default ViewAllCoupons;
