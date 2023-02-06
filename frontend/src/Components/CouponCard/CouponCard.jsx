import React from "react";

const CouponCard = ({ couponProps }) => {
  const { id, expiration_date, description, times_used } = couponProps;

  return (
    <div className="CouponCard" key={id}>
      <div className="CouponId">
        <h3>Coupon {id}</h3>
      </div>
      <div className="CouponExpirationDate">
        <p>Expiration Date: {expiration_date}</p>
      </div>
      <div className="CouponDescription">
        <p>Description: {description}</p>
      </div>
      <div className="CouponTimesUsed">
        <p>Times Used: {times_used}</p>
      </div>
    </div>
  );
};

export default CouponCard;
