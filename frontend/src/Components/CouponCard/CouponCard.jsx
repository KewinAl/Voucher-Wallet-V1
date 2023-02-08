import React from "react";

const CouponCard = ({ couponProps }) => {
  const { id, expiration_date, description, times_redeemed, amount } =
    couponProps;

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
      {amount != 0 ? (
        <div className="CouponTimesRedeemed">
          <p>
            Codes available: {amount - times_redeemed} of {amount}
          </p>
        </div>
      ) : (
        <p>Codes available: unlimited</p>
      )}
    </div>
  );
};

export default CouponCard;
