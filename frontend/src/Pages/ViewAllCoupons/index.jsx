import React, { useEffect, useState } from "react";
import { getAllCoupons } from "../../API/lib/coupons";
import CustomerCouponCard from "../../Components/CouponCard/CustomerCouponCard";
import { AllCouponsMenuDiv, CouponContainer, CategoryFilterButton } from './ViewAllCoupons.styles'

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
      <CouponContainer>
        <div>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
          <CustomerCouponCard width={'27%'}/>
        </div>
        </CouponContainer>
      </AllCouponsMenuDiv>
  );
};
export default ViewAllCoupons;
