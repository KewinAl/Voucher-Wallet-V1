import React, { useState } from "react";

const CouponFilter = ({ handleFilterCoupons }) => {
  const [filter, setFilter] = useState({
    shopProfile: "",
    date: "",
  });

  const handleFilterChange = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFilterCoupons(filter);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="shopProfile">Shop Profile:</label>
        <input
          type="text"
          id="shopProfile"
          name="shopProfile"
          value={filter.shopProfile}
          onChange={handleFilterChange}
        />
      </div>
      <div>
        <label htmlFor="date">Expiration Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={filter.date}
          onChange={handleFilterChange}
        />
      </div>
      <button type="submit">Filter</button>
    </form>
  );
};

export default CouponFilter;
