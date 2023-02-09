import React, { useState } from "react";
import Coupon from "../../Components/CouponCard/Coupon";
// import CustomerCouponCard from "../../Components/CouponCard/CustomerCouponCard";
import {
  AllCouponsMenuDiv,
  CategoryFilterButton,
  CouponList,
} from "./ViewAllCoupons.styles";

const ViewAllCoupons = () => {
  const [coupons, setCoupons] = useState([]);

  // const handleGetAllCoupons = async () => {
  //   try {
  //     const response = await getAllCoupons();
  //     setCoupons(response.data);
  //   } catch (e) {
  //     console.log("error->", e);
  //   }
  // };

  // useEffect(() => {
  //   handleGetAllCoupons();
  // }, []);

  return (
    <AllCouponsMenuDiv>
      <h1>All Coupons</h1>

      <CategoryFilterButton>
        <select>
          <option value="">Filter by Category</option>
          <option value="sexy">Sexy time</option>
          <option value="">Walaldaba-dub-dub</option>
        </select>
      </CategoryFilterButton>
      <CouponList>
        <div>
          <Coupon width={"27%"} />
        </div>
      </CouponList>
    </AllCouponsMenuDiv>
  );
};
export default ViewAllCoupons;
