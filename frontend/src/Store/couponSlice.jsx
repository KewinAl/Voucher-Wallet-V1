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
        times_redeemed: 14,
        redeem_limit: 28,
        discount: 10,
        companyLogo: microsoftLogo,
        expiration_date: "2023-06-30",
        link: "www.cats.ch",
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
        times_redeemed: 14,
        redeem_limit: 28,
        discount: 5,
        companyLogo: aldiLogo,
        expiration_date: "2023-12-31",
        link: "www.aldi.de",
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
