import React, { useEffect, useState } from "react";
import { getAllCoupons } from "../../API/lib/coupons";

const ViewAllCoupons = () => {
  const [coupons, setCoupons] = useState([]);

  const handleGetAllCoupons = async () => {
    try {
      const response = await getAllCoupons();
      setCoupons(response.data);
    } catch (e) {
      console.log("error->", e);
    }
  };

  useEffect(() => {
    handleGetAllCoupons();
  }, []);

  return (
    <>
      <div>
        {coupons.map((coupon) => {
          return (
            <div key={coupon.id}>
              <div>
                <h3>Shop Name: {coupon.shop_profile.name}</h3>
              </div>
              <div>
                <p>Coupon Description: {coupon.description}</p>
              </div>
              <div>
                <p>Expiration Date: {coupon.expiration_date}</p>
              </div>
              {coupon.redeem_limit != 0 ? (
                <div className="CouponTimesRedeemed">
                  <p>
                    Codes available:{" "}
                    {coupon.redeem_limit - coupon.times_redeemed} of{" "}
                    {coupon.redeem_limit}
                  </p>
                </div>
              ) : (
                <p>Codes available: unlimited</p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ViewAllCoupons;
