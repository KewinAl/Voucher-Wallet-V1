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
              <div>Shop Name: {coupon.shop_profile.name}</div>
              <div>Coupon Description: {coupon.description}</div>
              <div>Expiration Date: {coupon.expiration_date}</div>

              {coupon.amount != 0 ? (
                <div>
                  {" "}
                  Coupons left to redeem: {coupon.amount -
                    coupon.times_used}{" "}
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ViewAllCoupons;
