import { createSlice } from "@reduxjs/toolkit";
import microsoftLogo from "../Assets/companyLogo.png";
import aldiLogo from "../Assets/AldiLogo.png";

const couponSlice = createSlice({
  name: "coupon",
  initialState: {
    coupons: [
      {
        id: 1,
        title: "10% Off on all products",
        description: "Get 10% discount on all products",
        times_used: 0,
        times_redeemed: 0,
        redeem_limit: 5,
        discount_type: "percent",
        discount: 10,
        currency: "USD",
        companyLogo: microsoftLogo,
        expiration_date: "2023-06-30",
        shop_profile: {
          id: 1,
          name: "Shop A",
        },
        tag: {
          id: 1,
          name: "Summer Sale",
        },
      },
      {
        id: 2,
        title: "$5 Off on first purchase",
        description: "Get $5 discount on your first purchase",
        times_used: 0,
        times_redeemed: 0,
        redeem_limit: 1,
        discount_type: "amount",
        discount: 5,
        currency: "USD",
        companyLogo: aldiLogo,
        expiration_date: "2023-12-31",
        shop_profile: {
          id: 2,
          name: "Shop B",
        },
        tag: {
          id: 2,
          name: "Special Limited Edition",
        },
      },
    ],
  },
  reducers: {
    addCoupon: (state, action) => {
      state.coupons.push(action.payload);
    },
  },
});

export const { addCoupon } = couponSlice.actions;

export default couponSlice.reducer;
