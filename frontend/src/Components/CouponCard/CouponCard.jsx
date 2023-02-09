import React from "react";


const CouponCard = ({ couponProps, logo }) => {
  const { id, expiration_date, description, times_redeemed, redeem_limit } =
    couponProps;

  return (
    <div className="CouponCard" key={id}>
      <div className="Logo">
        <img src={logo} alt="Shop Logo" />
      </div>
      <div className="CouponId">
        <h3>Coupon {id}</h3>
      </div>
      <div className="CouponExpirationDate">
        <p>Expiration Date: {expiration_date}</p>
      </div>
      <div className="CouponDescription">
        <p>Description: {description}</p>
      </div>
      {redeem_limit != 0 ? (
        <div className="CouponTimesRedeemed">
          <p>
            Codes available: {redeem_limit - times_redeemed} of {redeem_limit}
          </p>
        </div>
      ) : (
        <p>Codes available: unlimited</p>
      )}
    </div>
  );
};

export default CouponCard;
