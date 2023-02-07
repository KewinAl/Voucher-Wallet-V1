import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getAllCoupons } from "../../API/lib/coupons";
import CouponFilter from "./CouponFilter";

const ViewAllCoupons = () => {
  const [coupons, setCoupons] = useState([]);
  const [filterCoupons, setFilterCoupons] = useState([]);
  const [selectedShop, setSelectedShop] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const history = useHistory();

  useEffect(() => {
    const handleGetAllCoupons = async () => {
      try {
        const response = await getAllCoupons();
        setCoupons(response.data);
        setFilterCoupons(response.data);
      } catch (e) {
        console.log("error->", e);
      }
    };
    handleGetAllCoupons();
  }, []);

  const handleFilterChange = (selectedShop, selectedType, expirationDate) => {
    let filteredCoupons = [...coupons];
    if (selectedShop) {
      filteredCoupons = filteredCoupons.filter(
        (c) => c.shop_profile.name === selectedShop
      );
    }
    if (selectedType) {
      filteredCoupons = filteredCoupons.filter((c) => c.type === selectedType);
    }
    if (expirationDate) {
      filteredCoupons = filteredCoupons.filter(
        (c) => c.expiration_date > expirationDate
      );
    }
    setFilterCoupons(filteredCoupons);
  };

  const handleBack = () => {
    history.push("/");
  };

  return (
    <>
      <div>
        <h1>All Coupons:</h1>
        <CouponFilter
          selectedShop={selectedShop}
          setSelectedShop={setSelectedShop}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          expirationDate={expirationDate}
          setExpirationDate={setExpirationDate}
          handleFilterChange={handleFilterChange}
        />
      </div>
      <div>
        {filterCoupons.map((coupon) => {
          return (
            <div key={coupon.id}>
              <div>Coupon Shop Profile: {coupon.shop_profile.name}</div>
              <div>Description: {coupon.description}</div>
              <div>Expiration Date: {coupon.expiration_date}</div>
              <div>
                if {coupon.amount} != 0 Amount:
                {coupon.amount - coupon.redeemed_codes}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ViewAllCoupons;
