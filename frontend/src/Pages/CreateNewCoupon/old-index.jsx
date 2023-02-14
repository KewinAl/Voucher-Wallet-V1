import axios from "axios";
import React, { useState } from "react";

const NewCoupon = () => {
  /*
            TODO:  Add the access directly rather than hardcore token when someone logs in :
             */
  const access = localStorage.getItem("access");
  const [formData, setFormData] = useState({
    shop_profile: "",
    description: "",
    redeem_limit: 0, // The redeem_limit of coupons which is available (e.g. 20 coupons for first 20 users to redeem)
    expiration_date: "",
  });
  const config = {
    method: "POST",
    url: "http://localhost:8000/backend/api/coupon/new/",
    headers: {
      Authorization: `Bearer ${access}`,
      "Content-Type": "application/json",
    },
    data: formData,
  };

  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]:
          e.target.type === "number"
            ? parseInt(e.target.value)
            : e.target.value,
      };
    });
    /* console.log("formData ==", formData) */
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(config.url, formData, {
        headers: config.headers,
      })
      .then((response) => {
        if (response.status === 201) console.log("Data created:");
      })
      .catch((e) => {
        console.error(e);
      });
  };
  return (
    <>
      <h2>Create New Coupon</h2>
      <form onSubmit={handleSubmit}>
        <label>Shop_Profile</label>
        <input
          name={"shop_profile"}
          value={formData.shop_profile}
          onChange={handleChange}
        />
        <label>Description </label>
        <input
          name={"description"}
          value={formData.description}
          onChange={handleChange}
        />
        <label>Coupon Redeem Limit </label>
        <input
          type={"number"}
          name={"redeem_limit"}
          value={formData.redeem_limit}
          onChange={handleChange}
        />
        <label>Expiration Date </label>
        <input
          type={"date"}
          name={"expiration_date"}
          value={formData.expiration_date}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </>
  );
};

export default NewCoupon;
