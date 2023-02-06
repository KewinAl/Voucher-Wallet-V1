import React from "react";

const CouponCard = ({ couponProps }) => {
  const { id, expiration_date, description, times_used } = couponProps;

  return (
    <div key={id}>
      <h3>Coupon {id}</h3>
      <p>Expiration Date: {expiration_date}</p>
      <p>Description: {description}</p>
      <p>Times Used: {times_used}</p>
    </div>
  );
};

export default CouponCard;
